let buttonColours = ["red", "green", "blue", "yellow"];
let gamePattern = [];
let userclickedPattern = [];
let level = 0

$("body").on("keydown", function(){driver();});
clicked();

function driver(){
    let result = nextSequence();
    $("body").off("keydown");
    gamePattern.push(result);
    style(result);
}


function nextSequence(){
    level += 1;
    $("h1").html("Level "+level);
    let randomColor = Math.floor(Math.random()*4);
    return buttonColours[randomColor];
}

function clicked(){
    $(".btn").on("click", function(){
    let button = this.id;
    userclickedPattern.push(button);
    checkResult(button);
    style(button);
     
    });
    
};

function checkResult(button){

    if (userclickedPattern[userclickedPattern.length - 1] === gamePattern[userclickedPattern.length - 1]){

        let sound = new Audio("sounds/"+button+".mp3");
        sound.play();
        if (userclickedPattern.length === gamePattern.length){
            userclickedPattern.length = 0;
            setTimeout(driver, 300);

        }  
    }   
    else{
        let sound = new Audio("sounds/wrong.mp3");
        sound.play();
        $("body").addClass("red");
        setTimeout(function(){
            $("body").removeClass("red");},100);
            
        userclickedPattern.length = gamePattern.length = level = 0;

        $("h1").html("Press A Key To Start");
        $("body").on("keydown", function(){driver();});
    }
          
};


function style(k){
    $("#"+k).addClass("pressed");
    setTimeout(function(){
        $("."+ k).removeClass("pressed");
    },100);
}