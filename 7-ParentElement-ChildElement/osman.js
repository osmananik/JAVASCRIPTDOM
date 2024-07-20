const section=document.querySelector("section");
console.log(section.children);

//önemli hatırlatma html collectionsda foreach kullanamamakatayız

//arraya çevirmem lazım aşağıda gösteriyoruz

console.log(Array.from(section.children));  // arroy.from fonksiyonuyla arraya çevirdik section tagının çocuklarını şimdi foreachle kullanabiliriz


Array.from(section.children).forEach(child=>{
    child.classList.add("section-element");   //hepsine section element classını ekleriz

})

const baslik=document.querySelector("h2");
console.log(baslik.parentElement);  //atalarına gidiyor h2 elementinin babasına gitti
console.log(baslik.parentElement.parentElement); //babasının babasına gitti

console.log(baslik.nextElementSibling);// aynı hizadaki kardeşine ulaşabiliyorum bir sonraki tag h2 den sonraki

console.log(baslik.previousElementSibling); //tagın bir öncekini basar

console.log(baslik.nextElementSibling.parentElement.children);