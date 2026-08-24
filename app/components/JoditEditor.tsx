"use client";

import React, { useRef, useMemo } from "react";
import dynamic from "next/dynamic";

interface JoditEditorProps {
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Jodit = dynamic(() => import("jodit-react"), {
  ssr: false,
});

export default function JoditEditor({
  setContent,
}: JoditEditorProps) {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,

      height: 300,

      placeholder:
        "Add details like room size, furniture, floor, surroundings and who it suits best...",

      buttons: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "ul",
        "ol",
        "|",
        "eraser",
        "undo",
        "redo",
      ],

      showXPathInStatusbar: false,
      toolbarAdaptive: false,
    }),
    []
  );

  const handleChange = (html: string) => {
    const temp = document.createElement("div");
    temp.innerHTML = html;

    const plainText = temp.textContent || "";

    setContent(plainText);
  };

  return (
    <Jodit
      ref={editor}
      config={config}
      onChange={handleChange}
    />
  );
}