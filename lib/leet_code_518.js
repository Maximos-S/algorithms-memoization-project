// Work through this problem on https://leetcode.com/problems/coin-change-2/ and
// use the specs given there. Feel free to use this file for scratch work.

const change = function (amount, coins, memo = {}) {
    let count = 0;
    // if (n in memo) return memo[n]

    if (amount < 0) {
        return count;
    }

    for (let i = 0; i < coins.length; i++) {
        if (coins[i] < amount) {
            amount -= coins[i]
            change(amount,coins, memo)

        } else if (amount === 0){
            count++;
            return count;
        }
        
        console.log("amount: ", amount)
        // // console.log("change call", change(amount, coins, memo))
        // count += change(amount, coins, memo)
    }

    return count;

};

function sum(coins) {
    return coins.reduce((accum, coin) => {
        accum += coin
        return accum
    })
}


console.log(change(5,[1,2,5]));