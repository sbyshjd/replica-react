const ReactDOM = {
  render,
};

function render(vnode, container) {
  console.log(vnode);
  if (!vnode) return;
  //if the dom content is only string add the string and return the funtion
  if (typeof vnode === "string") {
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }
   //if the dom content is an object and it always has children node
  if (typeof vnode === "object") {
      //create the dom element by tag
    const { tag } = vnode;
    const dom = document.createElement(tag);
    //add the attributes of this dom
    const { attributes } = vnode;
    addAttribute(dom, attributes);
    //the dom has childrenNode
    //if it does not has childrenNode, it will be a string and will return in the 'string' statement
    const { children } = vnode;
    //recursively call this render function to render all the chilrenNodes and all levels of children
    children.forEach((childNode) => render(childNode, dom));
    //when the forEach loop finished, the DOM tree will be completed and append the whole DOM tree into our container
    container.appendChild(dom);
  }
}

function addAttribute(dom, attributes) {
  if (!attributes) return;
  Object.keys(attributes).forEach((key) => {
    const value = attributes[key];
    if (key === "className") {
      key = "class";
      dom.setAttribute(key, value);
    } else if (/on[A-Z]\w+/.test(key)) {
      key = key.toLocaleLowerCase();
      dom.setAttribute(key, value);
    } else if (key === "style") {
      const style = value;
      Object.keys(style).forEach((key) => {
        dom.style[key] = style[key];
      });
    } else {
      dom.setAttribute(key, attributes[key]);
    }
  });
}

export default ReactDOM;
