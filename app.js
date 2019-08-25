$(document).ready(function() {
  var todoArray = [];
  $('#submitBtn').on('click', () => {
    var todoText = $('#todoText').val();
    todoArray.push(todoText);
    console.log(todoArray);
    displayTodos();
  });

  $(document).on('click', '#editBtn', function() {
    var newText = $('#todoText').val();
    var id = $(this).attr('data');
    todoArray[id] = newText;
    displayTodos();
  });

  $(document).on('click', '#deleteBtn', function() {
    var id = $(this).attr('data');
    console.log(todoArray[id]);

    todoArray.splice(id, 1);
    console.log(todoArray);
    displayTodos();
  });

  function displayTodos() {
    $('#cardContainer').empty();
    todoArray.forEach((element, index) => {
      console.log(index);
      $('#cardContainer').prepend(
        `<div class="card mt-3">
          <div class="card-body">
            <p class="card-text">
              ${element}
            </p>
          <div class="text-right">
            <button id="editBtn" data="${index}" class="btn btn-outline-primary">Edit</button>
            <button id="deleteBtn" data="${index}" class="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>`
      );
    });
  }
});
