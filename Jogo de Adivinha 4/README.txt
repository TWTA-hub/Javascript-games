Nome do Jogo: Jogo de Adivinhação;

Descrição: O Jogo de Adivinhação é um desafio online divertido onde os jogadores têm a oportunidade de testar a sua intuição e habilidades de adivinhação. O jogador é apresentado a uma série de imagens numeradas de 1 a 10. Cada imagem está associada a um número específico. O objetivo do jogo é escolher o número correspondente à imagem que o jogador acredita ser o número escolhido aleatoriamente pelo jogo.

Como Jogar:

Ao abrir o jogo, o jogador é recebido com uma tela que mostra as imagens numeradas de 1 a 10.
O jogador deve clicar na imagem que acredita conter o número escolhido pelo jogo.
Após fazer a escolha, o jogo revelará se o palpite do jogador está certo ou errado.
Se o número escolhido pelo jogador coincidir com o número aleatório gerado pelo jogo, aparecerá a mensagem "Parabéns, você acertou!".
Caso contrário, o jogador verá a mensagem "Não acertou, tente de novo!".
Objetivo: O objetivo do jogo é acertar o número escolhido aleatoriamente pelo jogo, com base nas imagens numeradas apresentadas.

Finalidade: O jogo foi criado com propósitos educativos e de entretenimento. Ele oferece aos jogadores a oportunidade de praticar as suas habilidades de tomada de decisão, estimativa e lógica, ao mesmo tempo em que se diverte com um desafio interativo.

Licença: Este jogo de adivinhação é partilhado sob a Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional. Foi criado pelo artista TWTA. Isso significa que os jogadores são livres para partilhar, adaptar e usar o jogo para fins não comerciais, desde que atribuam crédito ao criador original e partilhem as suas contribuições sob a mesma licença.

Acesso: O jogo pode ser acedido diretamente através do navegador web, sem a necessidade de instalação ou download.

Público-alvo: O jogo é adequado para pessoas de todas as idades que queiram divertir-se e desafiar as suas habilidades de adivinhação num ambiente online.

Nota: Este resumo foi adaptado para utilizar o português de Portugal, com palavras similares às do Brasil, mas mantendo a compreensão e clareza do texto. Sinta-se à vontade para personalizar conforme necessário.


A função lógica explicada:

##function guessNumber(guess): Aqui, estamos a definir uma função chamada guessNumber que recebe um argumento chamado guess. 
Esta função será chamada quando o jogador clicar em uma das imagens numeradas.

##var randomNumber = Math.floor(Math.random() * 10) + 1;: Esta linha gera um número aleatório entre 1 e 10, que será comparado com o número escolhido pelo jogador (guess). 

##O Math.random() gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo). Multiplicamos esse número por 10 e arredondamos para baixo usando 

##O Math.floor para obter um número inteiro entre 0 e 9. Adicionamos 1 para obter um número entre 1 e 10.

##var resultElement = document.getElementById("result");: Aqui, estamos obtendo uma referência ao elemento HTML com o ID "result". Esse elemento é onde exibiremos a mensagem se o jogador acertou ou errou.

##if (guess === randomNumber): Esta é uma estrutura condicional (um "if statement") que verifica se o palpite do jogador (guess) é igual ao número aleatório gerado (randomNumber).

##resultElement.textContent = "Parabéns, você acertou!";: Se o palpite do jogador for igual ao número aleatório, essa linha define o conteúdo do elemento "result" para a mensagem "Parabéns, você acertou!" usando a propriedade textContent.
else: Esta parte do código é executada se o palpite do jogador não for igual ao número aleatório.

##resultElement.textContent = "Falhou, tente de novo!";: Se o palpite do jogador for diferente do número aleatório, essa linha define o conteúdo do elemento "result" para a mensagem "Falhou, tente de novo!".


##Resumindo, a função guessNumber compara o palpite do jogador com um número aleatório gerado, e dependendo do resultado dessa comparação, exibe uma mensagem no elemento "result" para informar ao jogador se eles acertaram ou erraram na sua escolha.

A cada clique o jogo é reiniciado portanto pode tentar quantas vezes quiser voltar a jogar o jogo. A mensagem atualiza no final da tela sempre.

No futuro tentarei adicionar melhorias ao projeto!
