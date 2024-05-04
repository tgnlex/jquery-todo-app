import './style.css';
import $ from 'jquery';


$('#submit')
  .on("click",
    function(){
      var value = $('#new-todo').val();
      let todoItem = `
      <li class="todo-item">
        <p class="todo-text">
          ${value}
        </p>
        <div class="delete"><b>x</b></div>
      </li>
      `
      console.log(value);
      $('#todo-list')
      .append( todoItem ); 
      $(".delete").on("click", function() {
         $(this).parent().remove()
      })  
    }
)


