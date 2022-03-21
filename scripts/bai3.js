console.log("bài 3");




// function doA() {
    
//     const beginTime = Date.now();
//     while (Date.now() - beginTime < 10000) {}
//     console.log(" finish A");
// }




// function doB() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("finish Promise B");
//       res();
//     }, 1000);
//   });
// }



// const controller = async (name, req, res) => {
//     const startTime = Date.now();
//         doA();
//     await doB();
//     console.log( Date.now()-startTime);
// }


// controller(1);
// controller(2);
// controller(3);


// async function doJob() {
//    await controller(1);
//    await controller(2);
//    await controller(3);
// }

//    doJob()



const startTime = Date.now();

function doA() {

    console.log(Date.now() - startTime + "begin A");
    
    const beginTime = Date.now();
    while (Date.now() - beginTime < 10000) {}
    console.log(Date.now() - startTime + "finish A");

}

 function doB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("xong doB");
            resolve("result in doB");
        }, 1000);

    })
}

const controller = async (name,req, res) => {
    doA();
    await doB();

    console.log(`finish Time controller ${name}`, Date.now()-startTime);
}


//-------------ý 1
// controller(1);
// controller(2);
// controller(3);


//------------- ý 2
async function doJob() {
   await controller(1);
   await controller(2);
   await controller(3);
}

   doJob()
