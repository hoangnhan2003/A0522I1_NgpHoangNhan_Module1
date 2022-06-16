let Temperature = function (celsius) {
    this.celsius = celsius;
    this.convertF = function () {
        return 1.8*celsius +32;
    }
    this.convertKalvin =function () {
        return celsius +273;
    }

}
let temperature = new Temperature(25);
let Fahrenheit = temperature.convertF();
let Kalvin = temperature.convertKalvin();
console.log("Nhiet do:"+temperature.celsius+"do F:"+Fahrenheit+"do K:"+Kalvin);