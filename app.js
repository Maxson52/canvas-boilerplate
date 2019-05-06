const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
const cw = canvas.width;
const ch = canvas.height;

let objects = [];

//create the object function
function Object(x,y) {
    this.x = x;
    this.y = y;
}

//initiate the object
Object.prototype.init = function() {
    ctx.fillStyle = '#77dd77';
    ctx.fillRect(this.x,this.y,10,10);
};

//create the object (coords, size etc.)
function create() {
    for (let i = 0; i < 10; i++) {
        let randX = Math.floor(Math.random() * cw + 1);
        let randY = Math.floor(Math.random() * ch + 1);
        
        objects.push(new Object(randX,randY));
    }
        
}

//main update loop
function update() {
    ctx.clearRect(0,0,cw,ch);
    
    for (let i = 0; i < objects.length; i++) {
        let currrentObject = objects[i];
        currrentObject.init();
    }
    
    requestAnimationFrame(update);
}

create();
update();