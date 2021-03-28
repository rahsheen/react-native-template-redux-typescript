/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {useViewportUnits, useBounceAnimation} from '../app/hooks';

const Header = () => {
  const {vh} = useViewportUnits();
  const bounce = useBounceAnimation();
  const height = 40 * vh;

  return (
    <View style={styles.container}>
      <Animated.Image
        accessibilityRole={'image'}
        source={require('./logo.gif')}
        style={{height, transform: [{translateY: bounce}]}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
export default Header;
