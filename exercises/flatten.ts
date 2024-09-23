type numberArray = (number | numberArray)[]

// Without using .flat(), create a function to flatten an array
function flatten(arr: numberArray): number[] {

    const flatArray = arr.reduce((acc: number[], value) => {
        if(Array.isArray(value)) {
            acc = acc.concat(flatten(value))
        } else {
            acc = [...acc, value]
        }

        return acc;
    }, [])

    return flatArray;
}

const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
console.log(flatten(exampleArray)); // [1,2,3,4,5,6,7,8,9,10]