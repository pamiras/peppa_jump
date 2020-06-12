var character = document.getElementById("character");

var block = document.getElementById("block");

function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

/*function checks every 10ms to see if dead */
var checkDead = setInterval(function(){
   
    /* parse character as int = returns top postiion of character without "px" */
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    /* parse block as int = returns left postiion of character without "px" */
    var blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    var upperBlockLeft = 
    parseInt(window.getComputedStyle(upperblock).getPropertyValue("left"));

    /* block in between char 
    or char doesnt clear jump 
    (at most 100px to jump over) 120-20 = 100 */
    if(blockLeft<50 && blockLeft>0 && characterTop >=100 
        || upperBlockLeft <50 && upperBlockLeft > 0 && characterTop < 120 ){
        block.style.animation = "none";
        block.style.display = "none";
        upperblock.style.animation = "none";
        upperblock.style.display = "none";
        alert("haha im telling momæ and dadæ that ur a loser");
    }
},10);

