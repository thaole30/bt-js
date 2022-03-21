async function waitAndMaybeReject() {
    await new Promise((res, rej) => {
        setTimeout(() => res("result ne"), 1000)
    })
    .then((result) => {
        return result;
    })
    .catch((err) => {
        throw Error("this is error");
    })

    throw Error("this is error");

}
async function test1() {
    try {
        return await waitAndMaybeReject() 
        // dư await  => remove await
    } catch (error) {
        return "Oh no" + error.message //error message of waitAndMaybeReject if waitAndMaybeReject throw error
    }
}


async function test2() {
    try {
        return await waitAndMaybeReject() // dư  await  => chay xuong catch
    } catch (error) {
        console.log("error exist")
        throw (error) //throw ra error nhung main() function k co try catch de bat loi => sai
    }
}

async function test3() {
    return await waitAndMaybeReject() // dư await
    //Thiếu catch de bat loi lỗi
}


async function test4() {
    return waitAndMaybeReject() // đúng
    //Thiếu catch de bat loi lỗi

}

const main = async() => {
    const value = await test4()
    console.log("value: " + value)
}
main()