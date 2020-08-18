class bullet{
    constructor(image,x,y,loxationtox,locationtoy,shooterangle,cx,cy) {
      this.image=new Image();
      this.image.src=image;
      this.width=window.innerHeight/35;
      this.height=window.innerHeight/25;
      this.angle=shooterangle;
      this.radians = (Math.PI / 180) * shooterangle;
      this._x=x;
      this._y=y;
      this.cos = Math.cos(this.radians),
      this.sin = Math.sin(this.radians),
      this._nx = (this.cos * (this._x - cx)) - (this.sin * (this._y - cy)) + cx;
      this._ny = (this.cos * (this._y - cy)) + (this.sin * (this._x - cx)) + cy;
      this.mouseX=loxationtox;
      this.mouseY=locationtoy;
      this.bulletSpeed=window.innerHeight/450;
      this.distancefromplacex = this._nx-(this._nx)+(this._nx-cx);
      this.distancefromplacey = this._ny-(this._ny)+(this._ny-cy);
      this.magnitude = Math.sqrt(this.distancefromplacex * this.distancefromplacex + this.distancefromplacey * this.distancefromplacey);
      this.velocityScale = this.bulletSpeed / this.magnitude;
      this.xvelocity = this.distancefromplacex * this.velocityScale;
      this.yvelocity = this.distancefromplacey * this.velocityScale;
    }
    draw(){
      bulletctx.save();
      bulletctx.translate(this._nx, this._ny);
      bulletctx.rotate((this.angle+270) * Math.PI/180);
      bulletctx.drawImage(this.image, -(this.width/2),-(this.height/2),this.width, this.height);
      bulletctx.restore();
    }
    update(multiplier){
      this._nx+=this.xvelocity*multiplier;
      this._ny+=this.yvelocity*multiplier;
    }
    get x() {
      return this._nx;
    }
    set x(a) {
      this._nx = a;
    }
    get y() {
      return this._ny;
    }
    set y(d) {
      this._ny = d;
    }
  }