const numberOfKeys = document.querySelectorAll(".key").length;

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    let activeKey = document.querySelector("." + currentKey);    
    activeKey.classList.add("playing"); 
    
    setTimeout(() => {
        activeKey.classList.remove("playing");
    }, 100);
}

function makeSound(key) {
  switch (key) {
    case "a":
      const clap = new Audio("sounds/clap.wav");
      clap.play();
      break;

    case "s":
      const hihat = new Audio("sounds/hihat.wav");
      hihat.play();
      break;

    case "d":
      const kick = new Audio("sounds/kick.wav");
      kick.play();
      break;

    case "f":
      const openhat = new Audio("sounds/openhat.wav");
      openhat.play();
      break;

    case "g":
      const boom = new Audio("sounds/boom.wav");
      boom.play();
      break;

    case "h":
      const ride = new Audio("sounds/ride.wav");
      ride.play();
      break;

    case "j":
      const snare = new Audio("sounds/snare.wav");
      snare.play();
      break;

    case "k":
      const tom = new Audio("sounds/tom.wav");
      tom.play();
      break;

    case "l":
      const tink = new Audio("sounds/tink.wav");
      tink.play();
      break;
  }

}
