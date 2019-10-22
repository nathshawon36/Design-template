const myInp= document.getElementById("myInp");
const btnCp= document.getElementById("btnCp");

btnCp.onclick = function(){
	 myInp.select();
	 document.execCommand("Copy");
};