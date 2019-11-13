/**
 * Dom manipulations IE: rendering the page, creating elements, etc
 * @example
 * import DomManipulator from '<path>/<to>/domManipulator.js';
 */
export default (function DomManipulator() {
  // Creates an  element given certain parameters
  const createElement = (element, props = {}) => {
    if (!element) {
      return null;
    }

    const HTMLElement = document.createElement(element);

    // Assigns properties of the created object onto the given element
    Object.assign(HTMLElement, props);

    return HTMLElement;
  };
  /**
   * This is a curried function. The first item passed in is the parent. If no
   * Second function passed in, it will return a function which will accept children.
   *
   * @param {HTMLElement} parent - HTMLElement to append to
   * @return {(...children: HTMLElement|HTMLElement[]) => HTMLElement - Returns the parent passed in
   */
  const appendChildrenTo = parent => (...children) => {
    children.flat().forEach(child => parent.appendChild(child));
    return parent;
  };

  const setTarget = (ary, defaultTarget) => {
    if (ary.includes(location.hash)) {
      return document.querySelector(location.hash).classList.add('target');
    }

    // default target
    document.querySelector(defaultTarget).classList.add('target');
  };

  return {
    createElement,
    appendChildrenTo,
    setTarget,
  };
})();
