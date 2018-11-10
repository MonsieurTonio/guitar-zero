var chronometer = new Chronometer();
var audio = new Audio("sounds/400Coups.mp3");

document.getElementById("start-button").onclick = function() {
    // audio.play();
    setTimeout(function() {
        audio.play();
    }, 1300);
    chronometer.startClick();
    drawNotes();
}


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



/* NOTES DESIGN */

var NoteM = new Note (460, 0, 0.6, 1, 77, "pink");
var NoteL = new Note (430, 0, 0.3, 1, 76, "yellow");
var NoteK = new Note (400, 0, 0, 1, 75, "blue");
var NoteJ = new Note (370, 0, -0.3, 1, 74, "black");
var NoteN = new Note (340, 0, -0.6, 1, 78, "red");



/* NOTES TIME CALCULATOR */

// document.onkeydown = function(e) {
//     switch (e.keyCode) {
//       case 77: console.log(chronometer.millisec + ": new Note (460, 0, 0.6, 1, 77, 'pink')"); break;
//       case 76: console.log(chronometer.millisec + ": ew Note (430, 0, 0.3, 1, 76, 'yellow')"); break;
//       case 75: console.log(chronometer.millisec + ": new Note (400, 0, 0, 1, 75, 'blue')"); break;
//       case 74: console.log(chronometer.millisec + ": new Note (370, 0, -0.3, 1, 74, 'black')"); break;
//       case 78: console.log(chronometer.millisec + ": new Note (340, 0, -0.6, 1, 78, 'red')"); break;
//     }



/* GENERATE FRETBOARD */

function drawMatchArea (){
    ctx.fillStyle = "#7CFC00";
    ctx.fillRect (0, 220, 800, 90);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(0,265);
    ctx.lineTo(800,265);
    ctx.stroke();
};

function drawLines(){
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(340,0);
    ctx.lineTo(100,400);
    ctx.moveTo(370,0);
    ctx.lineTo(250,400);
    ctx.moveTo(400,0);
    ctx.lineTo(400,400);
    ctx.moveTo(430,0);
    ctx.lineTo(550,400);
    ctx.moveTo(460,0);
    ctx.lineTo(700,400);
    ctx.stroke();
};


function clearCanvas() {
    ctx.clearRect(0,0,800,400);
}


/* NOTE CREATOR */

function Note (xArg, yArg, speedXArg, speedYArg, laneArg, colorArg) {
    this.x = xArg;
    this.y = yArg;
    this.speedX = speedXArg;
    this.speedY = speedYArg;
    this.lane = laneArg;
    this.hit = false;
    this.color = colorArg;
    this.checked = false;
};


Note.prototype.updateNote = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    this.x += this.speedX*3;
    this.y += this.speedY*3;
    ctx.arc(this.x, this.y, 10*this.y*0.01, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    youWin();
    gameOver();

};



/* DRAW THE NOTES */


var allNotes =[];
var lastTimeCheck = 0;
var noteIndex = 0;
var score = 10;
var scoreSpan = document.getElementById('scores')


function drawNotes () {
    clearCanvas();   
    drawLines();     
    drawMatchArea();

    // Maintenant que le "paysage" est là, "peindre" nos Notes   
    var currentNoteTime = Object.keys(partoch)[noteIndex];
    if (chronometer.currentTime >= currentNoteTime) {
        allNotes.push(partoch[Object.keys(partoch)[noteIndex]]);
        noteIndex ++;
    };
    
    for (var i = 0; i < allNotes.length; i++){
        allNotes[i].updateNote();
    };
    
    var newNotes = []
    for (var i = 0; i < allNotes.length; i++){
        if (allNotes[i].y < 500) {
            newNotes.push(allNotes[i])
        }

        if (!allNotes[i].hit && allNotes[i].y > 310 && allNotes[i].checked === false) {
            score -= 3;
            allNotes[i].checked = true;
            console.log(score)
        }
    };

    // Demander que l'animation continue.
    allNotes = newNotes;

    if (chronometer.currentTime < 10500){
        requestAnimationFrame(drawNotes);
    } else {
        gameOver();

    }
    
    scoreSpan.innerHTML = score;
}



/* MATCH NOTES */

