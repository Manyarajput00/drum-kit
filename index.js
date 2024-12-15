var nofbtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < nofbtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var inner = this.innerHTML;
        detectsound(inner);
        addanimation(inner);
    });

    document.addEventListener("keydown", function (event) {
        detectsound(event.key);
        addanimation(event.key);
    })
}

function detectsound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
          
            break;
    }

}
function addanimation(cuurkey){
   var selkey= document.querySelector("." + cuurkey);
  selkey.classList.add("pressed");
  setTimeout(function(){
    selkey.classList.remove("pressed");
  },100);


} 