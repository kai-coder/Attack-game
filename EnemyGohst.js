class SpikeyEnemyGohst{
    constructor(image,starterx,startery,id,id2) {
      this.id=id;
      this.image=image;
      this.damage=5;
      this.speed=clickcanvas.width/1000;
      this._x=starterx;
      this._y=startery;
      this.star=starterx;
      this.start=startery;
      this.width_height=clickcanvas.width/35;
      this._draw=true;
      this.id2=id2
    }
    update(speedmultiplier2){
      if (this.id==0){
        this.speedmultiplier2=speedmultiplier2;
        this._x-=this.speed*this.speedmultiplier2;
      }
      if (this.id==1){
        this.speedmultiplier2=speedmultiplier2;
        this._x+=this.speed*this.speedmultiplier2;
      }
      if (this.id==2){
        this.speedmultiplier2=speedmultiplier2;
        this._y+=this.speed*this.speedmultiplier2;
      }
      if (this.id==3){
        this.speedmultiplier2=speedmultiplier2;
        this._y-=this.speed*this.speedmultiplier2;
      }
      if (this._x>=this.width_height/4 & this.id==1){
        readysecondrow.push("1");
        this._x=this.star;
      }else {
        this._draw=true
      }
      if (this._x<=clickcanvas.width/8*7-this.width_height/4 & this.id==0){
        readyfirstrow.push("1");
        this._x=this.star;
      }else {
        this._draw=true
      }
      if (this._y>=this.width_height/4 & this.id==2){
        readythirdrow.push("1");
        this._y=this.start;
      }else {
        this._draw=true
      }
      
      if (this._y<=clickcanvas.height-this.width_height/4 & this.id==3){
        readyfourthrow.push("1");
        this._y=this.start;
      }else {
        this._draw=true
      }
    }
    get x() {
      return this._x;
    }
    set x(a) {
      this._x = a;
    }
    get y() {
      return this._y;
    }
    set y(d) {
      this._y = d;
    }
    get draw2() {
      return this._draw;
    }
    set draw2(c) {
      this._draw = c;
    }
    get id3() {
      return this.id2;
    }
    set id3(c) {
      this.id2 = c;
    }
  }