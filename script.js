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
*/
function add_toDo(element){
  const item = `
                    <li class='item'>
                    <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                    <p class="text">${element}</p>
                    <i class="fa fa-trash-o de" job="delete" id="0"></i>
                    </li>
                `
  const postion = 'beforeend'

  list.insertAdjacentHTML(postion,item)
}


add_toDo('twitter')