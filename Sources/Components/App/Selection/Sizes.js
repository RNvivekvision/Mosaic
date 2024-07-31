import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNStyles, RNText } from '../../../Common';
import { Colors, FontSize, hp, wp } from '../../../Theme';

const Sizes = ({ title, data, selected, onChange }) => {
  return (
    <View style={RNStyles.container}>
      <RNText pVertical={hp(1)}>{title}</RNText>

      <View style={RNStyles.flexWrapHorizontal}>
        {data?.length > 0 &&
          data.map((v, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => onChange(v.title)}
              style={[
                styles.renderBoxes,
                {
                  backgroundColor:
                    selected === v.title ? Colors.white : Colors.grey,
                  borderColor:
                    selected === v.title ? Colors.primary : Colors.white,
                },
              ]}>
              <RNText size={FontSize.font14}>{v.title}</RNText>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  renderBoxes: {
    ...RNStyles.center,
    width: wp(26.5),
    backgroundColor: Colors.grey,
    paddingVertical: hp(2),
    marginHorizontal: wp(2),
    marginVertical: hp(0.8),
    borderRadius: wp(3),
    borderWidth: wp(0.5),
  },
});

export default Sizes;
