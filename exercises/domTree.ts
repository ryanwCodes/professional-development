// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

function(element: any, tree: object): any[] {
    let isRoot = false;
    let currentElement = element;
    const pathArray: any[] = [];

    while(!isRoot) {
        pathArray.push(currentElement.parent)
        currentElement = currentElement.parent;
    }
    
    return pathArray;
}