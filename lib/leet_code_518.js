// Work through this problem on https://leetcode.com/problems/coin-change-2/ and
// use the specs given there. Feel free to use this file for scratch work.

const change = function(amount, coins, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) {
        console.log("has reached zero");
        return 0;
    }

    let numCoins = [];
    coins.forEach((coin) => {
        if (coin <= amount) {
        numCoins.push(change(amount - coin, coins, memo) + 1);
        }
    })

    console.log("Coins:", numCoins);

    memo[amount] = numCoins.length;
    return memo[amount];
};


function sum(coins) {
    return coins.reduce((accum, coin) => {
        accum += coin
        return accum
    })
}


console.log(change(5,[1,2,5]));
