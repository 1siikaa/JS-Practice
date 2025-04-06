// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

// Better Approach is DP with Memoization

const maxProfit = function (prices) {
  const size = prices.length;
  const dp = new Array(size).fill(null).map(() => new Array(2).fill(-1));
  return recursiveDPMemoization(0, 0, prices, size, dp);
};

const recursiveDPMemoization = function (index, buy, prices, size, dp) {
  if (index === size) return 0;

  if (dp[index][buy] !== -1) return dp[index][buy];

  let profit = 0;

  if (buy === 0) {
    // Can buy
    profit = Math.max(
      -prices[index] + recursiveDPMemoization(index + 1, 1, prices, size, dp), // Buy stock
      0 + recursiveDPMemoization(index + 1, 0, prices, size, dp) // Skip
    );
  } else {
    // Can sell
    profit = Math.max(
      prices[index] + recursiveDPMemoization(index + 1, 0, prices, size, dp), // Sell stock
      0 + recursiveDPMemoization(index + 1, 1, prices, size, dp) // Skip
    );
  }

  dp[index][buy] = profit;
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

/* 
Time and Space Complexity for this approach

*/

// Optimal Better Approach is DP with Memoization

const recursiveDPTabulation = (prices) => {
  const size = prices.length;
  let dp = new Array(size + 1).fill(null).map(() => new Array(2).fill(0));
  dp[size][0] = dp[size][1] = 0;
  let profit;
  for (let ind = size - 1; ind >= 0; ind--) {
    for (let buy = 0; buy <= 1; buy++) {
      profit = 0;
      if (buy) {
        profit = Math.max(-prices[ind] + dp[ind + 1][0], 0 + dp[ind + 1][1]);
      } else {
        profit = Math.max(prices[ind] + dp[ind + 1][1], 0 + dp[ind + 1][0]);
      }
      dp[ind][buy] = profit;
    }
  }
  return profit;
};

console.log(recursiveDPTabulation([7, 1, 5, 3, 6, 4]));

/* 
Time and Space Complexity for this approach

*/

/* 
  Most optimal approach is dp tabulation approach observation to reduce access space complexity
*/

const optimizedDPSolution = (prices) => {
  let prev = new Array(2).fill(0);
  let curr = [];
  let profit = 0;
  const size = prices.length;

  for (let ind = size - 1; ind >= 0; ind--) {
    for (let buy = 0; buy < 2; buy++) {
      if (buy) {
        profit = Math.max(-prices[ind] + prev[0], 0 + prev[1]);
      } else {
        profit = Math.max(prices[ind] + prev[1], 0 + prev[0]);
      }
      curr[buy] = profit;
    }
    prev = curr;
  }
  return prev[1];
};

console.log(optimizedDPSolution([7, 1, 5, 3, 6, 4]));

/* 
Time and Space Complexity for this approach

*/

const optimizedDPSolutionWithoutArray = (prices) => {
  let prevBuy = 0,
    prevNotBuy = 0,
    currBuy,
    currNotBuy;
  const size = prices.length;

  for (let ind = size - 1; ind >= 0; ind--) {
    currBuy = Math.max(-prices[ind] + prevNotBuy, 0 + prevBuy);
    currNotBuy = Math.max(prices[ind] + prevBuy, 0 + prevNotBuy);
    prevBuy = currBuy;
    prevNotBuy = currNotBuy;
  }
  return prevBuy;
};

console.log(optimizedDPSolutionWithoutArray([7, 1, 5, 3, 6, 4]));

/* 
Time and Space Complexity for this approach

*/
