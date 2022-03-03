import { Button, Container } from '@components';
import React from 'react';

import { Description, Subtitle } from './Subslide.styles';

export interface ISubslideProps {
  subtitle: string;
  description: string;
  last: boolean;
  onPress: () => void;
}

export const Subslide = ({
  subtitle,
  description,
  last,
  onPress,
}: ISubslideProps) => {
  return (
    <Container justifyCenter alignCenter px={32}>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
      <Button
        onPress={onPress}
        label={last ? 'Lets get started' : 'Next'}
        variant={last ? 'primary' : 'default'}
      />
    </Container>
  );
};
