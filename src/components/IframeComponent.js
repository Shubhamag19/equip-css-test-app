import { useEffect, useRef } from "react";

const IframeComponent = ({ editorValue }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const parser = new DOMParser();
    const newHtmlDoc = parser.parseFromString(editorValue, "text/html");
    const newHtmlDocBody = newHtmlDoc.body;

    const iframeDocument = iframeRef.current.contentDocument;
    const iframeBody = iframeDocument.body;

    updateDom(iframeBody, newHtmlDocBody);
  }, [editorValue]);

  const updateDom = (current, newNode) => {
    diffAndPatch(current, newNode);
  };

  const diffAndPatch = (current, newNode) => {
    if (
      current.nodeType === Node.TEXT_NODE &&
      newNode.nodeType === Node.TEXT_NODE
    ) {
      if (current.textContent !== newNode.textContent) {
        current.textContent = newNode.textContent;
      }
      return;
    }

    if (
      current.nodeType === Node.ELEMENT_NODE &&
      newNode.nodeType === Node.ELEMENT_NODE
    ) {
      updateAttributes(current, newNode);
      updateChildren(current, newNode);
    }
  };

  const updateAttributes = (current, newNode) => {
    const currentAttrs = current.attributes;
    const newAttrs = newNode.attributes;

    // removing attributes from current node if not present in newnode
    for (let i = currentAttrs.length - 1; i >= 0; i--) {
      const attr = currentAttrs[i];
      if (!newNode.hasAttribute(attr.name)) {
        current.removeAttribute(attr.name);
      }
    }

    // adding/updating attributes in new node
    for (let i = 0; i < newAttrs.length; i++) {
      const attr = newAttrs[i];
      if (
        !current.hasAttribute(attr.name) ||
        current.getAttribute(attr.name) !== attr.value
      ) {
        current.setAttribute(attr.name, attr.value);
      }
    }
  };

  const updateChildren = (current, newNode) => {
    const currentChildren = Array.from(current.childNodes);
    const newChildren = Array.from(newNode.childNodes);

    while (currentChildren.length > newChildren.length) {
      current.removeChild(current.lastChild);
    }

    for (let i = 0; i < newChildren.length; i++) {
      if (i < currentChildren.length) {
        diffAndPatch(currentChildren[i], newChildren[i]);
      } else {
        current.appendChild(newChildren[i].cloneNode(true));
      }
    }
  };

  return (
    <iframe
      className="stw-bg-white stw-m-auto"
      id="soc-iframe-preview"
      width="960"
      height="600"
      ref={iframeRef}
    />
  );
};

export default IframeComponent;
