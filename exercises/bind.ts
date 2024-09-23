// Implement Function.prototype.bind()

Function.prototype.bind = function(context: object): Function {
    const fn = this;

    return function () {
        fn.call(context)
    }
}


    const foo = function() {
        console.log(this.bar);
    }

    let baz = foo.bind({bar: 'hello'})

    baz(); // Hello
