// save notes names
document.getElementById("note1").onclick = ()=>{
    let inputname = document.getElementById("notename1").value;
    localStorage.setItem("note1",inputname);
}
function loadenote(){
    let notename1 = localStorage.getItem("note1");
    document.getElementById("notename1").value = notename1;
}
loadenote();

//note2

document.getElementById("note2").onclick = ()=>{
    let inputname = document.getElementById("notename2").value;
    localStorage.setItem("note2",inputname);
}
function loadenote2(){
    let notename1 = localStorage.getItem("note2");
    document.getElementById("notename2").value = notename1;
}
loadenote2();

//note3
document.getElementById("note3").onclick = ()=>{
    let inputname = document.getElementById("notename3").value;
    localStorage.setItem("note3",inputname);
}
function loadenote3(){
    let notename1 = localStorage.getItem("note3");
    document.getElementById("notename3").value = notename1;
}
loadenote3();

//note4

document.getElementById("note4").onclick = ()=>{
    let inputname = document.getElementById("notename4").value;
    localStorage.setItem("note4",inputname);
}
function loadenote4(){
    let notename1 = localStorage.getItem("note4");
    document.getElementById("notename4").value = notename1;
}
loadenote4();

//save favourite Notes 
 document.getElementById("savefav1").onclick = ()=>{
    console.log("loaded")
    let favinput = document.getElementById("favnote01").value;
    localStorage.setItem("savenote1",favinput);

 }
 function loadfav(){
    let favnotedata = localStorage.getItem("savenote1");
    document.getElementById("favnote01").value = favnotedata;       
}
loadfav();

// save note2
document.getElementById("savefav2").onclick = ()=>{
    console.log("loaded")
    let favinput = document.getElementById("favnote02").value;
    localStorage.setItem("savenote2",favinput);

 }
 function loadfav2(){
    let favnotedata = localStorage.getItem("savenote2");
    document.getElementById("favnote02").value = favnotedata;       
}
loadfav2();

// save note3
document.getElementById("savefav3").onclick = ()=>{
    console.log("loaded")
    let favinput = document.getElementById("favnote03").value;
    localStorage.setItem("savenote3",favinput);

 }
 function loadfav3(){
    let favnotedata = localStorage.getItem("savenote3");
    document.getElementById("favnote03").value = favnotedata;       
}
loadfav3();

// save note4

document.getElementById("savefav4").onclick = ()=>{
    console.log("loaded")
    let favinput = document.getElementById("favnote04").value;
    localStorage.setItem("savenote4",favinput);
 }
 function loadfav4(){
    let favnotedata = localStorage.getItem("savenote4");
    document.getElementById("favnote04").value = favnotedata;       
}
loadfav4();

// save note5
document.getElementById("savefav5").onclick = ()=>{
    console.log("loaded")
    let favinput = document.getElementById("favnote05").value;
    localStorage.setItem("savenote5",favinput);

 }
 function loadfav5(){
    let favnotedata = localStorage.getItem("savenote5");
    document.getElementById("favnote05").value = favnotedata;       
}
loadfav5();

