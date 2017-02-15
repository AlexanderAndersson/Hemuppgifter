function buttonClick() {
    var input = document.getElementById("textInput").value;                                                         
    var newLi = document.createElement("LI");
    var newText = document.createTextNode(input);
    newLi.appendChild(newText);
    document.getElementById("list").appendChild(newLi);              
}

document.addEventListener("click", function(event) {
    if(event.target.tagName == "LI")
        {
            event.target.style.backgroundColor = "red";
            document.getElementById("textInput").value = event.target.innerHTML;
        }
})
