// Step 2: Creating Array of Objects including 5 Products

const products = [
    { name: "Eyeliner", category: "electronics", price: 55, inventory: 100 },
    { name: "Mascera", category: "apparel", price: 80, inventory: 150 },
    { name: "Lipstick", category: "proceries", price: 100, inventory: 35 },
    { name: "Shaving Cream", category: "hourhold", price: 40, inventory: 60 },
    { name: "Beard Oil", category: "Cosmetics", price: 33, inventory: 20 },
];

// Step 3: 
let discount = 0;
// let product = ["Eyeliner","Mascera","Lipstick","Shaving Cream","Beard Oil"];
for (let product of products)
    console.log(`${product.name} dynamic discount based on category`)

switch (product.category) {
  case "electronics":
    discount = 0.2
        break;
    case "apparel":
        discount = 0.15
    case "groceries":
       discount = 0.1
    case "household":
     discount = 0.1
    default:
        no discount
        break;
}
// Step 4: Creating customer type variable and using if...else if chain to apply additional discount
let customerType = "student"

if (customerType == "student") {
    discount = discount + 0.05;
} else if (customerType == "senior") {
   discount = discount + 0.07;
    
} else (customerType == "neither")
    discount = 0

// Step 5: for or while loops to simulate a checkout process for 3 customers

for (let customers = 0; customers <=3; customers++) {
   console.log(`checkout process for 3 ${customers}.`);
};

// Step 6: for..in to log each key/value pair for a single product after discounts applied

for (const product in products) {
    if (!Object.hasOwn(object, product)) continue;
    
    const element = object[product];
    console.log("single product after discount has applied");
};

// Step 7: logging all product info after inventory is updated

const products = [
    { name: "Eyeliner", category: "electronics", price: 55, inventory: 100 },
    { name: "Mascera", category: "apparel", price: 80, inventory: 150 },
    { name: "Lipstick", category: "proceries", price: 100, inventory: 35 },
    { name: "Shaving Cream", category: "hourhold", price: 40, inventory: 60 },
    { name: "Beard Oil", category: "Cosmetics", price: 33, inventory: 20 },
];

const result = object.entries(products);
console.log(result);


    

        
    

    

  

    

