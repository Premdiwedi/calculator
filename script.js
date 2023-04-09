let expression = '0';
function num(number){
    if(expression === '0') {
        expression = number;
        console.log(expression);
    }
    else {
        expression += number;
        console.log(expression);
    }
    document.getElementById('ans').innerText = expression
}
function reset() {
    expression = '0';
    console.log(expression);
    document.getElementById('ans').innerText = expression
}
function ans() {
    expression = eval(expression)
    document.getElementById('ans').innerText = expression
}