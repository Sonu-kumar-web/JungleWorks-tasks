/* The timer phase executes callbacks scheduled by setTimeout() and setInterval(). 
A timer specifies the threshold after which a provided callback may be executed rather than the exact time a person wants it to be executed. 

poll phase retrieve new I/O events, execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate())
I/O often refers to reading/writing files or network operations */

/* Combine example for process.nextTick, setImmediate, timer and I/O function */

function test() {
   console.log("Hey");

   // timers or i/o
   setTimeout(() => {
      console.log("setTimeout is running");
   }, 100);

   // process.nextTick
   process.nextTick(() => {
      console.log("process.nextTick is running");
   });

   //  setImmediate
   setImmediate(() => {
      console.log("setImmediate is running");
   });
}
