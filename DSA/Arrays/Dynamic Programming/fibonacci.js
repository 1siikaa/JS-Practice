/* Brute Force Approach 

To find nth element of a Fibonacci Series Next
We can use recursion method to find this.
*/

const findNthFibonacciNum = (n) => {
  if (n <= 1) {
    return n;
  }

  return findNthFibonacciNum(n - 1) + findNthFibonacciNum(n - 2); // exponential time complexity because we are computing already computed results again due to recursive operation.
};

console.log(findNthFibonacciNum(40));

/* 
Time Complexity for the above approach will be exponential O(2^N). 
Space Complexity for the above approach will O(N) because of auxiliary stack space.
*/

/* 
Recursion Tree

findNthFibonacciNum(5)
    ├── findNthFibonacciNum(4)
    │   ├── findNthFibonacciNum(3)
    │   │   ├── findNthFibonacciNum(2)
    │   │   │   ├── findNthFibonacciNum(1)  → returns 1 (base case)
    │   │   │   ├── findNthFibonacciNum(0)  → returns 0 (base case)
    │   │   ├── findNthFibonacciNum(1)  → returns 1 (base case)
    │   ├── findNthFibonacciNum(2)
    │   │   ├── findNthFibonacciNum(1)  → returns 1 (base case)
    │   │   ├── findNthFibonacciNum(0)  → returns 0 (base case)
    ├── findNthFibonacciNum(3)
        ├── findNthFibonacciNum(2)
        │   ├── findNthFibonacciNum(1)  → returns 1 (base case)
        │   ├── findNthFibonacciNum(0)  → returns 0 (base case)
        ├── findNthFibonacciNum(1)  → returns 1 (base case)


Backtracking and Summing Up

Now, the function starts returning computed values:
	1.	findNthFibonacciNum(2) = 1 + 0 = 1
	2.	findNthFibonacciNum(3) = 1 + 1 = 2
	3.	findNthFibonacciNum(4) = 2 + 1 = 3
	4.	findNthFibonacciNum(5) = 3 + 2 = 5

  1.	Recursive calls go deep until the base case is met.
	2.	Base case results are returned to the previous function call.
	3.	Each function call waits for results from its two recursive calls before computing the sum.

Fibonacci Call and Summation 

The function backtracks, summing up results as it returns.
At the end, findNthFibonacciNum(5) = 5 is returned.
findNthFibonacciNum(1) = 1
findNthFibonacciNum(0) = 0
findNthFibonacciNum(2) = 1 + 0 = 1
findNthFibonacciNum(1) = 1
findNthFibonacciNum(3) = 1 + 1 = 2
findNthFibonacciNum(2) = 1 + 0 = 1
findNthFibonacciNum(4) = 2 + 1 = 3
findNthFibonacciNum(3) = 1 + 1 = 2
findNthFibonacciNum(5) = 3 + 2 = 5
*/

/* 
Optimal Approach

Dynamic Programming Memoization Top-Down Approach

To optimize this, we can observe through above solution that there are many overlapping subproblem.
To avoid recomputing them we can memoize their result or we can store every recursive call result to backtrack if
it was computed in the past. If yes the we won't compute it again we will simply return the stored result otherwise 
we will compute and store it track in future. This process is called Dynamic Programming through memoization technique.
*/

const findNthFibonacciNumDPM = (n, dp) => {
  if (n <= 1) {
    return n;
  }

  if (dp[n] != -1) {
    // check if already computed
    return dp[n];
  }

  dp[n] = findNthFibonacciNumDPM(n - 1, dp) + findNthFibonacciNumDPM(n - 2, dp); // store the result in dp array
  return dp[n];
};

const fibonacci = (n) => {
  let dp = new Array(n + 1).fill(-1);
  return findNthFibonacciNumDPM(n, dp);
};

console.log(fibonacci(200));

/*
Discussing Time and Space Complexity of above approach.
Time Complexity  - O(N)

With memoization we will compute every number only once. So 
So the number of recursive calls will be completed in O(N) (Linear Time Complexity).

Space Complexity - O(N)

We will use auxiliary recursive stack to store n computed result. Similarly,
we will use dp array of n+1 size to store the computed result. 
Overall O(N) + O(N+1) ~ O(N) - (Linear Space)
*/

/*
Better Approach
Tabulation Bottom-Up DP Approach

We can start from the base case and go upto the required result.
We slowly build the solution through iterative approach without using recursion.
Here we will optimize space complexity by removing recursive stack.
*/

const findNthFibonacciNumDPT = (n) => {
  let dp = new Array(n + 1).fill(-1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(findNthFibonacciNumDPT(7));

/*
Time Complexity = O(N) - loop iteration
Space Complexity = O(N) - DP Array Space
*/

/* 
Best Approach
Bottom-Up Tabulation Approach
Simple iterative approach without using DP Array.
Here we will remove linear DP Array space. We will solve in constant space.
*/

const findNthFibonacciNumDPTW = (n) => {
  let prev = 1;
  let prev2 = 0;

  for (let i = 2; i <= n; i++) {
    let curr = prev + prev2;
    prev2 = prev;
    prev = curr;
  }

  return prev;
};

console.log(findNthFibonacciNumDPTW(7));

/*
Time Complexity = O(N) - loop iteration
Space Complexity = O(1)
*/
