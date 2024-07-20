const kutu=document.querySelector(".kutu");
kutu.addEventListener("mousemove",e=>{   //mouse üzerine geldiğinde tetiklernir
//     console.log(e);
//     console.log(e.offsetX,e.offsetY); //mousenun bulunduğu yerin x ve ye koordinatlarını gösterir
kutu.textContent=`x koordinatı ${e.offsetX}, y koordinatı ${e.offsetY}` //mouse değitirdiğim an koordinatlarda değişiyor
 })

 document.addEventListener("wheel",e=>{
    console.log(e.pageX,e.pageY);
 })