document.onkeydown = function(e) {
    var aNoteWasHit = false;
    for (var i = 0; i < allNotes.length; i++) {
        if (allNotes[i] !== undefined && allNotes[i].y > 220 && allNotes[i].y < 310 && allNotes[i].hit === false) {
            switch (e.keyCode) {

                case 77:
                    if (allNotes[i].lane === 77) {
                        allNotes[i].hit = true;
                        aNoteWasHit = true;
                        score += 5;
                        console.log(score);
                        console.log('Note M ok : ' + chronometer.millisec);
                } break;

                case 76:
                    if (allNotes[i].lane === 76) {
                        allNotes[i].hit = true;
                        aNoteWasHit = true;
                        score += 5;
                        console.log(score);
                        console.log('Note L ok : ' + chronometer.millisec);
                } break;

                case 75:
                    if (allNotes[i].lane === 75) {
                        allNotes[i].hit = true;
                        aNoteWasHit = true;
                        score += 5;
                        console.log(score);
                        console.log('Note K ok : ' + chronometer.millisec);
                } break;

                case 74:
                    if (allNotes[i].lane === 74) {
                        allNotes[i].hit = true;
                        aNoteWasHit = true;
                        score += 5;
                        console.log(score);
                        console.log('Note J ok : ' + chronometer.millisec);
                } break;
          
                case 78:
                    if (allNotes[i].lane === 77) {
                        allNotes[i].hit = true;
                        aNoteWasHit = true;
                        score += 5;
                        console.log(score);
                        console.log('Note N ok : ' + chronometer.millisec);
                } break;
            }
        } 
    } if (aNoteWasHit === false) {
        score -= 2;
    }
}



/* PARTITION */


