


//Renderizo los datos
const render = () => {
    //limpio ul 
    ulList.innerHTML = "";
    //renderizo
    
    for (const eachdrink of drinks) {
        const indexFav = favsDrinks.findIndex((item) => item.idDrink === eachdrink.idDrink);

        let classChange = indexFav === -1 ? '' : 'change';

        ulList.innerHTML += `<li class="card js-li ${classChange}" id="${eachdrink.idDrink}">
      <img class="card-img" src="${eachdrink.strDrinkThumb}" alt="">
      <h3>${eachdrink.strDrink}</h3>
      </li>`
    }
    const liDrinks = document.querySelectorAll('.js-li');
    //bucle para poder escuchar evento sobre los lis
    for (const li of liDrinks) {
        li.addEventListener('click', handleFavourite);
    }
}


// Traigo datos de la API

function getDataApi (){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
      .then(response => response.json())
      .then((data) => {
            drinks = data.drinks;
            render();      
        })

}


function handleSearch (ev){
    ev.preventDefault();
    const search = input.value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then(response => response.json())
      .then((data) => {
            drinks = data.drinks; 
            render();      
        })
   
     
}



btnSearch.addEventListener('click', handleSearch); 
  
getDataApi();