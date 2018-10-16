let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr3 = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l', 'm', 'n','p','q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr4 = ['A', 'B', 'C', 'D', 'E','F', 'G' ,'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P',  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'z'];
let arr5 = ['!', '@', '#', '$', '%', '^', '&', '?', '*', '(', ')', '+', '-', '/', '=',];





let range = document.querySelector('#param-1');

//ползунок
range.oninput = function(){
   // console.log(this.value);     
    let out = document.querySelector('#password-length').innerHTML = this.value;
};

generatePass(); //запуск при старте

let gen = document.querySelector('#generator').onclick = generatePass; //генерируем пароли

function generatePass() {
    let result = []; //промежуточный массив где хранятся значения массивов (arr1 и др.)
    //включены ли цифры
   if(document.querySelector('#param-2').checked){
      result = result.concat(arr2);
    }
    //вкл ли строчные
   if(document.querySelector('#param-3').checked){
    result = result.concat(arr3);
    }
    //вкл ли прописные
    if(document.querySelector('#param-4').checked){
    result = result.concat(arr4);
    }
    //вкл ли символы
    if(document.querySelector('#param-5').checked){
        result = result.concat(arr5);
    }

     result.sort(compareRandom); //перемешиваем массив

    //функция для перемешивания массива
    function compareRandom(){
         return Math.random() - 0.5;
    }

    document.querySelector('#out').innerHTML = ''; //очистка поля выывода паролей

    for (let k = 0; k < 6; k++){
    let pass = ''; //итоговый массив пароля

    let passLength = parseInt(range.value);

    for(let i = 0; i < passLength; i++){
        pass += result[randomInteger(0, result.length - 2)];
    }

    document.querySelector('#out').innerHTML += '<p class="pass">' + pass + '</p>' + '<button type="button" class="btn btn-dark clipboard" id="generator">В буфер</button>';
    }

    //для выбора слюучайного занчения
    function randomInteger(min, max){
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

     //console.log(result);

     let copyBtn = document.querySelectorAll('.clipboard');
    let labelPass = document.querySelectorAll('.pass');



    for(let i = 0; i < copyBtn.length; i++){
        copyBtn[i].addEventListener('click',  function() {
            window.getSelection().removeAllRanges();
            //выделяем тот код, который копируем в буфер
            var range = document.createRange();  
            range.selectNode(labelPass[i]);  
            window.getSelection().addRange(range);

            //копируем в буфер
            try { 
                document.execCommand('copy'); 
            } catch(err) { 
                console.log('Can`t copy, boss'); 
            }

        
        });
}
    
}







