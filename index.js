var mydictionary = [
    { idioma: "Español", texto: "Bienvenido al curso de React Native en PachaQtec", id_idioma: 1, },
    { idioma: "Ingles", texto: "Welcome to the React Native course at PachaQtec", id_idioma: 2, },
    { idioma: "Francés", texto: "Bienvenue dans le cours React Native chez PachaQtec", id_idioma: 3, },
    { idioma: "Italiano", texto: "Benvenuti al corso React Native presso PachaQtec", id_idioma: 4, },
    { idioma: "Portugués", texto: "Bem-vindo ao curso React Native na PachaQtec", id_idioma: 5, }
]

const translate = (data, text, language) => {
    const rtext = data.find(item => item.texto === text);
    if (rtext) {
        const rdata = data.find(item => item.idioma === language);
        if (rdata) {
            return rdata.texto;
        }
    }
    return `Text can't be translate to ${language}`;
}

console.log(translate(mydictionary, 'Bienvenido al curso de React Native en PachaQtec', 'Italiano'));