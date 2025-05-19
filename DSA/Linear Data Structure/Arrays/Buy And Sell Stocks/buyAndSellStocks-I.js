
/*
Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

let prices = [7, 1, 5, 3, 6, 4];
 let profit = 0;
const buyAndSellStockBruteApproach = (prices) => {
  for (let i = 0; i<prices.length; i++){
    for(let j= i+1; j<prices.length; j++){
      profit = Math.max(profit, prices[j] - prices[i]);
    }
  }
  return profit;
}

console.log(buyAndSellStockBruteApproach(prices));
/* 
Time and Space Complexity 
*/

const buyAndSellStockOptimalApproach = (prices) => {
  let mini = prices [0], profit = 0;
  for ( let ind = 1; ind < prices.length; ind ++){
    cost = prices[ind] - mini;
    profit = Math.max(cost, profit);
    mini = Math.min(prices[ind], mini);
  }
  return profit;
}

console.log(buyAndSellStockOptimalApproach(prices));
/* 
Time and Space Complexity 
*/