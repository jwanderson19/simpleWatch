
//@ pegando o elemento h1 para manipular
let timer = document.getElementById('timer')

//variaveis do cronometro 
let sec = 0
let min = 0
let interval = 0

//funcções de funcionamento do cronometro
function start(){
    interval = setInterval(add,10)

}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    min = 0
    sec = 0
    timer.innerHTML = "00:00"
    
}
function add(){
    sec++
    if(sec === 60){
        min++
        sec = 0
        
    }
    timer.innerHTML = min +':'+sec
}
