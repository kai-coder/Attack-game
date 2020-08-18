function updatesteam(){
    for(steamUpdate=AllSteam.length;steamUpdate>0;steamUpdate-=1){
        AllSteam[steamUpdate-1].update(speedmultiplier);
        if (AllSteam[steamUpdate-1].steam==true){
            AllSteam.splice(steamUpdate-1,1);
          }
      }
}