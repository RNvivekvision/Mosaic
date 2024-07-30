import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontFamily, FontSize, hp } from '../../Theme';
import { RNIcon, RNStyles, RNText } from '../../Common';
import { Images } from '../../Constants';
import { useNavigation } from '@react-navigation/native';
import { NavRoutes } from '../../Navigation';

const LoginWith = ({ isLogin }) => {
  const { navigate } = useNavigation();

  const onGooglePress = () => {};

  const onApplePress = () => {};

  return (
    <>
      <RNText size={FontSize.font14} align={'center'}>
        {'Or continue with'}
      </RNText>

      <View style={styles.iconContainer}>
        <RNIcon icon={Images.google} onPress={onGooglePress} />
        <RNIcon icon={Images.apple} onPress={onApplePress} />
      </View>

      <View style={RNStyles.flexRowCenter}>
        <RNText size={FontSize.font12}>
          {isLogin ? 'New to Mosaic?  ' : 'Already have an account?  '}
        </RNText>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() =>
            navigate(isLogin ? NavRoutes.Signup : NavRoutes.Login)
          }>
          <RNText
            textLine={'underline'}
            family={FontFamily.SemiBold}
            size={FontSize.font12}>
            {isLogin ? 'Join Now' : 'Login'}
          </RNText>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    ...RNStyles.flexRowBetween,
    alignSelf: 'center',
    paddingVertical: hp(2),
    width: '30%',
  },
});

export default LoginWith;
