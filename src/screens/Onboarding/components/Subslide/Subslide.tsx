import { Container } from '@components';
import React from 'react';

import { Subtitle, Description } from './Subslide.styles';

export interface ISubslideProps {
  subtitle: string;
  description: string;
  last: boolean;
}

export const Subslide = ({
  subtitle,
  description,
  last,
}: ISubslideProps) => {
  return (
    <Container justifyCenter alignCenter px={32}>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
    </Container>
  );
};
