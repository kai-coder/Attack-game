class bullet{
    constructor(image,x,y,shooterangle,cx,cy,id1) {
      this.id1=id1;
      this.image=new Image();
      this.image.src=image;
      this.width=height/35;
      this.height=height/25;
      this.angle=shooterangle;
      if(this.id1==1){
        this.radians = (Math.PI / 180) * (shooterangle+20);
      }else if(this.id1==2){
        this.radians = (Math.PI / 180) * (shooterangle-20);
      }else if(this.id1==3){
        this.radians = (Math.PI / 180) * shooterangle;
      }
      this.radians2 = (Math.PI / 180) * shooterangle;
      this._x=x;
      this._y=y;
      this.cos = Math.cos(this.radians2);
      this.sin = Math.sin(this.radians2);
      this.cos2 = Math.cos(this.radians);
      this.sin2 = Math.sin(this.radians);
      this._nx = (this.cos * (this._x - cx)) - (this.sin * (this._y - cy)) + cx;
      this._ny = (this.cos * (this._y - cy)) + (this.sin * (this._x - cx)) + cy;
      this.bulletSpeed=height/450;
      this.distancefromplacex = (this.cos2 * (this._x - cx)) - (this.sin2 * (this._y - cy)) + cx-cx;
      this.distancefromplacey = (this.cos2 * (this._y - cy)) + (this.sin2 * (this._x - cx)) + cy-cy;
      this.magnitude = Math.sqrt(this.distancefromplacex * this.distancefromplacex + this.distancefromplacey * this.distancefromplacey);
      this.velocityScale = this.bulletSpeed / this.magnitude;
      this.xvelocity = this.distancefromplacex * this.velocityScale;
      this.yvelocity = this.distancefromplacey * this.velocityScale;
    }
    draw(){
    if(this.id1==1){
      bulletctx.save();
      bulletctx.translate(this._nx, this._ny);
      bulletctx.rotate((this.angle+290) * Math.PI/180);
      bulletctx.drawImage(this.image, -(this.width/2),-(this.height/2),this.width, this.height);
      bulletctx.restore();
    }else if(this.id1==2){
      bulletctx.save();
      bulletctx.translate(this._nx, this._ny);
      bulletctx.rotate((this.angle+250) * Math.PI/180);
      bulletctx.drawImage(this.image, -(this.width/2),-(this.height/2),this.width, this.height);
      bulletctx.restore();
    }else if(this.id1==3){
      bulletctx.save();
      bulletctx.translate(this._nx, this._ny);
      bulletctx.rotate((this.angle+270) * Math.PI/180);
      bulletctx.drawImage(this.image, -(this.width/2),-(this.height/2),this.width, this.height);
      bulletctx.restore();
    }
    }
    update(multiplier){
      this.width=height/35;
      this.height=height/25;
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