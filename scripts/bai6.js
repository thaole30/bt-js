const car = {
    color: 'black',
    model : {
        name: 'honda',
        country: 'US',
    }
}


const shallowCopy = {...car};


// Changed our cloned object
shallowCopy.color = 'red';
shallowCopy.model.name = 'BMV';
console.log("shallowCopy",shallowCopy);
console.log("car",car);


const student = {
    firstName: 'Le',
    lastName: 'Thao',
}


//shalow copy
const studentCopy1 = {...student};
console.log("studentCopy1", studentCopy1);

const studentCopy2 = Object.assign({}, student);
console.log("studentCopy2", studentCopy2);




const person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


const deepCopy = JSON.parse(JSON.stringify(person));
console.log("deepCopy", deepCopy);
deepCopy.firstName = 'Maria';
deepCopy.address.city = 'LA';
console.log("deepCopy", deepCopy);
console.log("person",person);






function deepCopyRecursive(object) {

    const result = {};
  
    for (const key in object) {
  
      const value = object[key];
      if (typeof value === "object") result[key] = deepCopyRecursive(object[key]);
  
      else result[key] = object[key];
  
    }
    return result;
  
  }
  
  const deepCloneObject = deepCopyRecursive(person);
  deepCloneObject.address.country = "VN";

  console.log("deepCloneObject", deepCloneObject);
  console.log("person", person);
