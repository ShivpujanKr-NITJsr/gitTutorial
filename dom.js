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


// var item=document.querySelector('.list-group-item:nth-child(2)');
// item.style.backgroundcolor='green';
// var item=document.querySelector('.list-group-item:nth-child(3)');

// item.style.visibility='hidden';

// var it=document.querySelectorAll('.list-group-item:nth-child(2)');
// it.style.backgroundcolor='green';

// var irt=document.querySelectorAll('.list-group-item:nth-child(odd)');
// irt.style.backgroundcolor='green';

// ******************************traversing dom//

// var itemList=document.querySelector('#items');
// parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentelement
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childnodes
// console.log(itemList.childNodes);
// var itemList=document.querySelector('#items');
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// //FirstCHild

// console.log(itemList.firstChild);
// // first elementchild
// var itemList=document.querySelector('#items');
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

//lastchild
// var itemList=document.querySelector('#items');
// console.log(itemList.lastChild);
//lastelementchild
// var itemList=document.querySelector('#items');

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

// var itemList=document.querySelector('#items');
//nextsibling
// console.log(itemList.nextSibling);
// nextElementSibling
// var itemList=document.querySelector('#items');
// console.log(itemList.previousSibling);
// //previoussielementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

// var itemList=document.querySelector('#items');

// //createElement

// // create a div

// var newDiv= document.createElement('div');
// // add class
// newDiv.className='hello';
// //add id
// newDiv.id='hello1';
// //add attr
// newDiv.setAttribute('title','Hello Div');

// // create text node
// var newDivText=document.createTextNode('Hello world');
// //add text to div
// newDiv.appendChild(newDivText);

// var container =document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// console.log(newDiv);

// // newDiv.style.fontSize='30px';
// container.insertBefore(newDiv,h1);

var header = document.getElementById('header-title');
header.innerText = 'Hello ' + header.innerText;
var listItem = document.querySelector('#items li');
listItem.innerText = 'Hello ' + listItem.innerText;
