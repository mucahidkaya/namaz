import styled, { keyframes } from 'styled-components';
import palette from '../palette';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Stepper from '@mui/material/Stepper';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

export const Wrapper = styled.div`
  color: ${palette.white};
  border: 2px solid ${palette.red};
  padding: 1rem;
  min-width: 400px;
  min-height: 500px;
  width: 90vw;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  gap: 1rem;
`;

export const StyledStepper = styled(Stepper)`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  row-gap: 10px;

  .MuiSvgIcon-root {
    fill: ${palette.blue};
  }

  .MuiStepLabel-root {
    cursor: pointer;
  }

  .MuiStepLabel-label {
    color: ${palette.white} !important;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;

export const StyledImg = styled.img`
  height: 280px;
`;

export const CardMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const AudioPlayerWrapper = styled.div`
  width: 400px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledText = styled.p`
  color: ${palette.white};
`;

export const StyledIconButton = styled(IconButton)`
  border: 1px solid;
  border-color: ${(props) => (props.disabled ? ' #71797E' : palette.white)};
  align-self: flex-start;
`;

export const ArrowBackIcon = styled(ArrowBackIos)`
  color: ${(props) => (props.$isDisabled ? '#71797E' : palette.white)};
`;
export const ArrowForwardIcon = styled(ArrowForwardIos)`
  color: ${(props) => (props.$isDisabled ? '#71797E' : palette.white)};
`;

// RGB animation keyframes
const textColorAnimation = keyframes`
  0%,100% { color: ${palette.red}; }
  25% { color: ${palette.orange}; }
  50% { color: ${palette.blue}; }
  75% { color: ${palette.green}; }
`;

export const HomeIcon = styled(HomeOutlinedIcon)`
  font-size: 48px;
  cursor: pointer;
  color: ${palette.white};
  transition: all 0.25s ease;
  align-self: center;

  &:hover {
    animation: ${textColorAnimation} 2s linear infinite;
  }
`;
