function clickhandler(event) {
    if (event.target.tagName === "BUTTON") {
        if (event.target.textContent === "Change Background Color") {
            document.body.classList.toggle("dark")
        }
        else {

        }

    }
    
}

document.body.addEventListener("click", clickhandler)