class Profesional {
    constructor(nombre, anios, colorDePelo, colorDeOjos, i) {
        this.nombre = nombre;
        this.anios = anios;
        this.colorDePelo = colorDePelo;
        this.colorDeOjos = colorDeOjos;
        this.i = i
    }
}


function postProfesional() {

    let profesional = new Profesional(document.getElementById("nombre").value, document.getElementById("años").value,
        document.getElementById("colorDePelo").value, document.getElementById("colorDeOjos").value, document.getElementById("id").value)

    const url = "http://localhost:3000/profesional";

    if (validar(profesional)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset= UTF-8" },
            body: JSON.stringify(profesional),
            method: "POST"
        }
        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.error) {
                    showToast("usuario existente", "bg-danger")
                }
                else {
                    showToast("Usuario Creado Correctamente", "bg-success")
                }

                console.log(result)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

function getProfesional() {

    let id = document.getElementById("id").value
    let mostrar = document.getElementById("mostrar")
    let url = "http://localhost:3000/profesional";

    if (id != "") {
        url += `?i=${id}`
    }

    let param =
    {
        headers: { "content-type": "application/json; charset= UTF-8" },
        method: "GET"
    }

    fetch(url, param)
        .then(function (data) {
            console.log(data)
            return data.json()
        })
        .then(function (result) {

            if (!result.error) {
                console.log(result);
                let array1 = result.res
                mostrar.innerHTML = `<tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Años</th>
                                        <th>Color de Pelo</th>
                                        <th>Color de ojos</th>
                                        </tr>`

                if (id === "") {


                    for (let i = 0; i < array1.length; i++) {

                        mostrar.innerHTML +=
                            `<tr>
                                <td>${i + 1}</td>
                                <td>${array1[i].nombre}</td>
                                <td>${array1[i].anios}</td>
                                <td>${array1[i].colorDePelo}</td>
                                <td>${array1[i].colorDeOjos}</td>
                              </tr>`
                        console.log(mostrar);
                    }
                }
                else {
                    if (result.res_error) {
                        console.log("no existe el id")
                        showToast("ERROR: " + result.message, "bg-danger")
                    }
                    else {
                        mostrar.innerHTML +=
                            `<tr>
                                <td>${id}</td>
                                <td>${array1.nombre}</td>
                                <td>${array1.anios}</td>
                                <td>${array1.colorDePelo}</td>
                                <td>${array1.colorDeOjos}</td>
                              </tr>`
                        console.log(mostrar);
                    }
                }
            }
            else
                showToast("ERROR: " + result.mensaje, "bg-danger")
        })
        .catch(function (error) {
            console.log(error)
        })
}

function deleteProfesional() {
    let profesional = new Profesional(document.getElementById("nombre").value, document.getElementById("años").value,
        document.getElementById("colorDePelo").value, document.getElementById("colorDeOjos").value, document.getElementById("id").value)

    let id = document.getElementById("id").value
    let url = "http://localhost:3000/profesional";


    let param =
    {
        headers: { "content-type": "application/json; charset= UTF-8" },
        body: JSON.stringify(profesional),
        method: "DELETE",
    }
    console.log(param);

    fetch(url, param)

        .then(function (data) {
            return data.json()
        })
        .then(function (result) {

            if (!result.error) {
                if (id === "") {
                    showToast("Introduce un id", "bg-danger")
                }
                else {
                    showToast("Usuario Eliminado Correctamente", "bg-success")
                }

            }
            else { showToast("ERROR: " + result.message, "bg-danger") }
            console.log(result)
        })
        .catch(function (error) {
            console.log(error)
        })
}

function putProfesional() {
    let profesional = new Profesional(document.getElementById("nombre").value, document.getElementById("años").value,
        document.getElementById("colorDePelo").value, document.getElementById("colorDeOjos").value, document.getElementById("id").value)

    let id = document.getElementById("id").value
    let url = "http://localhost:3000/profesional";


    let param =
    {
        headers: { "content-type": "application/json; charset= UTF-8" },
        body: JSON.stringify(profesional),
        method: "PUT",
    }
    console.log(param);

    fetch(url, param)

        .then(function (data) {
            return data.json()
        })
        .then(function (result) {

            if (!result.error) {
                if (id === "") {
                    showToast("Introduce un id", "bg-danger")
                }
                else {
                    showToast("Usuario Modificado Correctamente", "bg-success")
                }

            }
            else { showToast("ERROR: " + result.message, "bg-danger") }
            console.log(result)
        })
        .catch(function (error) {
            console.log(error)
        })
}


function validar(profesional) {
    resultado = false
    if (profesional.nombre == "" || profesional.nombre == "null") {
        showToast("AVISO: Faltan campos para rellenar", "bg-warning")
    }
    else if (profesional.años == "" || profesional.años == "null") {
        showToast("AVISO: Faltan campos para rellenar", "bg-warning")
    }
    else if (profesional.colorDePelo == "" || profesional.colorDePelo == "null") {
        showToast("AVISO: Faltan campos para rellenar", "bg-warning")
    }
    else if (profesional.colorDeOjos == "" || profesional.colorDeOjos == "null") {
        showToast("AVISO: Faltan campos para rellenar", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

function showToast(message, color) {
    document.getElementById("toastText").innerText = message;
    let toastElement = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " " + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}