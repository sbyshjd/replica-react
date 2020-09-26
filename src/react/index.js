const React = {
  createElement,
};

function createElement(tag, attributes, ...children) {
  return {
    tag,
    attributes,
    children,
  };
}

export default React;
