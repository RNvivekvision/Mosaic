import { useRef, useState } from 'react';
import { Keyboard, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNButton, RNContainer, RNScrollView, RNText } from '../../Common';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { LoginWith, MOInput } from '../../Components';
import { Images } from '../../Constants';
import { Validation } from '../../Utils';
import { NavRoutes } from '../../Navigation';

const Login = ({ navigation }) => {
  const passwordRef = useRef();
  const [State, setState] = useState({
    email: '',
    password: '',
    showPassword: false,
    submitPressed: false,
  });

  const errors = {
    email: State.submitPressed && !Validation.isEmailValid(State.email),
    password:
      State.submitPressed && !Validation.isPasswordValid(State.password),
    noError:
      Validation.isEmailValid(State.email) &&
      Validation.isPasswordValid(State.password),
  };

  const onLoginPress = () => {
    setState(p => ({ ...p, submitPressed: true }));

    if (!errors.noError) return;
    console.log('Login Api call...');
  };

  const onForgotPasswordPress = () => {
    navigation.navigate(NavRoutes.ForgotPassword);
  };

  return (
    <RNContainer topSafeArea style={styles.container}>
      <RNText style={styles.title}>{'Mosaic'}</RNText>
      <RNScrollView>
        <RNText size={FontSize.font22} family={FontFamily.Medium}>
          {'Log In'}
        </RNText>
        <RNText size={FontSize.font14} pVertical={hp(1)}>
          {'Login to continue using the app'}
        </RNText>

        <View style={styles.inputContainer}>
          <MOInput
            title={'Email'}
            placeholder={'hello@reallygratesite.com'}
            keyboardType={'email-address'}
            value={State.email}
            onChangeText={v => setState(p => ({ ...p, email: v.trim() }))}
            onSubmitEditing={() => passwordRef.current?.focus()}
            error={errors.email}
          />
          <MOInput
            ref={passwordRef}
            title={'Password'}
            placeholder={'Enter your password'}
            returnKeyType={'done'}
            value={State.password}
            onChangeText={v => setState(p => ({ ...p, password: v.trim() }))}
            onSubmitEditing={Keyboard.dismiss}
            error={errors.password}
            secureTextEntry={!State.showPassword}
            icon={!State.showPassword ? Images.show : Images.hide}
            onIconPress={() =>
              setState(p => ({ ...p, showPassword: !p.showPassword }))
            }
          />
          <TouchableOpacity
            style={styles.forgotPassword}
            activeOpacity={0.6}
            onPress={onForgotPasswordPress}>
            <RNText size={FontSize.font12}>{'Forgot Password?'}</RNText>
          </TouchableOpacity>
        </View>

        <RNButton
          title={'Log In'}
          style={styles.login}
          onPress={onLoginPress}
        />

        <LoginWith isLogin />
      </RNScrollView>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
  },
  title: {
    fontSize: FontSize.font36,
    fontFamily: FontFamily.SemiBold,
    paddingVertical: hp(4),
  },
  inputContainer: {
    flex: 1,
    paddingVertical: hp(5),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    paddingVertical: hp(1),
  },
  login: {
    marginBottom: hp(4),
  },
});

export default Login;
