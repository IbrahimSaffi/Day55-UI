let inp = document.querySelector("input")
let btn = document.querySelector("button")
let chips = document.querySelector(".chips")

btn.addEventListener("click",()=>{
    if(inp.value.length>=3){
        let chip =  document.createElement("div")
        chip.classList.add("chip")
        let avatar = document.createElement("img")
        avatar.src="./bg.png"
        let inpVal =document.createTextNode(inp.value)
        let remVal =document.createTextNode("x")
        let name =  document.createElement("p")
        name.classList.add("bold")
        let del =  document.createElement("p")
        del.classList.add("rem")
        name.appendChild(inpVal)
        del.appendChild(remVal)
        chip.appendChild(avatar)
        chip.appendChild(name)
        chip.appendChild(del)
        chips.appendChild(chip)
        del.addEventListener("click",()=>{
         del.parentElement.remove()
      })
         inp.value = ""
    }
    else if(inp.value.length===0){
        if(document.querySelector(".err").childElementCount===0){
            let err =  document.createElement("p")
            err.textContent="Enter something"
            document.querySelector(".err").appendChild(err)
            err.style.color="red"
            inp.addEventListener("click",()=>{
                err.remove()
            })
        }
    }
    else if(inp.value.length<3){
        if(document.querySelector(".err").childElementCount===0){
        let err =  document.createElement("p")
        err.textContent="Name should be atleast three letters long"
        document.querySelector(".err").appendChild(err)
        err.style.color="red"
        inp.addEventListener("click",()=>{
            err.remove()
        })
    }
}
})
