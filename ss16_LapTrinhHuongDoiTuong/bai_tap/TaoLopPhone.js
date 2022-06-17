let PHONE = function (id,name) {
    this.StatusPhone = false;
    this.id = id;
    this.name = name;
    this.memory1 = []; // Store edit message
    this.memory2 = []; // Store message arrived
    this.memory3 = []; // Store message sent
    this.message = "";
    this.battery = 100;
    // get status on or off of phone
    this.checkStatus = function () {
        if(this.StatusPhone){
            this.battery -=1;
            return this.StatusPhone;
        }

    }

    function refillBattery() {
        this.battery+=1;
    }
    this.TurnOnOrOff = function () {
        if(this.StatusPhone){
            this.StatusPhone = false;
        }
        else{
            this.StatusPhone = true;
        }
    }
    this.charge = function () {
            setInterval(refillBattery,10000);
        }


    this.saveMessage= function () {
        if(this.StatusPhone){
            this.battery -=1;
            this.memory2.push(this.message);
            this.memory3.push(this.message);
        }
        }
    this.saveMessageTexting = function (message) {
        if(this.StatusPhone){
            this.memory1.push(message);
            this.battery -=1;
        }

        }
    this.setMessage = function (message) {
        if(this.StatusPhone){
            this.message = message;
            this.battery -=1;
        }
        }
    this.getMessage = function () {
        if(this.StatusPhone){
            this.battery -=1;
            return this.message;

        }
        }
    this.seeArrivedMessaged = function () {
        if(this.StatusPhone){
            this.battery -=1;
            return this.memory2;

        }
        }
    this.sendMessage = function (message,mobile) {
        if(this.StatusPhone){
            this.battery -=1;
            mobile.setMessage(message);
            mobile.saveMessage();
            this.saveMessageTexting(message);
        }
        }
    this.seeSentMessage = function () {
        if(this.StatusPhone){
            this.battery -=1;
            return this.memory3;
        }

        }


}
let Iphone = new PHONE(1,"iphone");
let Samsung = new PHONE(2,"samsung");
Iphone.TurnOnOrOff();

Iphone.sendMessage("Message from Ihone to Samsung",Samsung);
Iphone.sendMessage("Message 2 from Ihone to Samsung",Samsung);
let messageSamsung = Samsung.getMessage();
Samsung.sendMessage("Samsung send message",Iphone);

