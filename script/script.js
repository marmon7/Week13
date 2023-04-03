let newstudent = {
    firstname : "",
    lastname : "",
    progname : ""
}

function clickhandler(event) {
    if (event.target.tagName === "BUTTON") {
        if (event.target.textContent === "Change Background Color") {
            document.body.classList.toggle("dark")
        }
        else {
            let firstname = document.querySelector("#firstname")
            let lastname = document.querySelector("#lastname")
            let progname = document.querySelector("#progname")
            let newstudent = {
                firstname : firstname.value,
                lastname : lastname.value,
                progname : progname.value
            }
            addstudenttolist(newstudent)
            }
            firstname.value = ""
            lastname.value = ""
            progname.value = ""
        
        }

    
    
}

document.body.addEventListener("click", clickhandler)
function addstudenttolist(student){
    newli = document.createElement("li")
    newli.textContent = `${student.firstname} ${student.lastname}`
    if (student.progname === 'CIT'){
        document.querySelector(".CIT").appendChild(newli)
    }
    else {
        document.querySelector(".CST").appendChild(newli)
    }
}