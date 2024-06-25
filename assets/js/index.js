document.addEventListener('DOMContentLoaded', () => {
    const tituloSobre = document.querySelector('.titulo-sobre');
    const textoSobre = document.querySelector('#texto-sobre');
    const textContent = `Como desenvolvedor, possuo habilidades sólidas em HTML, CSS, JavaScript, JavaWeb e Python. Tenho experiência no desenvolvimento de projetos tanto como membro do Dev Club e dos Irmãos Dev, quanto como freelancer. Além disso, aprimorei minhas habilidades em Excel para um nível intermediário através da mentoria do profissional Ítalo Teotônio.

    No mercado de trabalho há quatro anos, minha jornada começou aos 15 anos, trabalhando informalmente. Aos 16, atuei por um curto período em telemarketing. Em seguida, aos 16 anos, em 01/06/2022, fui contratado pela rede Sakashita. Com seis meses de trabalho, fui promovido ao cargo de repositor na qual exerci até dia 04/06/2024 Essa experiência me proporcionou desenvolvimento de habilidades essenciais, como lidar com o público e aprimorar capacidades de memorização e organização.

    Após três anos de estudo, concluí o ensino médio por meio do programa integrado ao ensino médio em Análise e Desenvolvimento de Sistemas na Etec Dr. José Luiz Viana Coutinho. Em fevereiro de 2024, comecei minha jornada na Fatec Jales. `;

    tituloSobre.addEventListener('mouseover', () => {
        if (!textoSobre.classList.contains('visible')) {
            textoSobre.innerHTML = '';
            textoSobre.style.display = 'block';
            textContent.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.classList.add('letra');
                textoSobre.appendChild(span);

                setTimeout(() => {
                    span.style.opacity = '1';
                }, index * 50);
            });
            textoSobre.classList.add('visible');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const elementosComTexto = document.querySelectorAll('.imagem-com-texto');

    elementosComTexto.forEach(elemento => {
        const texto = elemento.querySelector('.texto-animado');

        elemento.addEventListener('mouseenter', () => {
            texto.classList.add('slide-in');
        });

        elemento.addEventListener('mouseleave', () => {
            texto.classList.remove('slide-in');
        });
    });
});


