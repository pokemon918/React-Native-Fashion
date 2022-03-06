import { width } from '@styles';
import React from 'react';
import Animated from 'react-native-reanimated';

import { Dot, PictureSlider, Slide, Subslide } from './components';
import { useAnimatedStyles } from './Onboarding.animations';
import { SLIDES } from './Onboarding.constants';
import {
  Footer,
  Pagination,
  ScreenContainer,
  Slider,
  SubslideContainer,
} from './Onboarding.styles';

export const Onboarding = () => {
  const {
    x,
    onScroll,
    scrollViewRef,
    animatedBackground,
    animatedFooter,
    scrollToPosition,
  } = useAnimatedStyles();

  return (
    <ScreenContainer>
      <Slider style={animatedBackground}>
        {SLIDES.map(({ picture }, idx) => (
          <PictureSlider key={idx} {...{ idx, picture, x }} />
        ))}

        <Animated.ScrollView
          ref={scrollViewRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          {...{ onScroll }}
        >
          {SLIDES.map(({ title, picture }, idx) => (
            <Slide
              key={idx}
              right={!!(idx % 2)}
              {...{ title, picture }}
            />
          ))}
        </Animated.ScrollView>
      </Slider>

      <Footer style={animatedBackground}>
        <Pagination>
          {SLIDES.map((_, index) => (
            <Dot key={index} {...{ index, x }} />
          ))}
        </Pagination>

        <SubslideContainer style={animatedFooter}>
          {SLIDES.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              last={index === SLIDES.length - 1}
              onScrollToPosition={scrollToPosition}
              {...{ subtitle, description, index }}
            />
          ))}
        </SubslideContainer>
      </Footer>
    </ScreenContainer>
  );
};
