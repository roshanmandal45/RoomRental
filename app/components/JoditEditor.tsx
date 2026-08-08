"use client";

import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";

const Jodit = dynamic(() => import("jodit-react"), {
  ssr: false,
});

export default function JoditEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

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

  return (
    <Jodit
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent) => setContent(newContent)}
    />
  );
}