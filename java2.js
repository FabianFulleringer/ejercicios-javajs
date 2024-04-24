const obtenerInformacion = (materia) => {
    let materias = {
        fisica: ["pedro", "laura", "veronica"],
        programacion: ["pedro", "juan", "laura", "veronica"],
        logica: ["pedro", "juan"],
        quimica: ["pedro", "juan", "laura", "veronica"]
    };
    if (materias[materia] !== undefined) {
        return materias[materia];
    } else {
        return false;
    }
}

let informacion = obtenerInformacion("fisica");

if (informacion !== false) {
    let listaNombres = document.getElementById("listaNombres");
    informacion.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}


    



















//*<

//* */>

 //*|
