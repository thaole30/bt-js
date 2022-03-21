console.log("bai 5");
const myArray = [1, 2, 3];

const waitFor = (time) => new Promise(res => {
    setTimeout(res, time)
});

// myArray.forEach( async (num) => {
//     await waitFor(3000);
//     console.log(num);
// })


const controller = async () => {
    for(let i=0; i < myArray.length; i++) {
        const startTime = Date.now();
        await waitFor(3000);
        console.log("number", myArray[i]);
        console.log("finishTime", Date.now() - startTime);
    }
}

controller();

console.log("Done");