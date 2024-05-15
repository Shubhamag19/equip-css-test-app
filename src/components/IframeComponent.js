import { useEffect, useRef } from "react";

const IframeComponent = ({ editorValue }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      updateIframeContent();
    }
  }, [editorValue]);

  const updateIframeContent = () => {
    const iframeDocument = iframeRef.current.contentDocument;
    if (iframeDocument) {
      iframeDocument.body.innerHTML = editorValue;
    }
  };

  return (
    <div>
      <iframe
        className="stw-bg-white stw-m-auto"
        id="soc-iframe-preview"
        width="960"
        height="600"
        ref={iframeRef}
      ></iframe>
    </div>
  );
};

export default IframeComponent;
