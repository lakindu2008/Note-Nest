// note app notes tools
let textBox = document.getElementById('textbox');
// Change Font Family 
const familybtn = document.getElementById('familyBtn').addEventListener('click',()=>{
    textBox.style.fontFamily = ' Georgia,Times, serif';
});
//bold all text 
const boldBtn = document.getElementById('BoldBtn').addEventListener('click',()=>{
    textBox.style.fontWeight = 'bold'
});
//italic font 
const italicBtn = document.getElementById('italicBtn').addEventListener('click',()=>{
    textBox.style.fontStyle = 'italic'
});

//change font color
const colorplate = document.getElementById('colorplate');
const colorBtn = document.getElementById('colorBtn').addEventListener('click',()=>{
    colorplate.style.display = 'inline'
});
document.getElementById('color1').onclick = ()=>{
    textBox.style.color = 'rgb(54, 54, 255)'
}
document.getElementById('color2').onclick = ()=>{
    textBox.style.color = 'rgb(255, 88, 88)'
}
document.getElementById('color3').onclick = ()=>{
    textBox.style.color = 'rgb(119, 255, 119)'
}
document.getElementById('color4').onclick = ()=>{
    textBox.style.color = 'rgb(255, 148, 166)'
}
document.getElementById('color5').onclick = ()=>{
    textBox.style.color = 'orange'
}
document.getElementById('color6').onclick = ()=>{
    textBox.style.color = 'rgb(216, 0, 216)'
}
document.getElementById('color7').onclick = ()=>{
    textBox.style.color = 'yellow'
}
document.getElementById('color8').onclick = ()=>{
    textBox.style.color = 'black'
}
document.getElementById('closecolor').onclick = ()=>{
    colorplate.style.display = 'none'
}

// change font size 
const sizebox = document.getElementById('sizebox');
document.getElementById('SizeBtn').onclick = ()=>{
    sizebox.style.display = 'inline' 
}
document.getElementById('size1').onclick = ()=>{
    textBox.style.fontSize = '10px'
}
document.getElementById('size2').onclick = ()=>{
    textBox.style.fontSize = '15px'
}
document.getElementById('size3').onclick = ()=>{
    textBox.style.fontSize = '20px'
}
document.getElementById('size4').onclick = ()=>{
    textBox.style.fontSize = '30px'
}
document.getElementById('size5').onclick = ()=>{
    sizebox.style.display = 'none'
}

//change text box color
const boxcolor = document.getElementById('boxColor');
document.getElementById('boxcolors').onclick = ()=>{
    boxcolor.style.display = 'inline'
}
document.getElementById('boxcolor1').onclick = ()=>{
    textBox.style.background = 'rgb(255, 208, 108)'
}
document.getElementById('boxcolor2').onclick = ()=>{
    textBox.style.background = 'rgb(176, 255, 176)'
}
document.getElementById('boxcolor3').onclick = ()=>{
    textBox.style.background = 'rgb(255, 198, 207)'
}
document.getElementById('boxcolor4').onclick = ()=>{
    textBox.style.background = 'rgb(255, 189, 255)'
}
document.getElementById('boxcolor5').onclick = ()=>{
    textBox.style.background = 'rgb(161, 161, 255)'
}
document.getElementById('boxcolor6').onclick = ()=>{
    textBox.style.background = ' gray'
    textBox.style.color = 'white'
}
document.getElementById('boxcolor7').onclick = ()=>{
    textBox.style.background = 'rgb(236, 101, 180) '
}
document.getElementById('boxexit').onclick = ()=>{
    boxcolor.style.display = 'none'    
}

// save note in local storage

document.getElementById('save').onclick = ()=>{
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let Note  = document.getElementById('textbox').value;
    localStorage.setItem('fNewnote5',Note);
    localStorage.setItem('fntitle5',title);
    localStorage.setItem('fndate5',date);
    console.log("saved");
    document.getElementById('savedpopup').style.display = 'inline';
}
function LoadNote(){
    let SavedNote = localStorage.getItem('fNewnote5');
    let title = localStorage.getItem('fntitle5');
    let date = localStorage.getItem('fndate5');
    document.getElementById('textbox').textContent = SavedNote;
    document.getElementById('title').value = title;
    document.getElementById('date').value = date;
}
LoadNote();

// delete Note
document.getElementById('delete').onclick = ()=>{
    localStorage.clear('fNewnote5');
    localStorage.clear('fndate5');
    localStorage.clear('fntitle5');
    document.getElementById('textbox').textContent = "";
    document.getElementById('date').value = "";
    document.getElementById('title').value =  ""; 
    document.getElementById('savedpopup2').style.display = 'inline';
}
//dark them
document.getElementById("them").onclick = ()=>{
    let body = document.getElementById("body").style.background = 'rgb(22, 22, 22)'
    textBox.style.background = 'rgb(36, 36, 36)'
    textBox.style.color = 'white'
}