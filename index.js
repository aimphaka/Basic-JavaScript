console.log('Hello World');

//------------Variable------------
//let x =2;
//let y = 10;
//let z = x + y;
//console.log(z);

//---------Data Type------------
let username;

let MyData = true;

//let x = String(12);
//let y = Number('16');
//console.log(x+y);

//------------operator------------
// a1 = 3 + 2 ; //5
// a2 = 3 - 2 ; //1
// a3 = 3 * 2 ; //6
// a4 = 3 / 2 ; //1.5
// a5 = 3 ** 2 ; //9
// a6 = 3 % 2 ; //1

// x = 5;
// x += 5;  //10

// let x = 7;
// let y = 5;

// let a1 = x > y;
// let a2 = x >= y;

// let a3 = x < y;
// let a4 = x <= y;

// let a5 = x == y;
// let a6 = x !== y;

// let p = true;
// let q = false;

// let a1 = p && q; //false
// let a2 = p|| q; //ture
// let a3 = !p; //false


//------------condition------------
let score = 80;
if(score >= 80){
   console.log('Grade A');
}else if(score >= 70){
   console.log('Grade B');
}else{
   console.log('Grade F');
}

//------------Loop
for(let i =1;i<=12;i++){
   if(i % 2 == 0){
      continue;
   }
   let answer = i ** 2;
   console.log(answer);
}

//------------Functions------------
// let length = 2;
// let width = 2;
// let height = 3;
// let baseArea = length * width;
// let pyramidVolume = 1/3 * baseArea *height;
// console.log(pyramidVolume);

// function getPyramidArea(){
//    let length = 2;
//    let width = 2;
//    let height = 3;
//    let baseArea = length * width;
//    let pyramidVolume = 1/3 * baseArea *height;
//    console.log(pyramidVolume);
// }
// getPyramidArea();
// getPyramidArea();
// getPyramidArea();

function getPyramidArea(length,width,height){
   let baseArea = length * width;
   let pyramidVolume = 1/3 * baseArea *height;
   return pyramidVolume;
}
let area1 = getPyramidArea(2,2,3);
let area2 = getPyramidArea(4,7,3);
console.log('Area 1 = '+area1 + ', Area 2 = '+area2);


//----------HTML Controls------------
let content2 = document.getElementById('content-2');
let textHtml = '<b>เกิดมาไม่เคยเจอใครเหมือนเธอ</b>';
textHtml += '<i>หลับฝันละเมอ</i>';
content2.innerHTML = textHtml;

//--------------HTML  Events------------
let discountButton = document.getElementById('discount-button');
let message = document.getElementById('message');

function showMessage(){
   message.innerHTML = 'หมดเวลาสนุกแล้วซิ';
}

discountButton.addEventListener('click', showMessage);


//------------Exercise------------
let numberInput = document.getElementById('number-input');
let runbutton = document.getElementById('run-button');
let output = document.getElementById('output');

function printMultiply(){
   let number = Number(numberInput.value);
   let outputHtml = '';
   
   if(number == 0){
      output.innerHTML = "Error";
      return;
   }

   for(let i =1; i<= 12 ; i++){
      outputHtml += '<p>';
      outputHtml += number + ' x ' +i + ' = ' + (number*i);
      outputHtml += '</p>';
   }
   output.innerHTML = outputHtml;
}

runbutton.addEventListener('click', printMultiply);