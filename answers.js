//Questions
//
//1.
//Show me how to calculate the average price of all items. Please console.log the average.
//The average price is $23.63
//I'll accept either $23.63 or $23.62
//

//need to get an array of all prices
var prices = items.map(function(item) {
  return item.price;
});
//sum of prices array
var sumPrices = prices.reduce(function(firstPrice, nextPrice) {
  return  firstPrice + nextPrice;
});
//need to get count of all of the items that have price
prices.length;
//divide sum of prices array by count of prices



 





