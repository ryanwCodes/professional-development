# Data Structures and Algorithms

## Big O
A way of categorizing algorithms time or memory requirements based on input.

#### common Big-O values (ex. said "oh of N) )
* O(1)
* O(logn)
* O(n)
* O(nlogn)
* O(n^2)
* O(2^n)
* O(n!)

## Algorithm Approach
1. is the data ordered?
2. if input is halved at each step, it is either 0(logn) or O(nlogn)
3. if unclear how to improve algo, try stepping by something other than n (ex. sqrt(n)) This will avoid linear big-O, and will be whatever the step interval is (ex. sqrt(n))
3. remember "High is exclusive, low is inclusive" 

## Search
ex. Find 2 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

1. Linear Search **O(N)**
 - walk through each element of the array and see if it matches our target

2. Binary Search **O(logn)**
- pick the mid point and see if target is more or less than that. If more, we will find the mid point of the right sub-array. If less, then same thing on left sub-array. Repeat until target is found, or sub-array is empty. 

```
Find 2 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
             ^ target is less than mid point, repeat for left sub-array

[1, 2, 3, 4]
       ^ target is less than mid point, repeat for left sub-array

[1, 2]
    ^ target is equal to midpoint, return true
```

## Sort

1. Bubble Sort **O(n^2)**
```
[5, 3, 8, 4, 2]
 ^  ^ compare, 0 and 1 position values, 5 > 3, so switch the values

[3, 5, 8, 4, 2]
    ^  ^ compare 1 and 2 positions, 5 < 8 so leave it

[3, 5, 8, 4, 2]
       ^  ^ compare 2 and 3 positions, 8 > 4 so switch them

[3, 5, 4, 8, 2]
          ^  ^ compare 3 and 4 positions, 8 > 2 so switch them

[3, 5, 8, 2, | 8]
 ^  ^ now start over, and only search the unsorted portion

```

## Data Structures

1. Linked Lists
```
A -> B -> C -> D
^ head         ^ tail

Each node generally has:
value: value 
next: Node
prev: Node

Operations: 
Insert O(n)
Delete O(n)

If implementing a Stack, can draw alternatively

A <- B <- C <- D
^ tail         ^ head 
```

2.