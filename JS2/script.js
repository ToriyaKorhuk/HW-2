var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('list');
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var now = new Date();
function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        })
    }
};

function loadTodo(){
    if(localStorage.getItem('todoApplication')){
        ulSpisok.innerHTML = localStorage.getItem('todoApplication');
        deleteTodo();
    }
};



/*addEventListener- получение типа события и вызов функции*/ 

inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = 'Delete';

        var newTodo = this.value; /*получение value из input*/
        this.value = ''; /*Очистка поля ввода*/
    
        if(newTodo=== ''){
            alert('Вы не ввели данные задачи, попробуйте еще раз!');
        return false;
        }

        ulSpisok.appendChild(newLi).append(newSpan, newTodo,now );

        deleteTodo();
    }
});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
})
// зачеркнутый текст*/

document.getElementById("list").addEventListener("click",
function() {
  document.getElementById("list").style.textDecoration = " line-through";

}
);

deleteTodo();

loadTodo();
