import styled from 'styled-components';


const HeaderStyles = styled.div`
    header {
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        z-index: 1;
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            ul {
                list-style: none;
                display: flex;
                margin: 0;
                padding: 0;
                justify-content: flex-end;
                margin-left: auto;
                margin-right: 30px;
                li {
                    margin-left: 30px;
                    font-weight: bold;
                    color: #000;
                    cursor: pointer;
                    text-decoration: none;
                    &:active {
                        color: yellow;
                        text-decoration: none;
                    }
                    &:hover {
                        color: #FFC300;
                    }
                }
                .dropdown-menu {
                    display: none;
                    background-color: #fff;
                    color: #000;
                    margin-right: -40px;
                    margin-top: 20px;
                }
                .dropdown:hover .dropdown-menu, 
                .dropdown:focus .dropdown-menu {
                    display: block;
                }
                .dropdown-menu li {
                    padding: 10px 20px;
                    margin-left: -5px;
                }
                .dropdown a {
                    color: #fff;
                }
                .join-btn {
                    background-color: #FFC300;
                    padding: 8px 15px;
                    border-radius: 100px;
                    color: #000;
                    margin-top: -8px;
                    &:hover {
                        background-color: #FFE599;
                        color: #000;
                    }
                }
            }
        }
    }
`

export default HeaderStyles;