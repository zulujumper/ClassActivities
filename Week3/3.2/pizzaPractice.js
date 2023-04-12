let pizzaToppings = ["pepperoni", "sausage", "bacon", "extra cheese"];

function greetCustomer() {
  let message = `Welcome to James' Pizza Palace! The toppings we have available are: `;
  for (let topping of pizzaToppings) {
    message += `${topping}, `;
      };
  console.log(message);
};

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} crust pizza with ${toppings}. Coming up!`);
  return size + ", " + crust + ", " + toppings;
};

function preparePizza([size, crust, toppings]){
 console.log(`...your pizza is cooking...`);
 let pizza = {
   size: "large",
   crust: "thin",
   toppings: "pepperoni, sausage, bacon"
 };
 return pizza;
 };

function servePizza(pizza) {
   console.log(`Order up! Here's your ${pizza['size']} ${pizza['crust']} crust pizza with ${pizza['toppings']}. Enjoy!`)
   return pizza
 };

greetCustomer();
servePizza(preparePizza(getPizzaOrder("large", "thin", "pepperoni", "sausage", "bacon")));
