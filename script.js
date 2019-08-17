//select Elements

const clear = document.querySelector('div.clear')
const date = document.getElementById('date')
const list = document.getElementById('list')
const input = document.getElementById('input')


//classes
const CHECK_ = 'fa-check-circle'
const UNCHECK_ = 'fa-circle-thin'
const LINE_THROUGH_ = 'lineThrough'
// global varibles
var LIST = []
var id = 0

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
@BRIEF adiciona uma tarefa, com a estruturação HTML 
@param {element} nome do elemento que vai ser adiciona 
@param {id} identificação do elemento
@param {done} status do elemento, feito ou não feito
@param {trash}  status do elemento apagado ou nao apagado
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

    //verificação
    if(toDo.length === 0 || !toDo.trim()) // !trim() retorna true se a string tem espaços & retorta false se ela não tem.
      alert('insert toDo')
    else{
      add_toDo(toDo, id)

      LIST.push({
        name: toDo,
        identificação: id,
        done: false,
        trash: false,
      })
      console.log(LIST);
      
      id++

    }

    input.value = ''
  
    
  }
    
})


/*
@BRIEF Valida a tarefa como feita ou não feita
@param {elem} Elemento que recebe a validação
*/
function completeToDo(elem){
  elem.classList.toggle(CHECK_)
  elem.classList.toggle(UNCHECK_)
  elem.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH_)

  LIST[elem.identificação].done = LIST[elem.identificação].done ? false : true

}

/*
@BRIEF Remove a tarefa, setando trash com true
@param {elem} elemento que vai ser removido
*/
function remove(elem){
  elem.parentNode.parentNode.removeChild(elem.parentNode) // percorre a árvore de elementos html para remover o li a qual eu cliquei

  LIST[elem.identificação].trash = true
}


/*
@BRIEF localiza o alvo dinamicamente e de acordo com a tarefa localizada, remove ou valida a tarefa
*/
list.addEventListener('click', function(event){
  const element = event.target  // retorna o alvo clicado
  const elementJob = element.attributes.job.value // armazena o valor do atributo clicado

  if(elementJob === 'complete'){
    completeToDo(element)
  }
  else if(elementJob === 'delete')
    remove(element)
})