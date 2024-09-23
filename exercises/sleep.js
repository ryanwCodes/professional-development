// Create a sleep function that takes one parameter (time) and
// will wait "time" ms
function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
async function run() {
    await sleep(1000);
    console.log('hello');
    await sleep(1000);
    console.log('world');
}
run();
