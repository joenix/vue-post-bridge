export default (target, callback) => {
  // Loop
  Object.keys(target).forEach(key => callback(target[key], key));
};
