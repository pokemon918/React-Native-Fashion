import { width } from '@styles';
import React from 'react';
import Animated, {
  scrollTo,
  interpolateColor,
  runOnUI,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { Dot, Slide, Subslide } from './components';
import {
  Container,
  Footer,
  Pagination,
  Slider,
  SubslideContainer,
} from './Onboarding.styles';

const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfits? Don't worry find the best oufit here",
  },
  {
    title: 'Playfull',
    color: '#BEECC4',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of ourfit ideas',
  },
  {
    title: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individuals & unique style and look amazing everyday',
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the best trends in fashion and explore your personality',
  },
];

export const Onboarding = () => {
  const scrollView = useAnimatedRef<Animated.ScrollView>();
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });
  const animatedBackground = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      x.value,
      [0, width, width * 2, width * 3],
      ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD'],
    ),
  }));
  const animatedFooter = useAnimatedStyle(() => ({
    transform: [{ translateX: -x.value }],
  }));
  const scrollToPosition = (index: number) => {
    return () => {
      'worklet';
      runOnUI(scrollTo)(scrollView, width * (index + 1), 0, true);
    };
  };

  return (
    <Container>
      <Slider style={animatedBackground}>
        <Animated.ScrollView
          ref={scrollView}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          {...{ onScroll }}
        >
          {slides.map(({ title }, idx) => (
            <Slide key={idx} right={!!(idx % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Slider>

      <Footer style={animatedBackground}>
        <Pagination>
          {slides.map((_, index) => (
            <Dot key={index} position={x} {...{ index }} />
          ))}
        </Pagination>

        <SubslideContainer
          width={width * slides.length}
          style={animatedFooter}
        >
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              last={index === slides.length - 1}
              onPress={scrollToPosition(index)}
              {...{ subtitle, description }}
            />
          ))}
        </SubslideContainer>
      </Footer>
    </Container>
  );
};
