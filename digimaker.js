function replaceSidebar () {
  //store the new version of the button and the old version
  let oldElement2 = document.getElementsByClassName("user-name")[0];
  let newElement2 = oldElement2.cloneNode(true);
  
  
  //style and change the text of the new button
  newElement2.style.backgroundImage = "None";
  newElement2.style.fontSize = "18px";
  newElement2.style.color = "white";
  newElement2.style.border = "none";
  newElement2.style.backgroundColor = "black";
  newElement2.style.width = "auto";
  newElement2.innerText = "ADMIN";
  
  oldElement2.parentNode.replaceChild(newElement2, oldElement2);
}

function init () {
  
}

if (window.location.hostname == "www.code.digimaker.com.au") {
  init();
} else {
  
}
