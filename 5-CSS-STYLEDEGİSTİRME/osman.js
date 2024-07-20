const baslik=document.querySelector("h1");
//baslik.setAttribute("style","padding:50px");  //html tagının içindeki CSS kodunu ezer kodun içerisindekini basar override yaptı doğru kullanım değil

console.log(baslik.style);

baslik.style.padding="50px"; //hem rengi korur hemde padding style ekler

baslik.style.fontSize="100px";

