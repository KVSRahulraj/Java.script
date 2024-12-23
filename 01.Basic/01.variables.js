const accountId = 124521
let accountName = "Pinky"
var accountEmail = "pinkey@raj.com"
accountCity = "Jaipur"

// accountId = 2 // Not allowed because it is a const variable.
accountCity = "Hyderabad"
accountName = "Raj"
accountEmail = "Rahul@raj.com"


// console.log(accountId);
// console.log(accountEmail);
// console.log(accountName);
// console.log(accountCity);

console.table([accountEmail, accountId, accountName, accountCity])