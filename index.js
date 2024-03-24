const img = document.querySelector(".tela_blok img")
const tela_blok = document.querySelector(".tela_blok")
const btns_area = document.querySelector(".btns_area")
const btn = document.querySelectorAll(".n")
const opera = document.querySelectorAll(".opera")
const acao = document.querySelector(".acao")
const clear = document.querySelector(".clear")
const esc = document.querySelector(".esc")

let type = false;
let cursor = false;


btn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const display = document.querySelector(".display .formula")
        
        if(display.innerText === "|"){
            display.innerText = e.target.innerText
            display.classList.remove("ativo")
           
        }else{
            display.innerText += e.target.innerText
            type = false
        }

        
    })
})


opera.forEach((opera)=>{
    opera.addEventListener("click", (e)=>{
        const display = document.querySelector(".display .formula")
        display.classList.remove("ativo")

        if(display.innerText === "|" ){
           display.innerText =  "0" 
        }

        if(!type){
           
            display.innerText += display.innerText === "." ? "0." + e.target.innerText : e.target.innerText
            type = true
        }
    })
})


acao.addEventListener("click", () => {
    const result = document.querySelector(".display .formula");
    const res = document.querySelector(".display .resultado");
    const n = eval(result.innerText);
    res.innerText = n  
});

clear.addEventListener("click", ()=>{
    const result = document.querySelector(".display .formula");
    const total = document.querySelector(".display .resultado");
    const res = result.innerText.split("")
    res.pop()
    result.innerText = res.join("")

    if(res.length == 0){
        total.innerHTML = "0"
        result.innerText = "|"
        result.classList.add("ativo")
        cursor = false
    }
})

esc.addEventListener("click", ()=>{
    const result = document.querySelector(".display .formula");
    const res = document.querySelector(".display .resultado");
    result.innerText = "|"
    res.innerText = ""
    result.classList.add("ativo")
    cursor = false
})

