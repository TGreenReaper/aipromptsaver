
function save() {
var con = confirm("Are you sure you want to save the prompts?")
if(con == true && con !== ""){
    alert("Saved!")
    localStorage.setItem("vl" , document.getElementById("prmp").value)
} else {
    alert("Not saved")
}
}

function load() {
    alert("Loaded Prompt: " + '"' +localStorage.getItem("vl") + '"')
    document.getElementById("prmp").value = localStorage.getItem("vl")   
}