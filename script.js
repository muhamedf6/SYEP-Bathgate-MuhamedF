const reviews = [
{
    id: 1,
    name: 'Michelle Stover',
    job: 'Teacher',
    img: 'https://images.squarespace-cdn.com/content/v1/5bec73fa3917eec31d42357d/1594751645712-RPI9ZE85OO1L0OM51TA0/Stover.png?format=750w',
    text: 'Ive had the pleasure of watching Muhamed grow tremendously from 8th to 9th grade. His maturity, confidence, and commitment to learning have really stood out this year. Muhamed has become more focused, engaged in class discussions, and consistently puts in the effort to improve. Its been inspiring to see how much hes developed both academically and personally, and Im excited to see where his continued growth will take him.'
},

{
    id: 2,
    name: 'Cheick T',
    job: 'Student',
    img: '#',
    text: ''
},

{
    id: 3,
    name: 'Peter Jones',
    job: 'Intern',
    img: '#',
    text: 'Lorem ipsum'
},
]

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
     info.textContent = item.text;
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
     info.textContent = item.text;
    }

nextBtn.addEventListener('click', function (){
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function (){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});






console.log("Hello World!");

let myString = "a2b3c";
console.log(myString);

let myNumVar = 123;
console.log(typeof myNumVar);

console.log(10 + " eggs");
console.log(10 + 7 + " eggs");
console.log("eggs" + 10 + 7);


console.log(7>3)&&(5<10);

//Only One condition must be true
console.log(10>3)||(10>12);

//If the statement is logical or not
console.log(!5>3);


function introduction(name, age){
    console.log("Hello, my name is " + name + "and I am " + age + " years old");
}

introduction("Muhamed", 14)

const hour = new Date().getHours();
let greeting = "";

if (hour<12){
    greeting = "Good morning ☀️";
}else if (hour < 18){
    greeting = "Good afternoon";
}else {
    greeting = "Good evening";
}

document.getElementById("greeting").innerText = ("greeting").innerText = greeting;