// Sistema de Vagas de Emprego
// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas.
// Ele deve atender aos seguintes requisitos:

// Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema|
// Listar vagas disponíveis
// Criar um nova vaga
// Visualizar uma vaga
// Inscrever um candidato em uma vaga
// Excluir uma vaga
// Sair
// A opção de listar as vagas deve mostrar o índice, o nome e a
// quantidade de candidatos inscritos de todas as vagas.
// A opção de criar uma nova vaga deve pedir um nome para a vaga,
//  uma descrição e uma data limite, e também deve pedir que o
// usuário confirme as informações antes de salvá-las.
// A opção de visualizar uma vaga deve pedir o índice da vaga e
// mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade
// de candidatos e o nome dos candidatos.
// A opção de inscrever um candidato em uma vaga de pedir o nome
// do candidato, o índice da vaga e então uma confirmação exibindo as informações
// da vaga antes de salvar o candidato na vaga.
// A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações
// e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

///variables
let perguntaMenu = "";
vagas = [];
//índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

//----functions--////
function menu() {
  perguntaMenu = window.prompt(
    "__BEM-VINDO a vagas de empregos!!\n" +
      "Oque deseja fazer??\n" +
      "\n1- Listar vagas disponiveis" +
      "\n2- Criar uma nova vaga" +
      "\n3- Visualizar uma vaga" +
      "\n4- Inscrever um canditao em uma nova vaga" +
      "\n5- Excluir uma vaga" +
      "\n6- Sair",
  );
}
//-------------------------------------------------
function listarVagas() {
  // deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
  if (vagas.length === 0) {
    window.alert("Nenhuma vaga cadastrada até entao, volte mais tarde!");
    return;
  }
  function exibirNameVagas(vaga, index) {
    return (
      (index +
      1) +
      " - " +
      vaga.nameVaga +
      " | Vagas disponiveis: " +
      vaga.quantidadeCanditados
    );
  }

  let lista = vagas.map(exibirNameVagas).join("\n");
  window.alert(
    "Você selecionou a opcao de listar vagas!!" +
      "\nSegue a lista das vagas: " +
      "\n" +
      lista,
  );
}

