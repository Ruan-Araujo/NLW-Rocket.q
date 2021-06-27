const Database = require('../db/config');

module.exports = {
    async create(req,res){
        const db = await Database();
        const pass = req.body.password
        let roomId 
        let isRoom = true;
        while (isRoom){
            for(var i = 0; i < 6; i++){
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString()
                //Aqui ele gera o número da sala
                //Aqui acontece a concatenação de string, o roomId chega 
                //e vai concatenado com os números gerados pelo for aleatoriamente = 889902.
                //Ele não soma pq usamos a função toString() para tranformar em caracteres
            }

            //Verificar se o número existe
            const roomsExistIds = await db.all(`SELECT id FROM rooms`);//all pq iremos varrer a db em busca dos ids
            isRoom = roomsExistIds.some(roomExistId => roomsExistIds === roomId);
            
            if(!isRoom){
                //Insere a sala no banco de dados
                await db.run(`INSERT INTO rooms(
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`)
    
            }
        }
        await db.close(``)
        

        res.redirect(`/room/${roomId}`);
    },

    async open(req, res){
        const db = await Database();
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        let isNoQuestions 

        if(questions.length == 0){
            if(questionsRead.length == 0){
                isNoQuestions = true
            }
        }
        
        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions})
        //A diferença do query para params é que os parâmetros vem na ure /.. 
        //O query usamos ?id=valor  
    },

    enter(req, res){
        const roomId = req.body.roomId;

        res.redirect(`/room/${roomId}`)
    }
    
}