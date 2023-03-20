let keys = document.querySelectorAll('.keys');
let caps = document.querySelector(".CapsLock")
//console.log(caps)

let text = document.querySelector("textarea")
for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('id', keys[i].innerText);

}

let a = window.navigator.onLine ? "online":"offline";
if(a == "online"){
    window.addEventListener('keyup', function (e) {
        console.log(e.key)
    
        if (e.key.toLowerCase() !== "backspace" && e.key.toLowerCase() !== "enter" && e.key.toLowerCase() !== "capslock" && e.key.toLowerCase() !== "tab" && e.key.toLowerCase() !== "control" && e.key.toLowerCase() !== "wakeup" && e.key.toLowerCase() !== "alt" && e.key.toLowerCase() !== "shift" && e.key !== " " && e.key !== "Delete") {
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
        else if(e.key.toLowerCase() === "delete"){
            document.querySelector(".del").classList.add("colors")

        
            if(confirm("are you erase the text")){
                text.value = ""
            }else{
                setTimeout(()=>{
                    document.querySelector(".del").classList.remove("colors")
                },300)
    
            }
        }
        if(e.key.toLowerCase() === "capslock"){
            document.querySelector(".CapsLock").classList.toggle("color")
            for(let i=0;i<keys.length;i++){
                if(document.querySelector(".CapsLock").classList.contains("color")){
                    if(keys[i].innerText !== "Backspace" && keys[i].innerText !== "Enter" && keys[i].innerText !== "CapsLock" && keys[i].innerText !== "Tab" && keys[i].innerText !== "Ctrl" && keys[i].innerText !== "Fn" && keys[i].innerText !== "Alt" && keys[i].innerText !== "Shift" && keys[i].innerText !== "space" && keys[i].innerText !== "Eng-mic" && keys[i].innerText !== ".com"&& keys[i].innerText !== "Switch" && keys[i].innerText !== "fn" && keys[i].innerText !== "del" ){
                        keys[i].innerText =  keys[i].innerText.toUpperCase()
                    }
                }
                else{
                    if(keys[i].innerText !== "Backspace" && keys[i].innerText !== "Enter" && keys[i].innerText !== "CapsLock" && keys[i].innerText !== "Tab" && keys[i].innerText !== "Ctrl" && keys[i].innerText !== "Fn" && keys[i].innerText !== "Alt" && keys[i].innerText !== "Shift" && keys[i].innerText !== "space" && keys[i].innerText !== "Eng-mic"&& keys[i].innerText !== ".com" && keys[i].innerText !== "Switch" && keys[i].innerText !== "fn" && keys[i].innerText !== "del"){
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
             document.querySelector(".ctrlkey").classList.add("colors")

            setTimeout(()=>{
                document.querySelector(".ctrlkey").classList.remove("colors")
            },200)
    
        }
        else if(e.key.toLowerCase() === "wakeup"){
            text.value+=""

            document.querySelector(".fn").classList.add("colors")

            setTimeout(()=>{
                document.querySelector(".fn").classList.remove("colors")
            },200)
    
        }
        else if(e.key === "alt"){
            text.value+=""
            document.querySelector(".alt_left").classList.add("colors")

            setTimeout(()=>{
                document.querySelector(".alt_left").classList.remove("colors")
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
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container1").style.display = "none";
}



for(let i=0;i<keys.length;i++){
    keys[i].addEventListener("click",(e)=>{            
        if (e.target.innerText !== "Backspace" && e.target.innerText !== "Enter" && e.target.innerText !== "CapsLock" && e.target.innerText !== "Tab" && e.target.innerText !== "ctrl" && e.target.innerText !== "fn" && e.target.innerText !== "Alt" && e.target.innerText !== "Shift" && e.target.innerText !== "space" && e.target.innerText !== "Eng-mic" && e.target.innerText !== "Switch"&& e.target.innerText !== "del") {
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
        else if(e.target.innerText === "Eng-mic"){
            text.value+=''
            English_voice()
        }
        else if(e.target.innerText === "del"){
            if(confirm("are you erase the text")){
                text.value = ""
            }
        }

        else if(e.target.innerText === "CapsLock"){
    
            document.querySelector(".CapsLock").classList.toggle("color")
                for(let i=0;keys.length;i++){
                    if(document.querySelector(".CapsLock").classList.contains("color")){
            
                        if(keys[i].innerText !== "Backspace" && keys[i].innerText !== "Enter" && keys[i].innerText !== "CapsLock" && keys[i].innerText !== "Tab" && keys[i].innerText !== "Ctrl" && keys[i].innerText !== "fn" && keys[i].innerText !== "Alt" && keys[i].innerText !== "Shift" && keys[i].innerText !== "space"&& keys[i].innerText !== "Tam-mic" && keys[i].innerText !== ".com"  && keys[i].innerText !== "Switch" && keys[i].innerText !== "Eng-mic" && keys[i].innerText !== "del"){
                            keys[i].innerText =  keys[i].innerText.toUpperCase()
                        }
                }else{
                    if(keys[i].innerText !== "Backspace" && keys[i].innerText !== "Enter" && keys[i].innerText !== "CapsLock" && keys[i].innerText !== "Tab" && keys[i].innerText !== "Ctrl" && keys[i].innerText !== "fn" && keys[i].innerText !== "Alt" && keys[i].innerText !== "Shift" && keys[i].innerText !== "space" && keys[i].innerText !== "Eng-mic" &&  keys[i].innerText !== "Switch" && keys[i].innerText !== "Eng-mic" && keys[i].innerText !== "del"){
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
        else if(e.target.innerText === "Switch"){
            document.querySelector(".container").style.display = "none"
            document.querySelector(".container1").style.display = "block"

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

function English_voice(){
    let voice_is = 1;
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    const recognition_voice = new SpeechRecognition();
    console.log(recognition_voice)
    recognition_voice.interimResults = true;
    recognition_voice.lang = "en-US";
    // recognition_voice.lang = "ta-IN";
    // recognition.lang = "tamil";

    recognition_voice.addEventListener('result', e => {
        const transcript = Array.from(e.results)
             .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            //console.log(transcript)
            
    
        text.innerText += transcript
    });
      
    if (voice_is == 1) {
        recognition_voice.start();
        //console.log(recognition.start())
        recognition_voice.addEventListener('end', recognition_voice.start);
        //console.log(recognition_voice.start)
    }
}


//tamil keyboard
//tamil

let tamil_area = document.querySelector(".text_tamil")
//console.log(tamil_area)
let t1 = [ 'அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ', 'ஃ']
let t2 = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', '=']


let tamil = document.querySelectorAll(".tamil")
//console.log(tamil)
for(let t=0;t<tamil.length;t++){
//console.log(tamil[t])
tamil[t].addEventListener("click",(e)=>{
    //console.log(e.target.innerText)
    let t = e.target;
    t.classList.add("s")
    setTimeout(()=>{
        t.classList.remove("s")
    },200)
    if(e.target.innerText !== "Backspace" && e.target.innerText !== "Tab" && e.target.innerText !== "Shift" && e.target.innerText !== "Enter" && e.target.innerText !== "space" && e.target.innerText !== "அழி" && e.target.innerText !== "Tam-mic" && e.target.innerText !== "Switch"){
        tamil_area.value+= e.target.innerText
        
    }
    else if(e.target.innerText == 'Enter'){
        text.value+="\n"
       
    }
    else if(e.target.innerText == "Backspace"){
        tamil_area.value = tamil_area.value.slice(0,tamil_area.value.length -1)
        
    }
    else if(e.target.innerText == "அழி"){
        if(confirm("are you erase the text")){
            tamil_area.value = ""
        }
   
        
        
    }
    else if(e.target.innerText == "Shift"){
        number_change()
        
    }
    else if(e.target.innerText === "Tab"){
        tamil_area.value+="    "
        
    }
    else if(e.target.innerText ==="space"){
        tamil_area.value+=" "
        

    }
    else if(e.target.innerText === "Tam-mic"){
        //alert("hh")
        Tamil_Voice()
        
    }
    else if(e.target.innerText === "Switch"){
        document.querySelector(".container1").style.display = "none"
        document.querySelector(".container").style.display = "block"
        
    }



    
})
}

let meger = document.querySelectorAll(".tc")

function number_change() {
    for(let a=0;a<meger.length;a++){
        console.log(meger[a])
        meger[a].classList.toggle("main")
    if(meger[a].classList.contains("main")){
        for(let j=0;j<t1.length;j++){
            //console.log(array[i]);
            meger[a].innerText = t1[a]
        }
    }
    else{
        for(let p=0;p<t2.length;p++){
            meger[a].innerText = t2[a]
        }
    }

    }
    
}

function Tamil_Voice(){
    let voice_is = 1;
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    const recognition_voice = new SpeechRecognition();
    console.log(recognition_voice)
    recognition_voice.interimResults = true;
    recognition_voice.lang = "ta-IN";
    // recognition.lang = "tamil";

    recognition_voice.addEventListener('result', e => {
        const transcript = Array.from(e.results)
             .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            //console.log(transcript)
            
    
        tamil_area.innerText += transcript
    });
      
    if (voice_is == 1) {
        recognition_voice.start();
        //console.log(recognition.start())
        recognition_voice.addEventListener('end', recognition_voice.start);
        //console.log(recognition_voice.start)
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





