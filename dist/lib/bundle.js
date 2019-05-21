!function(t){var s={};function i(h){if(s[h])return s[h].exports;var e=s[h]={i:h,l:!1,exports:{}};return t[h].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,s,h){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:h})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var h=Object.create(null);if(i.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)i.d(h,e,function(s){return t[s]}.bind(null,e));return h},i.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="",i(i.s=0)}([function(t,s,i){"use strict";i.r(s);var h=class{constructor(t,s,i,h,e,a){this.ctx=t,this.rotation=s,this.x=i,this.y=h,this.speed=7,this.draw=this.draw.bind(this),this.radius=2,this.score=e,this.image=new Image,this.imgw=21,this.imgh=21,this.itemupdate=a}draw(){if(this.itemupdate){switch(this.rotation){case 0:this.image.src="./asset/bul_top.png";break;case-90:this.image.src="./asset/bul_left.png";break;case 90:this.image.src="./asset/bul_right.png";break;case 180:this.image.src="./asset/bul_bot.png"}this.ctx.drawImage(this.image,0,0,255,255,this.x-10,this.y-10,this.imgw,this.imgh),this.updatedir()}else this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill(),this.ctx.fillStyle="green",this.updatedir()}destroyBul(){this.radius=0,this.speed=0,this.x=0,this.y=0,this.imgw=0,this.imgh=0}updatedir(){switch(this.rotation){case 0:this.y-=this.speed;break;case-90:this.x-=this.speed;break;case 90:this.x+=this.speed;break;case 180:this.y+=this.speed}}};var e=class{constructor(t){this.sound=document.createElement("audio"),this.sound.src=t,this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),this.sound.style.display="none"}play(){this.sound.play()}stop(){this.sound.pause()}};var a=class{constructor(t,s,i,h){this.ctx=t,this.canvasWidth=500,this.canvasHeight=500,this.w=84,this.h=84,this.x=this.canvasWidth/2,this.y=this.canvasHeight/2,this.dx=0,this.dy=0,this.positionX=1,this.positionY=0,this.posE=1,this.posY=164,this.speed=5,this.rotation=0,this.tankImg=s,this.bullet=[],this.score=i,this.playerLife=h,this.dyingTime=0,this.transform=new Image,this.itemupdate=!1,this.time=1,this.left=!1,this.right=!1,this.top=!1,this.bot=!1,this.singleShot=!1,this.shotDelay=0,this.userAction=this.userAction.bind(this)}drawTank(){this.userAction(),this.ctx.save(),this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.rotate(this.rotation*Math.PI/180),this.ctx.drawImage(this.tankImg,this.positionX*this.w,this.positionY,this.w,this.h,-this.w/4,-this.h/4,this.w/2,this.h/2),this.ctx.restore(),this.bullet.length>0&&this.bullet.forEach(t=>{t.score=this.score,t.draw()})}shoot(){this.bullet.push(new h(this.ctx,this.rotation,this.x,this.y,this.score,this.itemupdate))}deletePlayer(){this.posY=164,this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.rotate(this.rotation*Math.PI/180),this.ctx.drawImage(this.tankImg,this.posE*this.w,this.posY,this.w,this.h,-this.w/4,-this.h/4,this.w/2,this.h/2),this.ctx.restore();for(var t=0;t<2;t++)this.posE++;this.posE>=3&&(this.w=0,this.h=0)}userAction(){this.x+=this.dx,this.y+=this.dy,this.singleShot&&(this.shotDelay++,this.shotDelay>=5&&(this.shoot(),this.singleShot=!1,this.shotDelay=0)),this.left&&(this.rotation=-90,this.dx=-Math.abs(this.speed),this.x-this.w/4<0&&(this.x=this.w/4)),this.right&&(this.rotation=90,this.dx=Math.abs(this.speed),this.x>this.canvasWidth-this.w/4&&(this.x=this.canvasWidth-this.w/4)),this.top&&(this.rotation=0,this.dy=-Math.abs(this.speed),this.y-this.h/4<0&&(this.y=this.h/4)),this.bot&&(this.rotation=180,this.dy=Math.abs(this.speed),this.y>this.canvasHeight-this.h/4&&(this.y=this.canvasHeight-this.h/4)),document.addEventListener("keydown",t=>{this.positionX++,this.positionX>=7&&(this.positionX=1),37===t.keyCode&&(this.left=!0),39===t.keyCode&&(this.right=!0),38===t.keyCode&&(this.top=!0),40===t.keyCode&&(this.bot=!0),32===t.keyCode&&(this.singleShot=!0)}),document.addEventListener("keyup",t=>{32===t.keyCode&&(this.singleShot=!1),37===t.keyCode&&(this.left=!1,this.dx=0),39===t.keyCode&&(this.right=!1,this.dx=0),38===t.keyCode&&(this.top=!1,this.dy=0),40===t.keyCode&&(this.bot=!1,this.dy=0)})}};var o=class{constructor(t,s,i,h){this.ctx=t,this.rotation=s,this.x=i,this.y=h,this.draw=this.draw.bind(this),this.radius=2,this.imgw=21,this.imgh=21,this.speed=3}draw(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill(),this.ctx.fillStyle="green",this.updatedir()}updatedir(){switch(this.rotation){case 0:this.y-=this.speed;break;case-90:this.x-=this.speed;break;case 90:this.x+=this.speed;break;case 180:this.y+=this.speed}}};var r=class extends a{constructor(t,s){super(),this.positionY=84,this.positionX=1,this.x=Math.random()<.5?0:500,this.y=Math.random()<.5?0:500,this.ballx=this.x,this.bally=this.y,this.dy=5,this.speed=.5,this.ballSpeed=10,this.rotation=180,this.ctx=t,this.radius=2,this.tankImg=s,this.timer=0,this.bullet=null,this.newbullet=!1}drawEnemy(t,s){this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.rotate(this.rotation*Math.PI/180),this.ctx.drawImage(this.tankImg,this.positionX*this.w,this.positionY,this.w,this.h,-this.w/4,-this.h/4,this.w/2,this.h/2),this.ctx.restore(),this.timer++,5===this.timer&&(this.positionX++,this.timer=0),this.positionX>7&&(this.positionX=1),this.updatedir(t,s),this.shootBullet()}destroyBul(){this.bullet=null}hitPlayer(t,s){return Math.abs(this.bullet.x-t)<42&&Math.abs(this.bullet.y-s)<42&&(this.bullet=new o(this.ctx,this.rotation,this.x,this.y),!0)}shootBullet(){(null===this.bullet||this.bullet.x>500||this.bullet.x<0||this.bullet.y>500||this.bullet.y<0)&&(this.bullet=new o(this.ctx,this.rotation,this.x,this.y)),this.bullet.draw()}updatedir(t,s){0===this.w&&0===this.h&&(this.x=-42,this.y=-42),s<this.y?(this.rotation=0,this.y-=this.speed):t<this.x&&(this.rotation=-90,this.x-=this.speed),t>this.x?(this.rotation=90,this.x+=this.speed):s>this.y&&(this.rotation=180,this.y+=this.speed),this.y===s&&(t<this.x?this.rotation=-90:this.rotation=90),this.x===t&&(s<this.y?this.rotation=0:this.rotation=180)}destroyEnemy(){super.deletePlayer()}};var n=class{constructor(t,s){this.ctx=t,this.image=new Image,this.w=84,this.h=84,this.positionX=1,this.positionY=3*this.w,this.sound=new e("./asset/explosion.mp3"),this.border=[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]],this.currentStage=1,this.image.src="./asset/tank-sprite.png",this.player=s,this.borderLife=3,(new Image).src="./asset/tank.jpg"}setup(){this.border.forEach((t,s)=>{t.forEach((t,i)=>{(0===t||7===t)&&s>=3&&s<=7&&i>=3&&i<=7&&(this.border[s][i]=0)})})}draw(){this.border.forEach((t,s)=>{t.forEach((t,i)=>{this.player.bullet.forEach(h=>{let e=[h.x,h.y],a=[s*this.w/2,i*this.h/2];this.player.x<a[0]&&(a[0]+=this.w/2),this.player.y<a[1]&&(a[1]+=this.h/2),Math.abs(e[0]-a[0])<this.w/2&&Math.abs(e[1]-a[1])<this.h/2&&(a[0],7===t&&(h.destroyBul(),this.borderLife--,0===this.borderLife&&(this.sound.play(),this.border[s][i]=0,this.borderLife=3)))}),1===t?this.ctx.drawImage(this.image,t*this.w,this.positionY,this.w,this.h,s*this.w/2,i*this.h/2,this.w/2,this.h/2):3===t?this.ctx.drawImage(this.image,t*this.w,this.positionY,this.w,this.h,s*this.w/2,i*this.h/2,this.w/2,this.h/2):7===t?this.ctx.drawImage(this.image,t*this.w,this.positionY,this.w,this.h,s*this.w/2,i*this.h/2,this.w/2,this.h/2):this.ctx.drawImage(this.image,0,0,this.w,this.h,s*this.w/2,i*this.h/2,this.w/2,this.h/2)})})}};var l=class{constructor(t,s){this.ctx=t,this.image=new Image,this.image.src=s,this.x=300*Math.random()+42,this.y=300*Math.random()+42,this.w=21,this.h=21}draw(){this.ctx.drawImage(this.image,0,0,255,255,this.x,this.y,this.w,this.h)}drop(t,s){this.ctx.drawImage(this.image,0,0,255,255,t,s,this.w,this.h)}consumed(){this.w=0,this.h=0}};var c=class{constructor(t){this.ctx=t,this.score=0,this.tankImg=new Image,this.tankImg.src="./asset/tank-sprite.png",this.playerLife=100,this.player=new a(this.ctx,this.tankImg,this.score,this.playerLife),this.enemies=[],this.draw=this.draw.bind(this),this.stage=1,this.life=100,this.wid=42,this.hei=42,this.onStage=!0,this.gg=!1,this.enemyLife=3,this.background=new n(this.ctx,this.player),this.wait=0,this.item=new l(this.ctx,"./asset/bul_top.png"),this.itemupdate=!1,this.sound=new e("./asset/Cannon+1.mp3")}drawEnemy(){var t=setInterval(()=>this.enemies.push(new r(this.ctx,this.tankImg)),333);this.enemies.length>=this.stage&&(console.log("hit",this.enemies.length,this.stage),clearInterval(t))}setup(){this.drawEnemy(),this.player.x=250,this.player.y=250,this.background.setup()}playable(){this.ctx.clearRect(0,0,500,500),this.background.draw(),this.player.drawTank(),this.itemConsumed(),this.enemycol(),this.bgconstraint(this.player),this.ggman()}draw(){this.onStage&&(this.playerLife>0?(this.playable(),requestAnimationFrame(this.draw)):this.gameover())}enemycol(){this.enemies.forEach(t=>{t.drawEnemy(this.player.x,this.player.y);let s=[this.player.x,this.player.y],i=[t.x,t.y];this.bgconstraint(t),this.tankTotank(s,i),this.playerLife<=0&&this.player.deletePlayer(),t.hitPlayer(this.player.x,this.player.y)&&(this.playerLife-=10),this.player.bullet.forEach(s=>{let h=[s.x,s.y];this.bulTotank(h,i,t,s)})})}bgconstraint(t){this.background.border.forEach((s,i)=>{s.forEach((s,h)=>{let e=i*this.wid,a=i*this.wid+this.wid,o=h*this.hei,r=h*this.hei+this.hei;this.player,this.wid,this.hei,t.x,0!==s&&(-90===t.rotation&&(Math.abs(t.y-o)<21||Math.abs(t.y-r)<=21)&&Math.abs(t.x-a)<=21&&(t.x++,t.dx=0),90===t.rotation&&(Math.abs(t.y-o)<21||Math.abs(t.y-r)<=21)&&Math.abs(t.x-e)<=21&&(t.x--,t.dx=0),0===t.rotation&&(Math.abs(t.x-a)<21||Math.abs(t.x-e)<=21)&&Math.abs(t.y-r)<=21&&(t.y++,t.dy=0),180===t.rotation&&(Math.abs(t.x-a)<21||Math.abs(t.x-e)<=21)&&Math.abs(t.y-o)<=21&&(t.y--,t.dy=0))})})}ggman(){this.enemies.length>0&&0===this.enemies.filter(t=>""!==t).length&&(this.ctx.font="30px Acme",this.ctx.fillStyle="#00dc00",this.ctx.fillText(`Score ${Math.floor(this.score)}`,40,40),this.ctx.fillText(`Player Life ${Math.floor(this.playerLife/10)}`,300,40),this.wait++,80===this.wait&&(this.onStage=!1,this.ctx.clearRect(0,0,500,500),this.ctx.beginPath(),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,500,500),this.ctx.font="30px Acme",this.ctx.closePath(),this.ctx.fillStyle="#00dc00",this.ctx.fillText(`Stage ${this.stage} cleared`,150,150),this.ctx.fillText(`Press [Enter] to Begin Stage ${this.stage+1}`,70,250),this.stage=this.stage+1,this.wait=0))}gameover(){this.gg=!0,this.ctx.clearRect(0,0,500,500),this.ctx.color="white",this.ctx.fillRect(0,0,500,500),this.ctx.font="40px Lobster",this.ctx.fillStyle="black",this.ctx.fillText(`Your Score is ${Math.floor(this.score)}`,120,160),this.ctx.font="20px Lobster",this.ctx.fillText("Press R to restart the game",120,300)}tankTotank(t,s){this.ctx.font="30px Acme",this.ctx.fillStyle="#00dc00",this.ctx.fillText(`Score ${Math.floor(this.score)}`,40,40),this.ctx.fillText(`Player Life ${Math.floor(this.playerLife/10)}`,300,40),Math.abs(t[0]-s[0])<42&&Math.abs(t[1]-s[1])<42&&(this.playerLife-=1)}itemConsumed(){this.stage>=4&&(this.item.draw(),Math.abs(this.player.x-this.item.x)<21&&Math.abs(this.player.y-this.item.y)<21&&(this.player.itemupdate=!0,this.itemupdate=!0,this.item.consumed()))}bulTotank(t,s,i,h){Math.abs(t[0]-s[0])<42&&Math.abs(t[1]-s[1])<42&&(this.itemupdate?this.enemyLife-=1.5:this.enemyLife-=1,h.destroyBul(),0===this.enemyLife&&(this.sound.play(),this.score+=10,this.player.score=this.score,i.destroyEnemy(),delete this.enemies[this.enemies.indexOf(i)],this.enemyLife=3))}animate(){this.player.userAction(),document.addEventListener("keydown",t=>{13===t.keyCode&&!1===this.onStage&&(this.onStage=!0,this.setup(),this.draw())})}};var d=class{constructor(t){this.ctx=t,this.game=new c(this.ctx),this.startg=!1,this.cleared=!1,this.restart=!1,this.start=this.start.bind(this)}start(){this.game.setup(),this.game.draw(),this.game.animate()}intro(){this.ctx.clearRect(0,0,500,500),this.ctx.font="40px Arial Black",this.ctx.fillStyle="black",this.ctx.fillText("Tank Shooter",50,90),this.ctx.font="16px Arial Black",this.ctx.fillStyle="white",this.ctx.fillText("Press S to start a game",100,250),this.ctx.fillText("Acheive 100 Score to upgrade your bullet",100,300),this.ctx.fillText("Enjoy!",100,350)}gameFunc(){this.intro(),document.addEventListener("keydown",t=>{83===t.keyCode&&!1===this.startg?(this.startg=!0,this.start()):82===t.keyCode&&!0===this.game.gg&&(this.game=new c(this.ctx),this.startg=!1,this.gameFunc())})}};var y=class{constructor(t){this.bgm=document.getElementById("myAudio"),this.bgsound=document.getElementById("music-button"),this.icon=document.getElementById("icon")}musicAction(){this.bgsound.addEventListener("click",()=>{this.bgm.paused?(this.bgm.play(),this.icon.className="fas fa-volume-up"):(this.bgm.pause(),this.icon.className="fas fa-volume-off")})}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("MyCanvas");t.width=500,t.height=500;const s=t.getContext("2d"),i=new y;new d(s).gameFunc(),i.musicAction()}),window.onload=function(){document.getElementById("myAudio").play()}}]);
//# sourceMappingURL=bundle.js.map