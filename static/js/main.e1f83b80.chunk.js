(this.webpackJsonpmydesigns=this.webpackJsonpmydesigns||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(3),r=n.n(l),s=n(1),o=n.n(s),h=6,c=61,u=function(e){h=e.target.value,console.log(h,c)},d=function(e){c=e.target.value,console.log(h,c)},m=function(e,t){e.createCanvas(e.displayWidth/8*7,e.displayHeight/2).parent(t),e.angleMode(e.DEGREES)},p=function(e){e.background(0),e.stroke(255,150,150),e.translate(e.width/2,e.height/2),e.noFill(),e.beginShape();for(var t=0;t<361;t++){var n=t*c,a=150*e.sin(h*n),i=a*e.cos(n),l=a*e.sin(n);e.vertex(i,l)}e.endShape()};function f(){return i.a.createElement("div",null,i.a.createElement("center",null,i.a.createElement("h2",null,"MAURER ROSE")),i.a.createElement("br",null),i.a.createElement("label",null,"change N value:"),i.a.createElement("input",{id:"typeinp",type:"range",min:"2",max:"7",defaultValue:"6",onChange:u,step:"1"}),i.a.createElement("label",null,"change D value:"),i.a.createElement("input",{id:"typeinp",type:"range",min:"26",max:"71",defaultValue:"61",onChange:d,step:"5"}),i.a.createElement(o.a,{setup:m,draw:p}))}for(var g=4,E=Math.pow(2,g),w=E*E,y=[],v=1,x=.2,b=500,k=0;k<w;k++)y.push([0,0]);function C(e){for(var t=3&e,n=[[0,0],[0,1],[1,1],[1,0]][t],a=1;a<g;a++){e>>=2;var i=Math.pow(2,a);if(0==(t=3&e)){var l=n[0];n[0]=n[1],n[1]=l}else if(1==t)n[1]=n[1]+i;else if(2==t)n[1]=n[1]+i,n[0]=n[0]+i;else if(3==t){var r=i-1-n[0];n[0]=i-1-n[1],n[1]=r,n[0]=n[0]+i}}return n}var M,S=function(e,t){e.createCanvas(7*e.windowWidth/8,7*e.windowWidth/8).parent(t),b=e.width;for(var n=0;n<w;n++){y[n]=C(n);var a=e.width/E;y[n][0]=y[n][0]*a+a/2,y[n][1]=y[n][1]*a+a/2}},T=function(e){e.background(0),e.stroke(255),e.noFill();for(var t=1;t<v;t++)e.stroke(255,(170+t)%255,(100+t)%255),e.line(y[t][0],y[t][1],y[t-1][0],y[t-1][1]);(v+=x)>=y.length&&(v=y.length,x=0)},R=function(e){g=e.target.value,v=0,E=Math.pow(2,g),w=E*E,y=[];for(var t=0;t<w;t++){y[t]=C(t);var n=b/E;y[t][0]=y[t][0]*n+n/2,y[t][1]=y[t][1]*n+n/2}g<=4?x=.2:g<=6?x=4:g<8?x=60:8==g&&(x=400)};function W(){return i.a.createElement("div",null,i.a.createElement("center",null,i.a.createElement("h2",null,"HILBERT's space filling curve")),i.a.createElement("br",null),i.a.createElement("label",null,"change order value:"),i.a.createElement("input",{id:"typeinp",type:"range",min:"3",max:"8",defaultValue:"4",onChange:R,step:"1"}),i.a.createElement(o.a,{setup:S,draw:T}))}var N,I=0;function O(e){this.x=0,this.y=0,this.score=0,this.dir="left",this.total=1,this.tail=[],this.xspeed=3,this.yspeed=0,this.width=e.width,this.height=e.height,this.update=function(){if(this.total===this.tail.length)for(var t=0;t<this.tail.length-1;t++)this.tail[t]=this.tail[t+1];this.tail[this.total-1]=e.createVector(this.x,this.y),this.tail[this.total-1]=e.createVector(this.x,this.y),this.x=e.constrain(this.x+this.xspeed,0,this.width-20),this.y=e.constrain(this.y+this.yspeed,0,this.height-20)},this.show=function(e){e.fill(255);for(var t=0;t<this.tail.length;t++)e.rect(this.tail[t].x,this.tail[t].y,20,20);e.rect(this.x,this.y,20,20)}}var Y=function(e){e.total++},A=function(e){N.x=Math.floor(20+Math.random()*(e.width-30)),N.y=Math.floor(20+Math.random()*(e.height-30)),e.rect(N.x,N.y,20,20)},D=function(e,t){e.createCanvas(7*e.windowWidth/8,7*e.windowWidth/16).parent(t),M=new O(e),N=e.createVector(Math.floor(Math.random()*(e.width-20)/20),Math.floor(Math.random()*(e.height-20)/20)),A(e)},V=function(e){if(M.score<50){if(e.background(0),M.update(),M.show(e),e.fill(255,0,0),e.rect(N.x,N.y,20,20),e.dist(M.x,M.y,N.x,N.y)<10){for(var t=0;t<5;t++)Y(M),M.update();!function(e){e.score+=1,I+=1}(M),A(e)}e.noStroke(),e.fill("lightgreen"),e.textSize(20),e.textAlign(e.CENTER),e.text("score = "+e.str(I),e.width/2,e.height-50)}else e.background(0),e.noStroke(),e.fill("lightgreen"),e.textSize(40),e.textAlign(e.CENTER),e.text("YOU WIN \n  ",e.width/2,e.height/2)},X=function(e){83===e.keyCode?"UP"!==M.dir&&(M.xspeed=0,M.yspeed=3,M.dir="DOWN"):68===e.keyCode?"LEFT"!==M.dir&&(M.xspeed=3,M.yspeed=0,M.dir="RIGHT"):65===e.keyCode?"RIGHT"!==M.dir&&(M.xspeed=-3,M.yspeed=0,M.dir="LEFT"):87===e.keyCode&&"DOWN"!==M.dir&&(M.xspeed=0,M.yspeed=-3,M.dir="UP")},H=function(e){e.mouseX<e.width/2&&e.mouseY<=3*e.height/4&&e.mouseY>=e.height/4?(M.xspeed=-5,M.yspeed=0):e.mouseY>e.height/2&&e.mouseX<=3*e.width/4&&e.mouseX>=e.width/4?(M.xspeed=0,M.yspeed=5):e.mouseX>e.width/2&&e.mouseY<=3*e.height/4&&e.mouseY>=e.height/4?(M.xspeed=5,M.yspeed=0):e.mouseY<e.height/2&&e.mouseX<=3*e.width/4&&e.mouseX>=e.width/4&&(M.xspeed=0,M.yspeed=-5)};function P(){return i.a.createElement("div",null,i.a.createElement("center",null,i.a.createElement("h2",null,"Simple Snake Game")),i.a.createElement("br",null),i.a.createElement("label",null,"W-S-A-D for direction in pc for mobile tap at the edges (you cannot lose in this game so dont try it)",i.a.createElement("br",null),i.a.createElement("h4",null,"SCORE 50 POINTS TO WIN")),i.a.createElement(o.a,{setup:D,draw:V,keyPressed:X,mouseClicked:H}))}var j,F=0,G=["Welcome to My Miscellaneous","page.This page consists of","my simple p5.js projects","along with some minigames","These are the projects i did in","my free time for myself","when i get bored also ","these texts should appear","in starwars syles.if it doesn't","then something went wrong","refresh the page ':-)","if it does work may","the force be with you"],U=function(e,t){e.createCanvas(e.windowWidth,e.windowHeight/2,e.P3D).parent(t),j=e.join(G,"\n"),F=e.height},z=function(e){e.background(0),e.fill(238,213,75),e.textSize(64),e.textAlign(e.CENTER),e.text(j,0,F,e.width,10*e.height),(F-=1)<=4*-e.height&&(F=e.height)};function L(){return i.a.createElement("div",null,i.a.createElement("center",null,i.a.createElement("h2",null,"INTRO")),i.a.createElement("br",null),i.a.createElement(o.a,{setup:U,draw:z}))}function B(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(L,null)),i.a.createElement("div",null,i.a.createElement(f,null)," "),i.a.createElement("div",null,i.a.createElement(W,null)),i.a.createElement("div",null,i.a.createElement(P,null)))}n(9);var J=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(B,null))};r.a.render(i.a.createElement(J,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.e1f83b80.chunk.js.map