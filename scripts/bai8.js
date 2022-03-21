const timeOut = function() {
    console.log("timeout");
}

const immediate = () => {
    console.log("immediate")
}

const nextTick = () => {
    console.log("nextTick");
}

setImmediate(immediate);
setTimeout(timeOut, 0);
// A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.

process.nextTick(nextTick);    //độ ưu tiên cao nhất, khi nào stack hết trống, thì được thực hiện ngay => luôn chạy trước setImmediate và setTimeout

console.log("begin")