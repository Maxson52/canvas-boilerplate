const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
//size of canvas - window sized
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
const cw = canvas.width;
const ch = canvas.height;

//random colour generator
const randColour = randColourGenerator();

let objects = [];

//create the object function
function Object(x,y) {
    this.x = x;
    this.y = y;
}

//initiate the object
Object.prototype.init = function() {
    ctx.fillStyle = randColour;
    ctx.fillRect(this.x,this.y,10,10);
};

//create the object (coords, size etc.)
function create() {
    for (let i = 0; i < 10; i++) {
        let randX = randNumberGenerator(cw);
        let randY = randNumberGenerator(ch);
        
        objects.push(new Object(randX,randY));
    }
        
}

//main update loop
function update() {
    ctx.clearRect(0,0,cw,ch);
    
    //for each object, draw them
    for (let i = 0; i < objects.length; i++) {
        let currrentObject = objects[i];
        currrentObject.init();
    }
    
    requestAnimationFrame(update);
}

//call the create function and begin the update loop
create();
update();