//--------------------------------------------------
function criarVaga() {
  window.alert("Voce deseja criar uma nova vaga...");

  let nameVaga, descricaoVaga, dataLimite, confirmCriarVaga;

  do {
    nameVaga = window.prompt("Qual nome da vaga?");
    descricaoVaga = window.prompt("Digite uma descricao para a vaga");
    dataLimite = window.prompt(
      "Até Quando está disponivel a vaga?(dia/mes/ano)",
    );
    quantidadeCanditados = parseInt(
      window.prompt("Qual a quantidade de vagas?"),
    );
    confirmCriarVaga = window
      .prompt(
        "Confirme as informacoes abaixo? (SIM/NAO)\n" +
          "Nome da vaga: " +
          nameVaga +
          "\nDescricão: " +
          descricaoVaga +
          "\n Data limte da vaga: " +
          dataLimite +
          "\nQuantidade de vagas : " +
          quantidadeCanditados,
      )
      .toLowerCase();
    if (confirmCriarVaga === "nao") {
      window.alert("Voce voltara para o menu de criar vagas!!");
    } 
    else if(confirmCriarVaga === "sim"){
       vagas.push({
    nameVaga: nameVaga,
    descricaoVaga: descricaoVaga,
    dataLimite: dataLimite,
    quantidadeCanditados: quantidadeCanditados,
    nameCanditados: [],
  });

  window.alert("Vaga criada com sucesso!!");
}else{
  window.alert("Opcao invalida!")
}
  } while (confirmCriarVaga !== "sim");
 
}
//--------------------------------------
function visualizarVaga() {
  //deve pedir o índice da vaga e mostrar todas as informações
  // dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
  function exibirNameVagas(vaga, index) {
    return (
      (index +
      1) +
      " - " +
      vaga.nameVaga +
      "| Vagas disponiveis: " +
      vaga.quantidadeCanditados
    );
  }

  let lista = vagas.map(exibirNameVagas).join("\n");

  let perguntaVisualizarVaga;
  let perguntaVisualizarVagaStr
  perguntaVisualizarVagaStr = 
    window.prompt(
      "Segue a lista de vagas: " +
        "\n" +
        lista +
        "\n Qual dela deseja visualizar? (digite apenas o numero!)" +
        "\nDigite 'sair' para voltar ao menu principal!",
    )

    if(perguntaVisualizarVagaStr === "sair"){
      window.alert("voltando para o menu principal...")
      return
    }

   perguntaVisualizarVaga = parseInt(perguntaVisualizarVagaStr)

  let vagaEscolhida = vagas[perguntaVisualizarVaga - 1];

  if (vagaEscolhida) {
    window.alert(
      "Vaga escolhida: " +
        "\nId da vaga escolhida: " +
        vagaEscolhida.id +
        "\nNome da vaga escolhida: " +
        vagaEscolhida.nameVaga +
        "\nDescricao da vaga: " +
        vagaEscolhida.descricaoVaga +
        "\nAté quando está disponive: " +
        vagaEscolhida.dataLimite +
        "\nCandidatos: " + vagaEscolhida.nameCanditados.join(", ") + 
        "\nQuantidade de canditados: " + vagaEscolhida.nameCanditados.length
    );
  }
}
//--------------------------------------------
function inscreverVaga() {
  let confirmInscreverVaga;

  function exibirNameVagas(vaga, index) {
    return (
      (index +
      1) +
      " - " +
      vaga.nameVaga +
      "| Vagas disponiveis: " +
      vaga.quantidadeCanditados
    );
  }
  do {
    let lista = vagas.map(exibirNameVagas).join("\n");
    window.alert("Voce deseja inscrever um candidato...");

    let escolhaStr =
      window.prompt(
        "Segue a lista das vagas" +
          "\n" +
          lista +
          "\nEm qual vaga deseja se inscrever? digite apenas a numeracao dela...\n" +
          "(Se atente a quantidade de vagas disponiveis!!)" +
          "\nDigite 'sair' para sair do menu!",
      )
     if(escolhaStr.toLowerCase() === "sair"){
      window.alert("Voltando para o menu...até mais!")
      break
     }
     let escolha = parseInt(escolhaStr);
    let vagaEscolhida = vagas[escolha - 1];

    if (vagaEscolhida) {
      let nameCanditadoInscreverVaga = window.prompt("Me diga o seu nome: ");

      confirmInscreverVaga = window
        .prompt(
          "Prazer " +
            nameCanditadoInscreverVaga +
            ", você deseja realmente se inscrever na vaga: " +
            vagaEscolhida.nameVaga +
            "? (sim/nao)" +
            "\nDigite 'sair' a qualquer momento para sair!",
        )
        .toLowerCase();

      if (confirmInscreverVaga === "sim") {
        vagaEscolhida.nameCanditados.push(nameCanditadoInscreverVaga);
        window.alert(
          "Candidato inscrito na vaga " +
            vagaEscolhida.nameVaga +
            " com sucesso!!",
        );
      } else if (confirmInscreverVaga === "nao") {
        window.alert("Inscricao cancelada!");
      } else if (confirmInscreverVaga === "sair") {
        break;
      } else {
        window.alert("Opcao invalida!");
      }
    } else {
      window.alert("Vaga invalida! Tente novamente.");
    }
  } while (confirmInscreverVaga !== "sim");
}
//---------------------------------------------------//
function excluirVaga() {
  //deve pedir o índice da vaga, mostrar suas informações
  //  e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
  function exibirNameVagas(vaga, index) {
    return (index + 1) + " - " + vaga.nameVaga;
  }

  let escolhaExcluirVaga;
  let confirmExclucao;
  do {
    let lista = vagas.map(exibirNameVagas).join("\n");
    window.alert("Voce deseja excluir uma vaga");
    let escolhaExcluirVagaStr= 
      window.prompt(
        "Segue a lista abaixo das vagas, qual você deseja excluir?" +
          "(digite apenas a numeracao)" +
         "\nLista: \n" +  lista +
          "\n\nDigite 'sair' para sair e voltar para menu principal!"
      )
       
      if(escolhaExcluirVagaStr.toLowerCase() === "sair"){
        window.alert("Voltando para o menu principal...")
        break
      }

    escolhaExcluirVaga = parseInt(escolhaExcluirVagaStr)
    let vagaEscolhidaExcluir = vagas[escolhaExcluirVaga - 1];

      if (vagaEscolhidaExcluir === undefined){
        window.alert("Vaga invalida")
        continue
      }

    confirmExclucao = window.prompt(
      "Voce selecionou a vaga " +
        vagaEscolhidaExcluir.nameVaga +
        ", voce deseja realmente exlcuir ela? (sim/nao)" +
        "\nDigite 'sair'a qualquer momento para sair!",
    );
    if (confirmExclucao === "sim") {
      vagas.splice(escolhaExcluirVaga - 1, 1);
      window.alert("Vaga excluida com sucesso!");
    } else if (confirmExclucao === "sair") {
      window.alert("Voce voltará para o menu de exlusao!");
      break
    } else {
      window.alert("Opcao invalida!!");
    }
  } while (confirmExclucao !== "sim");
}

//------------------------------//
//Repeticao == até o cliente escolherr SAIR e finalizar!!
//do while PRINCIPAL
do {
  menu();
  if (
    perguntaMenu === "1" ||
    perguntaMenu === "listar vagas" ||
    perguntaMenu === "listar vagas disponiveis"
  ) {
    listarVagas();
  } else if (
    perguntaMenu === "2" ||
    perguntaMenu === "criar vaga" ||
    perguntaMenu === "crirar uma nova vaga"
  ) {
    criarVaga();
  } else if (
    perguntaMenu === "3" ||
    perguntaMenu === "visualizar vaga" ||
    perguntaMenu === "visualizar uma vaga"
  ) {
    visualizarVaga();
  } else if (
    perguntaMenu === "4" ||
    perguntaMenu === "inscrever candidato" ||
    perguntaMenu === "inscrever canditado em uma nova vaga"
  ) {
    inscreverVaga();
  } else if (
    perguntaMenu === "5" ||
    perguntaMenu === "excluir vaga" ||
    perguntaMenu === "excluir uma  vaga"
  ) {
    excluirVaga();
  }
} while (perguntaMenu !== "sair" && perguntaMenu !== "6");
window.alert("Encerrando...");
