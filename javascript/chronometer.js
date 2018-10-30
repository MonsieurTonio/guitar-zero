/* CONSTRUCTOR */

function Chronometer() {
    this.millisec = "00";
    this.currentTime = 0;
    this.intervalId = -1;
}

Chronometer.prototype.timerHandler = function () {
    this.currentTime += 1;
    this.setTime();
 };

Chronometer.prototype.startClick = function () {
   this.intervalId = setInterval(this.timerHandler.bind(this),1);
};

Chronometer.prototype.setMilliseconds = function () {
    this.millisec = this.currentTime;
    return this.millisec;
};

Chronometer.prototype.setTime = function (){
    this.millisec = this.setMilliseconds()
    // console.log(this.millisec)
}