var partoch = {
    /* PRE-INTRO */
    263: NoteK = new Note (400, 0, 0, 1, 75, "blue"),
    307: NoteK = new Note (400, 0, 0, 1, 75, "blue"),
    343: NoteK = new Note (400, 0, 0, 1, 75, "blue"), 
    373: NoteK = new Note (400, 0, 0, 1, 75, "blue"), 
    499: NoteK = new Note (400, 0, 0, 1, 75, "blue"), 

    /* INTRO */
    642: new Note (430, 0, 0.3, 1, 76, "yellow"),
    960: new Note (400, 0, 0, 1, 75, "blue"),
    1049: new Note (460, 0, 0.6, 1, 77, "pink"),
    1143: new Note (430, 0, 0.3, 1, 76, "yellow"),
    1229: new Note (400, 0, 0, 1, 75, "blue"),
    1306: new Note (460, 0, 0.6, 1, 77, "pink"),
    1393: new Note (430, 0, 0.3, 1, 76, "yellow"),
    1467: new Note (400, 0, 0, 1, 75, "blue"),
    1548: new Note (370, 0, -0.3, 1, 74, "black"),
    1630: new Note (400, 0, 0, 1, 75, "blue"),
    2004: new Note (430, 0, 0.3, 1, 76, "yellow"),
    2133: new Note (370, 0, -0.3, 1, 74, "black"),
    2390: new Note (340, 0, -0.6, 1, 78, "red"),
    2635: new Note (430, 0, 0.3, 1, 76, "yellow"),
    2967: new Note (400, 0, 0, 1, 75, "blue"),
    3048: new Note (460, 0, 0.6, 1, 77, "pink"),
    3136: new Note (430, 0, 0.3, 1, 76, "yellow"),
    3228: new Note (400, 0, 0, 1, 75, "blue"),
    3302: new Note (460, 0, 0.6, 1, 77, "pink"),
    3383: new Note (430, 0, 0.3, 1, 76, "yellow"),
    3463: new Note (400, 0, 0, 1, 75, "blue"),
    3546: new Note (460, 0, 0.6, 1, 77, "pink"),
    3629: new Note (430, 0, 0.3, 1, 76, "yellow"),
    3979: new Note (460, 0, 0.6, 1, 77, "pink"),
    4140: new Note (370, 0, -0.3, 1, 74, "black"),
    4632: new Note (430, 0, 0.3, 1, 76, "yellow"),
    4958: new Note (400, 0, 0, 1, 75, "blue"),
    5048: new Note (460, 0, 0.6, 1, 77, "pink"),
    5134: new Note (430, 0, 0.3, 1, 76, "yellow"),
    5222: new Note (400, 0, 0, 1, 75, "blue"),
    5305: new Note (460, 0, 0.6, 1, 77, "pink"),
    5395: new Note (430, 0, 0.3, 1, 76, "yellow"),
    5473: new Note (400, 0, 0, 1, 75, "blue"),
    5554: new Note (370, 0, -0.3, 1, 74, "black"),
    5633: new Note (400, 0, 0, 1, 75, "blue"),
    5995: new Note (430, 0, 0.3, 1, 76, "yellow"),
    6124: new Note (370, 0, -0.3, 1, 74, "black"),
    6385: new Note (340, 0, -0.6, 1, 78, "red"),
    6632: new Note (430, 0, 0.3, 1, 76, "yellow"),
    6962: new Note (400, 0, 0, 1, 75, "blue"),
    7050: new Note (460, 0, 0.6, 1, 77, "pink"),
    7134: new Note (430, 0, 0.3, 1, 76, "yellow"),
    7213: new Note (400, 0, 0, 1, 75, "blue"),
    7304: new Note (460, 0, 0.6, 1, 77, "pink"),
    7381: new Note (430, 0, 0.3, 1, 76, "yellow"),
    7464: new Note (400, 0, 0, 1, 75, "blue"),
    7547: new Note (460, 0, 0.6, 1, 77, "pink"),
    7626: new Note (430, 0, 0.3, 1, 76, "yellow"),
    7995: new Note (460, 0, 0.6, 1, 77, "pink"),
    8144: new Note (370, 0, -0.3, 1, 74, "black"),

    /* COUPLET 1 */
    8769: new Note (430, 0, 0.3, 1, 76, "yellow"), 
    8770: new Note (370, 0, -0.3, 1, 74, "black"), 
    8843: new Note (430, 0, 0.3, 1, 76, "yellow"), 
    8844: new Note (370, 0, -0.3, 1, 74, "black"), 
    9006: new Note (430, 0, 0.3, 1, 76, "yellow"), 
    9007: new Note (370, 0, -0.3, 1, 74, "black"), 
    9085: new Note (430, 0, 0.3, 1, 76, "yellow"), 
    9086: new Note (370, 0, -0.3, 1, 74, "black"), 
    9254: new Note (370, 0, -0.3, 1, 74, "black"), 
    9255: new Note (400, 0, 0, 1, 75, "blue"), 
    9327: new Note (370, 0, -0.3, 1, 74, "black"), 
    9328: new Note (400, 0, 0, 1, 75, "blue"), 
    9508: new Note (370, 0, -0.3, 1, 74, "black"), 
    9509: new Note (400, 0, 0, 1, 75, "blue"), 
    9587: new Note (370, 0, -0.3, 1, 74, "black"), 
    9588: new Note (400, 0, 0, 1, 75, "blue"), 
    9769: new Note (400, 0, 0, 1, 75, "blue"), 
    9770: new Note (460, 0, 0.6, 1, 77, "pink"), 
    9844: new Note (400, 0, 0, 1, 75, "blue"), 
    9845: new Note (460, 0, 0.6, 1, 77, "pink"), 
    10014: new Note (400, 0, 0, 1, 75, "blue"),
    10015: new Note (460, 0, 0.6, 1, 77, "pink"),
    10088: new Note (460, 0, 0.6, 1, 77, "pink"),
    10089: new Note (400, 0, 0, 1, 75, "blue"),
}




/* COUPLET 1 SUITE */

// Note K 10265
// Note K 10339
// Note L 10339
// Note L 10506
// Note K 10508
// Note L 10585
// Note K 10586
// Note J 10762
// Note L 10833
// Note J 11001
// Note L 11001
// Note L 11077
// Note J 11079
// Note J 11251
// Note K 11253
// Note J 11328
// Note K 11328
// Note J 11506
// Note K 11508
// Note J 11577
// Note K 11578
// Note M 11757
// Note K 11758
// Note K 11835
// Note M 11837
// Note K 12016
// Note K 12130
// Note L 12136


/* GAME OVER */

function gameOver() {
    if (score <= 0) {
        score = 0;
        clearCanvas();
        ctx.font = "20px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("👎🏽 YOU'RE REALLY A ZERO DUDE... 👎🏽", 400, 150);
        audio.pause();
    }
}

function youWin() {
    if (score > 200){
        clearCanvas();
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.fillText("🤘🏽 YOU'RE A FUCKING ROCKSTAR !!! 🤘🏽", 400, 150);
        audio.pause();
    }
}

