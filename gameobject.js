var allGameObjects = [];

var GameObject = function(name, src, pos={x: 0, y:0}, ang=0, scale={x: 1, y: 1}){
    var self = this;
    this.name = name; // GameObject name
    this.context = ctx; // Canvas context
    allGameObjects.push(this);

    this.controllable = false;

    this.transform = {
        position : {
            x: pos.x,
            y: pos.y,
        },
        angle: ang,
        scale : {
            x: scale.x,
            y: scale.y,
        }
    };

    // Load image
    this.img = new Image();
    this.img.loaded = false;

    this.img.onload = function(){
        console.log(self.name + ' has been loaded.');
        this.loaded = true;
        self.render(ctx);
    };
    this.img.src = src;

    // Render image
    this.render = function(){
        if(this.img.loaded){
            self.context.save();
            self.context.translate(
                this.transform.position.x + this.img.width/2,
                this.transform.position.y + this.img.height/2
            );
            self.context.rotate(this.transform.angle * Math.PI/180);
            self.context.drawImage(this.img,
                -this.img.width/2,
                -this.img.height/2,
                this.img.width * this.transform.scale.x,
                this.img.height * this.transform.scale.y
            );
            self.context.restore();
        }
    }

    this.update = function(modifier){
        if(this.controllable === true){
            if(this.speed){
                if (38 in keysDown) { // Player holding up
                    this.transform.position.y -= this.speed * modifier;
                }
                if (40 in keysDown) { // Player holding down
                    this.transform.position.y += this.speed * modifier;
                }
                if (37 in keysDown) { // Player holding left
                    this.transform.position.x -= this.speed * modifier;
                }
                if (39 in keysDown) { // Player holding right
                    this.transform.position.x += this.speed * modifier;
                }
            }
            else{
                console.info("Missing speed parameter in " + this.name)
            }
        }
    }
};