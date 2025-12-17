document.addEventListener("DOMContentLoaded", function() {
  const quizContainer = document.getElementById("quiz-container");
  const submitBtn = document.getElementById("submit-btn");
  let respondeu = false

  const perguntas = [
    {
      pergunta: "Qual é a capital do Brasil?",
      opcoes: ["Brasília", "Rio de Janeiro", "São Paulo", "Belo Horizonte"],
      respostaCorreta: "Brasília"
    },
o
    {
      pergunta: "How many characters have in the story?",
      opcoes: [1, 2, 3, 4],
      respostaCorreta: 4
    },
    {pergunta: "Qual o log de 10 na base 10 ?",
      opcoes:[1,2, 0,10],
    respostaCorreta: 1
    },
    {pergunta: "Qual a raiz quadrada de 144 ?",
     opcoes:[13, 14, 11, 12,16],
     respostaCorreta: 12
    },
    {pergunta: "Quantos tributos são necessários para invocar um monstro de nível 7?",
    opcoes : [7,2,1],
    respostaCorreta : 2}
  ];


  function mostrarPerguntas() {
    let html = "";
    perguntas.forEach(function(p, index) {
      html += `<div id="card-pergunta${index}" class="mb-3">
                        <p>${index + 1}. ${p.pergunta}</p>
                        <div id="opcoes${index}" class="opcoes"></div>
                    </div>`;
    });
    quizContainer.innerHTML = html;


    perguntas.forEach((p, index) => {
      const opcoesContainer = document.getElementById(`opcoes${index}`);
      p.opcoes.forEach((opcao) => {
        opcoesContainer.innerHTML += `<div class="form-check">
                                                <label class="form-check-label">
                                                  <input class="form-check-input" type="radio" name="pergunta${index}" value="${opcao}">${opcao}
                                                </label>
                                            </div>`;
      });
    });
  }
  function mostrarAlerta(index, tipo, mensagem) {
    if (index < 0) {
      const cardInfo = document.getElementById(`info`);
      cardInfo.style.display = "block"
      cardInfo.classList.add('alert', `alert-${tipo}`, 'mt-2');
      cardInfo.innerHTML = mensagem

    } else {
      const cardPergunta = document.getElementById(`card-pergunta${index}`);
      const alertElement = document.createElement('div');
      alertElement.classList.add('alert', `alert-${tipo}`, 'mt-2');
      alertElement.textContent = mensagem;
      cardPergunta.appendChild(alertElement);
    }
  }


  function verificarRespostas() {
    let pontuacao = 0;
    if (!respondeu) {
      respondeu = true
      perguntas.forEach(function(p, index) {
        const opcaoSelecionada = document.querySelector(`input[name="pergunta${index}"]:checked`);

        if (opcaoSelecionada) {
          const respostaUsuario = opcaoSelecionada.value;
          if (respostaUsuario == p.respostaCorreta) {
            pontuacao++;

            mostrarAlerta(index, 'success', 'Resposta correta!');
          } else {

            mostrarAlerta(index, 'danger', 'Resposta incorreta!');
          }

        }
      });

      mostrarAlerta(-1, 'info', `Sua pontuação: ${pontuacao}/${perguntas.length}`);
    } else {
      mostrarAlerta(-1, 'info', `Sua pontuação: ${pontuacao}/${perguntas.length}<br>Usuário já respondeu.`);
    }

  }


  submitBtn.addEventListener("click", verificarRespostas);


  mostrarPerguntas();
});
