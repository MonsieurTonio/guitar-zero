var chronometer = new Chronometer();


document.getElementById("start-button").onclick = function() {
    let audio = new Audio("sounds/400Coups.mp3");
    audio.play();
    chronometer.startClick();
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




/* CREATE NOTE */

function Note (xArg, yArg, speedXArg, speedYArg, colorArg) {
    this.x = xArg;
    this.y = yArg;
    this.speedX = speedXArg;
    this.speedY = speedYArg;
    this.color = colorArg;
}

Note.prototype.updateNote = function (){
    clearCanvas();
    drawLines();
    drawFretBoard();
    ctx.beginPath();
    ctx.fillStyle = this.color;
    this.x += this.speedX;
    this.y += this.speedY;
    ctx.arc(this.x, this.y, 10*this.y*0.01, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    window.requestAnimationFrame(this.updateNote.bind(this));
}

var NoteN = new Note (340, 0, -0.6, 1, "red");
var NoteJ = new Note (370, 0, -0.3, 1, "black");
var NoteK = new Note (400, 0, 0, 1, "blue");
var NoteL = new Note (430, 0, 0.3, 1, "yellow");
var NoteM = new Note (460, 0, 0.6, 1, "pink");

var allNotes =[]


function drawNotes () {
    NoteN.updateNote();
    NoteJ.updateNote();
    NoteK.updateNote();
    NoteK.updateNote();
    NoteL.updateNote();
    NoteM.updateNote();
    clearCanvas();
}
drawNotes();


function clearCanvas() {
    ctx.clearRect(0,0,800,400);

    // for (var i = 0; i < allNotes.length; i++) {
    //   var myNote = allNotes[i];
    //   myNote.updateNote();
    // }
}

window.requestAnimationFrame(clearCanvas);





        // /* GENERATE NOTE N */
        // window.requestAnimationFrame(NoteN.updateNote.bind(NoteN));

        // /* GENERATE NOTE J */
        // window.requestAnimationFrame(NoteJ.updateNote.bind(NoteJ));

        // /* GENERATE NOTE K */
        // window.requestAnimationFrame(NoteK.updateNote.bind(NoteK));

        // /* GENERATE NOTE L */
        // window.requestAnimationFrame(NoteL.updateNote.bind(NoteL));

        // /* GENERATE NOTE M */
       

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
    
