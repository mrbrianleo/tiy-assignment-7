// Questions
//
// 1.
// Show me how to calculate the average price of all items. Please console.log the average.
// The average price is $23.63
// I'll accept either $23.63 or $23.62
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
var avgPrice = sumPrices / prices.length;
  console.log("The average price is" + " " + "$" + avgPrice);

//2.
// Show me how to get an array of items that cost between $14.00 and $18.00 USD
// "Items that cost between $14.00 USD and $18.00 USD:"
// [
// {
//   title: "1970s Coors Banquet Glass Beer Pitcher",
//   ...
// },
// {
//   title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//   ...
// },
// {
//   title: "Hand Painted Colorful Feather Glass",
//   ...
// }
// ]

//use filter to get the cost of items between
var costBetween = items.filter(function(item){
  return item.price >= 14 && item.price <= 18;
});





