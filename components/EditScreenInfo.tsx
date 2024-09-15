import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

import Colors from '@/constants/Colors';
import { Link } from 'expo-router';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.helpContainer}>
        <Link
          style={styles.helpLink}
          href="/search">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Click here to open Search
          </Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
