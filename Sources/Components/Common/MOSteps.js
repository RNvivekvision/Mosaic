import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNStyles } from '../../Common';
import { Colors, hp, wp } from '../../Theme';
import Reanimated, {
  SlideInRight,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const MOSteps = ({ selectedIndex }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: 8 }).map((v, i) => {
        const animatedStyle = useAnimatedStyle(() => {
          return {
            backgroundColor: withTiming(
              selectedIndex >= i ? Colors.primary : Colors.black + '10',
              { duration: 300 },
            ),
          };
        }, [selectedIndex]);

        return (
          <Reanimated.View
            key={i}
            entering={SlideInRight.delay(i * 100)}
            style={[styles.renderContainer, animatedStyle]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRowBetween,
    alignSelf: 'center',
    paddingVertical: hp(1),
  },
  renderContainer: {
    width: wp(8),
    height: wp(2),
    marginHorizontal: wp(1),
    borderRadius: wp(3),
  },
});

export default MOSteps;
