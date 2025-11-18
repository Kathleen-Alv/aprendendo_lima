function trocarImagem() {
    // 1. Corrigido: 'document' com 'd' minúsculo
    const img = document.getElementById('livro');

    // 2. e 3. Corrigidos: Sem ponto e vírgula após o 'if'
    // 4. Corrigido: Usando .src e endsWith() para verificar o caminho
    if (img.src.endsWith("./livroFechado.png") || img.src.endsWith("livroFechado.png")) {

        img.src = "./livroAberto.png";
        img.alt = "Segunda img";

    } else {
        // Assume que qualquer outra imagem é o 'livroAberto' e volta para o 'livroFechado'
        img.src = "./livroFechado.png";
        img.alt = "Primeira img";
    }
}
