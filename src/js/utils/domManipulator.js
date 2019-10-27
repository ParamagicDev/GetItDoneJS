/**
 * Dom manipulations IE: rendering the page, creating elements, etc
 */
export default (function DomManipulator() {
  // Creates an  element given certain parameters
  const createElement = (type, props = {}) => {
    if (!type) {
      return null;
    }

    const element = document.createElement(type);
    const object = Object.assign({}, props);

    // Assigns properties of the created object onto the given element
    Object.assign(element, object);

    return element;
  };

  const createDocFrag = () => {
    return document.createDocumentFragment();
  };

  const appendChildren = (parent, ...children) => {
    children.flat().forEach(child => parent.appendChild(child));
  };

  return {
    createElement,
    createDocFrag,
    appendChildren,
  };
})();