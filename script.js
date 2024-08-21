
const btn = document.querySelector("button");
const notes = document.querySelector(".notes");
const img = document.querySelector("img");

// localStorage.clear("notes")

function showData() {
    notes.innerHTML = localStorage.getItem("notes");
}   
showData();

function saveData() {
    localStorage.setItem("notes", notes.innerHTML)
}


btn.addEventListener("click", e=> {
    let note = document.createElement("p");
    let del = document.createElement("img");
    del.src = "images/delete.png";
    note.classList.add("note");
    note.setAttribute("contenteditable", true);
    notes.appendChild(note).appendChild(del);

    saveData();
});

notes.addEventListener("click", e=> {
    const note = document.querySelectorAll(".note");

    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    } 
    else if (e.target.tagName === "P") {
        note.forEach(nt => {
            nt.onkeyup = function() {
            saveData(); 
        }
        nt.addEventListener("keydown", e=> {
            const img = nt.querySelector("img")
            if(!img) {
                let del = document.createElement("img");
                del.src = "images/delete.png";
                nt.appendChild(del);
         }

            if(e.key === "Backspace") {
                    if(!img) {
                        let del = document.createElement("img");
                        del.src = "images/delete.png";
                        nt.appendChild(del);
                 }
                    saveData();
              }
        })
        })
    }
});


document.addEventListener("keydown", e=> {
    if(e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    } 
});
