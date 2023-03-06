import styled from "styled-components"

export const Container = styled.div`
    --Almost-White: hsl(0, 0%, 98%);
    --Medium-Gray: hsl(0, 0%, 41%);
    --Almost-Black: hsl(0, 0%, 8%);
    font-size: 18px;
    font-family: 'Epilogue';
    --reguler: 500;
    --bold: 700;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    background-color: var(--Almost-White);
    h1{
        font-size: 4.3em;
        font-weight: var(--bold);
        color:var(--Almost-Black);
        text-align: left;
        padding: 30px 40px 0 50px;
        @media screen and (max-width:1025px) {
            font-size: 2em;
            padding: 30px 20px 0 30px;
        }
        @media screen and (max-width:600px) {
            font-size: 2em;
            padding: 20px 0;
            margin: 0;
            text-align: center;
        }
    }
    p#desc{
        font-size: 1em;
        font-weight: var(--reguler);
        color:var(--Medium-Gray);
        text-align: left;
        line-height: 1.5em;
        padding: 0 120px 0 50px;
        @media screen and (max-width:1025px) {
            font-size: .8em;
            padding: 30px 50px 0 30px;
        }
        @media screen and (max-width:600px) {
            font-size: .9em;
            padding: 0 10px 30px;
            text-align: center;
        }
    }
    li#log{
        margin-right: 30px;
    }
    li#reg{
           padding: 12px 20px;
           border: .13em solid var(--Medium-Gray);
           margin:0 auto;
           border-radius: 12px;
           :hover{
                border: .15em solid var(--Almost-Black);
           }
            :active{
                color: var(--Medium-Gray);
                border: .15em solid var(--Medium-Gray);
            }
        }
    .rotate{
        transform: rotateZ(180deg);
        transition: 0.3s ease-in-out;
        stroke: var(--Almost-Black);
    }
    .default{
        transform: rotateZ(0deg);
        transition: 0.3s ease-in-out;
    }
    p#company{
        margin: 10px 10px;
        line-height: 1.3em;
        cursor: pointer;
        :hover{
            color:var(--Almost-Black);
            font-weight: var(--bold);
        }
        :active{
            color:var(--Medium-Gray);
            font-weight: var(--bold);
        }
    }
`