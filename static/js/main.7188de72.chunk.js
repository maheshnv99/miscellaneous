(this.webpackJsonpmydesigns=this.webpackJsonpmydesigns||[]).push([[0],{10:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(3),i=t.n(r),u=t(1),c=t.n(u),o=6,s=61,p=function(e){o=e.target.value,console.log(o,s)},m=function(e){s=e.target.value,console.log(o,s)},d=function(e,n){e.createCanvas(e.displayWidth,e.displayHeight/2).parent(n),e.angleMode(e.DEGREES)},v=function(e){e.background(0),e.stroke(255,150,150),e.translate(e.width/2,e.height/2),e.noFill(),e.beginShape();for(var n=0;n<361;n++){var t=n*s,a=150*e.sin(o*t),l=a*e.cos(t),r=a*e.sin(t);e.vertex(l,r)}e.endShape()};function E(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h2",null,"MAURER ROSE")),l.a.createElement("br",null),l.a.createElement("label",null,"change N value:"),l.a.createElement("input",{id:"typeinp",type:"range",min:"2",max:"7",defaultValue:"6",onChange:p,step:"1"}),l.a.createElement("label",null,"change D value:"),l.a.createElement("input",{id:"typeinp",type:"range",min:"26",max:"71",defaultValue:"61",onChange:m,step:"5"}),l.a.createElement(c.a,{setup:d,draw:v}))}for(var f=4,h=Math.pow(2,f),g=h*h,w=[],y=1,b=.2,k=500,x=0;x<g;x++)w.push([0,0]);function C(e){for(var n=3&e,t=[[0,0],[0,1],[1,1],[1,0]][n],a=1;a<f;a++){e>>=2;var l=Math.pow(2,a);if(0==(n=3&e)){var r=t[0];t[0]=t[1],t[1]=r}else if(1==n)t[1]=t[1]+l;else if(2==n)t[1]=t[1]+l,t[0]=t[0]+l;else if(3==n){var i=l-1-t[0];t[0]=l-1-t[1],t[1]=i,t[0]=t[0]+l}}return t}var M=function(e,n){e.createCanvas(7*e.windowWidth/8,7*e.windowWidth/8).parent(n),k=e.width;for(var t=0;t<g;t++){w[t]=C(t);var a=e.width/h;w[t][0]=w[t][0]*a+a/2,w[t][1]=w[t][1]*a+a/2}},R=function(e){e.background(0),e.stroke(255),e.noFill();for(var n=1;n<y;n++)e.stroke(255,(170+n)%255,(100+n)%255),e.line(w[n][0],w[n][1],w[n-1][0],w[n-1][1]);(y+=b)>=w.length&&(y=w.length,b=0)},S=function(e){f=e.target.value,y=0,h=Math.pow(2,f),g=h*h,w=[];for(var n=0;n<g;n++){w[n]=C(n);var t=k/h;w[n][0]=w[n][0]*t+t/2,w[n][1]=w[n][1]*t+t/2}f<=4?b=.2:f<=6?b=4:f<8?b=60:8==f&&(b=400)};function V(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h2",null,"HILBERT's space filling curve")),l.a.createElement("br",null),l.a.createElement("label",null,"change order value:"),l.a.createElement("input",{id:"typeinp",type:"range",min:"3",max:"8",defaultValue:"4",onChange:S,step:"1"}),l.a.createElement(c.a,{setup:M,draw:R}))}function W(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(E,null)," "),l.a.createElement("div",null,l.a.createElement(V,null)))}t(9);var A=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(W,null))};i.a.render(l.a.createElement(A,null),document.getElementById("root"))},4:function(e,n,t){e.exports=t(10)},9:function(e,n,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.7188de72.chunk.js.map