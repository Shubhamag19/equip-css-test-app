import { useState } from "react";
import CodeEditor from "./CodeEditor";

const LeftComponent = ({ editorValueHandler }) => {
  const handleHtmlValue = (value) => {
    editorValueHandler(value);
  };

  const [copiedValue, setCopiedValue] = useState("");

  const handleCopy = () => {
    navigator.clipboard.readText().then((text) => {
      setCopiedValue(text);
    });
  };

  return (
    <div
      className="stw-w-2/5 stw-h-full stw-flex stw-flex-col soc-monaco-editor-css-ctr"
      onCopy={handleCopy}
    >
      <div className="h-[70vh]">
        <CodeEditor
          handleHtmlValue={handleHtmlValue}
          copiedContent={copiedValue}
        />
      </div>

      <div className="stw-flex stw-flex-col stw-px-3  stw-mt-4 soc-css-cs-hints">
        <div className="stw-flex stw-items-center stw-flex-wrap stw-text-gray-600 stw-mt-1 ">
          <span className="stw-text-base stw-font-semibold stw-mr-2">
            Colors:{" "}
          </span>
          <div className="stw-flex stw-flex-wrap stw-bg-gray-900 stw-p-2 stw-rounded-md">
            <div className="stw-flex stw-items-center">
              <span
                className="stw-w-5 stw-h-5 stw-rounded-full stw-border stw-border-white"
                style={{
                  background: "rgb(229, 231, 235)",
                }}
              ></span>
              <span className="stw-mx-2 stw-text-gray-400">#E5E7EB</span>
            </div>
            <div className="stw-flex stw-items-center">
              <span
                className="stw-w-5 stw-h-5 stw-rounded-full stw-border stw-border-white"
                style={{
                  background: "rgb(17, 24, 39)",
                }}
              ></span>
              <span className="stw-mx-2 stw-text-gray-400"> #111827</span>
            </div>
            <div className="stw-flex stw-items-center">
              <span
                className="stw-w-5 stw-h-5 stw-rounded-full stw-border stw-border-white"
                style={{
                  background: "rgb(79, 70, 229)",
                }}
              ></span>
              <span className="stw-mx-2 stw-text-gray-400"> #4F46E5</span>
            </div>
            <div className="stw-flex stw-items-center">
              <span
                className="stw-w-5 stw-h-5 stw-rounded-full stw-border stw-border-white"
                style={{
                  background: "rgb(107, 114, 128)",
                }}
              ></span>
              <span className="stw-mx-2 stw-text-gray-400"> #6B7280</span>
            </div>
          </div>
        </div>
        <div className="stw-flex stw-flex-wrap  stw-text-gray-600">
          <span className="stw-text-base stw-font-semibold">Font-Family:</span>
          <span className="stw-ml-2">sans-serif</span>
        </div>
      </div>
      <div className="stw-flex stw-flex-row stw-items-center stw-justify-center stw-mx-auto">
        <div className="stw-flex stw-justify-center">
          <button
            className="stw-text-white stw-text-base stw-py-3 stw-px-8 stw-max-w-max stw-rounded  stw-mt-7 stw-mb-4 bg-purple-600 hover:stw-bg-purple-800 active:stw-bg-purple-800 focus:stw-bg-purple-600 focus:stw-rounded focus:stw-border-purple-50 focus:stw-border"
            type="button"
          >
            Submit
          </button>
        </div>
        <div className="">
          <div className="stw-ml-3">
            <button
              disabled=""
              className="stw-py-3 stw-px-8 stw-rounded stw-mt-7 soc-sec-btn stw-text-opacity-50 stw-border-opacity-50 stw-cursor-pointer stw-mb-4 soc-con-reset-btn"
            >
              Reset
            </button>
          </div>
        </div>
        <span className="stw-mt-7 stw-ml-3 stw-mb-4 stw-text-blue-500 stw-cursor-pointer hover:stw-underline">
          How to?
        </span>
      </div>
    </div>
  );
};

export default LeftComponent;
