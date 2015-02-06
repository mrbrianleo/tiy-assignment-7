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

//3.
// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

if (items.currency_code = "GBP") {
  console.log(items.title + "costs" + items.price);
}






//4.
//Show me how to find which items are made of wood. Please console.log the ones you find.
//SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.


items.forEach(function(item) {
console.log[item.title, item.description];
});

























