/**
 * sayHello
 * @param {String} name Represents a person's name.
 * @throws Will throw a TypeError if the argument is not an String.
 * @returns {String} The string that includes the person's name.
 */
module.exports.sayHello = function (name) {
  if (typeof name !== 'string') {
    throw new TypeError('ERR_INVALID_ARG_TYPE')
  }
  return `Hello ${name} !`
}
/**
 * sayHello2
 * @param {String} name Represents a person's name.
 * @throws Will throw a TypeError if the argument is not an String.
 * @returns {String} The string that includes the person's name.
 */
module.exports.sayHello2 = function (name) {
  if (typeof name !== 'string') {
    throw new TypeError('ERR_INVALID_ARG_TYPE')
  }
  return `Hello ${name} !`
}
