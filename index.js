for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
  var ip= this.innerHTML;
  keyboard(ip);
  animation(ip);
  
}); 
} //for button press on screen

document.addEventListener("keydown",function(event)
{
    keyboard(event.key);
    animation(event.key)
})//for keypress on keyboard

function keyboard(key){
    switch (key) {
        case 'w': var audio=new Audio('sounds/crash.mp3');
                  audio.play();
             break;
        case 'a': var audio=new Audio('sounds/kick-bass.mp3');
                  audio.play();
              break;
        case 's': var audio=new Audio('sounds/snare.mp3');
                  audio.play();
              break;
       case 'd': var audio=new Audio('sounds/tom-1.mp3');
                  audio.play();
              break;
       case 'j': var audio=new Audio('sounds/tom-2.mp3');
                  audio.play();
              break;
       case 'k': var audio=new Audio('sounds/tom-3.mp3');
                  audio.play();
              break;
       case 'l': var audio=new Audio('sounds/tom-1.mp3');
                  audio.play();
              break;
    
        default:
            break;
    }
}
function animation(key)
{
    var btn= document.querySelector("."+ key)
    btn.classList.add("pressed");

    setTimeout(function()
    {
        btn.classList.remove("pressed");
    },100);
}