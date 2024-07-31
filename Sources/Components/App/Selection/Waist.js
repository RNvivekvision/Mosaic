import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Reanimated, { FadeInDown } from 'react-native-reanimated';
import { RNButton, RNImage, RNStyles, RNText } from '../../../Common';
import { Images } from '../../../Constants';
import selectionStyles from './selectionStyles';
import { FontSize, hp, wp } from '../../../Theme';
import { DummyData } from '../../../Utils';
import Sizes from './Sizes';

const Waist = ({ waist, onConfirm }) => {
  const [State, setState] = useState({
    size: waist?.size ?? null,
    tendToRun: waist?.tendToRun ?? null,
  });

  const onConfirmPress = () => {
    if (!State.size || !State.tendToRun) return;
    onConfirm(State);
  };

  return (
    <View style={RNStyles.container}>
      <Reanimated.View entering={FadeInDown.delay(200)}>
        <RNImage source={Images.section_5} style={selectionStyles.img} />
      </Reanimated.View>

      <Reanimated.View entering={FadeInDown.delay(400)}>
        <RNText style={selectionStyles.title}>
          {'What Size Do You Typically Wear ?'}
        </RNText>
      </Reanimated.View>

      <Reanimated.View
        entering={FadeInDown.delay(600)}
        style={styles.contentContainer}>
        <Sizes
          title={'For Waist'}
          data={DummyData.selection.waist}
          selected={State.size}
          onChange={v => setState(p => ({ ...p, size: v }))}
        />
        <Sizes
          title={'How does this size tend to run ?'}
          data={DummyData.selection.tendToRun}
          selected={State.tendToRun}
          onChange={v => setState(p => ({ ...p, tendToRun: v }))}
        />
      </Reanimated.View>

      <Reanimated.View entering={FadeInDown.delay(800)}>
        <RNButton
          title={'Continue'}
          style={selectionStyles.button}
          onPress={onConfirmPress}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => onConfirm(State)}
          style={selectionStyles.notSure}>
          <RNText size={FontSize.font14}>{"I'm Not Sure"}</RNText>
        </TouchableOpacity>
      </Reanimated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    ...RNStyles.container,
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
});

export default Waist;
