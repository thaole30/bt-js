console.log("bài 2");


function Job(name) {
    this.name = name;
    this.time = Math.round(Math.random() * 10000); //tgian random cho 1 job

    console.log(`Promise job ${this.name} consumes ${this.time}`)
}

Job.prototype.start = function () {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log(`Done promise job ${this.name} in (${this.time})`);
            resolve(`finish job ${this.name} in (${this.time})`);
        }, this.time);
    })


}


//create jobs array including 20 job 

const jobs = [];

for(let i=0; i < 20; ++i) {
    jobs.push(new Job(i));
}

console.log("jobs", jobs);


//create a pool with maximum 5 jobs
const maxJobs = 5;
const pool = Array.from(Array(maxJobs).keys());    // [0, 1, 2, 3, 4]
const beginTime = Date.now();



function nextJob(index) {
    //get the first job in jobs array until all the jobs is done
    const job = jobs.shift();
    console.log("first job", job);
    console.log("jobs.length", jobs.length);
    if (!job) {
      console.log("No more jobs pending");
  
      // Calculate time consuming
      if (jobs.length == 0) {
        const endTime = Date.now();
        console.log(`Time consuming: ${endTime - beginTime}`);
      }
      return;
    }
  

    pool[index] = job;
    job.start()  //return a promise, after this promise done, next .then is called
        .then((messageDone) => {
            console.log("messageDone", messageDone);
            nextJob(index);
        })
}




//init 5 first jobs

for(let i = 0; i < maxJobs; ++i) {
    nextJob(i);
}