import styled from 'styled-components';


const ProfileStyles = styled.div`
    .profile-container {
        height: 100vh;
        display: flex;
        flex-direction: flow;
        .left-container {
            flex: 2;
            margin-top: 7em;
            h2 {
                text-align: left;
                margin-left: 5em;
                font-size: 2em;
                color: #FFA900;
            }
        }
        .shows-habits {
            width: 50%;
            padding: 3px 30px;
            height: 600px;
            margin-left: 10em;
            margin-top: 2em;
            background-color: #f9f9f9;
            border-radius: 5px;
            text-align: left;
            border: 2px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            .habit-name {
                margin-left: 0.1em;
                font-size: 28px;
                color: #333;
                margin-bottom: 30px;
            }
            .habit {
                margin-top: 1em;
                display: flex;
                align-items: center; 
                justify-content: space-between; 
                padding: 10px;
                border-radius: 5px;
                height: 40px;
                background-color: #fff;
                h3 {
                    margin-left: 1em;
                    font-size: 18px;
                    font-weight: bold;
                    color: #333;
                }
                p {
                    font-size: 14px;
                    margin-left: -10em;
                    color: #666;
                }
                button {
                    background-color: #fff;
                    padding: 10px 20px;
                    border: 1px solid lightgray;
                    margin-right: 2em;
                    color: #fff;
                    background-color: #FFC300;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: background-color 0.3s ease;
                    &:hover {
                        background-color: #FFA900;
                    }
                }
            }
        }
        .right-container {
            flex: 1;
            padding: 2em;
            .create-new-habit {
                display: flex;
                flex-direction: row;
                align-center: center;
                margin-top: 9em;
                margin-right: 10em;
                padding: 20px;
                background-color: #fff;
                }
                input[type="text"] {
                    flex: 1;
                    margin-top: 20px;
                    margin-left: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 14px;
                    &:focus {
                        outline: none;
                    }
                }
                input[type="submit"] {
                    padding: 10px 20px;
                    height: 35px;
                    background-color: #FFC300;
                    border: none;
                    margin-top: 1.3em;
                    margin-left: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 16px;
                    transition: background-color 0.3s ease;
                    &:hover {
                        background-color: #FF9100;
                    }
                }
            }
        }
    }
`

export default ProfileStyles;