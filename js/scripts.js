//BUSINESS LOGIC

//business logic to start a new customer order
function Order() {
  this.pizzas = [];
  this.pizzaIdNumber = 0;
  this.totalPrice = 0;
}

//business logic to add pizza to order
Order.prototype.addPizzaToOrder = function(pizza) {
  pizza.pizzaId = this.assignPizzaId();
  this.pizzas.push(pizza);
  console.log(this.pizzas); //DELETE CONSOLE.LOG
}

//business logic to assign id to each pizza
Order.prototype.assignPizzaId = function() {
  this.pizzaIdNumber += 1;
  return this.pizzaIdNumber;
}

Order.prototype.calculateTotalCost = function() {
  for(let i = 0; i < this.pizzas.length; i++) {
    this.totalPrice += this.pizzas[i].price;
  }
}

//business logic to make a pizza for the order
function Pizza(size, crust, sauce, cheese) { 
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.proteinToppings;
  this.veggieToppings;
  this.price += this.totalPrice + this.price;
}


Pizza.prototype.resetValues = function(){ //NEW METHOD
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.proteinToppings;
  this.veggieToppings;
  this.price = 15;
}

// instead of assigning an id to each topping, maybe it would be better to search through a loop to match their value in order to delete them...
// Pizza.prototype.assignToppingId = function() {
//   this.toppingIdNumber += 1;
//   return this.toppingIdNumber;
// }

Pizza.prototype.addVeggieToppings = function(veggies) {
  this.veggieToppings = veggies;
}

Pizza.prototype.addProteinToppings = function(protein) {
  this.proteinToppings = protein;
}

Pizza.prototype.calculatePizzaCost = function() { //CHANGE METHOD NAME
  let costForAddedVeggies = 0;
  let costForAddedProtein = 0;

  if (this.size === "large") {
    this.price += 3;
  }
  
  if (this.cheese === "vegan") {
    this.price += 3;
  }
  
  if (this.crust === "stuffed") {
    this.price += 3;
  }

  for(let i = 0; i < this.veggieToppings.length; i++) {
    costForAddedVeggies += 1;
  }
  for(let i = 0; i < this.proteinToppings.length; i++) {
    costForAddedProtein += 3;
  }
  this.price += costForAddedProtein + costForAddedVeggies;
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
    $("#order-form").hide();
    $("#veggie-options").show();

    //adding toppings
    $("button#addVeggies").click(function() {
      let veggieArray = [];
      $("input:checkbox[name=veggies]:checked").each(function(i) {
        veggieArray.push($(this).val());
      });
      myPizza.addVeggieToppings(veggieArray);
      $("#veggie-options").hide();
      $("#protein-options").show();
    });

    $("#go-back-to-base").click(function() {
      $("#veggie-options").hide();
      $("#order-form").show();
    });

    $("button#addProtein").click(function() {
      let proteinArray = [];
      $("input:checkbox[name=protein]:checked").each(function(i) {
        proteinArray.push($(this).val());
      });
      myPizza.addProteinToppings(proteinArray);
      //CALCULATE PIZZA COST HERE AND SHOW IN CALCULATE ORDER DIV
      myPizza.calculatePizzaCost(); //CHANGED METHOD NAME
      $("#current-total").text(myPizza.price);
      $("#protein-options").hide();
      $("#calculate-order-div").show();
      console.log(myPizza.price); // DELETE CONSOLE LOG
    });

    $("#go-back-to-veggies").click(function() {
      $("#protein-options").hide();
      $("#veggie-options").show();
    });

    //completing the order
    $("#calculate-order-total").click(function() {
      customerOrder.calculateTotalCost();
      //CALCULATE TOTAL COST HERE
      $("#price").text(customerOrder.totalPrice);
      $("#calculate-order-div").hide();
      $("#order-summary").show();
    });

    $("#order-another").click(function() {
      $("#order-form").show();
      $("#calculate-order-div").hide();
      myPizza.resetValues();
    });

    $("#go-back-to-protein").click(function() {
      $("#calculate-order-div").hide();
      $("#protein-options").show();
    });

  });
});
