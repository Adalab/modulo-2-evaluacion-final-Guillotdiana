
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

    console.log(favsDrinks);
    
};
