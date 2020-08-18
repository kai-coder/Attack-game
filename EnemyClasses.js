class BlueEnemy{
    constructor(image,starterx,startery,id,id2) {
      this.id=id;
      this.image=image;
      this.damage=4;
      this.speed=clickcanvas.width/700;
      this._x=starterx;
      this._y=startery;
      this.width_height=clickcanvas.width/25-(clickcanvas.width/25/4);
      this._draw=true;
      this.id10=id2;
    }
    draw(speedmultiplier2){
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
      if (this._x<=-this.width_height/2 & this.id==0){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      if (this._x>=clickcanvas.width/8*7+this.width_height/2 & this.id==1){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      
      if (this._y<=-this.width_height/2 & this.id==3){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      
      if (this._y>=clickcanvas.height+this.width_height/2 & this.id==2){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      enemyctx.save();
      enemyctx.translate(this._x, this._y);
      enemyctx.rotate(this.angle * Math.PI/180);
      enemyctx.drawImage(this.image, -(this.width_height/2),-(this.width_height/2),this.width_height, this.width_height);
      enemyctx.restore();
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
    get id2() {
      return this.id;
    }
    set id2(v) {
      this.id = v;
    }  
    get id3() {
      return this.id10;
    }
    set id3(h) {
      this.id10 = h;
    }
  }
  class GreenEnemy{
    constructor(image,starterx,startery,id,id2) {
      this.id=id;
      this.image=image;
      this.damage=3;
      this.speed=clickcanvas.width/800;
      this._x=starterx;
      this._y=startery;
      this.width_height=clickcanvas.width/25-(clickcanvas.width/25/3.294);
      this._draw=true;
      this.id10=id2;
    }
    draw(speedmultiplier2){
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
      if (this._x<=-this.width_height/2 & this.id==0){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      if (this._x>=clickcanvas.width/8*7+this.width_height/2 & this.id==1){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      
      if (this._y<=-this.width_height/2 & this.id==3){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      
      if (this._y>=clickcanvas.height+this.width_height/2 & this.id==2){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      enemyctx.save();
      enemyctx.translate(this._x, this._y);
      enemyctx.rotate(this.angle * Math.PI/180);
      enemyctx.drawImage(this.image, -(this.width_height/2),-(this.width_height/2),this.width_height, this.width_height);
      enemyctx.restore();
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
    get id2() {
      return this.id;
    }
    set id2(v) {
      this.id = v;
    }  
    get id3() {
      return this.id10;
    }
    set id3(h) {
      this.id10 = h;
    }
  }
  class YellowEnemy{
    constructor(image,starterx,startery,id,id2) {
      this.id=id;
      this.image=image;
      this.damage=3;
      this.speed=clickcanvas.width/900;
      this._x=starterx;
      this._y=startery;
      this.width_height=clickcanvas.width/25-(clickcanvas.width/25/2.545);
      this._draw=true;
      this.id10=id2;
    }
    draw(speedmultiplier2){
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
      if (this._x<=-this.width_height/2 & this.id==0){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      if (this._x>=clickcanvas.width/8*7+this.width_height/2 & this.id==1){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      
      if (this._y<=-this.width_height/2 & this.id==3){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      
      if (this._y>=clickcanvas.height+this.width_height/2 & this.id==2){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      enemyctx.save();
      enemyctx.translate(this._x, this._y);
      enemyctx.rotate(this.angle * Math.PI/180);
      enemyctx.drawImage(this.image, -(this.width_height/2),-(this.width_height/2),this.width_height, this.width_height);
      enemyctx.restore();
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
    get id2() {
      return this.id;
    }
    set id2(v) {
      this.id = v;
    }  
    get id3() {
      return this.id10;
    }
    set id3(h) {
      this.id10 = h;
    }
  }
  class RedEnemy{
    constructor(image,starterx,startery,id,id2) {
      this.id=id;
      this.image=image;
      this.damage=1;
      this.speed=clickcanvas.width/1200;
      this._x=starterx;
      this._y=startery;
      this.width_height=clickcanvas.width/25-(clickcanvas.width/25/2.074);
      this._draw=true;
      this.id10=id2;
    }
    draw(speedmultiplier2){
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
      if (this._x<=-this.width_height/2 & this.id==0){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      if (this._x>=clickcanvas.width/8*7+this.width_height/2 & this.id==1){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      
      if (this._y<=-this.width_height/2 & this.id==3){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      
      if (this._y>=clickcanvas.height+this.width_height/2 & this.id==2){
        this._draw=false
            if (health-this.damage<0){
              health=0;
            }else{
              health-=this.damage;
            }
      }
      enemyctx.save();
      enemyctx.translate(this._x, this._y);
      enemyctx.rotate(this.angle * Math.PI/180);
      enemyctx.drawImage(this.image, -(this.width_height/2),-(this.width_height/2),this.width_height, this.width_height);
      enemyctx.restore();
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
    get id2() {
      return this.id;
    }
    set id2(v) {
      this.id = v;
    }  
    get id3() {
      return this.id10;
    }
    set id3(h) {
      this.id10 = h;
    }
  }