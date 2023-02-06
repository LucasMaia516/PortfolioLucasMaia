import { useState } from "react"
import "./CalculadoraImc.css"

export default function CalculadoraImc() {

    const [nome, setNome] = useState('')
    const [peso, setPeso] = useState()
    const [altura, setAltura] = useState()
    const [resultado, setResultado] = useState()

    const imc = () => {

        const valorImc = Number((peso / (altura * altura).toFixed(2)))
        setResultado(Number(valorImc.toFixed(2)))
        console.log(valorImc.toFixed(1))

    }

    return (


        <div>

            <h1>Deseja calcular seu IMC? Se sim, então é só preencher os seus dados abaixo!</h1>

            <main className="mainCalculadoraImc">

                <h1>Calculadora IMC</h1>
                {/* 
                <p>Digite o seu nome:</p> <input className="nome" type="text" value={nome} id="nome" onChange={(e) => setNome(e.target.value)} /> */}
                <p>Digite o seu peso:</p> <input className="peso" type="number" value={peso} id="peso" onChange={(e) => setPeso(e.target.value)} />
                <p>Digite a sua altura:</p> <input className="altura" type="number" value={altura} id="altura" onChange={(e) => setAltura(e.target.value)} />

                <div>
                    <button className="calcular" onClick={imc}>Calcular</button>
                </div>

                <div className="resultado">

                    {resultado}

                </div>

                <div> <br /><br />
                    <h2>Tabela IMC</h2>

                    <ul>
                        <li>
                            <p>Abaixo de 18.5, a pessoa encontra-se abaixo do peso ideal!</p>
                        </li>
                        <li>
                            <p>Abaixo de 25.0, a pessoa encontra-se no peso ideal</p>
                        </li>
                        <li>
                            <p>Abaixo de 30.0, a pessoa encontra-se levemente acimda do peso</p>
                        </li>
                        <li>
                            <p>
                                Abaixo de 35.0, a pessoa encontra-se com obeidade grau 1
                            </p>
                        </li>
                        <li>
                            <p>Abaixo de 40.0, a pessoa encontra-se com obesidade grau 2</p>
                        </li>
                        <li>
                            <p>Acima de 40.0, a pessoa encontra-se com obesidade grau 3</p>
                        </li>
                    </ul>
                </div>


            </main>


        </div>
    )


}