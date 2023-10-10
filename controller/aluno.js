import connection from "../database.js";


export async function checkAluno(ra,senha) {
    const [[aluno]] = await connection.execute('SELECT ra FROM Saldo_RU WHERE ra = ? and senha = ?',[ra,senha])
    console.log(aluno)
    return !!aluno
}