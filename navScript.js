function myFunction() {
    document.getElementById("hideHamburguer").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
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
    displayLayoutpopup();
  }
  
  let popupProj1 = [
    {
      cross_icon: "./images/Iconx.png",
      title: "Multi Post Stories",
      square_html: "html",
      squate_boot: "bootstrap",
      square_ruby: "ruby",
      image: "./images/numberten.png",
      textmulti: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
      btn_seelive: "See Live",
      btn_seeSource: "See Source",
    }
  ]

  function displayLayoutpopup() {
    let containerPopup = document.createElement('div');
    containerPopup.innerHTML= `<h2>${popupProj1[0].title}</h2>`


  } 
  