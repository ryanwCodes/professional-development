// Implement debounce
function debounce(fn, time) {
    var timeoutId;
    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(function () {
            fn();
            timeoutId = null;
        }, time);
    };
}
var fn1 = debounce(function () { return console.log('Its later now'); }, 3000);
fn1();
fn1();
fn1();
fn1();
fn1();
