function randomGif(){
    // First generate a random number (1 - 25)
    let randomNumber = Math.floor(Math.random() * (25 - 1) + 1);

    // Then embed the file that has the file name (randomNumber).gif
    document.getElementById("wholesomeGif").src = "Gifs/" + randomNumber + ".gif";
}

function introFunction(){
    document.getElementById("table-of-contents").style.display = "none";
    document.getElementById("simple-introduction").style.display = "block";
    
}

function firstArcFunction(){
    document.getElementById("table-of-contents").style.display = "none";
    document.getElementById("arc-1").style.display = "block";
}

function secondArcFunction(){
    document.getElementById("table-of-contents").style.display = "none";
    document.getElementById("arc-2").style.display = "block";
}

function thirdArcFunction(){
    document.getElementById("table-of-contents").style.display = "none";
    document.getElementById("arc-3").style.display = "block";
}

function examSpecialFunction(){
    document.getElementById("table-of-contents").style.display = "none";
    document.getElementById("exam-special").style.display = "block";
}

function ottawaSpecialFunction(){
    document.getElementById("table-of-contents").style.display = "none";
    document.getElementById("ottawa-special").style.display = "block";
}
function fourthArcFunction(){
    document.getElementById("table-of-contents").style.display = "none";
    document.getElementById("arc-4").style.display = "block";
}

function fifthArcFunction(){
    document.getElementById("table-of-contents").style.display = "none";
    document.getElementById("arc-5").style.display = "block";
}

function outroArcFunction(){
    document.getElementById("table-of-contents").style.display = "none";
    document.getElementById("outro").style.display = "block";
}

function mainMenu(id){
    document.getElementById(id).style.display = "none";
    document.getElementById("table-of-contents").style.display = "block";
}

// All the next button functions are now complete 
function nextArc(id){
    switch (id){
        case "simple-introduction":
            document.getElementById(id).style.display = "none";
            document.getElementById("arc-1").style.display = "block";
            break;
        case "arc-1":
            document.getElementById(id).style.display = "none";
            document.getElementById("arc-2").style.display = "block";
            break;
        case "arc-2":
            document.getElementById(id).style.display = "none";
            document.getElementById("arc-3").style.display = "block";
            break;
        case "arc-3":
            document.getElementById(id).style.display = "none";
            document.getElementById("exam-special").style.display = "block";
            break;
        case "exam-special":
            document.getElementById(id).style.display = "none";
            document.getElementById("ottawa-special").style.display = "block";
            break;
        case "ottawa-special":
            document.getElementById(id).style.display = "none";
            document.getElementById("arc-4").style.display = "block";
            break;
        case "arc-4":
            document.getElementById(id).style.display = "none";
            document.getElementById("arc-5").style.display = "block";
            break;
        case "arc-5":
            document.getElementById(id).style.display = "none";
            document.getElementById("outro").style.display = "block";        
            break;
    }
}

// All the previous button functions are now complete 
function previousArc(id){
    switch(id){
        case "arc-1":
            document.getElementById(id).style.display = "none";
            document.getElementById("simple-introduction").style.display = "block";
            break;
        case "arc-2":
            document.getElementById(id).style.display = "none";
            document.getElementById("arc-1").style.display = "block";
            break;
        case "arc-3":
            document.getElementById(id).style.display = "none";
            document.getElementById("arc-2").style.display = "block";
            break;
        case "exam-special":
            document.getElementById(id).style.display = "none";
            document.getElementById("arc-3").style.display = "block";
            break;
        case "ottawa-special":
            document.getElementById(id).style.display = "none";
            document.getElementById("exam-special").style.display = "block";
            break;
        case "arc-4":
            document.getElementById(id).style.display = "none";
            document.getElementById("ottawa-special").style.display = "block";
            break;
        case "arc-5":
            document.getElementById(id).style.display = "none";
            document.getElementById("arc-4").style.display = "block";
            break;
        case "outro":
            document.getElementById(id).style.display = "none";
            document.getElementById("arc-5").style.display = "block";
            break;
    }
}