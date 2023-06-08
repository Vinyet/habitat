import styled from 'styled-components';


const SettingsStyles = styled.div`
    .settings-container {
        margin-top: 4em;
        height: 100vh;
        background-color: #f0f0f0;
        padding: 20px;
        border-radius: 10px;
        h4 {
            font-size: 1.7em;
            margin-bottom: 30px;
        }
        .ajustes-container {
            display: flex;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 5px;
            background-color: #fff;
            width: 1700px;
            margin-left: 4em;
            .datos-personales {
                padding: 20px;
                flex: 1;
                display: flex;
                flex-direction: column;
                h5 {
                    text-align: left;
                    margin-top: 10px;
                    margin-bottom: 30px;
                    font-size: 18px;
                }
                .name-container,
                .email-container,
                .password-container {
                    display: flexbox;
                    flex-wrap: wrap;
                    align-items: center;
                    margin-bottom: 5px;
                    p {
                        margin: 0;
                        font-size: 16px;
                        font-weight: 500;
                        color: #666;
                    }
                    span {
                        color: #000;

                    }
                    button {
                        background-color: #FFC300;
                        color: #000;
                        border: none;
                        border-radius: 5px;
                        padding: 5px 10px;
                        margin-left: 10px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`

export default SettingsStyles;