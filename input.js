var keysDown = {};

var KeyDown = function (e){
    keysDown[e.keyCode] = true;
};

var KeyUp = function (e){
    delete keysDown[e.keyCode]
};

addEventListener('keyup', KeyUp);
addEventListener('keydown', KeyDown);