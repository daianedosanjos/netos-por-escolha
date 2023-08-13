import styled from "styled-components";

export const Home = styled.section`
  padding-top: 5rem;
  gap: 3rem;
  
`;

export const HomeImg = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  margin-top: -3rem;

  img {
    width: 98%;
    height: 15rem;
    margin-top: 8rem;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

export const Itens = styled.div`
  margin: 0.2px;
  padding: auto;
  width: 280px;
  border-radius: 16px;
  flex: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Buttons = styled.div`
 margin: auto;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: #600227;
`;

export const ButtonClick = styled.button`
  outline: none;
  border: none;
  margin-left: 1rem;
  cursor: pointer;
  background-color: #fffae7;
`;
