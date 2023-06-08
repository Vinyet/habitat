import styled from 'styled-components';


const HomeStyles = styled.div`
    .home-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-image: url('https://media.glamourmagazine.co.uk/photos/6138c51e5737943865219f44/16:9/w_2560%2Cc_limit/istock-658448850_hero.jpg');
        background-color: #FFF;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .claim-container {
        background-color: #fff;
        padding: 50px;
        border-radius: 4px;
        box-shadow: -1px 0px 17px -1px rgba(0,0,0,0.4);
    }
    h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #333333;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 2rem;
        color: #666666;
        text-align: center;
    }
    button {
        padding: 0.75rem 1.5rem;
        font-size: 1.25rem;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        background-color: #FFC300;
        color: #000;
        text-transform: uppercase;
        cursor: pointer;
        margin-top: 2em;
        transition: all 0.2s ease-in-out;
    }
    button:hover {
        background-color: #FFD166;
    }
  
`

export default HomeStyles;
