let keys = document.querySelectorAll('.keys');
let caps = document.querySelector(".CapsLock")
//console.log(caps)

let text = document.querySelector("textarea")
for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('id', keys[i].innerText);

}

let a = window.navigator.onLine ? "online":"offline";
if(a == "online"){
    document.querySelector(".container").style.display = "block"
    window.addEventListener('keyup', function (e) {
        console.log(e.key)
    
        if (e.key.toLowerCase() !== "backspace" && e.key.toLowerCase() !== "enter" && e.key.toLowerCase() !== "capslock" && e.key.toLowerCase() !== "tab" && e.key.toLowerCase() !== "control" && e.key.toLowerCase() !== "wakeup" && e.key.toLowerCase() !== "alt" && e.key.toLowerCase() !== "shift" && e.key !== " ") {
            text.value += e.key
            // alert()
        }
        else if(e.key.toLowerCase() == "backspace"){
            //console.log(text.value)
            text.value = text.value.slice(0,text.value.length -1)
     
        }
        else if(e.key.toLowerCase() === "enter"){
            text.value+="\n"
    
        }
        if(e.key.toLowerCase() === "capslock"){
            document.querySelector(".CapsLock").classList.toggle("color")
            for(let i=0;i<keys.length;i++){
                if(document.querySelector(".CapsLock").classList.contains("color")){
                    if(keys[i].innerText !== "Backspace" && keys[i].innerText !== "Enter" && keys[i].innerText !== "CapsLock" && keys[i].innerText !== "Tab" && keys[i].innerText !== "Ctrl" && keys[i].innerText !== "Fn" && keys[i].innerText !== "Alt" && keys[i].innerText !== "Shift" && keys[i].innerText !== "space"){
                        keys[i].innerText =  keys[i].innerText.toUpperCase()
                    }
                }
                else{
                    if(keys[i].innerText !== "Backspace" && keys[i].innerText !== "Enter" && keys[i].innerText !== "CapsLock" && keys[i].innerText !== "Tab" && keys[i].innerText !== "Ctrl" && keys[i].innerText !== "Fn" && keys[i].innerText !== "Alt" && keys[i].innerText !== "Shift" && keys[i].innerText !== "space"){
                        keys[i].innerText =  keys[i].innerText.toLowerCase()
                    }
                }
            }
    
        }
    
        else if(e.key.toLowerCase() === "tab"){
            text.value+="    "
    
    
        }
        else if(e.key.toLowerCase() === "control"){
            text.value+=""
            let ctrl = document.querySelectorAll(".ctrlkey")
            for(let i=0;i<ctrl.length;i++){
                ctrl[i].classList.add("colors")
                setTimeout(()=>{
                    ctrl[i].classList.remove("colors")
                },200)
            }
    
    
        }
        else if(e.key.toLowerCase() === "wakeup"){
            text.value+=""
            let Fn = document.querySelectorAll(".fn")
            for(let i=0;i<Fn.length;i++){
                Fn[i].classList.add("colors")
                setTimeout(()=>{
                    Fn[i].classList.remove("colors")
                },200)
            }
    
    
        }
        else if(e.key === "alt"){
            text.value+=""
            let Alt = document.querySelectorAll(".altkey")
            for(let i=0;i<Alt.length;i++){
                Alt[i].classList.add("colors")
            }
            setTimeout(()=>{
                Alt[i].classList.remove("colors")
            },200)
    
        }
        else if(e.key.toLowerCase() === "shift"){
          shift()
        }
        else if(e.key === " "){
            text.value+=" "
            document.querySelector(".space_key").classList.add("colors")
            setTimeout(()=>{
                document.querySelector(".space_key").classList.remove("colors")
            },200)
        }
    
        for (let i = 0; i < keys.length; i++) {
            //console.log(e.key)
    
            if (e.key.toLowerCase() == keys[i].innerText.toLowerCase()) {
                keys[i].classList.add("colors")
            }
            setTimeout(() => {
                keys[i].classList.remove("colors")
    
            }, 200);
    
        }
    
    })
}
else{
    alert("please connect the internet")
}



