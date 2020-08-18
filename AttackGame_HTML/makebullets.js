function makebullets(){
  for (shoot=0;shoot<Alltowers.length;shoot+=1){
    if (Alltowers[shoot].imagearrayplace==0 & Alltowers[shoot].reload==true){
      Allbullets.push(new bullet("4shooterbullet.png",Alltowers[shoot].x+Alltowers[shoot].width_height/2,Alltowers[shoot].y,Alltowers[shoot].x+clickcanvas.height/70,Alltowers[shoot].y+clickcanvas.height/50+Alltowers[shoot].width_height,Alltowers[shoot].angle,Alltowers[shoot].x,Alltowers[shoot].y,1));
      Allbullets.push(new bullet("4shooterbullet.png",Alltowers[shoot].x+Alltowers[shoot].width_height/2,Alltowers[shoot].y,Alltowers[shoot].x+clickcanvas.height/70,Alltowers[shoot].y+clickcanvas.height/50+Alltowers[shoot].width_height,Alltowers[shoot].angle+90,Alltowers[shoot].x,Alltowers[shoot].y,1));
      Allbullets.push(new bullet("4shooterbullet.png",Alltowers[shoot].x+Alltowers[shoot].width_height/2,Alltowers[shoot].y,Alltowers[shoot].x+clickcanvas.height/70,Alltowers[shoot].y+clickcanvas.height/50+Alltowers[shoot].width_height,Alltowers[shoot].angle+180,Alltowers[shoot].x,Alltowers[shoot].y,1));
      Allbullets.push(new bullet("4shooterbullet.png",Alltowers[shoot].x+Alltowers[shoot].width_height/2,Alltowers[shoot].y,Alltowers[shoot].x+clickcanvas.height/70,Alltowers[shoot].y+clickcanvas.height/50+Alltowers[shoot].width_height,Alltowers[shoot].angle+270,Alltowers[shoot].x,Alltowers[shoot].y,1));
      Alltowers[shoot].reload=false
    }
  }
}