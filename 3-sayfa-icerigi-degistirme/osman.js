const pDegeri=document.querySelector("p"); //ilk p etiketini getirir

console.log(pDegeri.innerText);  //sadece tagın içerisindeki değeri yazdırmak istiyoruz

//içeriğini değiştirmek istersem napmam lazım aşağıda bak bakalım

pDegeri.innerText="OSMAN FULLSTACK DEVELOPER ";

const pdegeri=document.querySelectorAll("p");  //tüm p değerlerini nodelist şeklinde döndürecek bundan dolayı foreach ile içerisinde değerleri döndürebiiyorum

pdegeri.forEach(a=>{
    console.log(a.innerText);
    a.innerText+="  yeni alan";    //a.innerText="yeni alan";  bu şekilde yazarsam hepsini siler yeni alan yazar += yazarsak yanına ekler
})


//div içeriğini değiştirmek istiyorsak ne yapmamız gerekmektedir.


const detay=document.querySelector(".icerik") ;  // clası içerik olanı seçtik 

console.log(detay.innerHTML); //inner html ile olduğu gibi html i update edebiliyoruz

// detay.innerHTML="<h2>Vue Js,React JS,Angular JS</h2>";  //html taglarını yazarak html güncellemesi yapabiliriz

//içeriği koruyup güncelleme yapmak istersek +=koymamız yeterlidir

detay.innerHTML+="<h2>Vue Js,React JS,Angular JS</h2>";

const memleketler=["eskişehir","kocaeli","istanbul"]; //memleketleri dönüp html içeriğine basıcam

memleketler.forEach(centre=>{
    detay.innerHTML +=`<p>${centre}<\p>`                                            //html template olduğu için `` ifadesi kullanıldı
})


