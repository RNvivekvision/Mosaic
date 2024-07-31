import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNText } from '../../Common';

const MODropDown = ({
  title,
  data,
  value,
  placeholder,
  maxHeight,
  onChange,
  position,
  containerStyle,
  dropdownStyle,
  dropdownPlaceholderStyle,
  dropDownSelectedTextStyle,
  dropDownIconStyle,
  dropDownItemTextStyle,
  search,
  searchPlaceholder,
  renderInputSearch,
  inputSearchStyle,
  renderLeftIcon,
  itemContainerStyle,
  dropDownContainerStyle,
  error,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {title && (
        <RNText
          color={error ? Colors.error : Colors.black}
          family={FontFamily.Regular}
          size={FontSize.font14}>
          {title}
        </RNText>
      )}
      {data?.length > 0 && (
        <Dropdown
          style={[styles.dropdownStyle, dropdownStyle]}
          placeholderStyle={[
            styles.placeholderStyle,
            dropdownPlaceholderStyle,
            {
              color: error ? Colors.error : Colors.placeholder,
            },
          ]}
          selectedTextStyle={[
            styles.selectedTextStyle,
            dropDownSelectedTextStyle,
          ]}
          iconStyle={[
            styles.iconStyle,
            dropDownIconStyle,
            {
              tintColor: error ? Colors.error : Colors.black,
            },
          ]}
          itemContainerStyle={[styles.itemContainerStyle, itemContainerStyle]}
          containerStyle={[styles.containerStyle, dropDownContainerStyle]}
          itemTextStyle={[styles.itemTextStyle, dropDownItemTextStyle]}
          activeColor={Colors.primary}
          data={data}
          maxHeight={maxHeight ?? hp(25)}
          labelField="label"
          valueField="value"
          placeholder={placeholder ?? ''}
          value={value}
          onChange={onChange}
          dropdownPosition={position ?? 'auto'}
          search={search}
          searchPlaceholder={searchPlaceholder}
          renderInputSearch={
            renderInputSearch ? v => renderInputSearch?.(v) : null
          }
          inputSearchStyle={[styles.inputSearchStyle, inputSearchStyle]}
          renderLeftIcon={renderLeftIcon}
          {...rest}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(2),
  },
  dropdownStyle: {
    backgroundColor: Colors.inputBg,
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.5),
    marginTop: hp(1.5),
  },
  placeholderStyle: {
    color: Colors.placeholder,
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Regular,
  },
  selectedTextStyle: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Medium,
    color: Colors.black,
  },
  itemTextStyle: {
    fontFamily: FontFamily.Medium,
    color: Colors.black,
  },
  iconStyle: {
    width: wp(8),
    height: wp(8),
    tintColor: Colors.placeholder,
  },
  inputSearchStyle: {},
  itemContainerStyle: {
    backgroundColor: Colors.inputBg,
  },
  containerStyle: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white + '50',
    borderBottomLeftRadius: wp(3),
    borderBottomRightRadius: wp(3),
    overflow: 'hidden',
  },
});

export default MODropDown;
