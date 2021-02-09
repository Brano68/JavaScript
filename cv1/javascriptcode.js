const buttonMinus = document.getElementById('minus');
const buttonPlus = document.getElementById('plus');
let result = Number(document.getElementById('result').textContent);


buttonMinus.addEventListener('click', function(){
    console.log('minus');
    result--;
    console.log(result);
    document.getElementById('result').textContent = result.toString();
});
   


buttonPlus.addEventListener('click', function(){
    console.log('plus');
    result++;
    console.log(result);
    document.getElementById('result').textContent = result.toString();
});

