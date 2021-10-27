/**
 * You are given an array prices where prices[i]
 * is the price of a given stock on the ith+1 day.
 *
 * You want to maximize your profit by choosing
 * a single day to buy one stock and choosing a
 * different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from
 * this transaction. If you cannot achieve any
 * profit, return 0.
 */


function maxProfit(prices) {
    var max, min = Infinity;
    var profit, result = 0;

    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            max = 0;
        }

        if (prices[i] > max) max = prices[i];

        profit = max - min;
        if (profit > result) result = profit;
    }

    return result;
}


console.assert( maxProfit([7,6,4,3,1]) == 0 );
console.assert( maxProfit([7,1,5,3,6,4]) == 5 );
console.assert( maxProfit([1,7,1,5,3,6,4]) == 6 );
