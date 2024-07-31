import { StyleSheet } from 'react-native';
import { FontFamily, FontSize, hp, wp } from '../../../Theme';

const size = { img: wp(18), male: wp(10) };
const selectionStyles = StyleSheet.create({
  img: {
    width: size.img,
    height: size.img,
    marginHorizontal: wp(4),
    marginTop: hp(4),
    marginBottom: hp(2),
  },
  title: {
    paddingHorizontal: wp(4),
    fontSize: FontSize.font22,
    fontFamily: FontFamily.SemiBold,
  },
  text: {
    paddingHorizontal: wp(4),
    fontSize: FontSize.font14,
    paddingVertical: hp(1),
    paddingBottom: hp(3),
  },
  button: {
    marginVertical: hp(2),
    marginHorizontal: wp(6),
  },
  notSure: {
    alignSelf: 'center',
    marginBottom: hp(4),
  },
});

export default selectionStyles;
