import styled from 'styled-components';


const AboutStyles = styled.div`
    .about-container {
        width: 80%;
        margin: 150px auto;
        padding: 5px 50px;
        border-radius: 4px;
        box-shadow: -1px 0px 17px -1px rgba(0,0,0,0.4);
        section h2 {
            font-size: 2.5em;
            font-weight: bold;
            margin-bottom: 30px;
            text-align: left;
            width: fit-content;
            border-bottom: 10px solid #FFC300;
        }
        section p {
            line-height: 1.5;
            margin-bottom: 20px;
            text-align: left;
        }
        section ul {
            list-style: none;
            line-height: 1.5;
            margin-bottom: 20px;
            text-align: left;
        }
        section li {
            margin-bottom: 5px;
        }
        section li span {
            background-color: #FFC300
        }
    }
`

export default AboutStyles;