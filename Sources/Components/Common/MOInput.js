import React, { forwardRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNInput, RNStyles, RNText, RNIcon } from '../../Common';
import { Colors, FontSize, hp, wp } from '../../Theme';

const MOInput = (
  {
    title,
    icon,
    text,
    textStyle,
    onIconPress,
    onPress,
    error,
    containerStyle,
    ...rest
  },
  ref,
) => {
  const styles = useStyles({ error });
  return (
    <View style={[styles.container, containerStyle]}>
      {title && <RNText style={styles.title}>{title}</RNText>}
      {text ? (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPress}
          style={styles.inputContainer}>
          <RNText style={[styles.text, textStyle]}>{text}</RNText>
        </TouchableOpacity>
      ) : (
        <View style={styles.inputContainer}>
          <RNInput
            ref={ref}
            placeholderTextColor={error ? Colors.error : Colors.placeholder}
            style={styles.input}
            {...rest}
          />
          {icon && (
            <RNIcon
              icon={icon}
              iconStyle={styles.icon}
              onPress={onIconPress}
              containerStyle={styles.IconContainer}
            />
          )}
        </View>
      )}
    </View>
  );
};

const useStyles = ({ error }) => {
  return StyleSheet.create({
    container: {
      paddingTop: hp(2),
    },
    title: {
      fontSize: FontSize.font14,
      color: error ? Colors.error : Colors.black,
    },
    text: {
      paddingVertical: hp(1),
      fontSize: FontSize.font12,
      color: error ? Colors.error : Colors.placeholder,
    },
    inputContainer: {
      ...RNStyles.flexRow,
      paddingHorizontal: wp(4),
      // paddingVertical: hp(0.7),
      borderRadius: wp(3),
      paddingVertical: hp(0.5),
      marginTop: hp(1),
      backgroundColor: Colors.inputBg,
    },
    input: {
      flex: 1,
      marginVertical: 0,
      paddingHorizontal: 0,
      color: error ? Colors.error : Colors.black,
    },
    IconContainer: {
      ...RNStyles.center,
      width: wp(8),
      height: wp(8),
      marginLeft: wp(1),
    },
    icon: {
      ...RNStyles.image70,
      tintColor: error ? Colors.error : Colors.black,
    },
  });
};

export default forwardRef(MOInput);
