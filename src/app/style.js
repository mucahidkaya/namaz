import styled, { keyframes } from 'styled-components';
import palette from './palette';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
`;

export const Header = styled.h1``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
`;

// RGB animation keyframes
const rgbBorder = keyframes`
  0%,100% { border-color: ${palette.red}; }
  25% { border-color: ${palette.orange}; }
  50% { border-color: ${palette.blue}; }
  75% { border-color: ${palette.green}; }
`;

export const Card = styled.div`
  width: 300px;
  height: 340px;
  border: 4px solid ${palette.main100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  padding: 6px;
  border-radius: 9px;
  gap: 1rem;
  transition: border-color 0.25s ease;

  &:hover {
    animation: ${rgbBorder} 2s linear infinite;
  }
`;

export const GenderText = styled.p`
  color: ${palette.white};
  font-size: 20px;
`;

export const GenderImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 9px;
`;

export const Note = styled.p`
  color: ${palette.white};
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
`;
