function alterarTema(){
    const tema = localStorage.getitem("Tema")
    const body = document.querySelector("body")
    const button = document.querySelector(".tema-button")

    if (tema){
        let novoTema

        if (tema === "ligth"){
            novoTema = "dark"
            button.innerHTML = `<img src="/imagens/sun-icon.png" alt="iconde do sol">`
            body.classList.remove("ligth")
            body.classList.add("dark")
        } else{
            novoTema = "light"
            button.innerHTML = `<img src="/imagens/moon-icon.png" alt="iconde de lua">`
            body.classList.remove("dark")
            body.classList.add("ligth")
        }

        localStorage.setItem("tema", novoTema)
    }

    localStorage.setItem("tema", "dark")
    body.classList.add("dark")
}

function verificarTema(){
    const tema = localStorage.getItem("tema")
    const body = document.querySelector("body")
    const button = document.querySelector(".tema-button")


    if(tema){
        if (tema === "dark"){
            body.classList.add("dark")
            button.innerHTML = `<img src="/imagens/sun-icon.png" alt="iconde do sol">`
        } else{
            body.classList.add("light")
            button.innerHTML = `<img src="/imagens/moon-icon.png" alt="iconde de lua">`
        }
    }
}

verificarTema()