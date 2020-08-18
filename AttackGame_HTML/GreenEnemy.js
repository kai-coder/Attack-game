class GreenEnemy{
    constructor(image,starterx,startery,direction,typeofEnemy) {
      this.image=image;
      this._direction=direction;
      this._type=typeofEnemy;
      this._width_height=window.innerWidth/35.897;
      this._x=starterx;
      this._y=startery;
      this._draw=true;
      this._damage=3;
      this.speed=window.innerWidth/888.888;
    }
    draw(){
      enemyctx.drawImage(this.image, this._x-(this._width_height/2),this._y-(this._width_height/2),this._width_height, this._width_height);
    }
    update(multiplier){
      this.multiplier=multiplier;
      if (this._direction==0){
        this._x-=this.speed*multiplier;
      }
      if (this._direction==1){
        this._x+=this.speed*multiplier;
      }
      if (this._direction==2){
        this._y+=this.speed*multiplier;
      }
      if (this._direction==3){
        this._y-=this.speed*multiplier;
      }
      if (this._x<=-this._width_height/2 & this._direction==0){
        this._draw=false
      }
      if (this._x>=window.innerWidth/8*7+this._width_height/2 & this._direction==1){
        this._draw=false
      }
      if (this._y>=window.innerHeight+this._width_height/2 & this._direction==2){
        this._draw=false
      }
      if (this._y<=-this._width_height/2 & this._direction==3){
        this._draw=false
      }
    }
    get x() {
      return this._x;
    }
    set x(x) {
      this._x = x;
    }
    get y() {
      return this._y;
    }
    set y(y) {
      this._y = y;
    }
    get drawing() {
      return this._draw;
    }
    set drawing(draw) {
      this._draw = draw;
    }
    get direction() {
      return this._direction;
    }
    set direction(direction) {
      this._direction = direction;
    }  
    get typeofEnemy() {
      return this._type;
    }
    set typeofEnemy(type) {
      this._type = type;
    }
    get damage() {
      return this._damage;
    }
    set damage(damage) {
      this._damage = damage;
    }
    get width_height(){
        return this._width_height;
      }
      set width_height(widthheight){
        this._width_height=widthheight;
      }
  }