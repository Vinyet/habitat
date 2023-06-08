import styled from 'styled-components';


const LogInStyles = styled.div`
    background-color: #DADDDE;
    height: 100vh;
    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
        form {
            display: flex;
            flex-direction: column;
            width: 350px;
            border: 2px solid #ccc;
            background-color: #fff;
            padding: 2rem;
            border-radius: 0.5rem;
            label {
                font-weight: bold;
                margin-bottom: 0.7rem;
                margin-top: 1rem;
                text-align: left;
            }    
            input[type="text"],
            input[type="email"],
            input[type="password"] {
                width: 95%;
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid lightgray;
                border-radius: 5px;
                &:focus {
                    outline: none;
                }
            }    
            input[type="submit"] {
                background-color: #FFC300;
                width: 100%;
                color: #000;
                padding: 10px 20px;
                border: none;
                cursor: pointer;
                transition: background-color 0.3s ease;
                margin-top: 1rem;
                border-radius: 0.25rem;
                font-weight: bold;
                font-size: 16px;
            }
            input[type="submit"]:hover {
                background-color: #000;
                color: #FFC300;
            }
        }
    }
      
`

export default LogInStyles;