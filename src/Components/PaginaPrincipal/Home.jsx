/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Home.css"
import { Link } from 'react-router-dom'
import { ImHappy } from 'react-icons/im'
import { AiOutlineFilePdf } from 'react-icons/ai'

function Home() {

    const imutavel = {

    titulo:  `Meu nome é Lucas Maia, e sou Desenvolvedor Front-End.`
    
    }

    const [datas, setDatas] = useState({

        titulo: '',
        tituloTimer: undefined,
    })

    function TimerTitle() {

        datas.tituloTimer = setInterval(() => {
            if (datas.titulo.length === imutavel.titulo.length) {
                return clearInterval(datas.tituloTimer)
            }
            datas.titulo = imutavel.titulo.slice(0, datas.titulo.length + 1)
            setDatas({ ...datas })
        }, 120)

    }

    useEffect(() => {
        TimerTitle()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (



        <div className="containerHome">

            <header>

                <h1 className="h1Header">{datas.titulo}</h1>
                {/* <img className="imgHeaderEu" src={require('./imagens/developer.jpg')} alt="" /> */}
            </header>


            <h1>Sobre mim...</h1>
            <img className="imglucas" src={require('./imagens/developer.jpg')} alt="programador" />


            <section className="texto">

                Olá, meu nome é Lucas Maia, sou Desenvolvedor Front-end Júnior.

                Tenho 27 anos, e estudo programação na faculdade Newton Paiva. Moro em Contagem/MG. Tenho como uma de minhas facilidades e prazeres criar sites visualmente atrativos e de fácil entendimento, além de dinâmicos. Sou altamente curioso e, por isso, tenho facilidade de aprendizado e sempre busco as novidades do mercado para aperfeiçoar ainda mais as minhas habilidades.
                Acredito no meu sólido conhecimento em Desenvolvimento Web pelo meu foco e meu anseio em crescer na área, e creio que posso ser uma adição valiosa para qualquer equipe de desenvolvimento! <br /> <br />

                <div className="curriculo">
                Baixe o meu currículo clicando no ícone: <a href='https://drive.google.com/file/d/1QqFW7Xr1mCYyOUOS5UxpRSlWUNoMX3Rp/view?usp=sharing' target="_blank" download rel="noreferrer" ><AiOutlineFilePdf size={25} color="rgb(112, 3, 214)"/></a>
                </div>
              

            </section>

            <div className="imagemCodigo">

            </div>

            <section>
                <h1 className="h1imgs">No momento, tenho conhecimentos nessas tecnologias abaixo:</h1>

                <div className="imagenshome">
                    <img className="imgtecno" src={require('./imagens/javascript.png')} alt="" />
                    <img className="imgtecno" src={require('./imagens/reactjs.png')} alt="" />
                    <img className="imgtecno" src={require('./imagens/html.png')} alt="" />
                    <img className="imgtecno" src={require('./imagens/css.png')} alt="" />
                </div>

            </section>

            <h1 className="h1proj">Abaixo 3 dos meus projetos! Clique na imagem para interagir com eles <ImHappy size={25} color="#FFFF00" /></h1> <br />

            <section className="meusprojetos">

                <Link className="links" to="/biscoitodasorte">
                    <h3>Biscoito da sorte</h3>
                    <img className="imagespro" src={require('./imagens/biscoitodasorte.jpg')} alt="" />
                </Link>

                <Link className="links" to="/cronometro">
                    <h3>Cronômetro</h3>
                    <img className="imagespro" src={require('./imagens/cronometro.jpg')} alt="" />
                </Link>

                <Link className="links" to="/calculadoraimc">
                    <h3>Calculadora IMC</h3>
                    <img className="imagespro" src={require('./imagens/calculadoraimc.jpg')} alt="" />
                </Link>

            </section>

            <section>
                <h3>Se você quiser ver todos os meus projetos, é só clicar na imagem abaixo para ser redirecionado para o meu GitHub.</h3>

                <a href="https://github.com/LucasMaia516" target="_blank" rel="noreferrer"><img className="imgGitHub" src={require('./imagens/github.png')} alt="GitHub" />
                </a>

            </section>

            <footer>

                <div id="#contato">

                    <span className="contatos">

                        <h3>Contatos:</h3> <br />
                        
                        Telefone celular : (31) 99188-0278 <br /> <br />
                        Email: maialucas516@gmail.com <br />

                    </span>

                </div><br /><br />

                Site criado por, <a href="https://github.com/LucasMaia516" target="_blank" rel="noreferrer">LucasMaia.</a>

            </footer>
        </div>
    )

}
export default Home;