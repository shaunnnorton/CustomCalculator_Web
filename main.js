const date_input = document.querySelector("#date_input")
const selector = document.querySelector('select')
const radios = document.querySelectorAll('.time')
const calculate = document.querySelector('#Calc')
const Final = document.querySelector('#Final')
const today = document.querySelector('#today')
let radio_value = ''
for(let i = 0; i < radios.length; i++){
    radios[i].addEventListener('change',checkchecked)
}
function checkchecked(){
    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            radio_value = radios[i].value
        } 
    }
}
let keanu_date = ''
let mathdate = ''

function calculateDate(){
    keanu_date = new Date(selector.value)
    mathdate = new Date(date_input.value)
    date_diff = mathdate-keanu_date
    if(radio_value === 'days'){
        return parseInt(date_diff/86400000)
    }
    if(radio_value === 'weeks'){
        return parseInt(date_diff/(86400000*7))

    }
    if(radio_value === 'seconds'){
        return parseInt(date_diff/1000)
    }
}

function updateText(){
    Final.innerHTML = `It has been ${calculateDate()} ${radio_value} since ${selector.value}`
}
calculate.addEventListener('click',updateText)
today.addEventListener('click',function(){date_input.value= new Date()})