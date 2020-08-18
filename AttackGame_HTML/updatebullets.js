function updatebullets(){
    for(AllbulletsUpdate=Allbullets.length;AllbulletsUpdate>0;AllbulletsUpdate-=1){
        Allbullets[AllbulletsUpdate-1].update(speedmultiplier);
      }
}