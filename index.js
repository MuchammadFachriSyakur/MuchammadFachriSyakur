const nav = document.querySelector(".container nav ul");
const buttonKlikNav = document.querySelector(".container nav .nvgs");
buttonKlikNav.addEventListener("click", () => {
    nav.classList.toggle("ulAktif");
});

window.addEventListener("scroll", e => {
    // 1
    const p1 = document.querySelector(
        ".container .about .aboutParagraf .aboutTeks2"
    );
    const p1A = p1.getBoundingClientRect().top;
    // 1 end
    
    // 2
    const bgAbout = document.querySelector(".container .about .aboutGambar");
    const bgAbout1 = bgAbout.getBoundingClientRect().top;
    // 2 end
    
    // 3 
    const liProj1 = document.querySelector(".container .projek .ProjectList .ListPertama:nth-child(1)");
    
    const lP1Top = liProj1.getBoundingClientRect().top;
    // 3 end
    
    // 4
    const liProj2 = document.querySelector(".container .projek .ProjectList .ListPertama:nth-child(2)");
    const lP2Top = liProj2.getBoundingClientRect().top;
    // 4 end
    
    // 5
    const html = document.querySelector(".container .skil .daftarSkil .html");
    const html1 = html.getBoundingClientRect().top;
    // 5 end
    
    // 6 
    const css = document.querySelector(".container .skil .daftarSkil .css");
    const css1 = css.getBoundingClientRect().top;
    // 6 end
    
    const tinggiLayar = window.innerHeight;
    
    if (p1A < tinggiLayar) {
        p1.classList.add("hAktif");
    } else {
        p1.classList.remove("hAktif");
    }
    
    if (bgAbout1 < tinggiLayar) {
        bgAbout.classList.add("bgAktif");
    } else {
        bgAbout.classList.remove("bgAktif");
    }
    
    if(lP1Top < tinggiLayar){
      liProj1.classList.add('Aktf');
    }else{
      liProj1.classList.remove('Aktf');
    }
    
    if(lP2Top < tinggiLayar){
      liProj2.classList.add('kdktf');
    }else{
      liProj2.classList.remove('kdktf');
    }
    
    if(html1 < tinggiLayar){
      html.classList.add('hh');
    }else{
      html.classList.remove('hh');
    }
    
    if(css1 < tinggiLayar){
      css.classList.add('cc');
    }else{
      css.classList.remove('cc');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const item1 = document.querySelector("#picture");
    const hP = document.querySelectorAll(".container .home .homePerkenalan p");
    const buttonSosmeddiHome = document.querySelectorAll(
        ".container .home .homePerkenalan .homeSosmed button"
    );
    buttonSosmeddiHome.forEach(e => {
        e.classList.toggle("bAktif");
    });
    item1.classList.toggle("hAktif");
    hP.forEach(e => {
        e.classList.toggle("hPAktif");
    });
});

const hoveranGambar = document.querySelectorAll(
    ".container .projek .ProjectList .ListPertama"
);
const objekHoveranGambar = document.querySelectorAll(
    ".container .projek .ProjectList .ListPertama .lpPic"
);

hoveranGambar.forEach((item) =>{
  
  item.addEventListener("mousemove", (event) => {
    const klikDivNya = event.target;
    klikDivNya.classList.add("lHov");
  });
  
  item.addEventListener("mouseover", (event) => {
    const klikDivNya = event.target;
    klikDivNya.classList.add("lHov");
  });
  
  item.addEventListener("mouseup", (event) => {
    const klikDivNya = event.target;
    klikDivNya.classList.remove("lHov");
  });
  
  item.addEventListener("mouseout", (event) => {
    const klikDivNya = event.target;
    klikDivNya.classList.remove("lHov");
  });
  
  item.addEventListener("click", (event) => {
    const klikDivNya = event.target;
    if(klikDivNya){
      klikDivNya.classList.add("lHov");
    }else{
      klikDivNya.classList.remove("lHov");
    }
  });
});

// hoveranGambar.forEach((item,index)=>{
//   item.addEventListener("click", ()=>{
//     const objek = document.querySelector(".container .projek .ProjectList .ListPertama .lpPic");
//     if(!objek.classList.contains("lHov")){
//       objek.classList.add("lHov");
//     }
//   });
// });

// hoveranGambar.addEventListener("mousemove", e => {
//     hoveranGambar.style.cursor = "pointer";
//     objekHoveranGambar.classList.add("lHov");
//     console.log("mousemove");
// });
// hoveranGambar.addEventListener("mouseover", e => {
//     hoveranGambar.style.cursor = "pointer";
//     objekHoveranGambar.classList.add("lHov");
//     console.log("mouseover");
// });
// hoveranGambar.addEventListener("mouseup", e => {
//     hoveranGambar.style.cursor = "pointer";
//     objekHoveranGambar.classList.remove("lHov");
//     console.log("mouseover");
// });
// hoveranGambar.addEventListener("mouseout", e => {
//     hoveranGambar.style.cursor = "pointer";
//     objekHoveranGambar.classList.remove("lHov");
//     console.log("mouseover");
// });
