function downloadPDF(){

let loading = document.getElementById("loadingMessage");
loading.style.display = "flex";

let btn = document.querySelector(".btn-full");
btn.disabled = true;

let noPrintElements = document.querySelectorAll(".no-print");

noPrintElements.forEach(el=>{
el.style.visibility="hidden";
});

const { jsPDF } = window.jspdf;

let pdf = new jsPDF("p","mm","a4");

let element = document.querySelector("#resultCard");

pdf.html(element,{
callback:function(pdf){

let name = document.querySelector('[contenteditable="true"]').innerText;

pdf.save(name + "-result.pdf");

noPrintElements.forEach(el=>{
el.style.visibility="visible";
});

loading.style.display="none";
btn.disabled = false;

},
x:10,
y:10,
width:180,
windowWidth:900
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

const { jsPDF } = window.jspdf;

let pdf = new jsPDF("p","mm","a4");

let element = document.querySelector("#resultCard");

pdf.html(element,{
callback:function(pdf){

pdf.save("simple-result.pdf");

optional.forEach(el=>{
el.style.display="";
});

noPrintElements.forEach(el=>{
el.style.visibility="visible";
});

loading.style.display="none";
btn.disabled = false;

},
x:10,
y:10,
width:180,
windowWidth:900
});
}