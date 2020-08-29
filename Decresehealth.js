function DecreaseHealth(){
    for(AllEnemiesDamage=0;AllEnemiesDamage<AllEnemies.length;AllEnemiesDamage++){
    if (AllEnemies[AllEnemiesDamage].drawing==false){
        if (health-AllEnemies[AllEnemiesDamage].damage<0){
            health=0;
        }else{
        health-=AllEnemies[AllEnemiesDamage].damage;
        }
        AllEnemies.splice(AllEnemiesDamage,1);
    }
}
}