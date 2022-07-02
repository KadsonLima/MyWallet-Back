import dayjs from "dayjs";


let kaio = [
    { tipo: 1, dia: "30/11", nome: "Almoço Mãe", valor: 39.90 },
    { tipo: 1, dia: "27/11", nome: "Mercado", valor: 542.90 },
    { tipo: 1, dia: "26/11", nome: "Compras Churrasco", valor: 67.20 },
    { tipo: 0, dia: "20/11", nome: "Emprestimo Maria", valor: 500.00 },
    { tipo: 0, dia: "15/11", nome: "Salario", valor: 3000.00 },
  ];


export async function Home(req, res){
    let saldo = 0;

    kaio.map(e=>{
    if(e.tipo == 0){
        saldo+=e.valor;
    }else{
        saldo-=e.valor
    }
    })
    res.send({kaio, saldo}).status(200);
}

export async function Trade(req, res){
    const { tipo, valor, descricao } = req.body;
    kaio.unshift({
      tipo,
      dia: dayjs().format("DD/MM"),
      nome: descricao,
      valor: parseFloat(valor)
    });
  
    res.send("OK").status(200);
}

