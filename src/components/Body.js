import { useState, useRef, useEffect } from "react";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import editorText from "../utils/EditorText";

const Body = () => {
  const [editorValue, setEditorValue] = useState(editorText);

  useEffect(() => {
    const copyToClipboard = (text) => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    };

    const handleClipboardChange = () => {
      if (document.visibilityState === "hidden") {
        copyToClipboard("\u200B");
      }
    };

    document.addEventListener("visibilitychange", handleClipboardChange);

    return () => {
      document.removeEventListener("visibilitychange", handleClipboardChange);
    };
  }, []);

  const handleEditorValue = (value) => {
    setEditorValue(value);
  };

  return (
    <div>
      <div className="flex-1 relative content-ctr global-page-fade-in">
        <div
          id="rec-ap-soc-container"
          className="bg-white overflow-y-auto"
        >
          <div id="soc-main-app" className="">
            <div className="Toastify"></div>

            <div className="stw-font-sans  soc-lay-ctr">
              <div className="stw-flex-1 stw-relative focus:stw-outline-none soc-lay-main-ctr-ctr">
                <div className=" soc-lay-main-ctr">
                  <div
                    className="stw-mx-auto stw-bg-white   stw-px-0 sm:stw-px-0  soc-lay-main"
                    id="soc-lay-main"
                  >
                    <div className="">
                      <div className="soc-con-quiz__questions">
                        <div className="stw-flex stw-flex-col stw-justify-center stw-mx-auto stw-max-w-full soc-les-content-ctr ">
                          <div className="stw-bg-white stw-flex stw-flex-col stw-rounded-xl stw-justify-center soc-con-quiz-card">
                            <div className="stw-flex stw-flex-col">
                              <div className="soc-con-cs-css stw-w-full">
                                <div>
                                  <div className="stw-flex stw-flex-row">
                                    <LeftComponent
                                      editorValueHandler={handleEditorValue}
                                    />
                                    <RightComponent editorValue={editorValue} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="stw-fixed stw-top-1/2 stw-left-1/2 stw--translate-x-1/2 stw--translate-y-1/2   stw-hidden">
                          <div className="stw-self-stretch stw-h-11 stw-flex-col stw-justify-start stw-items-center stw-gap-1 stw-flex stw-animate-pulse">
                            <div className="stw-self-stretch stw-text-center stw-text-gray-900 stw-font-medium stw-leading-tight stw-text-lg">
                              Submitting the test...
                            </div>
                            <div className="stw-self-stretch stw-text-center stw-text-gray-500 stw-font-normal stw-leading-tight">
                              Please wait while we submit your response
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
