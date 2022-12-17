import styled from 'styled-components'

export const FormularioContato = styled.section`
	input {
	width: 80%;
	padding: 12px 32px;
	border: 1px solid #ccc;
	border-radius: 4px;
	resize: vertical;
	margin-bottom: 1rem;
  }

  textarea {
	width: 80%;
	padding: 12px 32px;
	border: 1px solid #ccc;
	border-radius: 4px;
	resize: vertical;
	margin-bottom: 1rem;
  }

  button {
	background-color: #00BFA6;
	border: none;
	color: white;
	padding: 12px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin-top: 1rem;
	width: 80%;
	border-radius: 4px;
	cursor: pointer;
  }	 
  
  h3{
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 5rem;
	margin: 5rem 10rem 5rem 10rem;
  }

  
	.button{
  		height: 34px;
  		border-radius: 4px;
  		border: 0;
  		cursor: pointer;
  		background-color: #0fdbff;
  		font-size: 18px;
  		transition: background-color, transform 0.8s;
		}

	.button:hover{
  	background-color: #0fe3ff;
  	transform: scale(1.01);
	}	
`

export const FormContainer = styled.section`
	display: flex;
`
export const FormularioImg = styled.div  `

		img{
		width: 550px;
	 	margin-bottom: 2rem;
	 	border-radius: 15px;
		display: grid;
		margin-left: 5rem;

		}
`
export const Form = styled.section `
	margin-left:10rem;
	margin-top:4rem
`
