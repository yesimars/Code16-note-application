import styled from "styled-components";


export const FormContainer=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
font-family: 'Poppins', sans-serif;
margin: 0;
background-image: linear-gradient(to right, #99BADD, #FBAED2, #98FF98);
margin-bottom: 10px;
margin-left: auto;
margin-right: auto;
border-radius: 10px;
padding: 1rem;
min-height: 170px;
max-width: 300px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 0 4px 4px rgba(2, 15, 29, 0.242);


button{
    margin-left: 200px;
    margin-right: auto;
    border: none;
    box-shadow: 0 4px 4px rgba(2, 15, 29, 0.242);
    background-image: linear-gradient(to right, #FBAED2, #98FF98,#99BADD);
    border-radius: 2px;
    transform: uppercase;
    transition: 0ms.1s;
    text-align: center;
    align-items: center;
    width: 80px;
    height: 25px;
    color: 	#4B0082;
}

textarea{
    background-image: linear-gradient(to right, #98FF98, #99BADD, #FBAED2);
    border: none;
    border-radius: 10px;
    text-decoration-color: black;
    box-shadow: 0 4px 4px rgba(2, 15, 29, 0.242);
}
`