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

//business logic to assign id to each pizza
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
  this.proteinToppings;
  this.veggieToppings;
  this.price = 15;
  // this.price;
}

Pizza.prototype.addVeggieToppings = function(veggies) {
  this.veggieToppings = veggies;
  return this.veggieToppings;
}

Pizza.prototype.addProteinToppings = function(protein) {
  this.proteinToppings = protein;
  return this.proteinToppings;
}

Pizza.prototype.calculateTotalCost = function() {
  let costForAddedVeggies = 0;
  let costForAddedProtein = 0;

  if (this.size === "large" && this.cheese === "vegan") {
    this.price += 6;
  } else if (this.size === "large" || this.cheese === "vegan") {
    this.price += 3;
  }

  for(let i = 0; i < this.veggieToppings.length; i++) {
    costForAddedVeggies += 1;
  }
  for(let i = 0; i < this.proteinToppings.length; i++) {
    costForAddedProtein += 3;
  }
  return this.price += costForAddedProtein + costForAddedVeggies;
}

// Pizza.prototype.resetToppingsValue = function() {
//   this.price = 15;
// }

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
      let addedVeggies = myPizza.addVeggieToppings(veggieArray);
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
      let addedProtein = myPizza.addProteinToppings(proteinArray);
      $("#protein-options").hide();
      $("#calculate-order-div").show();
    });

    $("#go-back-to-veggies").click(function() {
      $("#protein-options").hide();
      $("#veggie-options").show();
    })

    //completing the order
    $("#calculate-order-total").click(function() {
      let priceOfPizza = myPizza.calculateTotalCost();
      $("#price").text(priceOfPizza);
      $("#calculate-order-div").hide();
      $("#order-summary").show();
    });

    $("#go-back-to-protein").click(function() {
      $("#calculate-order-div").hide();
      $("#protein-options").show();
    });

  });
});
