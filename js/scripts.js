//BUSINESS LOGIC

//business logic to start a new customer order
function Order() {
  this.pizzas = [];
  this.pizzaIdNumber = 0;
}

//business logic to add pizza to order
Order.prototype.addPizzaToOrder = function(pizza) {
  pizza.pizzaId = this.assignPizzaId();
  this.pizzas.push(pizza);
}

//business logic to increade pizza id number by 1 and then return the new value when called
Order.prototype.assignPizzaId = function() {
  this.pizzaIdNumber += 1;
  return this.pizzaIdNumber;
}

//business logic to make a pizza for the order
function Pizza(size, crust, sauce, cheese) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  // this.meatToppings = [];
  // this.veggieToppings = [];
  // this.price;
}

Pizza.prototype.addVeggieToppings = function(veggies) {
  this.veggieToppings = veggies;
  return this.veggieToppings;
}
//should each topping have an id so user can select which toppings to delete?

//business logic to take in veggie toppings and add to VeggieToppings array
// Pizza.prototype.addVeggiesToPizza = function(vegetables) {
//   vegetables.forEach(function(vegetable) {
//     this.veggieToppings.push(vegetable);
//   });
// }



//business logic to add veggies that user has selected into veggieToppings array in Pizza constructor function
// let addVeggies = function(vegetables) {
//   vegetables.forEach(function(veggie) {
//     myPizza.addVeggiesToPizza(veggie);
//     console.log(veggie);
    // get the freaking vegetables into myPizza.veggieToppings array for goodness sake!!!
//   });
// }





//USER INTERFACE LOGIC
let customerOrder = new Order();

// function addVeggiesToPizza(veggieArray) {
//   veggieArray.forEach(function(veggie) {
//     console.log(veggieArray);
//     customerOrder.pizzas[0].veggieToppings.push(veggie);
//   });
// }

$(document).ready(function(){

  $("#order-form").submit(function(event) {
    event.preventDefault();
    // take in user selection to create basic pizza
    let pizzaSize = $("#size").val();
    let pizzaCrust = $("#crust").val();
    let pizzaSauce = $("#sauce").val();
    let pizzaCheese = $("#cheese").val();
    //create new Pizza object with customer selected values and add to order
    let myPizza = new Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaCheese);
    customerOrder.addPizzaToOrder(myPizza);

    $("button#addVeggies").click(function() {
      let veggieArray = [];
      $("input:checkbox[name=veggies]:checked").each(function(i) {
        veggieArray.push($(this).val());
      });
      let added = myPizza.addVeggieToppings(veggieArray);
      console.log(added);
    });

    $("button#addProtein").click(function() {
      let proteinArray = [];
      $("input:checkbox[name=protein]:checked").each(function(i) {
        proteinArray.push($(this).val());
        console.log(proteinArray);
      });
    });

  });
});
