const pg = require('../database/connection')
const create_table = async() => {
    try{
        await pg.query(`
        CREATE TABLE clients (
            name VARCHAR(90),
            email VARCHAR(90),
            phone VARCHAR(90)
        );
        `)
        await pg.end()
        return "tabela criada com sucesso!"
    }catch(err){
        throw new Error(err)
    } 
}
create_table().then(res => console.log(res)).catch(err => console.log(err))