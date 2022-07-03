const RandomHexColorCode = () => {
    let chars = "0123456789abcdef";
    let colorLength = 6;
    let color = ""
    let lista = [];

    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < colorLength; i++) {
            let randomColor = Math.floor(Math.random() * chars.length);
            color += chars.substring(randomColor, randomColor + 1);
        }
        lista.push("#" + color);
        color = "";

    }
    return lista;



}

export default RandomHexColorCode;