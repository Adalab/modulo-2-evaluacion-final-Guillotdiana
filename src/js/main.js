'use strict';

const btnSearch = document.querySelector('.js-btn-search');
const input = document.querySelector('.js-input');
const ulList = document.querySelector('.js-ul');

let drinks = [];

const render = (result) => {
  for (const eachdrink of result.drinks) {
    ulList.innerHTML += `<li>
    <img src="${eachdrink.strDrinkThumb}" alt="">
    <h3>${eachdrink.strDrink}</h3>
    </li>`   
  }
}


function handleSearch (ev){
    ev.preventDefault();
    const search = input.value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then(response => response.json())
    .then((result) => {
        console.log(result.drinks);
        render(result);
       
    })
   
}



btnSearch.addEventListener('click', handleSearch);

