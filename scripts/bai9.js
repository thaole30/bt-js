function Job(name, willError) {
  this.name = name;
  this.time = Math.round(Math.random() * 10000); //tgian random cho 1 job
  this.willError = willError;

  console.log(`Promise job ${this.name} consumes ${this.time}`);
}

Job.prototype.start = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`Done promise job ${this.name} in (${this.time})`);

      if (this.willError) {
        reject(`error job ${this.name} in (${this.time})`);
      } else {
        resolve(`finish job ${this.name} in (${this.time})`);
      }
    }, this.time);
  });
};

const jobs = [];

for (let i = 0; i < 3; i++) {
  if (i == 1) {
    jobs.push(new Job(i, true));
  } else {
    jobs.push(new Job(i));
  }
}

const promises = jobs.map((job) => {
  return job
    .start()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
});

console.log("promises", promises);

Promise.all(promises)
  .then((result) => {
    console.log("result", result);
  })
  .catch((err) => {
    console.log("err", err);
  });

console.log("jobs", jobs);
