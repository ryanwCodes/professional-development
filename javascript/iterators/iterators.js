// CHALLENGE 1

function sumFunc(arr) {
    let result = 0;
   for(let i = 0; i < arr.length; i++) {
     result += arr[i]
   }
  return result;
  }
  
  // Uncomment the lines below to test your work
  const array = [1, 2, 3, 4];
  console.log(sumFunc(array)); // -> should log 10
  
  function returnIterator(arr) {
    let i = 0;
    
    function iterator() {
      const returnValue = arr[i]
      i++
      return returnValue;
    }
      return iterator;
  }
  
  // Uncomment the lines below to test your work
  const array2 = ['a', 'b', 'c', 'd'];
  const myIterator = returnIterator(array2);
  console.log(myIterator()); // -> should log 'a'
  console.log(myIterator()); // -> should log 'b'
  console.log(myIterator()); // -> should log 'c'
  console.log(myIterator()); // -> should log 'd'
  
  
  
  // CHALLENGE 2
  
  function nextIterator(arr) {
   let i = 0;
    
    function next() {
      const returnValue = arr[i]
      i++
      return returnValue;
    }
    
      return {next};
  }
  
  // Uncomment the lines below to test your work
  const array3 = [1, 2, 3];
  const iteratorWithNext = nextIterator(array3);
  console.log(iteratorWithNext.next()); // -> should log 1
  console.log(iteratorWithNext.next()); // -> should log 2
  console.log(iteratorWithNext.next()); // -> should log 3
  console.log(iteratorWithNext.next()); // -> should log 3
  
  
  
  
  // CHALLENGE 3
  
  function sumArray(arr) {
    const iteratorWithNext = nextIterator(arr);
    let shouldContinue = true;
    let result = 0;
    
    while(shouldContinue) {
      const nextValue = iteratorWithNext.next();
      if(nextValue !== undefined) {
      result += nextValue;
      } else {
        shouldContinue = false;
      }
    }
      return result;
  }
  
  // Uncomment the lines below to test your work
  const array4 = [1, 2, 3, 4];
  console.log(sumArray(array4)); // -> should log 10
  
  
  
  // CHALLENGE 4
  
  function setIterator(set) {
    const iterator = set.values();
    
    function next() {
      return iterator.next().value;
    }
    
    return {next}
  }
  
  // Uncomment the lines below to test your work
  const mySet = new Set('hey');
  const iterateSet = setIterator(mySet);
  console.log(iterateSet.next()); // -> should log 'h'
  console.log(iterateSet.next()); // -> should log 'e'
  console.log(iterateSet.next()); // -> should log 'y'
  
  
  
  // CHALLENGE 5
  
  function indexIterator(arr) {
   let i = 0;
    
    function next() {
      const returnValue = [i, arr[i]]
      i++
      return returnValue;
    }
    
      return {next};
  
  }
  
  // Uncomment the lines below to test your work
  const array5 = ['a', 'b', 'c', 'd'];
  const iteratorWithIndex = indexIterator(array5);
  console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
  console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
  console.log(iteratorWithIndex.next()); // -> should log [2, 'c']
  
  
  
  // CHALLENGE 6
  
  function Words(string) {
    this.str = string;
  }
  
  Words.prototype[Symbol.iterator] = function() {
    let i = 0;
    const array = this.str.split(' ');
      
    function next() {
      if (i < array.length) {
        const nextValue = array[i];
      i++
      return {value: nextValue, done: false};
      } else {
        return {done: true}
      }
      
    }
    
    return {next}
  }
  
  // Uncomment the lines below to test your work
  const helloWorld = new Words('Hello World');
  for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'
  
  // CHALLENGE 7
  
  function valueAndPrevIndex(array){
      let index = 0;
    let previousIndex = 0;
    
    function sentence() {
      const value = array[index];
      const sentence = index > 0 ? `was found after index ${previousIndex}` : `is the first element`;
      previousIndex = index;
      index++;
      return `${value} ${sentence}`
    }
    
    return {sentence}
  }
  
  const returnedSentence = valueAndPrevIndex([4,5,6])
  console.log(returnedSentence.sentence());
  console.log(returnedSentence.sentence());
  console.log(returnedSentence.sentence());
  
  
  //CHALLENGE 8
  
  function* createConversation(string) {
      const returnValue = string === "english" ? "hello there" : "gibberish";
    
    function intervalCallback() {
      console.log(returnValue)
    }
    
    function next() {
        setInterval(intervalCallback, 3000) 
    }
    
    return {next}
  }
  
  console.log(createConversation('english').next());
  
  
  
  //CHALLENGE 9
  function waitForVerb(noun) {
    const returnValue = noun + ' runs';
    
    return returnValue;
  }
  
  async function f(noun) {
      const message = waitForVerb(noun);
    
    setTimeout(() => console.log(message), 3000);
  }
  
  f("dog");
  
  