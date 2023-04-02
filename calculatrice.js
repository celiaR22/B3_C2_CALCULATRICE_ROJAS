window.addEventListener("DOMContentLoaded", (event) => {

    const buttonsCalcul = document.querySelectorAll('.buttonCalcul')
    const screen = document.querySelector('#screen');
    const equalOperator = document.querySelector('#equalOperator')
    const arrayCalcul = [];

    buttonsCalcul.forEach(element => {
        element.addEventListener('click', event => {
            const arrayValue = getCalcul(arrayCalcul, element.value);
            screen.value = arrayValue
        })
    });

    equalOperator.addEventListener('click',event =>{
        const value = screen.value;
        screen.value ='';
        screen.value = getResultOperation(value);
    });

    function getCalcul(array, value){
        if(value && value != null){
            array.push(value)
        }else{
            return;
        }
       return array.join('');
    };

    function getResultOperation(value){
        return eval(value)
    }

  });