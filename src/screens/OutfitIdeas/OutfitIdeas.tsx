import { Container, Header } from '@components';
import React, { useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';

import { Background, Card } from './components';
import { ScreenContainer } from './OutfitIdeas.styles';

const cards = [
  // {
  //   index: 3,
  //   source: require('../../../assets/images/4.png'),
  // },
  // {
  //   index: 2,
  //   source: require('../../../assets/images/3.png'),
  // },
  {
    index: 1,
    source: require('../../../assets/images/2.png'),
  },
  {
    index: 0,
    source: require('../../../assets/images/1.png'),
  },
];

const step = 1 / (cards.length - 1);

export const OutfitIdeas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useSharedValue(currentIndex);
  return (
    <ScreenContainer>
      <Header
        title="Outfit Ideas"
        left={{ icon: 'menu', onPress: () => true }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />

      <Container justifyCenter alignCenter>
        <Background />
        {cards.map(
          ({ index }) =>
            index >= currentIndex && (
              <Card
                key={index}
                index={index}
                step={step}
                aIndex={aIndex}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
              />
            ),
        )}
      </Container>
    </ScreenContainer>
  );
};
