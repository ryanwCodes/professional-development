// Implement debounce
function debounce(fn: Function, time: number): Function {
    let timeoutId: number | null;

    return function() {
        if(timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            fn();
            timeoutId = null;
        }, time);
    }
}

const fn1 = debounce(() => console.log('Its later now'), 3000)
fn1();
fn1();
fn1();
fn1();
fn1();