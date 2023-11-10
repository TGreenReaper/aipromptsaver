
function save() {
    localStorage.setItem("vl" , document.getElementById("prmp").value)
    alert("Saved!")
}

function load() {
    alert("Loaded Prompt: " + '"' +localStorage.getItem("vl") + '"')
    document.getElementById("prmp").value = localStorage.getItem("vl")   
}