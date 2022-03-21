// console.log('stack [1]');
// setTimeout(() => console.log("macro [2]"), 0);
// setTimeout(() => console.log("macro [3]"), 1);

// const p = Promise.resolve();
// for(let i = 0; i < 3; i++) p.then(() => {
//     setTimeout(() => {
//     console.log('stack [4]')
//     setTimeout(() => console.log("macro [5]"), 0);
//     p.then(() => console.log('micro [6]'));
// }, 0);
// console.log("stack [7]");
// });

// console.log("macro [8]");




// A simple promise that resolves after a given time
const timeOut = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Completed in ${t}`)
      }, t)
    })
  }
  
  // Resolving a normal promise.
  timeOut(1000)
   .then(result => console.log(result)) // Completed in 1000
  
  // Promise.all
  Promise.all([timeOut(2000), timeOut(5000)])
   .then(result => console.log(result))