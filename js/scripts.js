//BUSINESS LOGIC

//business logic to start a new customer order
function Order() {
  this.pizzas = [];
  this.pizzaIdNumber = 0;
}

//business logic to make a pizza for the order
function Pizza(size, crust, sauce, cheese) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meatToppings = [];
  this.veggieToppings = [];
  this.price;
}
//should each topping have an id so user can select which toppings to delete?

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

//business logic to add veggies that user has selected into veggieToppings array in Pizza constructor function
Pizza.prototype.addVeggies = function(veggies) {
  veggies.forEach(function(veggie) {
    this.veggieToppings.push(veggie);
  });
}





//USER INTERFACE LOGIC
$(document).ready(function(){
  let customerOrder = new Order();
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

    // take in user selection for toppings
    $("input:checkbox[name=veggies]:checked").each(function() {
      let veggieArray = [];
      let userSelectedVeggies = $(this).val();
      veggieArray.push(userSelectedVeggies);
      myPizza.addVeggies(veggieArray);
      console.log(veggieArray);
    });
    $("input:checkbox[name=protein]:checked").each(function() {
      let selectedProtein = $(this).val();
      console.log(selectedProtein);
      // selectedProtein.addProtein();
    });
  });
});
