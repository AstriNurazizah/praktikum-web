/*const app = document.getElementById("app");
const output = document.getElementById("output");
const btnNama = document.getElementById("btn-1");
const btnUmur = document.getElementById("btn-2");
const namaSaya ="Astri";
const umurSaya = 22;

const generateNama = ( ) => {
    output.innerText = namaSaya; 
};

const generateUmur = ( ) => {
    output.innerText = umurSaya; 
};

btnNama.addEventListener("click", generateNama);
btnUmur.addEventListener("click", generateUmur); */

const app = document.getElementById("app");
const output = document.getElementById("output");
const btnRubah = document.getElementById("btn-2");
const input = document.getElementById("input");

const generateColor = ( ) => {
    if (input.value == "merah" ) {
        output.style.color = "red";
        output.innerText = "Warna Merah";
    }

    else if (input.value == "biru") {
        output.style.color = "blue";
        output.innerText = "Warna Biru";
    }

    else if (input.value == "kuning") {
        output.style.color = "yellow";
        output.innerText = "Warna Kuning";
    }

    else if (input.value == "hijau") {
        output.style.color = "green";
        output.innerText = "Warna Hijau";
    }

    else if (input.value == "kuning") {
        output.style.color = "yellow";
        output.innerText = "Warna Kuning";
    }

    else {
        output.style.color = "black";
        input.value == "Warna"
    }
};

btnRubah.addEventListener("click", generateColor);



