function checkbullethit(){
    for(Hitbullet=0;Hitbullet<Allbullets.length;Hitbullet++){
        for(Hitenemy=0;Hitenemy<AllEnemies.length;Hitenemy++){
        if (Hitbullet<Allbullets.length & Hitenemy<AllEnemies.length){
          if (Allbullets[Hitbullet].x+AllEnemies[Hitenemy].width_height/2>=AllEnemies[Hitenemy].x-AllEnemies[Hitenemy].width_height/2 & Allbullets[Hitbullet].x-AllEnemies[Hitenemy].width_height/2<=AllEnemies[Hitenemy].x+AllEnemies[Hitenemy].width_height/2 & Allbullets[Hitbullet].y+AllEnemies[Hitenemy].width_height/2>=AllEnemies[Hitenemy].y-AllEnemies[Hitenemy].width_height/2 & Allbullets[Hitbullet].y-AllEnemies[Hitenemy].width_height/2<=AllEnemies[Hitenemy].y+AllEnemies[Hitenemy].width_height/2){
            AllSteam.push(new steam(AllEnemies[Hitenemy].x,AllEnemies[Hitenemy].y))
            gold+=1;
            if (AllEnemies[Hitenemy].typeofEnemy=="SpikeEnemy"){
                AllEnemies.push(new BlueEnemy(BlueEnemyImage, AllEnemies[Hitenemy].x,AllEnemies[Hitenemy].y,AllEnemies[Hitenemy].direction, "BlueEnemy"))
            }else if (AllEnemies[Hitenemy].typeofEnemy=="BlueEnemy"){
                AllEnemies.push(new GreenEnemy(GreenEnemyImage, AllEnemies[Hitenemy].x,AllEnemies[Hitenemy].y,AllEnemies[Hitenemy].direction, "GreenEnemy"))
            }else if (AllEnemies[Hitenemy].typeofEnemy=="GreenEnemy"){
                AllEnemies.push(new YellowEnemy(YellowEnemyImage, AllEnemies[Hitenemy].x,AllEnemies[Hitenemy].y,AllEnemies[Hitenemy].direction, "YellowEnemy"))
            }else if (AllEnemies[Hitenemy].typeofEnemy=="YellowEnemy"){
                AllEnemies.push(new RedEnemy(RedEnemyImage, AllEnemies[Hitenemy].x,AllEnemies[Hitenemy].y,AllEnemies[Hitenemy].direction, "RedEnemy"))
            }
            AllEnemies.splice(Hitenemy,1)
            Allbullets.splice(Hitbullet,1)
          }
        }
      }
    }
}