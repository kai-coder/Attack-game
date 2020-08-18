function updatespawn(){
    for(UpdateEnemySpawn=EnemyGetReady.length;UpdateEnemySpawn>0;UpdateEnemySpawn-=1){
        EnemyGetReady[UpdateEnemySpawn-1].update(speedmultiplier);
    }
}