const botaoMostrarProjetos = document.querySelector('.btn-mostrar-mais-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click',() =>{ 
    mostrarMaisProjetos ();
    esconderBotao();
   
});

  function esconderBotao() {
        botaoMostrarProjetos.classList.add("remove");
    }
        
function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

window.addEventListener("scroll", function() {
const logoSome = document.querySelector('.logo');
const scrollPosition = window.scrollY;
if (scrollPosition < 100) {
    logoSome.classList.add('sumir');
  } else {
    logoSome.classList.remove('sumir');
  }
});
  