const moduleTestFunction = (a, b) => a + b;

module.exports = moduleTestFunction;
module.exports = {
  test: moduleTestFunction,
  hardCoding: "hard",
};
module.exports.test = moduleTestFunction;
exports.test = moduleTestFunction;