for(let i=0;i<keys.length;i++){
    keys[i].addEventListener("click",(e)=>{
            //console.log(e.target.innerText) 
        if (e.target.innerText !== "Backspace" && e.target.innerText !== "Enter" && e.target.innerText !== "CapsLock" && e.target.innerText !== "Tab" && e.target.innerText !== "ctrl" && e.target.innerText !== "fn" && e.target.innerText !== "Alt" && e.target.innerText !== "Shift" && e.target.innerText !== "space" ) {
            text.value += e.target.innerText
            
            // alert()
        }
        else if(e.target.innerText == "Backspace"){
            text.value = text.value.slice(0,text.value.length -1)
        }
        else if(e.target.innerText === "Enter"){
            text.value+="\n"
    
        }
        else if(e.target.innerText === "ctrl"){
            text.value+=""
    
        }
        else if(e.target.innerText === "CapsLock"){
    
            document.querySelector(".CapsLock").classList.toggle("color")
                for(let i=0;keys.length;i++){
                    if(document.querySelector(".CapsLock").classList.contains("color")){
            
                        if(keys[i].innerText !== "Backspace" && keys[i].innerText !== "Enter" && keys[i].innerText !== "CapsLock" && keys[i].innerText !== "Tab" && keys[i].innerText !== "Ctrl" && keys[i].innerText !== "Fn" && keys[i].innerText !== "Alt" && keys[i].innerText !== "Shift" && keys[i].innerText !== "space"){
                            keys[i].innerText =  keys[i].innerText.toUpperCase()
                        }
                }else{
                    if(keys[i].innerText !== "Backspace" && keys[i].innerText !== "Enter" && keys[i].innerText !== "CapsLock" && keys[i].innerText !== "Tab" && keys[i].innerText !== "Ctrl" && keys[i].innerText !== "Fn" && keys[i].innerText !== "Alt" && keys[i].innerText !== "Shift" && keys[i].innerText !== "space"){
                        keys[i].innerText =  keys[i].innerText.toLowerCase()
                    }
                }
            }
        }
        else if(e.target.innerText === "Tab"){
            text.value+="    "
        }
        else if(e.target.innerText === "fn"){
            text.value+="    "    
        }
        else if(e.target.innerText === "Shift"){
            
            shift()
        }
        else if(e.target.innerText ==="space"){
            text.value+=" "

        }

    })
}


function disable(){
    document.onkeydown = (e)=>{
        return false;
    }
}




let change = document.querySelectorAll(".change")
// console.log(change)

let array = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+","{","}","|",":",'"',"<",">","?"]

let array1 = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=","[","]",'/',";","'",",",".","/"]

function shift() {
    for(let a=0;a<change.length;a++){
        change[a].classList.toggle("shift")
        if(change[a].classList.contains("shift")){
            for(let j=0;j<array.length;j++){
                //console.log(array[i]);
                change[a].innerText = array[a]
            }
        }
        else{
            for(let p=0;p<array1.length;p++){
                change[a].innerText = array1[a]
            }
        }

    }
    
}





//it's correct method


// window.addEventListener('keyup', function (e) {
//     console.log(e.key)

//     if (e.key.toLowerCase() !== "backspace" && e.key.toLowerCase() !== "enter" && e.key.toLowerCase() !== "capslock" && e.key.toLowerCase() !== "tab" && e.key.toLowerCase() !== "control" && e.key.toLowerCase() !== "wakeup" && e.key.toLowerCase() !== "alt" && e.key.toLowerCase() !== "shift" && e.key !== " ") {
//         text.value += e.key
//         // alert()
//     }
//     else if(e.key.toLowerCase() == "backspace"){
//         //console.log(text.value)
//         text.value = text.value.slice(0,text.value.length -1)
 
//     }
//     else if(e.key.toLowerCase() === "enter"){
//         text.value+="\n"

//     }
//     if(e.key.toLowerCase() === "capslock"){
//         document.querySelector(".CapsLock").classList.toggle("color")

//     }

//     else if(e.key.toLowerCase() === "tab"){
//         text.value+="    "


//     }
//     else if(e.key.toLowerCase() === "control"){
//         text.value+=""
//         let ctrl = document.querySelectorAll(".ctrlkey")
//         for(let i=0;i<ctrl.length;i++){
//             ctrl[i].classList.add("colors")
//             setTimeout(()=>{
//                 ctrl[i].classList.remove("colors")
//             },200)
//         }


//     }
//     else if(e.key.toLowerCase() === "wakeup"){
//         text.value+=""
//         let Fn = document.querySelectorAll(".fn")
//         for(let i=0;i<Fn.length;i++){
//             Fn[i].classList.add("colors")
//             setTimeout(()=>{
//                 Fn[i].classList.remove("colors")
//             },200)
//         }


//     }
//     else if(e.key === "alt"){
//         text.value+=""
//         let Alt = document.querySelectorAll(".altkey")
//         for(let i=0;i<Alt.length;i++){
//             Alt[i].classList.add("colors")
//         }
//         setTimeout(()=>{
//             Alt[i].classList.remove("colors")
//         },200)

//     }
//     else if(e.key === "shift"){
//         text.value+=""
//     }
//     else if(e.key === " "){
//         text.value+=" "
//         document.querySelector(".space_key").classList.add("colors")
//         setTimeout(()=>{
//             document.querySelector(".space_key").classList.remove("colors")
//         },200)
//     }








//     for (let i = 0; i < keys.length; i++) {
//         console.log(e.key)

//         if (e.key.toLowerCase() == keys[i].innerText.toLowerCase()) {
//             keys[i].classList.add("colors")
//         }
//         setTimeout(() => {
//             keys[i].classList.remove("colors")

//         }, 200);

//     }

// })

// function allcaps(){
//     document.querySelector(".CapsLock").classList.toggle("color")

//     if()

// }





