var chronometer = new Chronometer();


document.getElementById("start-button").onclick = function() {
    let audio = new Audio("sounds/400Coups.mp3");
    // audio.play();
    setTimeout(function() {
        audio.play();
    }, 4100);
    chronometer.startClick();
    drawNotes();
}


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



/* NOTES TIME CALCULATOR */

document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 77: console.log('Note M ' + chronometer.millisec); break;
      case 76: console.log('Note L ' + chronometer.millisec); break;
      case 75: console.log('Note K ' + chronometer.millisec); break;
      case 74: console.log('Note J ' + chronometer.millisec); break;
      case 78: console.log('Note N ' + chronometer.millisec); break;
  }
}


/* GENERATE FRETBOARD */

function drawMatchArea (){
    ctx.fillStyle = "#7CFC00";
    ctx.fillRect (0, 220, 800, 90);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(0,265);
    ctx.lineTo(800,265);
    ctx.stroke();
}

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


/* CREATE NOTE */

function Note (xArg, yArg, speedXArg, speedYArg, colorArg) {
    this.x = xArg;
    this.y = yArg;
    this.speedX = speedXArg;
    this.speedY = speedYArg;
    this.color = colorArg;
}


Note.prototype.updateNote = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    this.x += this.speedX;
    this.y += this.speedY;
    ctx.arc(this.x, this.y, 10*this.y*0.01, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

var NoteN = new Note (340, 0, -0.6, 1, "red");
var NoteJ = new Note (370, 0, -0.3, 1, "black");
var NoteK = new Note (400, 0, 0, 1, "blue");
var NoteL = new Note (430, 0, 0.3, 1, "yellow");
var NoteM = new Note (460, 0, 0.6, 1, "pink");



var allNotes =[];
var lastTimeCheck = 0;
var noteIndex = 0;


function drawNotes () {
    clearCanvas();   
    drawLines();     
    drawMatchArea(); 
    // Maintenant que le "paysage" est là, "peindre" nos Notes   
    var currentNoteTime = Object.keys(partoch)[noteIndex];
    if (chronometer.currentTime >= currentNoteTime) {
        allNotes.push(partoch[Object.keys(partoch)[noteIndex]]);
        noteIndex ++;
    }


    // for (var i = 0; i < Object.keys(partoch).length; i++) {
    //     var noteTime = Object.keys(partoch)[i];
    //     if (noteTime > lastTimeCheck && noteTime < chronometer.currentTime) {
    //         allNotes.push(partoch[chronometer.currentTime]);
    //     }
    // }
    // lastTimeCheck = chronometer.currentTime;

    // if (Object.keys(partoch).indexOf(chronometer.millisec) !== -1){
    //     
    // }
    // console.log(chronometer.millisec);
    // console.log(allNotes);
    
    for (var i = 0; i < allNotes.length; i++){
        allNotes[i].updateNote();
    }

    // NoteN.updateNote();
    // NoteJ.updateNote();
    // NoteK.updateNote();
    // NoteL.updateNote();
    // NoteM.updateNote();
        
    if (NoteN.y < 500 ||
        NoteJ.y < 500 || 
        NoteK.y < 500 || 
        NoteL.y < 500 || 
        NoteM.y < 500)
        // Demander que l'animation continue.
    requestAnimationFrame(drawNotes);
}


// 1030 millisecondes pour arrive dans la verte

var partoch = {
    /* PRE-INTRO */
    263: new Note (400, 0, 0, 1, "blue"),
    307: new Note (400, 0, 0, 1, "blue"),
    343: new Note (400, 0, 0, 1, "blue"), 
    373: new Note (400, 0, 0, 1, "blue"), 
    499: new Note (400, 0, 0, 1, "blue"), 

    /* INTRO */
    642: new Note (430, 0, 0.3, 1, "yellow"),
    960: new Note (400, 0, 0, 1, "blue"),
    1049: new Note (460, 0, 0.6, 1, "pink"),
    1143: new Note (430, 0, 0.3, 1, "yellow"),
    1229: new Note (400, 0, 0, 1, "blue"),
    1306: new Note (460, 0, 0.6, 1, "pink"),
    1393: new Note (430, 0, 0.3, 1, "yellow"),
    1467: new Note (400, 0, 0, 1, "blue"),
    1548: new Note (370, 0, -0.3, 1, "black"),
    1630: new Note (400, 0, 0, 1, "blue"),
    2004: new Note (430, 0, 0.3, 1, "yellow"),
    2133: new Note (370, 0, -0.3, 1, "black"),
    2390: new Note (340, 0, -0.6, 1, "red"),
    2635: new Note (430, 0, 0.3, 1, "yellow"),
    2967: new Note (400, 0, 0, 1, "blue"),
    3048: new Note (460, 0, 0.6, 1, "pink"),
    3136: new Note (430, 0, 0.3, 1, "yellow"),
    3228: new Note (400, 0, 0, 1, "blue"),
    3302: new Note (460, 0, 0.6, 1, "pink"),
    3383: new Note (430, 0, 0.3, 1, "yellow"),
    3463: new Note (400, 0, 0, 1, "blue"),
    3546: new Note (460, 0, 0.6, 1, "pink"),
    3629: new Note (430, 0, 0.3, 1, "yellow"),
    3979: new Note (460, 0, 0.6, 1, "pink"),
    4140: new Note (370, 0, -0.3, 1, "black"),
    4632: new Note (430, 0, 0.3, 1, "yellow"),
    4958: new Note (400, 0, 0, 1, "blue"),
    5048: new Note (460, 0, 0.6, 1, "pink"),
    5134: new Note (430, 0, 0.3, 1, "yellow"),
    5222: new Note (400, 0, 0, 1, "blue"),
    5305: new Note (460, 0, 0.6, 1, "pink"),
    5395: new Note (430, 0, 0.3, 1, "yellow"),
    5473: new Note (400, 0, 0, 1, "blue"),
    5554: new Note (370, 0, -0.3, 1, "black"),
    5633: new Note (400, 0, 0, 1, "blue"),
    5995: new Note (430, 0, 0.3, 1, "yellow"),
    6124: new Note (370, 0, -0.3, 1, "black"),
    6385: new Note (340, 0, -0.6, 1, "red"),
    6632: new Note (430, 0, 0.3, 1, "yellow"),
    6962: new Note (400, 0, 0, 1, "blue"),
    7050: new Note (460, 0, 0.6, 1, "pink"),
    7134: new Note (430, 0, 0.3, 1, "yellow"),
    7213: new Note (400, 0, 0, 1, "blue"),
    7304: new Note (460, 0, 0.6, 1, "pink"),
    7381: new Note (430, 0, 0.3, 1, "yellow"),
    7464: new Note (400, 0, 0, 1, "blue"),
    7547: new Note (460, 0, 0.6, 1, "pink"),
    7626: new Note (430, 0, 0.3, 1, "yellow"),
    7995: new Note (460, 0, 0.6, 1, "pink"),
    8144: new Note (370, 0, -0.3, 1, "black"),

    /* COUPLET 1 */
    8769: new Note (430, 0, 0.3, 1, "yellow"), 
    8770: new Note (370, 0, -0.3, 1, "black"), 
    8843: new Note (430, 0, 0.3, 1, "yellow"), 
    8844: new Note (370, 0, -0.3, 1, "black"), 
    9006: new Note (430, 0, 0.3, 1, "yellow"), 
    9007: new Note (370, 0, -0.3, 1, "black"), 
    9085: new Note (430, 0, 0.3, 1, "yellow"), 
    9086: new Note (370, 0, -0.3, 1, "black"), 
    9254: new Note (370, 0, -0.3, 1, "black"), 
    9255: new Note (400, 0, 0, 1, "blue"), 
    9327: new Note (370, 0, -0.3, 1, "black"), 
    9328: new Note (400, 0, 0, 1, "blue"), 
    9508: new Note (370, 0, -0.3, 1, "black"), 
    9509: new Note (400, 0, 0, 1, "blue"), 
    9587: new Note (370, 0, -0.3, 1, "black"), 
    9588: new Note (400, 0, 0, 1, "blue"), 
    9769: new Note (400, 0, 0, 1, "blue"), 
    9770: new Note (460, 0, 0.6, 1, "pink"), 
    9844: new Note (400, 0, 0, 1, "blue"), 
    9845: new Note (460, 0, 0.6, 1, "pink"), 
    10014: new Note (400, 0, 0, 1, "blue"),
    10015: new Note (460, 0, 0.6, 1, "pink"),
    10088: new Note (460, 0, 0.6, 1, "pink"),
    10089: new Note (400, 0, 0, 1, "blue"),
}


 function noteIn(){
     if (this.y === 265 ){
         console.log(chronometer.currentTime)
     }
 } 
 noteIn();


 var match = document.querySelector(".matchArea");
 match.style.visibility = "hidden";
 
 var matchCoord = match.getBoundingClientRect();
 var leftX = matchCoord.left;
 var rightX = matchCoord.right;
 
 var matchBox = {
   x: leftX,
   y: rightX,
   width: 800,
   height: 90
 };
 
 function matched(arrows) {
   const box = matchBox;
   return arrows.some(
     arrow => box.x + box.width >= arrow.x + arrow.width && box.x <= arrow.x
   );
 }
 
 var scoreCounter = document.querySelector(".scores");
 var score = 0;
 
 var lives = 3;
 var livesCounter = document.querySelector("#lives");
 
 function correctKeyPress(points) {
   score += points;
   scoreCounter.innerHTML = score;
   match.style.borderColor = "green";
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