const Database = require('./config');// O database está importando o que colocamos no config.

const initDb = { // Essa cnstante serve para guardar as funções
    async init(){
        const db = await Database()// Com o await estou indicando para o JS esperar até que o Database() termine de rodar e traga o resultado, ai ele pode executar a próxima linha.
// O async e await sempre estão juntos
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`)

        await db.close();
    }
};

initDb.init();// Aqui estamos chamando a initDb que guarda todas as funções e executando a função init();

//Esse arquivo será utilizado (vai rodar) para iniciar o Banco de Dados.
//Depois, o próprio sistema vai colocar/ tirar dados dinamicamente.
//Async/Await é importante para trabalhar com módulos externos, no caso sqlite
