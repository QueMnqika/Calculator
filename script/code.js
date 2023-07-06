let numInput = document.querySelector('#input');
let allClear = document.querySelector('.ac');
let del = document.querySelector('.del');
let equal = document.querySelector('.equal');
let divide = document.getElementById('#divide')
let multiply = document.getElementById('#multiply')

//input
let input = (value) => {
    numInput.value += value
}

//All Clear
let clear = (value) => {
    numInput.value = "";
}

allClear.addEventListener('click', () => {
    clear();
})


//delete
let delet = (value) => {
    let output = numInput.value
    numInput.value = output.slice(0, -1);
}

del.addEventListener('click', () => {
    delet();
})

//Equal
let equals = (value) => {
    numInput.value = eval(numInput.value);
}

equal.addEventListener('click', () => {
    equals();
})

//divide operator
function divi(value) {
    if (numInput === '//'){
        numInput = '/'
    } else{
        numInput = ''
    }
    
}



