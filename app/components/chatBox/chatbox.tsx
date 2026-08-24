"use client";

import { useRef, useState } from "react";

// ========================================
// SPEECH RECOGNITION TYPES
// ========================================

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onstart: (() => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onend: (() => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognitionInstance;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message?: string;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

// ========================================
// TYPES
// ========================================

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatMode = "text" | "voice";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMode, setChatMode] = useState<ChatMode>("voice");

  const [input, setInput] = useState("");
  const [voiceInput, setVoiceInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [voiceError, setVoiceError] = useState("");
  const [voiceReply, setVoiceReply] = useState("");

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  const voiceTranscriptRef = useRef("");
  const voiceMessageRef = useRef(false);
  const voiceEndedRef = useRef(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  const [messages, setMessages] = useState<Message[]>([]);

  // ========================================
  // STOP EVERYTHING IN VOICE MODE
  // ========================================

  const stopVoice = () => {
    // Prevent recognition.onend from automatically sending
    voiceEndedRef.current = true;
    voiceMessageRef.current = false;

    // Stop microphone
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // Recognition may already be stopped
      }
    }

    recognitionRef.current = null;

    // Stop text-to-speech
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }

    // Cancel API request if one is running
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;

    setIsListening(false);
    setIsSpeaking(false);
    setLoading(false);

    voiceTranscriptRef.current = "";
    setVoiceInput("");
  };

  // ========================================
  // CHANGE CHAT MODE
  // ========================================

  const changeChatMode = (mode: ChatMode) => {
    stopVoice();

    setChatMode(mode);
    setVoiceError("");
    setVoiceReply("");
  };

  // ========================================
  // VOICE INPUT
  // ========================================

  const startListening = () => {
    if (typeof window === "undefined") return;

    setVoiceError("");
    setVoiceReply("");

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceError(
        "Voice input isn't supported here. Try Google Chrome."
      );
      return;
    }

    if (isListening) {
      stopVoice();
      return;
    }

    if (loading || isSpeaking) return;

    // Start with clean state
    voiceTranscriptRef.current = "";
    voiceMessageRef.current = true;
    voiceEndedRef.current = false;

    setVoiceInput("");

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
      voiceEndedRef.current = false;
    };

    recognition.onresult = (event) => {
      let transcript = "";

      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }

      transcript = transcript.trim();

      voiceTranscriptRef.current = transcript;
      setVoiceInput(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);

      // If user pressed STOP, don't automatically send anything.
      if (voiceEndedRef.current) {
        return;
      }

      window.setTimeout(() => {
        if (voiceEndedRef.current) return;

        voiceEndedRef.current = true;

        const transcript =
          voiceTranscriptRef.current.trim();

        if (!transcript) {
          voiceMessageRef.current = false;
          return;
        }

        // Automatically send voice question
        void sendMessage(transcript, true);
      }, 100);
    };

    recognition.onerror = (event) => {
      setIsListening(false);

      voiceEndedRef.current = true;
      voiceMessageRef.current = false;

      if (event.error === "aborted") return;

      if (event.error === "not-allowed") {
        setVoiceError(
          "Microphone access denied. Please allow microphone permissions."
        );
        return;
      }

      if (event.error === "no-speech") {
        setVoiceError(
          "I couldn't hear anything. Try speaking again."
        );
        return;
      }

      setVoiceError(
        "Voice input error. Please try again."
      );
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      setIsListening(false);
      voiceEndedRef.current = true;
      voiceMessageRef.current = false;

      setVoiceError(
        "Voice input couldn't start."
      );
    }
  };

  // ========================================
  // TEXT TO SPEECH
  // ========================================

  const speakResponse = (text: string) => {
  if (
    typeof window === "undefined" ||
    !("speechSynthesis" in window) ||
    !text.trim()
  ) {
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "en-US";
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  utterance.onstart = () => {
    setIsSpeaking(true);
  };

  utterance.onend = () => {
    setIsSpeaking(false);
  };

  utterance.onerror = () => {
    setIsSpeaking(false);
  };

  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }

  // Start speaking
  window.setTimeout(() => {
    window.speechSynthesis.speak(utterance);
  }, 150);
};

  // ========================================
  // SEND MESSAGE
  // ========================================

  const sendMessage = async (
    messageOverride?: string,
    forceSpeak: boolean = false
  ) => {
    const userMessage =
      (messageOverride ?? input).trim();

    if (!userMessage || loading) return;

    const shouldSpeak =
      forceSpeak ||
      (chatMode === "voice" &&
        voiceMessageRef.current);

    voiceMessageRef.current = false;
    voiceTranscriptRef.current = "";

    if (forceSpeak) {
      setVoiceInput("");
    } else {
      setInput("");
    }

    setVoiceError("");

    // Show user message only in text mode.
    if (!forceSpeak) {
      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          content: userMessage,
        },
      ]);
    }

    setLoading(true);

    const controller = new AbortController();

    abortControllerRef.current = controller;

    try {
      const response = await fetch("/api/chatbox", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
        signal: controller.signal,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong"
        );
      }

      const reply =
        String(data.reply ?? "").trim();

      if (!reply) {
        throw new Error(
          "The AI returned an empty response."
        );
      }

      // ========================================
      // VOICE RESPONSE
      // ========================================

      if (shouldSpeak) {
        // Show answer ONLY on voice screen
        setVoiceReply(reply);

        // Speak it
        speakResponse(reply);
      }

      // ========================================
      // TEXT RESPONSE
      // ========================================

      else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: reply,
          },
        ]);
      }
    } catch (error) {
      // Ignore aborted requests
      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        return;
      }

      console.error("Chat error:", error);

      if (shouldSpeak) {
        setVoiceReply(
          "Something went wrong. Try again."
        );
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Something went wrong. Try again.",
          },
        ]);
      }
    } finally {
      setLoading(false);
      abortControllerRef.current = null;
    }
  };

  // ========================================
  // CLOSE CHAT
  // ========================================

  const closeChat = () => {
    stopVoice();

    setIsOpen(false);
    setVoiceReply("");
    setVoiceError("");
  };

  // ========================================
  // RETURN UI
  // ========================================

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[620px] w-[370px] flex-col overflow-hidden rounded-[28px] border border-[#dce9e4] bg-[#f8fbfa] font-sans text-[#153a33] shadow-[0_24px_70px_rgba(15,55,47,0.22)] sm:right-6">

          {/* HEADER */}
          <div className="border-b border-[#e3eeea] bg-white/95 px-5 py-4">
            <div className="flex items-center justify-between">

              <button
                onClick={closeChat}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2ebe8] bg-white text-[#54706a] transition hover:bg-[#f1f7f4]"
              >
                ←
              </button>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f5ef] text-sm text-[#159a72]">
                  ✦
                </div>

                <div>
                  <p className="text-sm font-bold text-[#153a33]">
                    ROOMIFY
                  </p>

                  <p className="text-[10px] text-[#78908a]">
                    Your money assistant
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  changeChatMode(
                    chatMode === "voice"
                      ? "text"
                      : "voice"
                  )
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2ebe8] bg-white text-[#54706a] transition hover:bg-[#f1f7f4]"
              >
                {chatMode === "voice"
                  ? "⌨"
                  : "◉"}
              </button>
            </div>

            {/* MODE SWITCH */}
            <div className="mt-4 flex rounded-xl bg-[#f1f6f4] p-1">
              <button
                onClick={() =>
                  changeChatMode("voice")
                }
                className={`flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  chatMode === "voice"
                    ? "bg-white text-[#159a72] shadow-sm"
                    : "text-[#7b918b] hover:text-[#31564e]"
                }`}
              >
                Voice
              </button>

              <button
                onClick={() =>
                  changeChatMode("text")
                }
                className={`flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  chatMode === "text"
                    ? "bg-white text-[#159a72] shadow-sm"
                    : "text-[#7b918b] hover:text-[#31564e]"
                }`}
              >
                Text
              </button>
            </div>
          </div>

          {/* ERROR */}
          {voiceError && (
            <div className="mx-5 mt-3 rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-center text-xs text-red-600">
              {voiceError}
            </div>
          )}

          {/* ========================================
              VOICE MODE
          ======================================== */}

          {chatMode === "voice" ? (
            <div className="relative flex flex-1 flex-col items-center overflow-hidden px-6 py-8">

              {/* TOP STATUS */}
              <div className="text-center">
                <p className="text-xs font-semibold text-[#159a72]">
                  {isListening
                    ? "Listening..."
                    : isSpeaking
                      ? "ROOMIFY is speaking..."
                      : loading
                        ? "Thinking..."
                        : "Ask ROOMIFY"}
                </p>

                <p className="mt-1 text-[11px] text-[#82958f]">
                  Your personal financial companion
                </p>
              </div>

              {/* ========================================
                  VOICE ORB
              ======================================== */}

              <div
                onClick={
                  isListening
                    ? stopVoice
                    : startListening
                }
                className="relative mt-10 flex cursor-pointer items-center justify-center"
              >

                <div
                  className={`absolute h-44 w-44 rounded-full bg-[#19a477]/20 blur-2xl transition-all duration-700 ${
                    isListening ||
                    isSpeaking
                      ? "scale-125 animate-pulse opacity-100"
                      : "scale-100 opacity-80"
                  }`}
                />

                <div
                  className={`absolute h-36 w-36 rounded-full bg-[#b9ead9]/60 transition-transform duration-700 ${
                    isListening
                      ? "scale-110 rotate-12"
                      : ""
                  }`}
                />

                <div
                  className={`relative flex h-32 w-32 items-center justify-center rounded-full border border-white bg-gradient-to-br from-[#0f3f35] via-[#146b59] to-[#19a477] shadow-[0_18px_45px_rgba(21,121,96,0.3)] transition-all duration-300 ${
                    isListening
                      ? "scale-105"
                      : ""
                  }`}
                >

                  <div className="absolute inset-3 rounded-full border border-white/10" />

                  {isListening ? (
                    <div className="z-10 flex items-center gap-1">
                      <span className="h-5 w-1 animate-bounce rounded-full bg-white" />
                      <span className="h-9 w-1 animate-bounce rounded-full bg-white [animation-delay:150ms]" />
                      <span className="h-6 w-1 animate-bounce rounded-full bg-white [animation-delay:300ms]" />
                      <span className="h-8 w-1 animate-bounce rounded-full bg-white [animation-delay:100ms]" />
                    </div>
                  ) : isSpeaking ? (
                    <div className="z-10 flex items-center gap-1">
                      <span className="h-4 w-1 animate-pulse rounded-full bg-white" />
                      <span className="h-7 w-1 animate-pulse rounded-full bg-white [animation-delay:150ms]" />
                      <span className="h-5 w-1 animate-pulse rounded-full bg-white [animation-delay:300ms]" />
                      <span className="h-8 w-1 animate-pulse rounded-full bg-white [animation-delay:100ms]" />
                    </div>
                  ) : (
                    <span className="text-3xl text-white">
                      ◉
                    </span>
                  )}
                </div>
              </div>

              {/* ========================================
                  TRANSCRIPT
              ======================================== */}

              <div className="mt-8 w-full rounded-2xl border border-[#e0ece8] bg-white px-5 py-4 text-center shadow-sm">
                <p className="max-h-20 overflow-y-auto text-sm leading-relaxed text-[#31534c]">
                  {voiceInput ||
                    (isListening
                      ? "Listening to your voice..."
                      : "Tap the microphone to ask anything")}
                </p>
              </div>

              {/* ========================================
                  SLIDING AI ANSWER
              ======================================== */}

              {voiceReply && (
                <div
                  key={voiceReply}
                  className="mt-4 w-full animate-[voiceAnswerIn_0.45s_ease-out]"
                >
                  <div className="rounded-2xl border border-[#cfe9df] bg-white px-5 py-4 shadow-[0_12px_30px_rgba(21,154,114,0.10)]">

                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e2f6ee] text-[10px] font-bold text-[#159a72]">
                        N
                      </div>

                      <span className="text-[10px] font-semibold uppercase tracking-wide text-[#159a72]">
                        ROOMIFY
                      </span>
                    </div>

                    <p className="max-h-28 overflow-y-auto text-sm leading-relaxed text-[#31534c]">
                      {voiceReply}
                    </p>
                  </div>
                </div>
              )}

              {/* ========================================
                  VOICE CONTROLS
              ======================================== */}

              <div className="mt-auto flex w-full items-center justify-center gap-4 pt-6">

                {/* CLEAR */}
                <button
                  onClick={() => {
                    setVoiceInput("");
                    voiceTranscriptRef.current = "";
                    setVoiceReply("");
                  }}
                  disabled={
                    loading ||
                    isListening ||
                    isSpeaking
                  }
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce9e4] bg-white text-[#708780] shadow-sm transition hover:bg-[#f1f7f4] disabled:opacity-40"
                  aria-label="Clear"
                >
                  ⌫
                </button>

                {/* MAIN VOICE / STOP BUTTON */}
                <button
                  onClick={
                    isListening ||
                    isSpeaking ||
                    loading
                      ? stopVoice
                      : startListening
                  }
                  className={`flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-[0_10px_30px_rgba(21,154,114,0.28)] transition-all duration-300 hover:scale-105 ${
                    isListening ||
                    isSpeaking ||
                    loading
                      ? "scale-110 bg-[#d95c5c] text-white"
                      : "bg-[#159a72] text-white"
                  }`}
                  aria-label={
                    isListening ||
                    isSpeaking ||
                    loading
                      ? "Stop"
                      : "Start voice assistant"
                  }
                >
                  {isListening ||
                  isSpeaking ||
                  loading ? (
                    <span className="h-5 w-5 rounded-[4px] bg-white" />
                  ) : (
                    "◉"
                  )}
                </button>

                {/* STATUS */}
                <div className="flex h-11 min-w-[88px] items-center justify-center rounded-full bg-[#eef7f3] px-4 text-xs font-semibold text-[#159a72]">
                  {isListening
                    ? "Listening"
                    : isSpeaking
                      ? "Speaking"
                      : loading
                        ? "Thinking"
                        : "Ready"}
                </div>
              </div>

              <p className="mt-3 text-center text-[9px] text-[#a0b0ab]">
                Tap the red button anytime to stop.
              </p>

            </div>
          ) : (

            /* ========================================
               TEXT MODE
            ======================================== */

            <div className="flex flex-1 flex-col overflow-hidden bg-[#f8fbfa]">

              {/* CHAT INTRO */}
              <div className="border-b border-[#e5efeb] bg-white px-5 py-4">
                <p className="text-xs font-medium text-[#80958e]">
                  ROOMIFY assistant
                </p>

                <p className="mt-1 text-sm font-semibold text-[#183c34]">
                  How can I help with your money today?
                </p>
              </div>

              {/* MESSAGES */}
              <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">

                {messages.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">

                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e4f5ee] text-[#159a72]">
                      ✦
                    </div>

                    <p className="text-sm font-semibold text-[#31564e]">
                      Start a conversation
                    </p>

                    <p className="mt-1 max-w-[220px] text-xs leading-relaxed text-[#8a9d97]">
                      Ask about room in kathmandu,lalitpur or bhaktapur. ROOMIFY will provide answers based on the available data.
                    </p>

                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-end gap-2 ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >

                      {message.role === "assistant" && (
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dff4eb] text-xs font-bold text-[#159a72]">
                          N
                        </div>
                      )}

                      <div className="flex max-w-[80%] flex-col gap-1">

                        <div
                          className={`rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                            message.role === "user"
                              ? "rounded-br-md bg-[#159a72] text-white shadow-sm"
                              : "rounded-bl-md border border-[#e1ece8] bg-white text-[#31534c] shadow-sm"
                          }`}
                        >
                          {message.content}
                        </div>

                        {message.role === "assistant" && (
                          <div className="flex items-center gap-3 px-1 pt-1 text-[11px] text-[#a0b0ab]">

                            <button className="transition hover:text-[#159a72]">
                              👍
                            </button>

                            <button className="transition hover:text-[#159a72]">
                              👎
                            </button>

                            <button
                              onClick={() =>
                                speakResponse(
                                  message.content
                                )
                              }
                              className="transition hover:text-[#159a72]"
                            >
                              🔊
                            </button>

                            <button className="transition hover:text-[#159a72]">
                              ↻
                            </button>

                          </div>
                        )}

                      </div>

                      {message.role === "user" && (
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#153a33] text-[10px] font-bold text-white">
                          U
                        </div>
                      )}

                    </div>
                  ))
                )}

                {loading && (
                  <div className="flex items-center gap-2 pl-9 text-xs text-[#8da19b]">

                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#159a72]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#159a72] [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#159a72] [animation-delay:300ms]" />
                    </span>

                    ROOMIFY is thinking...

                  </div>
                )}

              </div>

              {/* TEXT INPUT */}
              <div className="border-t border-[#e2ede9] bg-white p-4">

                <div className="flex items-center gap-2 rounded-2xl border border-[#dce9e4] bg-[#f8fbfa] px-3 py-2 transition focus-within:border-[#159a72]/50 focus-within:ring-4 focus-within:ring-[#159a72]/5">

                  <span className="text-lg text-[#8ba19a]">
                    +
                  </span>

                  <input
                    value={input}
                    onChange={(e) =>
                      setInput(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        void sendMessage();
                      }
                    }}
                    placeholder="Ask ROOMIFY anything..."
                    className="flex-1 bg-transparent px-1 text-xs text-[#25483f] outline-none placeholder-[#9aaba6]"
                  />

                  <button
                    onClick={startListening}
                    className="text-[#6f8780] transition hover:text-[#159a72]"
                    aria-label="Switch to voice input"
                  >
                    ◉
                  </button>

                  <button
                    onClick={() => sendMessage()}
                    disabled={
                      !input.trim() ||
                      loading
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#159a72] text-sm font-bold text-white transition hover:scale-105 hover:bg-[#118763] disabled:opacity-30"
                    aria-label="Send message"
                  >
                    ↑
                  </button>

                </div>

                <p className="mt-2 text-center text-[9px] text-[#a0b0ab]">
                  ROOMIFY can make mistakes. Check important financial information.
                </p>

              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================
          FLOATING LAUNCH BUTTON
      ======================================== */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#159a72] text-xl text-white shadow-[0_12px_35px_rgba(21,154,114,0.3)] transition duration-300 hover:scale-110 ${
          isOpen ? "bg-[#153a33]" : ""
        }`}
      >
        {isOpen ? "✕" : "✦"}
      </button>

      {/* ========================================
          VOICE ANSWER SLIDE ANIMATION
      ======================================== */}

      <style jsx global>{`
        @keyframes voiceAnswerIn {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}