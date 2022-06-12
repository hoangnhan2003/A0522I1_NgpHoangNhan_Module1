function Circle(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
// Hàm lấy thông số mã màu ngẫu nhiên mã hex
function getRandomHex() {
    return Math.floor(Math.random()*255);
}
// dựa vào thông số ngấu nhiên mã hex ta có thể lấy ra được màu ngẫu nhiên

function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
function CreateCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random()*80) // tạo bán kính ngẫu nhiên từ 1-80
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle = new Circle(x,y,radius);
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
    // phương thức arc để vẽ một hình tròn cx,cy là tọa độ của hình tròn,r là bán kính của hình tròn,
    ctx.fillStyle = color;
    ctx.fill();
}
/*function createCircle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}*/
function creatMultipleCircle() {
    for(var i=0;i<50;i++){
        CreateCircle();
    }

}
creatMultipleCircle();
