import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Reanimated, { FadeInDown } from 'react-native-reanimated';
import { Colors, FontFamily, FontSize, hp, wp } from '../../../Theme';
import { RNButton, RNImage, RNStyles, RNText } from '../../../Common';
import { Images } from '../../../Constants';
import selectionStyles from './selectionStyles';

const Gender = ({ gender, onChange, onConfirm }) => {
  const borderColor = v => (gender === v ? Colors.primary : Colors.transparent);
  const onConfirmPress = () => {
    if (gender === null) return;
    onConfirm();
  };
  return (
    <View style={RNStyles.container}>
      <Reanimated.View entering={FadeInDown.delay(200)}>
        <RNImage source={Images.section_0} style={selectionStyles.img} />
      </Reanimated.View>

      <Reanimated.View entering={FadeInDown.delay(400)}>
        <RNText style={selectionStyles.title}>{'Select Your Gender'}</RNText>
      </Reanimated.View>
      <Reanimated.View entering={FadeInDown.delay(600)}>
        <RNText style={selectionStyles.text}>
          {'Please select your gender'}
        </RNText>
      </Reanimated.View>

      <Reanimated.View
        entering={FadeInDown.delay(800)}
        style={styles.contentContainer}>
        <View style={RNStyles.flexRowBetween}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => onChange(0)}
            style={[styles.maleContainer, { borderColor: borderColor(0) }]}>
            <RNImage source={Images.male} style={styles.maleFemale} />
            <RNText pTop={hp(1)}>{'Male'}</RNText>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => onChange(1)}
            style={[styles.maleContainer, { borderColor: borderColor(1) }]}>
            <RNImage source={Images.female} style={styles.maleFemale} />
            <RNText pTop={hp(1)}>{'Female'}</RNText>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => onChange(2)}
          style={[styles.othersContainer, { borderColor: borderColor(2) }]}>
          <RNImage source={Images.others} style={styles.others} />
          <RNText>{'Others'}</RNText>
        </TouchableOpacity>
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

const size = { male: wp(18) };
const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: wp(4),
    flex: 1,
  },
  maleContainer: {
    ...RNStyles.center,
    flex: 1,
    paddingVertical: hp(3),
    marginHorizontal: wp(2),
    borderRadius: wp(4),
    backgroundColor: Colors.grey,
    borderWidth: wp(0.5),
  },
  maleFemale: {
    width: size.male,
    height: size.male,
  },
  others: {
    width: size.male * 0.8,
    height: size.male * 0.8,
    marginLeft: wp(10),
    marginRight: wp(4),
  },
  othersContainer: {
    ...RNStyles.flexRow,
    borderWidth: wp(0.5),
    backgroundColor: Colors.grey,
    marginHorizontal: wp(2),
    marginVertical: hp(1),
    paddingVertical: hp(3),
    borderRadius: wp(4),
  },
});

export default Gender;
