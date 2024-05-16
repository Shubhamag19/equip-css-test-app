import { useEffect, useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import editorText from "../utils/EditorText";

const CodeEditor = ({ handleHtmlValue, copiedContent }) => {
  const [value, setValue] = useState(editorText);

  const editorParentDivRef = useRef(null);
  const copiedTextRef = useRef("");

  useEffect(() => {
    copiedTextRef.current = copiedContent;
  });

  const editorOptions = {
    tabSize: 4,
    minimap: {
      enabled: false,
    },
  };

  const handleChange = (val) => {
    setValue(val);
    handleHtmlValue(val);
  };

  const handlePaste = (e) => {
    const clipboardText = e.clipboardData.getData("text/plain");
    if (clipboardText !== copiedTextRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    const editorParentDiv = editorParentDivRef.current;
    if (editorParentDiv) {
      editorParentDiv.addEventListener("paste", handlePaste, true);
      editorParentDiv.addEventListener("contextmenu", handleContextMenu, true);
    }
    return () => {
      editorParentDiv.removeEventListener("paste", handlePaste, true);
      editorParentDiv.removeEventListener("contextmenu", handleContextMenu, true);
    };
  }, []);

  return (
    <div className="h-full" ref={editorParentDivRef}>
      <Editor
        height="100%"
        defaultLanguage="html"
        theme="vs-dark"
        options={editorOptions}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default CodeEditor;
