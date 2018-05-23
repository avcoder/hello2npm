const message = 'hello there';

// create a function and make it public via exports that can be called from other files
exports.sayHello = () => {
  console.log(message);
};
