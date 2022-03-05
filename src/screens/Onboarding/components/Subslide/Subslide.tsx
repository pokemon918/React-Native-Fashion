import { Button, Container } from '@components';
import { screens } from '@constants';
import type { AuthStackScreenProps } from '@navigation';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { Description, Subtitle } from './Subslide.styles';

export interface ISubslideProps {
  index: number;
  subtitle: string;
  description: string;
  last: boolean;
  onScrollToPosition: (index: number) => void;
}

export const Subslide = ({
  index,
  subtitle,
  description,
  last,
  onScrollToPosition,
}: ISubslideProps) => {
  const nav =
    useNavigation<AuthStackScreenProps<'Onboarding'>['navigation']>();

  const onPress = useCallback(() => {
    if (last) {
      nav.navigate(screens.ONBOARDING);
    }
    onScrollToPosition(index);
  }, [index, last, nav, onScrollToPosition]);

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
