console.log("bài 1");

const sendPresent = (present, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(present);
        }, 5000)
    })
}

sendPresent("shirt", 5000)
    .then((present) => {
        console.log(`đã giao ${present}`)
    })
    .catch((err) => {
        console.log("error", err);
    })