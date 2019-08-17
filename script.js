//select Elements

const clear = document.querySelector('div.clear')
const date = document.getElementById('date')
const list = document.getElementById('list')
const input = document.getElementById('input')


//class

const CHECK_ = 'fa-check-circle'
const UNCHECK_ = 'fa-circle-thin'
const LINE_THROUGH_ = 'lineThrough'

//Data object
const options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' }
//sexta-feira, 16 de agosto de 2019
const today = new Date()
date.innerHTML = today.toLocaleDateString('pt-br', options) // retorna uma string formatada com options


/*
@BRIEF
@param {element}
@param {id}
@param {done}
@param {trash}
*/
function add_toDo(element, id, done, trash){
  if(trash){ // se trash for true, nem adiciona a nova tarefa.
    return;
  }

  const DONE = done ? CHECK_ : UNCHECK_
  const LINE = done ? LINE_THROUGH_: ''


  const item = `
                    <li class='item'>
                    <i class="fa ${DONE} co" job="complete" id=${id}></i> 
                    <p class="text ${LINE}">${element}</p>
                    <i class="fa fa-trash-o de" job="delete" id=${id}></i> 
                    </li>
                `
  const postion = 'beforeend'

  list.insertAdjacentHTML(postion,item)
}

document.addEventListener('keyup', function(event){
  if(event.keyCode === 13){ // enter key
    const toDo = input.value //salvar valor colocado no input

    //varificação
    if(toDo.length === 0 || !toDo.trim()) // !trim() retorna true se a string tem espaços & retorta false se ela não tem.
      alert('insert toDo')
    else
      add_toDo(toDo)

    input.value = ''
  
    
  }
    
})

add_toDo('teste', 1 , true, false)