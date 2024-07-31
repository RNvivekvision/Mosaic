import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Reanimated, { FadeInDown } from 'react-native-reanimated';
import { RNButton, RNImage, RNStyles, RNText } from '../../../Common';
import { Images } from '../../../Constants';
import selectionStyles from './selectionStyles';
import { Colors, FontSize, hp, wp } from '../../../Theme';
import { DummyData } from '../../../Utils';

const Height = ({ height, onChange, onConfirm }) => {
  const onConfirmPress = () => {
    if (height === null) return;
    onConfirm();
  };

  return (
    <View style={RNStyles.container}>
      <Reanimated.View entering={FadeInDown.delay(200)}>
        <RNImage source={Images.section_3} style={selectionStyles.img} />
      </Reanimated.View>

      <Reanimated.View entering={FadeInDown.delay(400)}>
        <RNText style={selectionStyles.title}>{'Select Your Height'}</RNText>
      </Reanimated.View>
      <Reanimated.View entering={FadeInDown.delay(600)}>
        <RNText style={selectionStyles.text}>
          {'Please select your height'}
        </RNText>
      </Reanimated.View>

      <Reanimated.View
        entering={FadeInDown.delay(800)}
        style={styles.contentContainer}>
        {DummyData.selection.height.map((v, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => onChange(i)}
            style={[
              styles.renderButton,
              {
                backgroundColor: height === i ? Colors.white : Colors.grey,
                borderColor: height === i ? Colors.primary : Colors.white,
              },
            ]}>
            <RNText style={styles.title}>{v.title}</RNText>
            <RNText style={styles.text}>{v.text}</RNText>
          </TouchableOpacity>
        ))}
      </Reanimated.View>

      <Reanimated.View entering={FadeInDown.delay(1000)}>
        <RNButton
          title={'Continue'}
          style={selectionStyles.button}
          onPress={onConfirmPress}
        />
      </Reanimated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    ...RNStyles.container,
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  renderButton: {
    ...RNStyles.flexRowBetween,
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    marginVertical: hp(1),
    borderRadius: wp(3),
    borderWidth: wp(0.5),
  },
  title: {
    fontSize: FontSize.font14,
  },
  text: {
    fontSize: FontSize.font12,
    color: Colors.black + '60',
  },
});

export default Height;
