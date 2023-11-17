(function() {
  'use strict';

  let stopButton = document.getElementById("stopButton");
  let slowButton = document.getElementById("slowButton");
  let goButton = document.getElementById("goButton");
  
  let stopLight = document.getElementById("stopLight");
  let slowLight = document.getElementById("slowLight");
  let goLight = document.getElementById("goLight");

  

  stopButton.addEventListener("click", toggleLight)
  slowButton.addEventListener("click", toggleLight)
  goButton.addEventListener("click", toggleLight)
  
  
  function toggleLight(element) {
    var pressedButton = event.target.id;
  
    if(pressedButton == 'stopButton') stopLight.classList.toggle('stop');
    if(pressedButton == 'slowButton') slowLight.classList.toggle('slow');
    if(pressedButton == 'goButton') goLight.classList.toggle('go');
  }

  stopButton.addEventListener("mouseenter", hoverOver)
  stopButton.addEventListener("mouseleave", hoverOver)
  slowButton.addEventListener("mouseenter", hoverOver)
  slowButton.addEventListener("mouseleave", hoverOver)
  goButton.addEventListener  ("mouseenter", hoverOver)
  goButton.addEventListener  ("mouseleave", hoverOver)

  function hoverOver(element) {
    var pressedButton = event.target;

    (event.type === 'mouseenter') ? console.log('Entered ' + pressedButton.innerText + ' button') : console.log('Left ' + pressedButton.innerText + ' button');
  }

  //var controls = document.getElementById("controls");
  controls.addEventListener("click", () => {
    let bulbClicked = event.target.innerText.toLowerCase();
    if(bulbClicked == 'stop\nslow\ngo') { return ;}
    
    let bulbClass = eval(bulbClicked + 'Light.className');
    
    (bulbClass == 'bulb') ? console.log(event.target.innerText + " bulb off") : console.log(event.target.innerText + " bulb on");
    
    console.log('test')

  })

})(); 






