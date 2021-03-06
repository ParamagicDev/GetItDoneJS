/**
 * Utility function for adding element[s] to an array
 * This does not mutate the original array passed in
 * This will flatten the elements passed in so there cannot be nested arrays.
 * This will only flatten array one level deep.
 *
 * @param {*[]} ary - The ary to add to
 * @return {(...elements) => *[]} - Returns a function which takes in a spread of elements which when passed in
 * will return a new array.
 *
 * @example
 * import {addToArray} from '<path>/<to>/arrayUtils.js';
 * const ary = [];
 * const elements ['e1', 'e2', 'e3'];
 * const newAry = addToArray(ary)(elements);
 * console.log(newAry);
 * // => ['e1', 'e2', 'e3'];
 *
 * console.log(ary);
 * // => [];
 */
export const addToArray = ary => (...elements) => {
  const newAry = ary;
  elements.flat().forEach(element => newAry.push(element));
  return newAry;
};
