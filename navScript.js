function myFunction() {
  document.getElementById("hideHamburguer").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.hamburguer')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function functionPopup() {  
  document.getElementById("windowpopup").innerHTML = '';
  displayLayoutpopup();
  document.getElementById("windowpopup").classList.toggle("show2");
}

const overlay = document.getElementById('overlay')
overlay.addEventListener('click', () => {
  document.getElementById("windowpopup").classList.remove("show2");
  overlay.classList.remove("active");
})  

function functionClose (){
  document.getElementById("windowpopup").style.display="none";

}


let popupProj1 = [
  {
    cross_icon: "./images/Iconx.png",
    title: "Multi Post Stories",
    square_html: "html",
    square_boot: "bootstrap",
    square_ruby: "ruby",
    image: "./images/numberten.png",
    textmulti: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
    btn_seelive: "See Live",
    btn_seeSource: "See Source",
  }
]


// document.querySelectorAll(".b2").forEach(item) => {
//   item.addEventListener("windowpopup", (e)) => {
//     const windowpopup = document.getElementById("windowpopup")
//     const h2=windowpopup.querySelector("#windowpopup-title");
// }}

function displayLayoutpopup() {
  document.getElementById("overlay").classList.toggle("active");
  let windowpopup = document.getElementById("windowpopup")
  
 
  let h2 = document.createElement('h2');
  h2.textContent = `${popupProj1[0].title}`;
  windowpopup.appendChild(h2);

  let img = document.createElement('img');
  img.classList.add('containerdivpopup');
  img.src = `${popupProj1[0].cross_icon}`;

  let div = document.createElement('div');
  div.classList.add('containerdivpopup');
  div.appendChild(h2);

  let divimg = document.createElement('div');
  div.appendChild(divimg);
  divimg.appendChild(img);
    
  windowpopup.appendChild(div);


  let htmlpop = document.createElement('button');
  htmlpop .textContent = `${popupProj1[0].square_html}`;
  htmlpop .classList.add('buttonpopup');
  windowpopup.appendChild(htmlpop );

  let bootpop = document.createElement('button');
  bootpop.textContent = `${popupProj1[0].square_boot}`;
  bootpop.classList.add('buttonpopup');
  windowpopup.appendChild(bootpop);

  let rubypop = document.createElement('button');
  rubypop.textContent = `${popupProj1[0].square_ruby}`;
  rubypop.classList.add('buttonpopup');
  windowpopup.appendChild(rubypop);

  let imgten = document.createElement('img');
  imgten.src = `${popupProj1[0].image}`;
  windowpopup.appendChild(imgten);

  let paragraph = document.createElement('p');
  paragraph.textContent = `${popupProj1[0].textmulti}`;
  windowpopup.appendChild(paragraph);

  let seelive = document.createElement('button');
  seelive.textContent = `${popupProj1[0].btn_seelive}`;
  seelive.classList.add('btnlive');
  windowpopup.appendChild(seelive);

  let seesource = document.createElement('button');
  seesource.textContent = `${popupProj1[0].btn_seeSource}`;
  seesource.classList.add('btnlive');
  windowpopup.appendChild(seesource);

  }
  
 