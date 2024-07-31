import { StyleSheet, TouchableOpacity } from 'react-native';
import Reanimated, { SlideInRight } from 'react-native-reanimated';
import { Colors, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { RNImage } from '../../Common';

const RenderShape = ({ item, index, selected, onPress }) => {
  return (
    <Reanimated.View
      entering={SlideInRight.delay(index * 500)}
      style={[
        styles.container,
        {
          borderColor: selected === index ? Colors.primary : Colors.transparent,
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => onPress?.(item, index)}>
        <RNImage source={Images['shape_' + index]} />
      </TouchableOpacity>
    </Reanimated.View>
  );
};

const size = wp(45);
const styles = StyleSheet.create({
  container: {
    borderWidth: wp(0.5),
    flex: 1,
    width: size,
    height: size * 1.3,
    marginHorizontal: wp(3),
    borderRadius: wp(3),
    overflow: 'hidden',
    marginVertical: hp(2),
  },
});

export default RenderShape;
