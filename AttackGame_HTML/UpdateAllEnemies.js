function UpdateAllEnemies(){
    for(AllEnemiesUpdate=0;AllEnemiesUpdate<AllEnemies.length;AllEnemiesUpdate++){
        AllEnemies[AllEnemiesUpdate].update(speedmultiplier);
        if (AllEnemies[AllEnemiesUpdate].drawing==false){
            if (health-AllEnemies[AllEnemiesUpdate].damage<0){
                health=0;
            }else{
            health-=AllEnemies[AllEnemiesUpdate].damage;
            }
            AllEnemies.splice(AllEnemies[AllEnemiesUpdate],1);
        }
    }
}
