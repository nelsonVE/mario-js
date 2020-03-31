const FPS = 45;
const WIDTH = 32*16;
const HEIGHT = 32*16;
var canvas, ctx;
var img_floor, img_background;
var player = new Player("images/mario.png");
var map = new Map(10, 10);
var count = 0;

setInterval(() => {
    main();
}, 1000/FPS);

function images_load(){
    img_floor = new Image();
    img_background = new Image();

    img_background.src = "images/dirt.png";
}

function draw_in_tile(image, x, y){
    x = x*32;
    y = y*32;
    ctx.drawImage(image, 0, 0, image.width, image.height, x, y, 32, 32);
}

function draw_mario(){
    var background_move = (count < 50)?10:background_move;
    background_move = (count >= 50)?-10:background_move;

    map.createMap(background_move);
    player.drawPlayer();
    count = (count == 100)?0:count+1;
}

function canvas_load(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    images_load();
}

function canvas_delete(){
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
}

function main(){
    canvas_delete();
    draw_mario();
    physics();
}

function physics(){


    if(player.jumping === true){
        player.vy = (player.vy < (player.vy_max*-1))?-player.vy_max:player.vy - player.gravity;
        player.jumping = !map.collision(player, "down");
        player.setY(player.getTop - player.vy);
    }

    if(player.falling === true){
        player.vy = (player.vy >= player.vy_max*-1)?player.vy - player.gravity:-player.vy_max;
        player.falling = !map.collision(player, "down");
        player.setY(player.getTop - player.vy);
    }

    if(player.moving === true){
        let increase = player.acceleration + player.vx;
        if(player.direction == "right" && player.moving_right){
            player.vx = (increase < player.vx_max)?increase:player.vx_max;
            player.falling = (player.jumping === false)?!map.collision(player, "right"):false;
            player.x += player.vx;
        } else if(player.direction == "left" && player.moving_left){
            player.vx = (increase < player.vx_max)?increase:player.vx_max;
            player.falling = (player.jumping === false)?!map.collision(player, "left"):false;
            player.x -= player.vx;
        }
    } 

    player.vy = (player.jumping === false && player.falling === false)?0:player.vy;
}

document.addEventListener("keypress", (event) =>{
    switch(event.keyCode){
        case 119: // Jump (W)
            player.jump();
            break;
        case 97: // Left (A)
            player.move_x("left");
            break;
        case 100: // Right (D)
            player.move_x("right");
            break;
    }

});

document.addEventListener("keyup", (event) =>{
    switch(event.keyCode){
        case 68: // Left (A)
            player.vx = 0;
            player.moving = false;
            break;
        case 65: // Right (D)
            player.vx = 0;
            player.moving = false;
            break;
    }

});