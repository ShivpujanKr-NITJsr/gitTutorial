// **********************//Examine the document object

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[0]);
// document.all[10].textContent='Hello'
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//*****************************************// GetElementById

// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='hello';
// headerTitle.innerText='GoodBye';
// console.log(headerTitle);
// headerTitle.innerHTML='<h3> Hello</h3>';
// headerTitle.style.borderBottom='solid 3px #000'
// header.style.borderBottom='solid 3px #000'


//*******************************// GetElementsByClassName */

// var items =document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);

// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';

// items[1].style.backgroundColor='yellow';

// //********************************************GetElementsByTagName */


// for(var i=1;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }

//*************************************************QuerySelector */

// var header =document.querySelector('#main-header');
// header.style.borderBottom='solid 5px #ccc';

// var input=document.querySelector('input');

// input.vaue='Hello World';
// var submit=document.querySelector('input[type="submit"]');
// submit.value="send";
// var secondItem=document.querySelector('li:nth-child(odd)');
// secondItem.style.color="green";

// var third=document.getElementsByClassName("list-group-item");
// third[2].style.backgroundColor='green';
// var al=document.getElementById("items");

// al.style.fontWeight='bold';

// var id=document.getElementById('items');
// id.createElement('li');


var item=document.querySelector('.list-group-item:nth-child(2)');
item.style.backgroundcolor='green';
var item=document.querySelector('.list-group-item:nth-child(3)');

item.style.visibility='hidden';

var it=document.querySelectorAll('.list-group-item:nth-child(2)');
it.style.backgroundcolor='green';

var irt=document.querySelectorAll('.list-group-item:nth-child(odd)');
irt.style.backgroundcolor='green';