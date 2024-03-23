const img = document.querySelector(".tela_blok img")
const tela_blok = document.querySelector(".tela_blok")
const btns_area = document.querySelector(".btns_area")
const btn = document.querySelectorAll(".n")
const opera = document.querySelectorAll(".opera")
const acao = document.querySelector(".acao")
const clear = document.querySelector(".clear")
const esc = document.querySelector(".esc")

let type = false;

btn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const display = document.querySelector(".display .formula")
        display.innerText += e.target.innerText
        type = false
    })
})

opera.forEach((opera)=>{
    opera.addEventListener("click", (e)=>{
        const display = document.querySelector(".display .formula")
        console.log(display.innerText)
        if(!type){
            display.innerText += e.target.innerText === "." ? "0." : display.innerText === "" ? "0" + e.target.innerText : e.target.innerText
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
    const res = result.innerText.split("")
    res.pop()
    result.innerText = res.join("")
})

esc.addEventListener("click", ()=>{
    const result = document.querySelector(".display .formula");
    result.innerText = ""
})

