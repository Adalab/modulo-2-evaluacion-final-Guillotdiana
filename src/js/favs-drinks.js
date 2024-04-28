



const renderFav = () =>{

    //Primero se recuperan datos de fav en el localStorage y luego renderizo
    // Recuperar favoritos del LocalStorage
    const localFavDrink = localStorage.getItem('favouriteDrink');
    // Si hay algo, lo meto en mi array de favoritos
    if (localFavDrink !== null) {
      favsDrinks = JSON.parse(localFavDrink);
    }


    ulFavList.innerHTML = "";

    for (const renderFav of favsDrinks) {
        const indexFav = favsDrinks.findIndex((item) => item.idDrink === renderFav.idDrink);

        let classChange = indexFav === -1 ? '' : 'change';

        ulFavList.innerHTML += `<li class="card  js-li ${classChange}" id="${renderFav.idDrink}">
        <img class="card-img" src="${renderFav.strDrinkThumb}" alt="">
        <h3>${renderFav.strDrink}</h3>
        <button class="close js-btn-close">X</button>
        </li>`
    }
  
}

 
 


//evento favoritos
const handleFavourite = (ev) =>{
    const idValue = ev.currentTarget.id;
    //obtengo datos de el li clicado
    const clickedDrink = drinks.find((item) => item.idDrink === idValue);
   
    //verificar si ya es un fav
    const indexFavLi = favsDrinks.findIndex((item) => item.idDrink === idValue);

    if(indexFavLi === -1){
        favsDrinks.push(clickedDrink);
    }else{
       favsDrinks.splice(indexFavLi, 1);
    }
    //Guardo en LocalStorage 
    localStorage.setItem('favouriteDrink', JSON.stringify(favsDrinks));
    renderFav();
        
};


