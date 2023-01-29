document.addEventListener("DOMContentLoaded", ()=> {
   var openFile = function(x) {
	var reader = new FileReader();
	reader.onload = function(){
		var data = reader.result;
		var svgDiv = document.querySelector("#div-svg");
		svgDiv.innerHTML = data;
		document.querySelector("header").innerHTML = x.files.item(0).name;
   }
      reader.readAsText(x.files[0]);
   }
function download(){
	let canvas = document.createElement('canvas');
	let svg = document.querySelector('#div-svg > svg');
	let width = document.querySelector('#width');
	let height = document.querySelector('#height');
	let base64 = btoa(svg.outerHTML);
	let w;
	let h;
	let name;
	let input = document.querySelector('#file');
	if (input.value == "") {
		name = "Bardi"
	}else{
		name = input.files[0].name;
		name += "png";
	}
	if(width.value == ""){w = 500;}else{w = width.value;}
	if(height.value == ""){h = 500;}else{h = height.value;}
	svg.setAttribute('xmlns' , 'http://www.w3.org/2000/svg');
	svg.setAttribute('xmlns:xlink' , 'http://www.w3.org/1999/xlink');
	let img = document.createElement('img');
	img.src = 'data:image/svg+xml;base64,' + base64;
	img.onload = ()=> {
		canvas.setAttribute('width', w);
		canvas.setAttribute('height', h);
		let context = canvas.getContext('2d');
		context.drawImage(img,0,0,w,h);
		let dataURL = canvas.toDataURL('image/png');
		if(window.navigator.msSaveBlob){
window.navigator.msSaveBlob(canvas.msToBlob(), name);
e.preventDefault();
		}else{
let a = document.createElement('a');
let click = new MouseEvent('click');
a.download = name;
a.href = dataURL;
a.dispatchEvent(click);
		}
	}
}
});