Array.prototype.forEachAsync = async function (callback) {
    for (let i = 0; i < this.length; i++) {
      await callback(this[i]);
    }
  };
  
  const controller = (req, res) => {
    const array = Array.from(Array(1000000).keys());
    // array.forEach(async (item) => {
    //   console.log(item);
    // });
    array
      .forEachAsync((item) => {
        console.log(item);
      })
      .then(() => console.log("Done"));
  };
  
  controller();
  controller();
  controller();