/*
Smart Grocery Checkout

Scenario:
A supermarket offers discounts based on total purchase amount.

Challenge:
1. If total is below $50, no discount.
2. If total is $50 - $100, apply 5% discount.
3. If total is above $100, apply 10% discount.
4. If a customer buys more than 3 of the same item, apply an extra $2 discount per extra item.

*/

let cart = [
    {name: 'Milk', price : 2, quantity: 2}, // total price is 4 
    {name: 'Eggs', price : 5, quantity: 1}, // total price is 5
    {name: 'Bread', price: 4, quantity: 4}  // total price is 16 - 2 // 14 
]

 function calculateTotal(cart){
    let total = 0 
    for (let i = 0; i < cart.length; i++)
        // Loops through each item in the cart 
        {
        let item = cart[i]
        let itemTotal = item.price * item.quantity
        let discount = 0 
        if (itemTotal < 50){
            discount = 0 
        }
        else if (itemTotal >= 50 && itemTotal <= 100){
            discount = 0.05 * itemTotal
        }
        else {
            discount = 0.10 * itemTotal 
        }
        if (item.quantity > 3)
            // Gives a discount if the quantity is greater than 3 
        {
            let extraItems = item.quantity - 3 
            discount += 2 * extraItems
            }
            total = total + (itemTotal - discount)

        }
        return total // Return the total amount after applying discounts 

    }

console.log(calculateTotal(cart)) // prints - 23 

// End of smart grocery challenge
 