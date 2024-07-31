import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { RNButton, RNContainer, RNHeader, RNImage, RNText } from '../../Common';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { NavRoutes } from '../../Navigation';
import { MOInput } from '../../Components';
import { Validation } from '../../Utils';
import { Images } from '../../Constants';

const ForgotPassword = ({ navigation }) => {
  const [State, setState] = useState({ email: '', submitPressed: false });

  const errors = {
    email: State.submitPressed && !Validation.isEmailValid(State.email),
    noError: Validation.isEmailValid(State.email),
  };

  const onSendCode = () => {
    setState(p => ({ ...p, submitPressed: true }));
    if (!errors.noError) return;
    navigation.navigate(NavRoutes.OtpVerification);
  };

  return (
    <RNContainer>
      <RNHeader style={styles.contianer}>
        <RNImage source={Images.forgotPassword} style={styles.img} />
        <RNText style={styles.title}>{'Forgot Password'}</RNText>
        <RNText size={FontSize.font14}>
          {`Don't worry! It occurs. Please enter the email\naddress linked with your account`}
        </RNText>

        <MOInput
          title={'Email'}
          placeholder={'hello@reallygratesite.com'}
          keyboardType={'email-address'}
          value={State.email}
          onChangeText={v => setState(p => ({ ...p, email: v.trim() }))}
          error={errors.email}
          containerStyle={{ marginVertical: hp(4) }}
        />

        <RNButton
          title={'Send Code'}
          style={styles.sendCode}
          onPress={onSendCode}
        />
      </RNHeader>
    </RNContainer>
  );
};

const size = { img: wp(70) };
const styles = StyleSheet.create({
  contianer: {
    paddingHorizontal: wp(6),
  },
  img: {
    width: size.img,
    height: size.img,
    alignSelf: 'center',
  },
  title: {
    fontSize: FontSize.font22,
    fontFamily: FontFamily.SemiBold,
    paddingBottom: hp(2),
  },
  sendCode: {
    marginTop: hp(3),
  },
});

export default ForgotPassword;
