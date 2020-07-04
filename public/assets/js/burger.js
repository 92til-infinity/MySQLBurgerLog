// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(".create-form").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newburger = {
    name: $("#botd").val().trim(),
  };

  // Send the POST request.
  $.ajax("/api/burger", {
    type: "POST",
    data: newburger
  }).then(
    function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

$(".delete-burger").on("click", function (event) {
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/burger/" + id, {
    type: "DELETE"
  }).then(
    function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
});
