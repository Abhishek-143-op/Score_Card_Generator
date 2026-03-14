function downloadPDF(){

let loading = document.getElementById("loadingMessage");
loading.style.display = "flex";

let btn = document.querySelector(".btn-full");
btn.disabled = true;

let noPrintElements = document.querySelectorAll(".no-print");

noPrintElements.forEach(el=>{
el.style.visibility="hidden";
});

let element = document.querySelector("#resultCard");

html2canvas(element,{scale:2}).then(canvas=>{

const { jsPDF } = window.jspdf;

let pdf = new jsPDF("p","mm","a4");

let imgData = canvas.toDataURL("image/png");

let imgWidth = 190;
let imgHeight = canvas.height * imgWidth / canvas.width;

pdf.addImage(imgData,"PNG",10,10,imgWidth,imgHeight);

let name = document.querySelector('.edit').innerText;

pdf.save(name + "-result.pdf");

noPrintElements.forEach(el=>{
el.style.visibility="visible";
});

loading.style.display="none";
btn.disabled=false;

});

}



function downloadWithoutOptional(){

let loading = document.getElementById("loadingMessage");
loading.style.display = "flex";

let btn = document.querySelector(".btn-simple");
btn.disabled = true;

let noPrintElements = document.querySelectorAll(".no-print");

noPrintElements.forEach(el=>{
el.style.visibility="hidden";
});

let optional = document.querySelectorAll(".optional");

optional.forEach(el=>{
el.style.display="none";
});

let element = document.querySelector("#resultCard");

html2canvas(element,{scale:2}).then(canvas=>{

const { jsPDF } = window.jspdf;

let pdf = new jsPDF("p","mm","a4");

let imgData = canvas.toDataURL("image/png");

let imgWidth = 190;
let imgHeight = canvas.height * imgWidth / canvas.width;

pdf.addImage(imgData,"PNG",10,10,imgWidth,imgHeight);

pdf.save("simple-result.pdf");

optional.forEach(el=>{
el.style.display="";
});

noPrintElements.forEach(el=>{
el.style.visibility="visible";
});

loading.style.display="none";
btn.disabled=false;

});

}