console.log("bai4");


const beginTime = Date.now();

const waitBlocking = (miliSecond) => {
  const startTime = new Date().getTime();
  while (new Date().getTime() < startTime + miliSecond);
};

const waitNonBlocking = (miliSecond) => {
  return new Promise((res) => setTimeout(res, miliSecond));
};

const controller1 = async (reqName) => {
  console.log(`Begin Constructor 1 of request ${reqName}`);
  await waitNonBlocking(10000);
  console.log(`Constructor 1 of request ${reqName} consume ${Date.now() - beginTime}ms`);
};

const controller2 = (reqName) => {
  console.log(`Begin Constructor 2 of request ${reqName}`);
  waitBlocking(10000);
  console.log(`Constructor 2 of request ${reqName} consume ${Date.now() - beginTime}ms`);
};

// Improve controller2 by using job queue
function Controller2Improved(reqName) {
  this.reqName = reqName;
  console.log(`Begin Constructor 2 of request ${this.reqName}`);

  // Make add job to queue when user call controller2
  Controller2Improved.prototype.worker = Controller2Improved.prototype.worker.then(() => 
    Controller2Improved.prototype.start()
  );

}

Controller2Improved.prototype.worker = Promise.resolve(); // Job queue start with Resolved Promise
Controller2Improved.prototype.start = () =>
  new Promise((res) => {
    console.log(`Start processing Constructor 2 of request ${this.reqName}`);
    waitBlocking(10000);
    console.log(`Constructor 2 of request ${this.reqName} consume ${Date.now() - beginTime}ms`);
    setTimeout(res); // Process the next job after call stack is empty
  });

for (let i = 1; i <= 3; ++i) {
  controller1(i);
  Controller2Improved(i);
}