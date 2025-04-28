var maxProfit = function(prices) {
    const size = prices.length;
    let dp = new Array(size + 1).fill(0).map(() => 
        new Array(2).fill(0).map(() => 
            new Array(3).fill(0)
        )
    );

    for (let ind = size - 1; ind >= 0; ind--) {
        for (let buy = 0; buy <= 1; buy++) {
            for (let cap = 1; cap <= 2; cap++) {
                if (buy) {
                    dp[ind][buy][cap] = Math.max(
                        -prices[ind] + dp[ind + 1][0][cap],
                        dp[ind + 1][1][cap]
                    );
                } else {
                    dp[ind][buy][cap] = Math.max(
                        prices[ind] + dp[ind + 1][1][cap - 1],
                        dp[ind + 1][0][cap]
                    );
                }
            }
        }
    }

    return dp[0][1][2];
};