/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const links = [
  {
    title: 'React',
    link: 'https://reactjs.org/',
    description: 'JavaScript library for building user interfaces',
  },
  {
    title: 'Redux',
    link: 'https://redux.js.org/',
    description: 'A Predictable State Container for JS Apps',
  },
  {
    title: 'Redux Toolkit',
    link: 'https://redux-toolkit.js.org/',
    description:
      'The official, opinionated, batteries-included toolset for efficient Redux development',
  },
  {
    title: 'React Redux',
    link: 'https://react-redux.js.org',
    description: 'Official React bindings for Redux',
  },
];

const LinkList = () => (
  <View style={styles.container}>
    {links.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <View style={styles.separator} />
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={() => openURLInBrowser(item.link)}
            style={styles.linkContainer}>
            <Text style={styles.link}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        </React.Fragment>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});

export default LinkList;
