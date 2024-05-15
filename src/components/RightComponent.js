import IframeComponent from "./IframeComponent";

const RightComponent = ({ editorValue }) => {
  return (
    <div className="stw-flex stw-flex-col stw-w-3/5 stw-h-full stw-max-h-full">
      <div className="stw-flex stw-flex-col stw-w-full h-[47vh]">
        <div className="stw-w-full stw-overflow-scroll stw-border stw-border-gray-700 stw-h-full stw-bg-gray-100 soc-css-cs-output">
          <div className="stw-sticky stw-flex stw-flex-row stw-justify-between stw-items-center stw-p-2">
            <p className="soc-programming-output-title">Output</p>
            <div className="soc-con-quiz-header__ques-timer">
              <div
                aria-label="Countdown timer"
                style={{
                  position: "relative",
                  width: "10px",
                  height: "10px",
                }}
              >
                <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m 5,6
          a -1,-1 0 1,0 0,-2
          a -1,-1 0 1,0 0,--2"
                    fill="none"
                    stroke="#d9d9d9"
                    stroke-width="12"
                  ></path>
                  <path
                    d="m 5,6
          a -1,-1 0 1,0 0,-2
          a -1,-1 0 1,0 0,--2"
                    fill="none"
                    stroke="rgba(161, 137, 158, 1)"
                    stroke-linecap="round"
                    stroke-width="12"
                    stroke-dasharray="-6.283185307179586"
                    stroke-dashoffset="-0.6714868202677194"
                  ></path>
                </svg>
                <div
                  aria-hidden="true"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    width: "100%",
                    height: "100%",
                    color: "rgb(161, 137, 158)",
                  }}
                >
                  <div className="soc-quiz-timer stw-mr-10 stw-mt-2">
                    <div className="">00:13:24</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stw-ml-2 stw-flex stw-flex-row stw-items-center soc-iframe-width-scroll-ctr">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stw-w-6 stw-h-6 stw-mr-1 stw-cursor-pointer  hover:stw-text-indigo-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stw-w-6 stw-h-6 stw-mr-1 stw-cursor-pointer  hover:stw-text-indigo-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stw-w-6 stw-h-6 stw-mr-1 stw-cursor-pointer stw-text-indigo-600 hover:stw-text-indigo-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="stw-my-2  stw-h-full">
            <IframeComponent editorValue={editorValue} />
          </div>
        </div>
      </div>

      <div
        className="stw-flex stw-flex-col stw-w-full stw-h-1/2 soc-css-cs-expected-output"
      >
        <div className="stw-border stw-border-gray-700 stw-w-full stw-h-full stw-flex stw-flex-col">
          <div className="stw-flex stw-flex-row stw-justify-between stw-p-2">
            <p>Target</p>
            <div className="stw-flex stw-flex-row stw-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stw-w-6 stw-h-6 stw-mr-1 stw-cursor-pointer  hover:stw-text-indigo-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stw-w-6 stw-h-6 stw-mr-1 stw-cursor-pointer  hover:stw-text-indigo-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stw-w-6 stw-h-6 stw-cursor-pointer stw-text-indigo-600 hover:stw-text-indigo-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          </div>
          <img
            id="soc-cs-css-target-img-desktop"
            className=" stw-p-2 stw-m-auto stw-cursor-pointer"
            src="https://soc-core-content.s3.amazonaws.com/content/82/a7dn29dl/units/xap-mrf-icy/3g1KMRrz"
            style={{
              maxHeight: "calc(-48px + 50vh)",
            }}
          />
          <img
            id="soc-cs-css-target-img-mobile"
            className="stw-hidden stw-p-2 stw-m-auto stw-cursor-pointer"
            src="https://soc-core-content.s3.amazonaws.com/content/82/a7dn29dl/units/xap-mrf-icy/ZCG6F2bG"
            style={{
              maxHeight: "calc(-48px + 50vh)",
            }}
          />
          <img
            id="soc-cs-css-target-img-tablet"
            className="stw-hidden stw-p-2 stw-m-auto stw-cursor-pointer"
            src="https://soc-core-content.s3.amazonaws.com/content/82/a7dn29dl/units/xap-mrf-icy/AtYk3G4C"
            style={{
              maxHeight: "calc(-48px + 50vh)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
