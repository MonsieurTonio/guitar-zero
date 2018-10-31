var chronometer = new Chronometer();


document.getElementById("start-button").onclick = function() {
    let audio = new Audio("sounds/400Coups.mp3");
    audio.play();
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

function drawFretBoard (){
    ctx.fillStyle = "#7CFC00";
    ctx.fillRect (0, 220, 800, 90);
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
    clearCanvas();      // Ne faire qu'une fois pour toutes les notes
    drawLines();        // Ne faire qu'une fois pour toutes les notes
    drawFretBoard();    // Ne faire qu'une fois pour toutes les notes
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
    console.log(allNotes);
    
    for (var i = 0; i < allNotes.length; i++){
        allNotes[i].updateNote();
    }

    // new Note (340, 0, -0.6, 1, "red").updateNote();
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




var partoch = {
    636: new Note (430, 0, 0.3, 1, "yellow"),
    952: new Note (400, 0, 0, 1, "blue"),
    1038: new Note (460, 0, 0.6, 1, "pink"),
    1127: new Note (430, 0, 0.3, 1, "yellow"), 
    1213: new Note (400, 0, 0, 1, "blue"),
    1289: new Note (460, 0, 0.6, 1, "pink"), 
    1380: new Note (430, 0, 0.3, 1, "yellow"), 
    1463: new Note (400, 0, 0, 1, "blue"),
    1541: new Note (370, 0, -0.3, 1, "black"), 
    2651: new Note (430, 0, 0.3, 1, "yellow"), 
    2977: new Note (400, 0, 0, 1, "blue"),
    3051: new Note (460, 0, 0.6, 1, "pink"), 
    3131: new Note (430, 0, 0.3, 1, "yellow"), 
    3217: new Note (400, 0, 0, 1, "blue"),
    3298: new Note (460, 0, 0.6, 1, "pink"), 
    3381: new Note (430, 0, 0.3, 1, "yellow"), 
    3474: new Note (400, 0, 0, 1, "blue"),
    3547: new Note (460, 0, 0.6, 1, "pink"), 
    3633: new Note (430, 0, 0.3, 1, "yellow"), 
    4139: new Note (400, 0, 0, 1, "blue"),
    4642: new Note (430, 0, 0.3, 1, "yellow"), 
    4957: new Note (400, 0, 0, 1, "blue"),
    5037: new Note (460, 0, 0.6, 1, "pink"), 
    5131: new Note (430, 0, 0.3, 1, "yellow"), 
    5221: new Note (400, 0, 0, 1, "blue"),
    5301: new Note (460, 0, 0.6, 1, "pink"), 
    5387: new Note (430, 0, 0.3, 1, "yellow"), 
    5475: new Note (400, 0, 0, 1, "blue"), 
    5555: new Note (370, 0, -0.3, 1, "black"), 
    6643: new Note (430, 0, 0.3, 1, "yellow"), 
    6982: new Note (400, 0, 0, 1, "blue"), 
    7053: new Note (460, 0, 0.6, 1, "pink"), 
    7134: new Note (430, 0, 0.3, 1, "yellow"), 
    7223: new Note (400, 0, 0, 1, "blue"), 
    7296: new Note (460, 0, 0.6, 1, "pink"), 
    7384: new Note (430, 0, 0.3, 1, "yellow"), 
    7470: new Note (400, 0, 0, 1, "blue"), 
    7543: new Note (460, 0, 0.6, 1, "pink"), 
    7633: new Note (430, 0, 0.3, 1, "yellow"), 
    8136: new Note (400, 0, 0, 1, "blue"), 
}


//     {NoteN, time: [567, 5678, 4567, 5678]}
//     {NoteJ, time: [256, 456, 1345, 6789]}
//     {NoteK, time: [567, 5678, 4567, 5678]}
//     {NoteL, time: [567, 5678, 4567, 5678]}
//     {NoteM, time: [567, 5678, 4567, 5678]}
// ]






//     musicScore : function () {
//         {NoteN, time:[]}
//         {NoteJ, time:[]}
//         {NoteK, time:[]}
//         {NoteL, time:[]}
//         {NoteM, time:[]}
//     }
//     drawAllNotes : function () {


//     }

// ]

// var score = []








/* UPDATE ALL THE CANVAS */

// function updateCanvasAll(){
//     ctx.beginPath();
//     clearCanvas();
//     updateCanvasN();
//     updateCanvasJ();
//     updateCanvasK();
//     updateCanvasL();
//     updateCanvasM();
//     ctx.fill();
//     drawLines();
//     drawFretBoard();
//     ctx.stroke();
//     window.requestAnimationFrame(updateCanvasAll);
// }
// window.requestAnimationFrame(updateCanvasAll);




/* INTRO */

// Note L 636
// Note K 952
// Note M 1038
// Note L 1127
// Note K 1213
// Note M 1289
// Note L 1380
// Note K 1463
// Note J 1541
// Note L 2651
// Note K 2977
// Note M 3051
// Note L 3131
// Note K 3217
// Note M 3298
// Note L 3381
// Note K 3474
// Note M 3547
// Note L 3633
// Note K 4139
// Note L 4642
// Note K 4957
// Note M 5037
// Note L 5131
// Note K 5221
// Note M 5301
// Note L 5387
// Note K 5475
// Note J 5555
// Note L 6643
// Note K 6982
// Note M 7053
// Note L 7134
// Note K 7223
// Note M 7296
// Note L 7384
// Note K 7470
// Note M 7543
// Note L 7633
// Note K 8136










    // function drawPaths(){
    //     ctx.beginPath();
    //     ctx.moveTo(360,0);
    //     ctx.lineTo(0,800);
    //     ctx.moveTo(390,0);
    //     ctx.lineTo(200,800);
    //     ctx.moveTo(420,0);
    //     ctx.lineTo(400,800);
    //     ctx.moveTo(450,0);
    //     ctx.lineTo(600,800);
    //     ctx.moveTo(480,0);
    //     ctx.lineTo(800,800);
    //     ctx.stroke();
    // };

    // drawPaths()
    
