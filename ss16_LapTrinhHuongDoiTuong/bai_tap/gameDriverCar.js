const ORIENTATION_LEFT = "left";
const ORIENTATION_RIGHT ="right";
const ORIENTATION_UP = "up";
const ORIENTATION_DOWN ="down";

const CAR_WIDTH = 60;
const CAR_HEIGHT = 90;

const DEFAULT_CAR_POSITION_X = 200;
const DEFAULT_CAR_POSITION_Y =200;
const DEFAULT_CAR_SPEED = 30;
const DEFAULT_CAR_ORIENTATION = ORIENTATION_DOWN;

function Car() {
    this.xPositon = DEFAULT_CAR_POSITION_X;
    this.yPositon = DEFAULT_CAR_POSITION_Y;
    this.orientation = DEFAULT_CAR_ORIENTATION;
    this.speed = DEFAULT_CAR_SPEED;
    this.step =2;
    this.buildImage = function () {
        this.image = this.orientation + this.step +'.png';
    }
    this.buildImage();
    this.move = function () {
        switch (this.orientation) {
            case ORIENTATION_DOWN:
                this.yPositon -= this.speed;
                break;
            case ORIENTATION_UP:
                this.yPositon += this.speed;
                break;
            case ORIENTATION_LEFT:
                this.xPositon -= this.speed;
                break;
            case ORIENTATION_RIGHT:
                this.xPositon += this.speed;
                break;

        }
    }
}
