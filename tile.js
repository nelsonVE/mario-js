class Tile{
    
    constructor(ctx, x, y, coll, type){
        this.TILESIZE = 32;
        this.ctx = ctx;
        this.img = new Image();
        this.x = x*32;
        this.y = y*32;
        this.coll = coll;
        this.tile_x = 0;
        this.tile_y = 0;
        this.img.src = "images/tileset.png";

        switch(type){
            case "dirt":
                
                break;
            case "wood_platform":
                this.tile_x = this.TILESIZE*24;
                this.tile_y = this.TILESIZE*2;
                break;
            case "wood_wall_center":
                this.tile_x = this.TILESIZE*24;
                this.tile_y = this.TILESIZE*3;
                break;
            case "wood_wall_right":
                this.tile_x = this.TILESIZE*25;
                this.tile_y = this.TILESIZE*3;
                break;
            case "wood_wall_left":
                this.tile_x = this.TILESIZE*23;
                this.tile_y = this.TILESIZE*3;
                break;
            case "wood_corner_left":
                this.tile_x = this.TILESIZE*23;
                this.tile_y = this.TILESIZE*2;
                break;
            case "wood_corner_right":
                this.tile_x = this.TILESIZE*25;
                this.tile_y = this.TILESIZE*2;
                break;
            case "sky_blue":
                this.tile_x = this.TILESIZE*12;
                this.tile_y = this.TILESIZE*15;
                break;
        }

        this.draw();
    }

    draw(){
        this.ctx.drawImage(this.img, this.tile_x, this.tile_y, this.TILESIZE, this.TILESIZE, this.x, this.y, this.TILESIZE, this.TILESIZE);
    }

    get getTilesize(){
        return this.TILESIZE;
    }

    get getTop(){
        return this.y;
    }

    get getLeft(){
        return this.x;
    }

    get getRight(){
        return this.x + this.TILESIZE;
    }

    get getBottom(){
        return this.y + this.TILESIZE;
    }

    coll(x, y){
        return (x == this.x && y == this.y)?this.coll:null;
    }
}