'use client';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useRouter } from 'next/navigation';

import { Slide, Typography } from '@mui/material';
import { useState } from 'react';
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  CardMediaWrapper,
  HomeIcon,
  ImageWrapper,
  StyledIconButton,
  StyledImg,
  StyledStepper,
  StyledText,
  TextWrapper,
  Wrapper,
} from './style';
import { aksamSteps, ikindiSteps, ogleSteps, sabahSteps, yatsiSteps } from '../Utils/namazSteps';
import Player from './Player';

export default function HorizontalLinearAlternativeLabelStepper({ gender, time }) {
  const router = useRouter();
  const getStep = () => {
    if (time == 'sabah') return sabahSteps(gender, 'Sabah');
    if (time == 'ogle') return ogleSteps(gender, 'Öğle');
    if (time == 'ikindi') return ikindiSteps(gender, 'İkindi');
    if (time == 'aksam') return aksamSteps(gender, 'Akşam');
    if (time == 'yatsi') return yatsiSteps(gender, 'Yatsı');
  };

  const steps = getStep(time);
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState('left');

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setDirection('right');
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setDirection('left');
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <Wrapper>
      <StyledStepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepLabel>{step?.title ?? ''}</StepLabel>
          </Step>
        ))}
      </StyledStepper>

      <ImageWrapper>
        {steps[activeStep]?.imgs?.map((img, index) => (
          <StyledImg
            key={index}
            src={process.env.DEVMODE == 'dev' ? img : '/namaz' + img}
            alt={steps[activeStep]?.title}
          />
        ))}
      </ImageWrapper>

      {/* <CardMediaWrapper>
        <Player autoPlay src={process.env.DEVMODE == 'dev' ? "/sounds/hello.mp3" : "/namaz/sounds/hello.mp3"} />
      </CardMediaWrapper> */}

      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <StyledIconButton onClick={handleBack} disabled={activeStep === 0}>
          <ArrowBackIcon $isDisabled={activeStep === 0} />
        </StyledIconButton>

        <Box sx={{ width: '60%', minHeight: 100, mx: 2, overflow: 'hidden' }}>
          <Slide direction={direction} in mountOnEnter unmountOnExit key={activeStep}>
            <TextWrapper>
              {steps[activeStep]?.text?.map((text, index) => (
                <StyledText key={index}>{text}</StyledText>
              ))}
              <Typography variant="h6">{}</Typography>
            </TextWrapper>
          </Slide>
        </Box>

        <StyledIconButton onClick={handleNext} disabled={activeStep === steps.length - 1}>
          <ArrowForwardIcon $isDisabled={activeStep === steps.length - 1} />
        </StyledIconButton>
      </Box>

      <HomeIcon onClick={() => router.push('/')} />
    </Wrapper>
  );
}
