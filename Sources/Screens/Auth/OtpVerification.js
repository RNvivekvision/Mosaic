import { useMemo, useState } from 'react';
import { Keyboard, StyleSheet } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { RNButton, RNContainer, RNHeader, RNImage, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { NavRoutes } from '../../Navigation';

const OtpVerification = ({ navigation }) => {
  const [State, setState] = useState({ otp: '', verifyPressed: false });
  const errorOtp = useMemo(() => {
    return State.verifyPressed && State.otp.length !== 5;
  }, [State.otp.length, State.verifyPressed]);

  const onVerifyPress = () => {
    setState(p => ({ ...p, verifyPressed: true }));

    if (State.otp.length === 5) {
      navigation.navigate(NavRoutes.CreateNewPassword);
    }
  };

  return (
    <RNContainer>
      <RNHeader style={styles.contianer}>
        <RNImage source={Images.otpVerification} style={styles.img} />
        <RNText style={styles.title}>{'OTP Verification'}</RNText>
        <RNText size={FontSize.font14}>
          {`Enter the verification code we just sent on\nyour email address`}
        </RNText>

        <OtpInput
          numberOfDigits={5}
          onTextChange={otp =>
            setState(p => ({ ...p, otp, verifyPressed: false }))
          }
          autoFocus={false}
          onFilled={Keyboard.dismiss}
          theme={{
            containerStyle: {
              paddingTop: hp(8),
              paddingBottom: hp(4),
            },
            pinCodeContainerStyle: {
              backgroundColor: Colors.white,
              width: wp(15),
              height: wp(15),
              borderRadius: wp(2),
              borderColor: errorOtp ? Colors.error : Colors.placeholder,
            },
            pinCodeTextStyle: {
              fontSize: FontSize.font24,
              fontFamily: FontFamily.SemiBold,
              color: Colors.black,
            },
            focusStickStyle: {
              backgroundColor: Colors.primary,
            },
            focusedPinCodeContainerStyle: {
              borderColor: Colors.primary,
            },
          }}
        />

        <RNButton
          title={'Verify'}
          style={styles.verify}
          onPress={onVerifyPress}
        />
      </RNHeader>
    </RNContainer>
  );
};

const size = { img: wp(50) };
const styles = StyleSheet.create({
  contianer: {
    paddingHorizontal: wp(6),
  },
  img: {
    width: size.img,
    height: size.img,
    alignSelf: 'center',
    marginBottom: hp(5),
  },
  title: {
    fontSize: FontSize.font22,
    fontFamily: FontFamily.SemiBold,
    paddingBottom: hp(2),
  },
  verify: {
    marginTop: hp(3),
  },
});

export default OtpVerification;
