//BUSINESS LOGIC

//business logic to start a new customer order
function Order() {
  this.pizzas = [];
  this.pizzaIdNumber = 0;
}



//business logic to make a pizza for the order
function Pizza(size, crust, sauce, cheese, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = []; //should this be an array, or a nested object?
}








//USER INTERFACE LOGIC
$(document).ready(function(){
  let customerOrder = new Order();
  // $(pizzaform).submit(function(event) {
  //   event.preventDefault();
    let myPizza = new Pizza("small", "thin", "marinara", "mozzarella");
  // });
});
