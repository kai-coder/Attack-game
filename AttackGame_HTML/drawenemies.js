function drawenemies(){
for(AllEnemiesDraw=AllEnemies.length;AllEnemiesDraw>0;AllEnemiesDraw-=1){
    if (AllEnemies[AllEnemiesDraw-1].typeofEnemy=="SpikeEnemy"){
        AllEnemies[AllEnemiesDraw-1].draw();
    }else if (AllEnemies[AllEnemiesDraw-1].typeofEnemy=="BlueEnemy"){
        AllEnemies[AllEnemiesDraw-1].draw();
    }else if (AllEnemies[AllEnemiesDraw-1].typeofEnemy=="GreenEnemy"){
        AllEnemies[AllEnemiesDraw-1].draw();
    }else if (AllEnemies[AllEnemiesDraw-1].typeofEnemy=="YellowEnemy"){
        AllEnemies[AllEnemiesDraw-1].draw();
    }else if (AllEnemies[AllEnemiesDraw-1].typeofEnemy=="RedEnemy"){
        AllEnemies[AllEnemiesDraw-1].draw();
    }
}
}