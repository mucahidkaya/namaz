import styled, { keyframes } from 'styled-components';
import palette from '../palette';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

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
  flex-wrap: wrap;
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

// RGB animation keyframes
const textColorAnimation = keyframes`
  0%,100% { color: ${palette.red}; }
  25% { color: ${palette.orange}; }
  50% { color: ${palette.blue}; }
  75% { color: ${palette.green}; }
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;
  border: 4px solid ${palette.main100};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.25s ease;
  border-radius: 9px;

  &:hover {
    animation: ${rgbBorder} 2s linear infinite;
  }
`;

export const HomeIcon = styled(HomeOutlinedIcon)`
  font-size: 48px;
  cursor: pointer;
  color: ${palette.white};
  transition: all 0.25s ease;

  &:hover {
    animation: ${textColorAnimation} 2s linear infinite;
  }
`;
