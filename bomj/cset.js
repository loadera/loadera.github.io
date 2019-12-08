phys={ // pixels per ms
	g:{ earth:9.81/1000, moon:1.62/1000, venus:8.88/1000, mars:3.86/1000, jupiter:23.95/1000, saturn:10.44/1000, uranus:8.86/1000, sun:273.1/1000, mercury:3.70/1000, neptune:11.09/1000, pluto:0.62/1000 },
speed:{ weapon:{ toy:35/1000, pneumo:110/1000, rpg:112/1000, ak47:700/1000, svd:830/1000 }, sound:343/1000, light:299792458/1000 } 
};
function getImage(canvas){
	var imageData = canvas.toDataURL();
	var image = new Image();
	image.src = imageData;
	return image;
}
function saveImage(image) {
	var link = document.createElement("a");
	link.setAttribute("href", image.src);
	link.setAttribute("download", "canvasImage");
	link.click();
}
function saveCtxImage(){
	var image = getImage(document.getElementById("canv"));
	saveImage(image);
}
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
function randColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
    }
  	return color;
}
function initCanv(){
	var canv = document.getElementById("canv");
	var ctx  = canv.getContext("2d");
}
function canvRes(widthe,heighthe){
	canv.width = widthe;
	canv.height= heighthe;
}
var TO_RADIANS = Math.PI/180; 
function drawRotImage(image, x, y, angle) { 
	ctx.save(); 
	ctx.translate(x, y); 
	ctx.rotate(angle * TO_RADIANS);
	ctx.drawImage(image, -(image.width/2), -(image.height/2));
	ctx.restore(); 
}
function drawColoredRect(x,y,width,height,color){
	ctx.fillStyle=color;
	ctx.fillRect(x,y,width,height);
}
function hideid(id) {var o=document.getElementById(id).style; o.display='none'}
function inlineid(id) {var o=document.getElementById(id).style; o.display='inline'}

