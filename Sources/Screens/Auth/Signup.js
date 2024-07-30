import { useMemo, useRef, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNScrollView, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { LoginWith, MODropDown, MOInput } from '../../Components';
import { Images } from '../../Constants';
import { DummyData, Functions, Validation } from '../../Utils';
import DatePicker from 'react-native-date-picker';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [State, setState] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: null,
    location: '',
    showPassword: false,
    submitPressed: false,
    openDatePicker: false,
  });
  const DOB = useMemo(
    () => Functions.formatDate({ date: State.dateOfBirth }),
    [State.dateOfBirth],
  );

  const errors = {
    name: State.submitPressed && !Validation.isPasswordValid(State.name),
    email: State.submitPressed && !Validation.isEmailValid(State.email),
    password:
      State.submitPressed && !Validation.isPasswordValid(State.password),
    noError:
      Validation.isPasswordValid(State.name) &&
      Validation.isEmailValid(State.email) &&
      Validation.isPasswordValid(State.password),
  };

  return (
    <RNContainer topSafeArea style={styles.container}>
      <RNText style={styles.title}>{'Mosaic'}</RNText>
      <RNScrollView>
        <RNText size={FontSize.font22} family={FontFamily.Medium}>
          {'Sign Up'}
        </RNText>
        <RNText size={FontSize.font14} pVertical={hp(1)}>
          {'Enter your personal information'}
        </RNText>

        <View style={styles.inputContainer}>
          <MOInput
            title={'Name'}
            placeholder={'Olivia Wilson'}
            value={State.name}
            onChangeText={v => setState(p => ({ ...p, name: v.trim() }))}
            onSubmitEditing={() => emailRef.current?.focus()}
            error={errors.name}
          />
          <MOInput
            ref={emailRef}
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
          <MOInput
            error={false}
            title={'Date Of Birth'}
            text={State.dateOfBirth ? DOB : 'DD-MM-YYYY'}
            textStyle={{
              color: State.dateOfBirth ? Colors.black : Colors.placeholder,
            }}
            onPress={() => setState(p => ({ ...p, openDatePicker: true }))}
          />

          <MODropDown
            title={'Select Your Location'}
            placeholder={'Please select your state'}
            data={DummyData.signup.states}
            onChange={v => setState(p => ({ ...p, location: v }))}
            value={State.location?.value}
          />
        </View>

        <RNButton title={'Sign Up'} style={styles.signup} />

        <LoginWith />
      </RNScrollView>

      <DatePicker
        modal={true}
        open={State.openDatePicker}
        date={State.dateOfBirth || new Date()}
        mode={'date'}
        maximumDate={new Date()}
        onConfirm={date =>
          setState(p => ({ ...p, openDatePicker: false, dateOfBirth: date }))
        }
        onCancel={() => {
          setState(p => ({ ...p, openDatePicker: false }));
        }}
      />
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
    paddingVertical: hp(2),
  },
  signup: {
    marginBottom: hp(4),
  },
});

export default Signup;
