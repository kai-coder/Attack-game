function moveupgradebar(){
    if (UpgradeBar==true){
        if (UpgradeBarSlide<clickcanvas.width/3.5){
          UpgradeBarSlide+=clickcanvas.width/56
        }
      }else if (UpgradeBar==false){
        if (UpgradeBarSlide>0){
          UpgradeBarSlide-=clickcanvas.width/56;
        }
      }
}