let drumNumber = document.querySelectorAll('.drum').length;
for(let i = 0; i < drumNumber; i++){
  document.querySelectorAll('.drum')[i].addEventListener("click", function(){
    let innerHTML = this.innerHTML;
    makeSound(innerHTML);
    buttonAnimation(innerHTML);
  });

}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch(key){
    case "w":
    let tom1 = new Audio ('audio/tom-1.mp3');
    tom1.play();
    break;
    case "a":
    let tom2 = new Audio ('audio/tom-2.mp3');
    tom2.play();
    break;
    case "s":
    let tom3 = new Audio ('audio/tom-3.mp3');
    tom3.play();
    break;
    case "d":
    let tom4 = new Audio ('audio/tom-4.mp3');
    tom4.play();
    break;
    case "j":
    let snare = new Audio ('audio/snare.mp3');
    snare.play();
    break;
    case "k":
    let crash = new Audio ('audio/crash.mp3');
    crash.play();
    break;
    case "l":
    let kick = new Audio ('audio/kick-bass.mp3');
    kick.play();
    break;
    default: console.log(innerHTML);
  }
}

function buttonAnimation(currentKey){
  let active = document.querySelector('.' + currentKey);
  active.classList.add("pressed");
  setTimeout(function(){active.classList.remove("pressed");}, 100);
}
