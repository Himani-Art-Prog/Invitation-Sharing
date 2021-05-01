let data = localStorage.getItem("invite") ? JSON.parse(localStorage.getItem("invite")) : []

function edit() {

    let newData = {
        "MaleName": document.getElementById("male").value,
        "FemaleName": document.getElementById("female").value,
        "venue": document.getElementById("place").value

    }


    data.push(newData);
    localStorage.setItem("invite", JSON.stringify(data));
    document.getElementById("Name1").innerHTML = newData.MaleName;
    document.getElementById("Name2").innerHTML = newData.FemaleName;
    document.getElementById("city").innerHTML = newData.venue;
}

function hide() {
    newData.hide;
}