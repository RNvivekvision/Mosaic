import { useRef, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNHeader, RNText } from '../../Common';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { MOInput } from '../../Components';
import { Validation } from '../../Utils';

const CreateNewPassword = () => {
  const confirmPasswordRef = useRef();
  const [State, setState] = useState({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
    submitPressed: false,
  });

  const errors = {
    password:
      State.submitPressed && !Validation.isPasswordValid(State.password),
    confirmPassword:
      State.submitPressed &&
      (!Validation.isPasswordValid(State.confirmPassword) ||
        !Validation.isSamePasswords(State.password, State.confirmPassword)),
    noError:
      Validation.isPasswordValid(State.password) &&
      Validation.isPasswordValid(State.confirmPassword) &&
      Validation.isSamePasswords(State.password, State.confirmPassword),
  };

  const onSavePress = () => {
    setState(p => ({ ...p, submitPressed: true }));

    if (!errors.noError) return;
    console.log('Create new password api call...');
  };

  return (
    <RNContainer>
      <RNHeader style={styles.contianer}>
        <RNText style={styles.title}>{'Mosaic'}</RNText>
        <RNText style={styles.subTitle}>{'Create New Password'}</RNText>
        <RNText size={FontSize.font14}>
          {`You new password must be unique from\nthose previously used`}
        </RNText>

        <View style={styles.inputContainer}>
          <MOInput
            title={'Password'}
            placeholder={'Enter your password'}
            returnKeyType={'done'}
            value={State.password}
            onChangeText={v => setState(p => ({ ...p, password: v.trim() }))}
            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            error={errors.password}
            secureTextEntry={!State.showPassword}
            icon={!State.showPassword ? Images.show : Images.hide}
            onIconPress={() =>
              setState(p => ({ ...p, showPassword: !p.showPassword }))
            }
          />

          <MOInput
            ref={confirmPasswordRef}
            title={'Confirm Password'}
            placeholder={'Enter your confirm password'}
            returnKeyType={'done'}
            value={State.confirmPassword}
            onChangeText={v =>
              setState(p => ({ ...p, confirmPassword: v.trim() }))
            }
            onSubmitEditing={Keyboard.dismiss}
            error={errors.confirmPassword}
            secureTextEntry={!State.showConfirmPassword}
            icon={!State.showConfirmPassword ? Images.show : Images.hide}
            onIconPress={() =>
              setState(p => ({
                ...p,
                showConfirmPassword: !p.showConfirmPassword,
              }))
            }
          />
        </View>

        <RNButton title={'Save'} onPress={onSavePress} />
      </RNHeader>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  contianer: {
    paddingHorizontal: wp(6),
  },
  title: {
    fontSize: FontSize.font36,
    fontFamily: FontFamily.SemiBold,
    paddingVertical: hp(6),
  },
  subTitle: {
    fontSize: FontSize.font22,
    fontFamily: FontFamily.SemiBold,
    paddingBottom: hp(2),
  },
  inputContainer: {
    paddingVertical: hp(4),
    paddingBottom: hp(8),
  },
});

export default CreateNewPassword;
