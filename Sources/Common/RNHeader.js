import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RNIcon, RNStyles, RNText, RNScrollView } from './index';
import { useInset } from '../Hooks';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images } from '../Constants';

const RNHeader = ({
  title,
  scrollProps,
  containerStyle,
  titleStyle,
  children,
  style,
  footer,
  noScroll,
  back = true,
  onBack,
}) => {
  const navigation = useNavigation();
  const styles = useStyles();

  const onBackPress = async () => {
    back ? navigation.goBack() : navigation.openDrawer();
  };

  return (
    <View style={RNStyles.container}>
      <View style={[styles.Container, containerStyle]}>
        <RNIcon
          icon={back ? Images.back : Images.drawer}
          onPress={onBack ? onBack : onBackPress}
          containerStyle={styles.icon}
        />
        <RNText style={[styles.title, titleStyle]}>{title}</RNText>
        {/* <View style={[styles.icon, { backgroundColor: Colors.transparent }]}></View> */}
      </View>
      {noScroll ? (
        children
      ) : (
        <RNScrollView style={style} scrollProps={scrollProps}>
          {children}
        </RNScrollView>
      )}
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    Container: {
      ...RNStyles.flexRowBetween,
      backgroundColor: Colors.primary,
      paddingHorizontal: wp(4),
      paddingTop: inset.top + hp(2),
      paddingVertical: hp(2),
    },
    icon: {
      ...RNStyles.center,
      width: size.iconContainer,
      height: size.iconContainer,
      borderRadius: wp(2),
      backgroundColor: Colors.white + '20',
    },
    title: {
      flex: 1,
      paddingHorizontal: hp(1),
      marginHorizontal: hp(1),
      fontSize: FontSize.font18,
      fontFamily: FontFamily.SemiBold,
      color: Colors.white,
      textAlign: 'center',
    },
    next: {
      borderRadius: wp(2),
      paddingHorizontal: wp(3),
      paddingVertical: hp(1),
    },
    footer: {
      paddingBottom: inset.bottom,
    },
  });
};

const size = { icon: wp(4), iconContainer: wp(8) };

export default RNHeader;
