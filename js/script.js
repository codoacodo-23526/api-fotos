function displayData(dataDecode) {

    let cadena = ""; 

    for (let i = 0; i <= dataDecode.length - 1; i++) {
         cadena += "id: " +  dataDecode[i].id +  " " + "Nombre: " + dataDecode[i].name + " " + "username: " + dataDecode[i].username;
    }

    document.getElementById('results').innerHTML = cadena;
}

document.addEventListener('input', () => {
    const serchQuery = document.getElementById("searchInput").value.trim();

    const apiUrl = "https://jsonplaceholder.typicode.com/users?username=" + serchQuery

    fetch(apiUrl)
        .then(
            function (response) {
                return response.json();
            }
        )//json 
        .then(function (dataDecode) {
            displayData(dataDecode)
        }
        )
})