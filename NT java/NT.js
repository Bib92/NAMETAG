function mkName(bob) {
    bob.preventDefault()
    const name = document.getElementById("sName").value;
    document.getElementById("name").innerHTML = name;
}
