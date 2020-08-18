class steam{
    constructor(starterx,startery) {
      this.image=new Image();
      this.image.src="Steam.png";
      this._x=starterx;
      this._y=startery;
      this.start=0;
      this.width_height=window.innerHeight/8;
      this.nosteam=false
    }
    draw(){
        steamctx.drawImage(this.image, this._x-(this.width_height2/2),this._y-(this.width_height2/2),this.width_height2, this.width_height2);
    }
    update(speedmultiplier2){
    this.start+=0.1*speedmultiplier2;
    if (this.start<=0.3){
      this.width_height2=this.width_height*0.3;
    }
    if (this.start>0.3 & this.start<=0.6){
      this.width_height2=this.width_height*0.6;
    }
    if (this.start>0.6 & this.start<=0.9){
      this.width_height2=this.width_height*0.9;
    }
    if (this.start>1.2){
      this.nosteam=true;
    }
    }
    get steam() {
      return this.nosteam;
    }
    set steam(steam) {
      this.nosteam = steam;
    }
  }