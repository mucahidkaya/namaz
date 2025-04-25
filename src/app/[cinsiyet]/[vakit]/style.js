import styled from 'styled-components';
import palette from '@/app/palette';

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
  overflow: hidden;
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid;
  border: 2px solid ${palette.main100};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    border-color: ${palette.red};
  }
`;
