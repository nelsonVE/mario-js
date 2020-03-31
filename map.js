class Map{
    constructor(ctx, width, height, movement){
        this.width = width;
        this.height = height;
        this.tile = new Array();
        this.background = new Image();
        this.background.src = "images/background.jpg";
        this.movement = movement;
    }

    createMap(movement){
        ctx.drawImage(this.background, 0, 0, this.background.width+movement, this.background.height);

        this.tile[0] = new Tile(ctx, 0, 15, true, "wood_platform");
        this.tile[1] = new Tile(ctx, 1, 15, true, "wood_platform");
        this.tile[2] = new Tile(ctx, 2, 15, true, "wood_platform");
        this.tile[3] = new Tile(ctx, 3, 15, true, "wood_platform");
        this.tile[4] = new Tile(ctx, 4, 15, true, "wood_platform");
        this.tile[5] = new Tile(ctx, 5, 14, true, "wood_corner_left");
        this.tile[6] = new Tile(ctx, 6, 13, true, "wood_corner_left");
        this.tile[7] = new Tile(ctx, 7, 12, true, "wood_corner_left");
        this.tile[8] = new Tile(ctx, 2, 15, true, "wood_platform");
        this.tile[9] = new Tile(ctx, 2, 15, true, "wood_platform");
        this.tile[10] = new Tile(ctx, 6, 14, true, "wood_wall_center");
        this.tile[11] = new Tile(ctx, 7, 14, true, "wood_wall_center");
        this.tile[12] = new Tile(ctx, 7, 15, true, "wood_wall_center");
        this.tile[13] = new Tile(ctx, 7, 13, true, "wood_wall_center");
        this.tile[14] = new Tile(ctx, 6, 15, true, "wood_wall_center");
        this.tile[15] = new Tile(ctx, 5, 15, true, "wood_wall_center");
        this.tile[16] = new Tile(ctx, 8, 12, true, "wood_corner_right");
        this.tile[17] = new Tile(ctx, 8, 13, true, "wood_wall_right");
        this.tile[18] = new Tile(ctx, 8, 14, true, "wood_wall_right");
        this.tile[19] = new Tile(ctx, 8, 15, true, "wood_wall_right");
        this.tile[20] = new Tile(ctx, 11, 12, true, "wood_corner_left");
        this.tile[21] = new Tile(ctx, 11, 13, true, "wood_wall_left");
        this.tile[22] = new Tile(ctx, 11, 14, true, "wood_wall_left");
        this.tile[23] = new Tile(ctx, 11, 15, true, "wood_wall_left");
        this.tile[24] = new Tile(ctx, 12, 12, true, "wood_platform");
        this.tile[25] = new Tile(ctx, 13, 12, true, "wood_platform");
        this.tile[26] = new Tile(ctx, 14, 12, true, "wood_platform");
        this.tile[27] = new Tile(ctx, 15, 12, true, "wood_platform");
        this.tile[28] = new Tile(ctx, 15, 13, true, "wood_wall_center");
        this.tile[29] = new Tile(ctx, 15, 14, true, "wood_wall_center");
        this.tile[30] = new Tile(ctx, 15, 15, true, "wood_wall_center");
        this.tile[31] = new Tile(ctx, 14, 13, true, "wood_wall_center");
        this.tile[32] = new Tile(ctx, 14, 14, true, "wood_wall_center");
        this.tile[33] = new Tile(ctx, 14, 15, true, "wood_wall_center");
        this.tile[34] = new Tile(ctx, 13, 13, true, "wood_wall_center");
        this.tile[35] = new Tile(ctx, 13, 14, true, "wood_wall_center");
        this.tile[36] = new Tile(ctx, 13, 15, true, "wood_wall_center");
        this.tile[37] = new Tile(ctx, 12, 13, true, "wood_wall_center");
        this.tile[38] = new Tile(ctx, 12, 14, true, "wood_wall_center");
        this.tile[39] = new Tile(ctx, 12, 15, true, "wood_wall_center");
    
        
    }

    collision(player, direction){
        let coll = false;
        for(let index = 0; index < this.tile.length; index++){
            if(this.tile[index].coll === false){
                continue;
            }
            if((player.getBottom) >= this.tile[index].getTop && player.vy <= 0 &&
                ((player.getLeft <= this.tile[index].getRight && player.getLeft >= this.tile[index].getLeft) ||
                (player.getRight <= this.tile[index].getRight && player.getRight >= this.tile[index].getLeft))){
                player.vy = 0;
                if(player.falling === true || player.jumping === true){
                    player.setY(this.tile[index].getTop - player.getHeight);
                }
                coll = true;
            }

            if(direction == "right"){
                if((player.getRight) >= this.tile[index].getLeft && player.getTop >= this.tile[index].getTop
                    && player.getBottom >= this.tile[index].getBottom && player.getLeft < this.tile[index].getLeft){
                    player.vx = 0;
                    player.moving_right = false;
                    coll = true;
                }
            }
            if(direction == "left"){
                if((player.getLeft) <= this.tile[index].getRight && player.getTop >= this.tile[index].getTop
                    && player.getBottom >= this.tile[index].getBottom && player.getRight > this.tile[index].getRight){
                    player.vx = 0;
                    player.moving_left = false;
                    coll = true;
                }
            }
        }

        return coll;
    }
}