let carros = [];
let veiculo = {};
let opcao = 0;
let sair = false;
function escolherOpcao() {
  opcao = Number(
    prompt(
      `    Bem-vindo ao sistema de CRUD de veículos:
    No momento, o sistema tem ${carros.length} carros cadastrados
    uma das opções para interagir com o sistema:
    1 - Cadastrar veículo 
    2 - Listar todos os veículos 
    3 - Filtrar veículos por marca 
    4 - Atualizar veículo 
    5 - Remover veículo  
    6 - Sair do sistema `
    )
  );
  return opcao;
}

function cadastrarVeiculo() {
  veiculo = {
    id: Math.floor(Math.random() * 100),
    modelo: prompt("Digite o MODELO do veiculo"),
    marca: prompt("Digite a MARCA do veiculo"),
    ano: Number(prompt("Digite o ANO do veiculo")),
    cor: prompt("Digite a COR do veiculo"),
    preco: Number(prompt("Digite o PREÇO do veiculo")),
  };
  carros.push(veiculo);
}
function listarVeiculo() {
  let carrosMap = carros.map((veiculo) => ({
    id: veiculo.id,
    modelo: veiculo.modelo,
    marca: veiculo.marca,
    ano: veiculo.ano,
    cor: veiculo.cor,
    preco: veiculo.preco,
  }));
  carrosMap
    .sort((a, b) => a.preco - b.preco)
    .forEach((veiculo) => {
      console.log(
        "ID: ",
        veiculo.id,
        "|",
        "Modelo: ",
        veiculo.modelo,
        "|",
        "Marca: ",
        veiculo.marca,
        "|",
        "Ano: ",
        veiculo.ano,
        "|",
        "Cor: ",
        veiculo.cor,
        "|",
        "Preço: ",
        veiculo.preco
      );
    });
}

function filtrarVeiculos() {
  let filtraVeiculos = prompt("Digite a marca que deseja verificar");
  carros
    .filter((veiculo) => {
      return veiculo.marca == filtraVeiculos;
    })
    .map((veiculo) => ({
      id: veiculo.id,
      modelo: veiculo.modelo,
      cor: veiculo.cor,
      preco: veiculo.preco,
    }))
    .sort((a, b) => a.preco - b.preco)
    .forEach((veiculo) => {
      console.log(
        "ID: ",
        veiculo.id,
        "|",
        "Modelo: ",
        veiculo.modelo,
        "|",
        "Cor: ",
        veiculo.cor,
        "|",
        "Preço: ",
        veiculo.preco
      );
    });
}
function atualizarVeiculo() {
  let atualizar = Number(
    prompt("Digite o ID do veiculo que voce deseja alterar")
  );
  let filtroAtualizar = carros.filter((veiculo) => {
    return veiculo.id == atualizar;
  });
  if (filtroAtualizar.find((veiculo) => veiculo.id == atualizar)) {
    filtroAtualizar.map((veiculo) => {
      veiculo.cor = prompt("Digite a nova cor do seu veiculo");
      veiculo.preco = prompt("Digite o novo Preço do seu veiculo");
    });
  } else {
    console.log(
      "Veiculo nao encontrado, digite outro ID para ATUALIZAR seu veiculo"
    );
  }
}

function removerVeiculo() {
  let apagarPeloId = Number(prompt("Digite o ID do veiculo que deseja apagar"));
  let filtroApagar = carros.findIndex((veiculo) => veiculo.id == apagarPeloId);
  if (filtroApagar != -1) {
    carros.splice(filtroApagar, 1);
  } else {
    console.log(
      "Veiculo nao encontrado, digite outro ID para EXCLUIR seu veiculo"
    );
  }
}

function sairDoSistema() {
  sair = true;
}

do {
  escolherOpcao();
  if (opcao == 1) {
    cadastrarVeiculo();
  } else if (opcao == 2) {
    listarVeiculo();
  } else if (opcao == 3) {
    filtrarVeiculos();
  } else if (opcao == 4) {
    atualizarVeiculo();
  } else if (opcao == 5) {
    removerVeiculo();
  } else if (opcao == 6) {
    sairDoSistema();
  } else {
    console.log("NUMERO NÃO ENCONTRADO, TENTE NOVAMENTE!");
  }
} while (sair != true);
