import { Container } from '@components';
import React from 'react';

import { Title, TitleContainer } from './Slide.styles';

export interface ISlideProps {
  title: string;
  right?: boolean;
}

export const Slide = ({ title, right }: ISlideProps) => {
  return (
    <Container wWidth>
      <TitleContainer isRight={right}>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
};
