var canvas, ctx;

var createGame = function(width, height){
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    document.body.appendChild(canvas);
}

var then;
var startGame = function(){
    then = Date.now();
    loop();
}

var loop = function(){
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;
    
    requestAnimationFrame(loop);
}

var update = function (modifier) {
    allGameObjects.forEach(function(gameObject) {
        gameObject.update(modifier);
    });
}

var render = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    allGameObjects.forEach(function(gameObject) {
        gameObject.render();
    });
};
