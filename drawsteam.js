function drawsteam(){
    for(steamDraw=AllSteam.length;steamDraw>0;steamDraw-=1){
        AllSteam[steamDraw-1].draw();
      }
}