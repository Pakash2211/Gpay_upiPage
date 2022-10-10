let maxlength = 1;
function handleFocus(e,pre,curr,next){
    let x = document.getElementById(curr).value.length;
    if(x == maxlength){
        if(next != ''){
            document.getElementById(next).focus();
        }
        
    }


}



function resetAll(){
    let x = document.querySelectorAll('.reset')
       


    x.forEach(function(ele){
      ele.value = "";
    })
   
}

function checkAll(){


let x = document.querySelectorAll('.reset')

let first = "";
let second = "";
let count = 1;

x.forEach(function(ele){
    if(count > 4){
      second = second + ele.value;
    }else{
        first = first + ele.value;
    }
 count++;
})



if(first.length != 4 && second.length != 4 ){
    alert("Please add 4 digital Pin")
}else{
   if(first == second){
    alert("Pin set Successfully")
   }else{
    alert("Wrong UPI pin");
   }
}


}

function handleNumber(num){

for(let i = 1 ; i <= 8 ; i++){
let x = document.querySelector(`#text${i}`)     
   if(x.value.length == 0){
      x.value = num;
      break;
   }
}


for(let i = 1 ; i <= 8 ; i++){
let x = document.querySelector(`#text${i}`)
   if(x.value.length == 0){
      number = x.focus();
      break;
   }
}
  
}



function handleClean(){
let number = -1;
for(let i = 1 ; i <= 8 ; i++){
let x = document.querySelector(`#text${i}`)
   if(x.value.length == 1){
      number = x;
   }
}
number.value = "";
for(let i = 1 ; i <= 8 ; i++){
let x = document.querySelector(`#text${i}`)
   if(x.value.length == 0){
      x.focus();
      break;
   }
}

}

function handeShow(num,hi,so){
if(num == 1){
  for(let i = 1 ; i <= 4 ; i++){
    let x = document.querySelector(`#text${i}`)
    x.type = "text";
  }
  document.getElementById(`show${so}`).style.display = "none";
document.getElementById(`hidden${hi}`).style.display = "block";

}else{

    for(let i =5 ; i <= 8 ; i++){
    let x = document.querySelector(`#text${i}`)
    x.type = "text";
  }
  document.getElementById(`show${so}`).style.display = "none";
document.getElementById(`hidden${hi}`).style.display = "block";

}
}


function handleHidden(num,hi,so){
if(num == 1){
  for(let i = 1 ; i <= 4 ; i++){
    let x = document.querySelector(`#text${i}`)
    x.type = "password";
  }
  document.getElementById(`show${so}`).style.display = "block";
document.getElementById(`hidden${hi}`).style.display = "none";

}else{

    for(let i =5 ; i <= 8 ; i++){
    let x = document.querySelector(`#text${i}`)
    x.type = "password";
  }
  document.getElementById(`show${so}`).style.display = "block";
document.getElementById(`hidden${hi}`).style.display = "none";

}
}