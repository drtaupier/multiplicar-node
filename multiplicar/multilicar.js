const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un número`);
            return;
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            resolve(`tabla-${base}.txt`);
        });
    });
}

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}