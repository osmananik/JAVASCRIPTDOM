

const link=document.querySelector("a");

console.log(link.getAttribute("href"));  // a etiketi içerisindeki href attribute yakaladım href içerisine yazılan yazıyı basar

//set attribute ile güncelleme işlemini yapacağız

link.setAttribute("href","https://www.boztraining.com"); //link gider biz içerisindeki textide güncellemek istiyoruz

link.textContent="Anık Training";

//html tagındaki class ismini değiştiricez.,


const pDegeri=document.querySelector("p");
console.log(pDegeri.getAttribute("class"));

pDegeri.setAttribute("class","error"); //attribute varsa güncelliyor yoksa yeni baştan oluşturuyor

pDegeri.setAttribute("style","color:blue");