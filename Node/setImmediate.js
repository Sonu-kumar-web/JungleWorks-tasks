/* When you want to execute some piece of code asynchronously, but as soon as possible, one option is to use the setImmediate() a function provided by Node.js
Any function passed as the setImmediate() argument is a callback that’s executed in the next iteration of the event loop.
*/

const test = () => {
   setImmediate(() => {
      console.log("setImmediate is executed");
   });
   console.log("Execute current Iteration");
};

test();
