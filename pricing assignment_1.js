// products name
let product = "chipotle Burrito bowl";

// products price and also other variables
let unitcost = 4.75;
let listprice = 9.00;
let discountrate = 0.08;
let taxrate = 0.07;
let monthlyfixedcosts = 1600;

//  the calculations section 
let discountedprice = listprice * (1- discountrate);
let finalpricewithtax = discountedprice * (1 + taxrate)
let profitperunit = finalpricewithtax - unitcost;
let breakevenunits = Math.ceil(monthlyfixedcosts / profitperunit);
let isprofitableperunit = profitperunit > 0;

// how it will look in the console
console.log("product:", product);
console.log("price after discount (before tax): $" + discountedprice.toFixed(2));
console.log("final price with tax: $" + finalpricewithtax.toFixed(2));
console.log("profit per bowl: $" + profitperunit.toFixed(2));
console.log("bowls needed to break even:", breakevenunits);
console.log("is this profitable per bowl?", isprofitableperunit);