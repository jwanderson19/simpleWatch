
//@ pegando o elemento h1 para manipular
let timer = document.getElementById('timer')

//variaveis do cronometro 
let sec = 0
let min = 0
let interval = 0

//funcções de funcionamento do cronometro
function start(){
    interval = setInterval(add,10)

    if(document.getElementById('btn_start').onclick){
        document.getElementById('btn_start').disabled=true
    }

}

function pause(){
    clearInterval(interval)
    document.getElementById('btn_start').disabled=false
}

function stop(){
    document.getElementById('btn_start').disabled=false
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
