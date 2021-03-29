$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    if ($("#grocery-item1").val() === "" || $("#grocery-item2").val() === "" || $("#grocery-item3").val() === "" || $("#grocery-item4").val() === "" || $("#grocery-item5").val() === "") {
      alert("Please insert item in each box");
    };
    let groceryList = [$("#grocery-item1").val(), $("#grocery-item2").val(), $("#grocery-item3").val(), $("#grocery-item4").val(), $("#grocery-item5").val()];

    console.log(groceryList);
   let newGrocList = [];

    groceryList.forEach(function(element) {
      newGrocList.push(element.toUpperCase())
    })

    console.log(newGrocList.sort());
  })
})

// $(".groceryItem").val();