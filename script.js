document.addEventListener('DOMContentLoaded', () => {
    const botoesAvancar = document.querySelectorAll('.btn-proximo');

    botoesAvancar.forEach(button => {
        button.addEventListener('click', () => {
            
            const passoAtual = document.querySelector('.passo.ativo');
            
            const proximoId = button.getAttribute('data-proximo');
            
            const idProximoPasso = `passo-${proximoId}`;

            if (passoAtual) {
                passoAtual.classList.remove('ativo');
            }

            const proximoPasso = document.getElementById(idProximoPasso);
            
            if (proximoPasso) {
                proximoPasso.classList.add('ativo');

                window.scrollTo({ top: 0, behavior: 'smooth' }); 
            } else {
               
                console.error(`Erro: Não foi possível encontrar o passo com o ID: ${idProximoPasso}`);
            }
        });
    });
});