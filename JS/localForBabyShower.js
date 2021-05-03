let data = localStorage.getItem("BabyShower") ? JSON.parse(localStorage.getItem("BabyShower")) : []

function babyShower() {

    let newData = {
        "Mother": document.getElementById("mother").value,
        "Father": document.getElementById("father").value,
        "venue": document.getElementById("place").value,
        "Date": document.getElementById("date").value,

    }


    data.push(newData);
    localStorage.setItem("BabyShower", JSON.stringify(data));
    document.getElementById("Name1").innerHTML = newData.Mother;
    document.getElementById("Name2").innerHTML = newData.Father;
    document.getElementById("city").innerHTML = newData.venue;
    document.getElementById("DateNow").innerHTML = newData.Date;
}