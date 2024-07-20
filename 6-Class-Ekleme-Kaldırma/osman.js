const icerik=document.querySelector("p");
console.log(icerik.classList);  //ne kadar class varsa classlist ile basabiliriz

icerik.classList.add("galatasaray");  //class listeme galatasaray adlı class name ekliyorum
icerik.classList.remove("error");   // class listesinden silme işlemi yapar

const pDegeri=document.querySelectorAll("p");

pDegeri.forEach(a=>{
    if(a.textContent.includes("error")){
        a.classList.add("error");
    }
    if(a.textContent.includes("success")){
        a.classList.add("success");
    }
})