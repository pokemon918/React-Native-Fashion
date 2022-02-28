import React from 'react';
import { Container } from '@components';

import { TitleContainer, Title } from './Slide.styles';

export interface ISlideProps {
  title: string;
  right?: boolean;
}

export const Slide = ({ title, right }: ISlideProps) => {
  return (
    <Container wWidth>
      <TitleContainer right={right}>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
};
