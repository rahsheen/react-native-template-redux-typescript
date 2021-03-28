import {useRef, useEffect} from 'react';
import {useWindowDimensions, Animated} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useViewportUnits = () => {
  const {width, height} = useWindowDimensions();

  const vh = height / 100;
  const vw = width / 100;

  return {vh, vw};
};

export const useBounceAnimation = (value = 10) => {
  const bounce = useRef(new Animated.Value(0)).current;

  bounce.interpolate({
    inputRange: [-300, -100, 0, 100, 101],
    outputRange: [300, 0, 1, 0, 0],
  });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounce, {
          toValue: value,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(bounce, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [bounce, value]);

  return bounce;
};
