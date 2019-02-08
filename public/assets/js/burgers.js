$(function() {
  $(".change-devour").on("click", function(event) {
    console.log(this);
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      Devoured: newDevour
    };

  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevourState
  }).then(
    function() {
      console.log("the burger is now", newDevour);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});   
});

