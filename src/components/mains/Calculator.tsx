import useCalculator from "../../hooks/useCalculator.ts";
import styled from "styled-components";

const CalcStyles = styled.div`
    
        text-align: left;
        max-width: 500px;
        margin: 2rem auto;
        padding: 2rem;
        background-color: #f5f5f0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    /* Input display area */
    .calc-display {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .calc-display label {
        font-size: calc(12px + 0.4vw);
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 0.3rem;
    }

    .calc-display input {
        width: 100%;
        padding: calc(8px + 0.5vw);
        font-size: calc(14px + 0.5vw);
        border: 2px solid #bdc3c7;
        border-radius: 4px;
        box-sizing: border-box;
        transition: border-color 0.3s ease;
    }

    .calc-display input:focus {
        outline: none;
        border-color: #c0392b;
    }

    /* Button grid */
    .calc-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: calc(8px + 0.5vw);
        margin-bottom: 2rem;
    }

    .calc-buttons button {
        flex: 1 1 calc(33.333% - calc(8px + 0.5vw));
        min-width: 80px;
        padding: calc(10px + 0.5vw);
        font-size: calc(16px + 0.5vw);
        font-weight: 600;
        background-color: #34495e;
        color: #ecf0f1;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.1s ease;
    }


    /* Clear button special styling */
    .calc-buttons button:last-child {
        flex: 1 1 100%;
        background-color: #e74c3c;
    }



    .calc-output {
        text-align: center;
        padding: calc(12px + 1vw);
        background-color: #ffffff;
        border-radius: 4px;
        border: 2px solid #34495e;
    }

    .calc-output h3 {
        font-size: calc(18px + 1vw);
        margin: 0;
        color: #2c3e50;
        font-weight: 700;
        word-wrap: break-word;
    }

    /* Mobile responsiveness */
    @media (max-width: 749px) {
        #calculator-container {
            padding: 1.5rem;
            margin: 1.5rem auto;
        }

        .calc-buttons button {
            flex: 1 1 calc(50% - calc(8px + 0.5vw));
            min-width: 60px;
        }
    }

    @media (max-width: 400px) {
        .calc-buttons button {
            flex: 1 1 100%;
        }
    }
`
export default function Calculator(){
    const {num1 , num2 , setNum1, setNum2, result, calc} = useCalculator();


    return (
        <CalcStyles>
                <div className="calc-display">
                    <input
                        type={"number"}
                        value={num1}
                        placeholder={"Enter a number"}
                        onChange={(e) => setNum1(Number(e.target.value))}
                    />
                    <input
                        type={"number"}
                        value={num2}
                        placeholder={"Enter a number"}
                        onChange={(e) => setNum2(Number(e.target.value))}
                    />
                </div>


                <div className="calc-buttons">
                    <button onClick={() => calc('+')}>+</button>
                    <button onClick={() => calc('-')}>-</button>
                    <button onClick={() => calc('/')}>/</button>
                    <button onClick={() => calc('*')}>*</button>
                    <button onClick={() => calc('**')}>^</button>
                </div>

                <div className="calc-output">
                    <h4>{result}</h4>
                </div>

        </CalcStyles>
)
}