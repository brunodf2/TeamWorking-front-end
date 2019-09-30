import styled from 'styled-components';

export const Container = styled.aside`
  background: #202225;
  padding: 20px, 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Team = styled.button`
  border: 0;
  background: transparent;
  margin: 5px 5px 8px;

  img {
  transition: all 0.2s;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  }

  &:hover img {
    border-radius: 30%;
    opacity: 0.9;
  }
`;
