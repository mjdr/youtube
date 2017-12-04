
//Gene
//[x,y,w,h,r,g,b,score]

var 
	canvas = [],
	ctx = [],
	width = 300,
	height = 300;

var 
	fixedGenes=[randomGene(),randomGene()],
	candidates;

function init(){
	
	initCanvases();
	loadSRCImage();
	drawFixedGenes();
	drawNewGene(randomGene());
	
	//drawGene(randomGene());
	
}
function initCanvases(){
	var ids = ["drawable", "src_image", "fixed_genes", "all_genes"];
	for(var id of ids){
		canvas[id] = document.getElementById(id);
		ctx[id] = canvas[id].getContext('2d');
		
		canvas[id].width = width;
		canvas[id].height = height;
		
	}
}

function loadSRCImage(){
	var srcImage = new Image();
	srcImage.onload = function(){
		ctx['src_image'].drawImage(this,0,0);
	};
	srcImage.src = "src.jpg";
}

function drawFixedGenes() {
	ctx['fixed_genes'].clearRect(0,0,width,height);
	
	for(var i = 0;i < fixedGenes.length;i++)
		drawGene(ctx['fixed_genes'], fixedGenes[i]);
}
function drawNewGene(gene) {
	ctx['all_genes'].drawImage(canvas['fixed_genes'],0,0);
	drawGene(ctx['all_genes'], gene);
}

function compateToSRC(){
	var srcData = ctx['src_image'].getImageData(0,0,width,height);
	var newData = ctx['all_genes'].getImageData(0,0,width,height);
	
	for(var i = 0;i < width * height;i++){
		
	}
	
}


function drawGene(cx, gene){
	var g = gene;
	cx.fillStyle = "rgb("+g[4]+","+g[5]+","+g[6]+")";
	cx.beginPath();
	cx.ellipse(g[0], g[1], g[2], g[3],0, 0, 2 * Math.PI);
	cx.fill();
}

function randomGene(){
	return [
		width * Math.random(),
		height * Math.random(),
		width * Math.random()/4,
		height * Math.random()/4,
		256 * Math.random(),
		256 * Math.random(),
		256 * Math.random(),
		0
	];
}



