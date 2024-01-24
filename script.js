let carros = [];
let veiculo = {};
let opcao = 0;
let sair = false;
function escolherOpcao() {
  opcao = Number(
    prompt(
      `Bem-vindo ao sistema de CRUD de veículos:
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
    ID: Math.floor(Math.random() * 100),
    modelo: prompt("Digite o MODELO do veiculo"),
    marca: prompt("Digite a MARCA do veiculo"),
    ano: Number(prompt("Digite o ANO do veiculo")),
    cor: prompt("Digite a COR do veiculo"),
    preco: Number(prompt("Digite o PREÇO do veiculo")),
  };
  carros.push(veiculo);
}
function listarVeiculo() {
  console.log(carros);
}

function filtrarVeiculos() {
  let filtraVeiculos = prompt("Digite a marca que deseja verificar");
  let marcaFiltrada = carros.filter((veiculo) => {
    return veiculo.marca == filtraVeiculos;
  });

  console.log(marcaFiltrada);
}

function atualizarVeiculo() {
  let atualizar = Number(
    prompt("Digite o ID do veiculo que voce deseja alterar")
  );
  let filtroAtualizar = carros.filter((veiculo) => {
    return veiculo.id == atualizar;
  });
}

function removerVeiculo() {
  let apagarPeloId = Number(prompt("Digite o ID do veiculo que deseja apagar"));
  let filtroApagar = carros.filter((veiculo) => {
    return veiculo.id == apagarPeloId;
  });
}

function sairDoSistema() {
  sair = true;
}

do {
  //   1. Deve ser desenvolvido um programa que realize um CRUD de carros.
  // Os inputs devem ser feitos através do PROMPT do HTML. O
  // funcionamento deve ser o seguinte:
  // Ao abrir a página, o sistema deve apresentar a seguinte tela:

  // Bem-vindo ao sistema de CRUD de veículos:

  // No momento, o sistema tem X carros cadastrados

  // Escolha uma das opções para interagir com o sistema:
  escolherOpcao();
  if (opcao == 1) {
    //     1 - Cadastrar veículo
    // -> Ao entrar nesta opção o sistema deve pedir os seguintes
    // dados: modelo, marca, ano, cor e preco.
    // -> O veículo deve ser adicionado na lista de veículos que
    // armazena todos os veículos cadastrados
    // -> Todo veículo deve ter um identificador único. Este
    // identificador deve ser gerado de forma automática
    cadastrarVeiculo();
  } else if (opcao == 2) {
    //     2 - Listar todos os veículos
    // -> Ao entrar nesta opção o sistema deve listar os veículos
    // com o seguinte layout:
    // ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
    // Preço: R$40.000
    // ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
    // Preço: R$40.000
    listarVeiculo();
  } else if (opcao == 3) {
    //     3 - Filtrar veículos por marca
    // -> Ao entrar nesta opção o sistema deve pedir para o
    // usuário digitar a marca que quer filtrar
    // -> Deve ser listado os veículos que forem da mesma marca
    // -> A lista deve ter o seguinte layout:
    // ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
    // ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
    filtrarVeiculos();
  } else if (opcao == 4) {
    // 4 - Atualizar veículo
    // -> Ao entrar nesta opção o sistema deve pedir para o
    // usuário digitar o IDENTIFICADOR do veículo
    // -> O Sistema deve verificar se o veículo existe ou não e
    // mostrar a seguinte mensagem caso o veículo não exista:
    // "Veículo, não encontrado. O usuário deve voltar para o menu
    // inicial depois"
    // -> Se o veículo existir, o sistema deve permitir que o usuário
    // atualize somente a cor e o preço.
  } else if (opcao == 5) {
    //     5 - Remover veículo
    // -> Ao entrar nesta opção o sistema deve pedir para o
    // usuário digitar o IDENTIFICADOR do veículo
    // -> O Sistema deve verificar se o veículo existe ou não e
    // mostrar a seguinte mensagem caso o veículo não exista:
    // "Veículo, não encontrado. O usuário deve voltar para o menu
    // inicial depois"
    // -> Se o veículo existir, o sistema deve remover o veículo
  } else if (opcao == 6) {
    //     6 - Sair do sistema

    // Regras:
    // - Os dados de um veículo são: identificador, modelo, marca,
    // ano, cor, preco
    // - A opção de filtro deve ser por marca e ordenada pelo preco
    // - A lista de veículos deve estar ordenada pelo preco.
    // - Só deve ser possível atualizar a cor e o preço do veículo.
    sairDoSistema();
  } else {
    console.log("NUMERO NÃO ENCONTRADO, TENTE NOVAMENTE!");
  }
} while (sair != true);
