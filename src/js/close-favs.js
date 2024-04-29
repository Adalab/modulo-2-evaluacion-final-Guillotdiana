
const handleClose = (ev) =>{
    const valueId = ev.currentTarget.id;
    const indexclose = favsDrinks.findIndex((item) => item.idDrink === valueId);
    if(indexclose !== -1){
        favsDrinks.splice(indexclose, 1);
    }
    console.log(favsDrinks);
    localStorage.setItem('favouriteDrink',JSON.stringify(favsDrinks));
    console.log(indexclose);
    
    renderFav();
    render();
}



