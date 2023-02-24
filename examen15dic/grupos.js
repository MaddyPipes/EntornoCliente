let festivales = {
    "Festival": "Navar-Pop",
    "Ciudad": "Ablitas",
    "Anno": 2018,
    "Grupos": [
        {
            "nombre": "Love of lesbian",
            "compañia": "Warner Music",
            "discos": [
                "Microscopic Movies",
                "Is it Fiction?",
                "Ungravity",
                "Maniobras de escapismo",
                "Cuentos chinos para niños del Japón",
                "1999",
                "La noche eterna. Los días no vividos",
                "El poeta Halley"
            ]
        },
        {
            "nombre": "Izal",
            "compañia": "Autoeditado",
            "discos": [
                "Teletransporte",
                "Magia y efectos especiales",
                "Agujeros de gusano",
                "Copacabana",
                "VIVO",
                "Autoterapia"
            ]
        },
        {
            "nombre": "Artic Monkeys",
            "compañia": "Domino Records",
            "discos": [
                "Whatever People Say I am, I'm not",
                "Favourite Worst Nightmare",
                "Humbug",
                "Suck It And See",
                "AM",
                "Tranquility Base Hotel & Casinio",
                "The Car"
            ]
        }]
}

//Guardamos la sección vacía creada en el html y vamos haciendo append a los datos

let section = document.getElementById("section");

//Creamos un párrafo en el que ir guardando el contenido e ir haciendo los append

let p_festival = document.createElement("p");
section.appendChild(p_festival);
p_festival.textContent = `Festival: ${festivales["Festival"]}`;

let p_ciudad = document.createElement("p");
section.appendChild(p_ciudad);
p_ciudad.textContent = `Ciudad: ${festivales["Ciudad"]}`;

let p_anno = document.createElement("p");
section.appendChild(p_anno);
p_anno.textContent = `Año: ${festivales["Anno"]}`;

//Creamos el artículo de dentro de la sección

let article = document.createElement("article");

section.appendChild(article);


//Hacemos un bucle que vaya creando las variables de cada grupo y los vaya insertando en el artículo
for (let i = 0; i < festivales["Grupos"].length; i++) {

    //Insertamos en el artículo los datos de su respectivo nombre del grupo, así que lo creamos y añadimos
    let grupo = document.createElement("h2");
    grupo.innerHTML = festivales["Grupos"][i]["nombre"];
    article.appendChild(grupo);

    //Ahora insertamos nodos de texto con los siguientes datos, con un br entre ambos

    article.append(`Compañía: ${festivales["Grupos"][i]["compañia"]}`);
    article.append(document.createElement("br"));
    article.append("Discografía:");

    //Ahora introducimos, con otro bucle, los datos en la lista de discos que vamos a crear

    let discografia = document.createElement("ul");

    for(let j = 0; j<festivales["Grupos"][i]["discos"].length; j++){

        //Vamos creando esos elementos a introducir

        let disco = document.createElement("li");
        disco.innerHTML = festivales["Grupos"][i]["discos"][j];
        discografia.append(disco);

    }

    //Una vez rellena la lista, la insertamos

    article.append(discografia);

}

//Y listos, incluso si pruebas a añadir otro grupo en el mismo formato o cambiar por completo otro de los grupos, el documento resultante
//será generado correctamente.





