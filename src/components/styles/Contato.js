import styled from "styled-components";

export const ContatoContainer = styled.section`
  input {
    width: 500px;
    padding: 12px 32px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    margin-bottom: 1rem;
    margin-left: 3rem;
  }

  textarea {
    width: 500px;
    padding: 12px 32px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    margin-bottom: 1rem;
    margin-left: 3rem;
  }

  button {
    background-color: #600227;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin-top: 1rem;
    width: 500px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 3rem;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    margin: 5rem 10rem 5rem 10rem;
    margin-bottom: 8rem;
  }
`;

export const ButtonContato = styled.button`
  height: 34px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  font-size: 18px;
  transition: background-color, transform 0.8s;

  :hover {
    background-color: #b72a6e;
    transform: scale(1.01);
  }
`;

export const Contatoformulario = styled.section`
  display: flex;
`;
export const Container = styled.section``;
export const ContatoImg = styled.div`
  img {
    width: 800px;
    margin-bottom: 2rem;
    border-radius: 50%;
    display: grid;
    margin-left: 2rem;
    margin-top: -4rem;
  }
`;
export const FormContato = styled.section`
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdaad6;
  border-radius: 15px;
  margin-top: -1rem;

  .redesSociais {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-bottom: 50px;
    margin-top: -5rem;
  }

  h4 {
    margin-bottom: 40px;
    text-align: center;
  }
`;
