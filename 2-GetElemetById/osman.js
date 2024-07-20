//html sayfalarında bir ıd ile tanımlanan değişkeni yanlızca bir defa kullanabilebiliriz.
const baslik=document.getElementById("osman"); //diyez işareti koymadan direk ıd si osman olan tagı çağırıyoruz

console.log(baslik);

const hatalar=document.getElementsByClassName("error");  //direkt class isminden çağırır nokta koymamıza gerek bulunmamaktadır

console.log(hatalar[0]);  //html collection şeklinde döner foreach ile kullanılamaz nodelistte kullanabiliriz

const pEtiketleri=document.getElementsByTagName("p"); //bu şekilde yapıldığında foreach içerisinde kullanamamaktayız

console.log(pEtiketleri[2]);