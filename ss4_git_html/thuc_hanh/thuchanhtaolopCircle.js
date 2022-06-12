
let Circle = function (radius,color) {
    this.radius = radius;
    this.color = color
    this.getRadius = function () {
        return radius;
    }
    this.getArea = function () {
        return Math.PI *radius*radius
    }
    this.AlertS = function () {
        alert(this.getArea());
    }
}

let circle = new Circle(2,"red");
let aria = circle.getArea();
let radius = circle.getRadius();
let circle2 = new Circle(3,"Blue");
let aria2 = circle2.getArea();
let radius2 = circle2.getRadius();
console.log("Dien tich:"+aria+ "Ban kinh:"+ radius );
console.log("Dien tich:"+aria2+ "Ban kinh:"+ radius2 );
