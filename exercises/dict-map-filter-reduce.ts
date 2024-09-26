/////////////////////////////////////////
/////////// TESTING UTILITIES ///////////
//////// no need to modify these ////////
/////////////////////////////////////////
// @errors: 7006 7006 7006 7006 7006
console.clear()

function assertEquals<T>(
  found: T,
  expected: T,
  message: string
) {
  if (found !== expected)
    throw new Error(
      `❌ Assertion failed: ${message}\nexpected: ${expected}\nfound: ${found}`
    )
  console.log(`✅ OK ${message}`)
}

function assertOk(value: any, message: string) {
  if (!value)
    throw new Error(`❌ Assertion failed: ${message}`)
  console.log(`✅ OK ${message}`)
}

///// SAMPLE DATA FOR YOUR EXPERIMENTATION PLEASURE (do not modify)
const fruits = {
  apple: { color: "red", mass: 100 },
  grape: { color: "red", mass: 5 },
  banana: { color: "yellow", mass: 183 },
  lemon: { color: "yellow", mass: 80 },
  pear: { color: "green", mass: 178 },
  orange: { color: "orange", mass: 262 },
  raspberry: { color: "red", mass: 4 },
  cherry: { color: "red", mass: 5 },
}
 
interface Dict<T> {
  [k: string]: T
}
 
// Array.prototype.map, but for Dict
function mapDict<T>(dict: Dict<T>, callback: Function): Dict<any> {
    const dictKeys = Object.keys(dict);
    const newDict = {} as Dict<T>

    for(let i = 0; i < dictKeys.length; i++) {
        const currentKey = dictKeys[i];
        newDict[currentKey] = callback(dict[currentKey], currentKey);
    }

    return newDict;
}
// Array.prototype.filter, but for Dict
function filterDict<T>(dict: Dict<T>, callback: Function): Dict<any> {
    const dictKeys = Object.keys(dict);
    const newDict = {} as Dict<T>

    for(let i = 0; i < dictKeys.length; i++) {
        const currentKey = dictKeys[i];
        const shouldAddToDict = callback(dict[currentKey], currentKey);
        if(shouldAddToDict) {
            newDict[currentKey] = dict[currentKey]
        }
    }

    return newDict;
}
// Array.prototype.reduce, but for Dict
function reduceDict<T, U>(dict: Dict<T>, callback: Function, defaultAcc: U): any {
    const dictKeys = Object.keys(dict);
    let acc = defaultAcc;

    for(let i = 0; i < dictKeys.length; i++) {
        const currentKey = dictKeys[i];
        acc = callback(acc, dict[currentKey])
    }

    return acc;
}
 
/////////////////////////////////////////
///////////// TEST SUITE ///////////////
//////// no need to modify these ////////
/////////////////////////////////////////
 
// MAP
const fruitsWithKgMass = mapDict(fruits, (fruit, name) => ({
// Parameter 'fruit' implicitly has an 'any' type.
// Parameter 'name' implicitly has an 'any' type.

  ...fruit,
  kg: 0.001 * fruit.mass,
  name,
}))
const lemonName: string = fruitsWithKgMass.lemon.name
// @ts-ignore-error
const failLemonName: number = fruitsWithKgMass.lemon.name
assertOk(
  fruitsWithKgMass,
  "[MAP] mapDict returns something truthy"
)
assertEquals(
  fruitsWithKgMass.cherry.name,
  "cherry",
  '[MAP] .cherry has a "name" property with value "cherry"'
)
assertEquals(
  fruitsWithKgMass.cherry.kg,
  0.005,
  '[MAP] .cherry has a "kg" property with value 0.005'
)
assertEquals(
  fruitsWithKgMass.cherry.mass,
  5,
  '[MAP] .cherry has a "mass" property with value 5'
)
assertEquals(
  Object.keys(fruitsWithKgMass).length,
  8,
  "[MAP] fruitsWithKgMass should have 8 keys"
)
 
// FILTER
// only red fruits
const redFruits = filterDict(
  fruits,
  (fruit) => fruit.color === "red"
// Parameter 'fruit' implicitly has an 'any' type.

)
assertOk(
  redFruits,
  "[FILTER] filterDict returns something truthy"
)
assertEquals(
  Object.keys(redFruits).length,
  4,
  "[FILTER] 4 fruits that satisfy the filter"
)
assertEquals(
  Object.keys(redFruits).sort().join(", "),
  "apple, cherry, grape, raspberry",
  '[FILTER] Keys are "apple, cherry, grape, raspberry"'
)
 
// REDUCE
// If we had one of each fruit, how much would the total mass be?
const oneOfEachFruitMass = reduceDict(
  fruits,
  (currentMass, fruit) => currentMass + fruit.mass,
// Parameter 'currentMass' implicitly has an 'any' type.
// Parameter 'fruit' implicitly has an 'any' type.

  0
)
assertOk(
  redFruits,
  "[REDUCE] reduceDict returns something truthy"
)
assertEquals(
  typeof oneOfEachFruitMass,
  "number",
  "[REDUCE] reduceDict returns a number"
)
assertEquals(
  oneOfEachFruitMass,
  817,
  "[REDUCE] 817g mass if we had one of each fruit"
)
