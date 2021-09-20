const prompt = require('prompt');
prompt.start();

let stock = {
    macbook: 2,
    iphone: 4
};

function processPayment(itemName) {
    stock[itemName] -= 1;
    console.log(`Payment is being processed for item ${itemName}`)
}

function processError(itemName) {
    console.log(`No more ${itemName}s in stock`);
    console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    if (stock[itemName] > 0) {
        callbackPayment(itemName);
    }
    else callbackError(itemName);
}

let input = process.stdin;
input.setEncoding('utf-8');

console.log("Please enter the item you would like to purchase (Macbook, iPhone)");

input.on('data', function (data) {
    if (data === 'exit\n') process.exit();
    else {
        let itemName = String(data.slice(0, -1)).toLowerCase();
        if (Object.keys(stock).includes(itemName)) {
            processOrder(itemName, processPayment, processError);
        } else console.log("Sorry, we don't have that item");
    }
});
