window.addEventListener("DOMContentLoaded", (event) => {
    const buttonsCalcul = document.querySelectorAll('.buttonCalcul')
    const screen = document.querySelector('#screen');
    const equalOperator = document.querySelector('#equalOperator')
    let arrayCalcul = [];
    let lastButtonClicked = null
    let arrayOperator = ['/','*','-','+']

    buttonsCalcul.forEach(element => {
        element.addEventListener('click', event => {
            if(element.value == 'clear'){
                screen.value = null;
                arrayCalcul =[];
                lastButtonClicked = null
            }else{
                if(arrayOperator.includes(element.value) && arrayOperator.includes(lastButtonClicked)){
                    return;
                }
                lastButtonClicked = element.value
                const arrayValue = getCalcul(arrayCalcul, element.value);
                screen.value = arrayValue;
            }
            
        })
    });

    equalOperator.addEventListener('click',event =>{
        screen.value = getResultOperation(screen.value);
        arrayCalcul =[];
    });
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

module.exports ={
    getResultOperation,
    getCalcul
  }
