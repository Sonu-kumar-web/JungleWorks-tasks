/*  process.nextTick() in not the part of any phase of event loop.
    process.nextTick() schedule a callback function to be executed in next iteration of event loop
*/

const test = () => {
   process.nextTick(() => {
      console.log("process.nextTick is executed");
   });
   console.log("Execute current Iteration");
};

test();

/* The output will be
    Execute current Iteration
    process.nextTick is executed
    the second console is printed first because this is a part of the current iteration of the event loop and the first console is a part of a callback function which is associated with process.nextTick() executed in next iteration of event loop.
*/
