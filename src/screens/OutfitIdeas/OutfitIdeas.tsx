import { Container, Header } from '@components';
import React from 'react';

import { Background, Card } from './components';
import { ScreenContainer } from './OutfitIdeas.styles';

export const OutfitIdeas = () => {
  return (
    <ScreenContainer>
      <Header
        title="Outfit Ideas"
        left={{ icon: 'menu', onPress: () => true }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />

      <Container justifyCenter alignCenter>
        <Background />
        <Card position={1} />
        <Card position={0.5} />
        <Card position={0} />
      </Container>
    </ScreenContainer>
  );
};
