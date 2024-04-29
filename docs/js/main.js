const h=document.querySelector(".js-btn-search"),k=document.querySelector(".js-input"),a=document.querySelector(".js-ul"),d=document.querySelector(".js-ul-fav");let r=[],t=[];const o=()=>{a.innerHTML="";for(const n of r){let s=t.findIndex(c=>c.idDrink===n.idDrink)===-1?"":"change";a.innerHTML+=`<li class="card js-li ${s}" id="${n.idDrink}">
      <img class="card-img" src="${n.strDrinkThumb}" alt="">
      <h3>${n.strDrink}</h3>
      </li>`}const e=document.querySelectorAll(".js-li");for(const n of e)n.addEventListener("click",g)};function f(){fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").then(e=>e.json()).then(e=>{r=e.drinks,o()})}function v(e){e.preventDefault();const n=k.value;fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${n}`).then(i=>i.json()).then(i=>{r=i.drinks,o()})}h.addEventListener("click",v);f();const D=e=>{const n=e.currentTarget.id,i=t.findIndex(s=>s.idDrink===n);i!==-1&&t.splice(i,1),console.log(t),localStorage.setItem("favouriteDrink",JSON.stringify(t)),console.log(i),l(),o()},l=()=>{console.log(t),d.innerHTML="";for(const n of t)d.innerHTML+=`<li class="card change" id="${n.idDrink}">
        <img class="card-img" src="${n.strDrinkThumb}" alt="">
        <h3>${n.strDrink}</h3>
        <button class="close js-btn-close" id="${n.idDrink}">X</button>
        </li>`;const e=document.querySelectorAll(".js-btn-close");for(const n of e)n.addEventListener("click",D)},g=e=>{const n=e.currentTarget.id,i=r.find(c=>c.idDrink===n),s=t.findIndex(c=>c.idDrink===n);s===-1?t.push(i):t.splice(s,1),localStorage.setItem("favouriteDrink",JSON.stringify(t)),l(),o()},u=localStorage.getItem("favouriteDrink");u!==null&&(t=JSON.parse(u));l();
//# sourceMappingURL=main.js.map
