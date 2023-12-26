const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, curr_val) {
//     console.log(`acc: ${acc} and curr_val: ${curr_val}`);
//     return acc + curr_val;
// }, 0);

// Writing the above one using arrow function
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shopping_cart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "android development course",
        price: 9999
    },
    {
        itemName: "data science course",
        price: 12999
    }
];

// Now to add the prices of all items in the above shopping kart?

const priceToPay = shopping_cart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);