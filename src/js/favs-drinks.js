
//evento favoritos
const handleFavourite = (ev) =>{
    const idValue = ev.currentTarget.id;
    //obtengo datos de el li clicado
    const clickedDrink = drinks.find((item) => item.idDrink === idValue);
    //console.log(clickedDrink);
    //verificar si ya es un fav
    const indexFavLi = favsDrinks.findIndex((item) => item.idDrink === idValue);

    if(indexFavLi === -1){
        favsDrinks.push(clickedDrink);
    }else{
       favsDrinks.splice(indexFavLi, 1);
    }

    ulFavList.innerHTML = ""
    for (const renderFav of favsDrinks) {
        ulFavList.innerHTML += `<li class="card js-li" id="${renderFav.idDrink}">
        <img class="card-img" src="${renderFav.strDrinkThumb}" alt="">
        <h3>${renderFav.strDrink}</h3>
        <button class="close js-btn-close">X</button>
        </li>`
    }

    console.log(favsDrinks);
    
};
