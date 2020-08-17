function drawbullets(){
    for(AllbulletsDraw=Allbullets.length;AllbulletsDraw>0;AllbulletsDraw-=1){
        Allbullets[AllbulletsDraw-1].draw(speedmultiplier);
      }
}