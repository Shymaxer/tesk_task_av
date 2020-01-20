const searchBlock = document.querySelector('.search-block');
let inputs = Array.prototype.slice.call(searchBlock.querySelectorAll('.input'));
let firstInput = inputs.shift();;
firstInput.onfocus = () =>{
    inputs.forEach(element => element.classList.add('input--active'));
}
/* inputs[0].onblur = () =>{
    inputs.forEach(element => element.style.display = "block");
}   */
//inputs.forEach(element => element.style.display = "block");
