const button=document.querySelector("button");

//butona tıklandığında herhangi bir aksiyon yapmak istiyorum

// button.addEventListener("click",()=>{
//     console.log("Tıklandı");                 //click eventi nasıl eklenir ve aksiyon alınır öğrendik
    
// })   

const liElemanlari=document.querySelectorAll("li");

liElemanlari.forEach(eleman=>{
    eleman.addEventListener("click",e=>{
        // console.log(e);
        // console.log(e.target); //direkt etiketle beraber seçmemizi sağlar bu sayede gidip html etkiketi içinde değişikliğ sağlayabiliriz örnek 1.a
        // console.log("liye tıklandı");
        // e.target.style.color="blue";  //1 a tıklandığında mavi yapıcak

    })
})


//li etiketlerine nasıl ulaşıcam


const ul=document.querySelector("ul");
ul.addEventListener("click",e=>{
    // console.log(e);
    // console.log(e.target);
    if(e.target.tagName==="LI"){
        e.target.remove();
    }

})
//ul.remove();   //ul etiketini html den kaldırabiliriz

liElemanlari.forEach(eleman=>{
        eleman.addEventListener("click",e=>{
        e.stopPropagation(); //sadece e için target etiketini çalışmasını sağlar
        console.log(e.target);     //target etiketini üst etiket içinde açar
        
        // e.target.remove();  //li etiketlerini tıklayınca silme yapar

    })
})

button.addEventListener("click",()=>{
    const li  =document.createElement("li");             //li elementi oluşturduk
    li.textContent="javascript";
    // ul.append(li);  //sonuna ekleme işlemi yapar
    ul.prepend(li);  //başına ekleme işlemi yapar
})   