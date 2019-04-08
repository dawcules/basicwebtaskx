'use strict';

const mansikka = document.getElementById('berry');
console.log(mansikka);
console.log(mansikka.innerText);
mansikka.style.backgroundColor = "red";

const appelsiini  = document.querySelector('[data-foodtype="squishy"]');
console.log(appelsiini);
console.log(appelsiini.innerText);
appelsiini.style.backgroundColor = "orange";

const listat = document.getElementsByTagName('li');
console.log(listat);

for (let item of listat) {
 if (item.innerText === 'Pear') {
   item.style.backgroundColor = "green";
 }
 item.style.width = "100px";
 item.style.listStyle = "none";
}

const querylistat = document.querySelectorAll('li');
console.log(querylistat);

querylistat.forEach(
    function(item,index,list) {
      console.log(item.innerText);
      item.style.border ="2px solid black"
    });