// Create a sleep function that takes one parameter (time) and
// will wait "time" ms
    function sleep(time: number) {
        return new Promise((resolve: Function) => {
            setTimeout(() => {
                resolve();
            }, time)
        })
    }

    async function run() {
        await sleep(1000);
        console.log('hello');
        await sleep(1000);
        console.log('world');
    }

    run()