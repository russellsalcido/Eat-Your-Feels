// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-down").on("click", function(event) {
    var id = $(this).data("id");
    var newDown = $(this).data("newdown");

    var newDownState = {
      downs: newDown
    };

    // Send the PUT request.
    $.ajax("/api/feels/" + id, {
      type: "PUT",
      data: newDownState
    }).then(
      function() {
        console.log("changed down to", newDown);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newFeel = {
      name: $("#fe").val().trim(),
      downs: $("[name=downs]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/feels", {
      type: "POST",
      data: newFeel
    }).then(
      function() {
        console.log("created new feel");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
