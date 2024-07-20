// DOM BİR NEVİ JAVASCRİPT KODLARIYLA HTML SAYFASINA MÜDAHELE EDEBİLMEKTİR

const hata=document.querySelector('p');// hata değişkeni tanımlayıp document ile html kodundaki ilk p etiketini seçer 
console.log(hata);

const bug=document.querySelector('.error');  //clası error demek için . ile başlıyoruz class çağırmak için nokta ile başlarız

console.log(bug); //html dokumanı içindeki ilk error olan class ı basar

//peki attaki class eroru seçmek istiyorum napabiliriz. divin içerisinde classı error olanı seçmemiz gerekmektedir

const hiciv=document.querySelector("div.error");  //div içerisindeki classı çağırmak için div. şeklinde kullanılır 

console.log(hiciv); 

//html tagının içerisindeki p etiketlerinin tüm içeriğini basmak için aşağıdaki işlem kullanılır

const hatalar=document.querySelectorAll("p");  //nodelist şeklinde döner foreach ile kullanabiliriz
console.log(hatalar); //html kod içeriğini basmaz

console.log(hatalar[0]);

hatalar.forEach(say=>{
    console.log(say);
})

