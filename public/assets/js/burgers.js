$(document).ready(function () {

  $(".eatBurger").on("click", function (event) {

    event.preventDefault();

    let updatedBurger = {
      devoured: true
    };

    const id = event.target.id
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: updatedBurger
    }).then(
      function () {
        console.log("Ate Burger");
        location.reload("/");
      }
    );
  });

  $(".addBurger").on("click", function (event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger_name").val().trim()
    };

    console.log(`[POSTING to server]`, newBurger)

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload("/");
      }
    );
  });
});