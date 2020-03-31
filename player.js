class Player{
    constructor(src = "", tile_width = 32, tile_height = 32){
        this.img_player = new Image();
        this.img_player.src = src;
        this.y = 0;
        this.x = 0;
        this.old_y = 0;
        this.old_x = 0;
        this.vx = 0;
        this.vy = 0;
        this.gravity = 2;
        this.acceleration = 0.1;
        this.jump_max = 32;
        this.move = 20;
        this.vy_max = 32;
        this.vx_max = 4;
        this.jumping = false;
        this.moving = false;
        this.moving_left = false;
        this.moving_right = false;
        this.falling = true;
        this.direction = "none";
        this.tilesize = 32;
    }

    spawnPlayer(x, y){
        this.x = x;
        this.y = y;
    }

    drawPlayer(){
        ctx.drawImage(this.img_player, 0, 0, this.img_player.width, this.img_player.height, this.x, this.y, this.img_player.width, this.img_player.height);
    }

    move_x(direction){
        switch(direction){
            case "left":
                this.vx = this.move;
                this.moving = true;
                this.direction = "left";
                this.moving_left = true;
                break;
            case "right":
                this.vx = this.move;
                this.moving = true;
                this.direction = "right";
                this.moving_right = true;
                break;
        }
    }

    jump(){
        if(this.jumping === false){
            var jump = new Audio("sounds/jump.wav");
            jump.play();
            this.jumping = true;
            this.vy = this.jump_max;
        }
    }

    get getOldY(){
        return this.old_y;
    }

    get getTop(){
        return this.y;
    }

    get getLeft(){
        return this.x;
    }

    get getRight(){
        return this.x + this.img_player.width;
    }

    get getBottom(){
        return this.y + this.img_player.height;
    }

    get getWidth(){
        return this.img_player.width;
    }

    get getHeight(){
        return this.img_player.height;
    }

    setY(y){
        this.old_y = this.y;
        this.y = y;
    }
}