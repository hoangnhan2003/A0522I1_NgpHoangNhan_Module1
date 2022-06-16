function createRectangle() {
    var crt = document.getElementById("canva_rectangle").getContext("2d");
    var x = Math.random()* window.innerWidth;
    var y = Math.random()* window.innerHeight;
    var width = Math.floor(Math.random()*150);
    var height = Math.floor(Math.random()*150);
    var color = getRandomColor();
    // crt.fillStyle = color;
    crt.fillRect(x,y,width,height)
    crt.fillStyle = color;

}

let  Rectangle=function (x,y) {
    this.x =x;
    this.y=y;
    this.getArea = function () {
        return x*y;
    }
    this.getPerimeter = function () {
        return 2*(x+y);
    }
    this.createRectangle = createRectangle();
}
function getRandomHex() {
    return Math.floor(Math.random()*255)
}
/*function getRandomColor(){
    var red = getRamdomHex();
    var blue = getRamdomHex();
    var green = getRamdomHex();
    return "rbg(" + red + "," + blue + "," + green + ")";
}*/
function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
/*function createRectangle() {
    var crt = document.getElementById("canva_rectangle").getContext("2d");
    var x = Math.random()* window.innerWidth;
    var y = Math.random()* window.innerHeight;
    var width = Math.floor(Math.random()*70);
    var height = Math.floor(Math.random()*70);
    var color = getRandomColor();
   // crt.fillStyle = color;
    crt.fillRect(x,y,width,height)
    crt.fillStyle = color;

}*/

let rectangle = new Rectangle(2,3);
function Draw() {
    for(var i=0;i<40;i++){
        createRectangle();
    }
}
Draw();