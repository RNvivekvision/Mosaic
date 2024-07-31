import { useEffect, useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Reanimated, { FadeInDown } from 'react-native-reanimated';
import { RNButton, RNImage, RNStyles, RNText } from '../../../Common';
import { Images } from '../../../Constants';
import { RenderShape } from '../../Render';
import selectionStyles from './selectionStyles';
import { wp } from '../../../Theme';

const Physique = ({ physique, onChange, onConfirm }) => {
  const flatlistRef = useRef();

  useEffect(() => {
    if (flatlistRef.current && physique) {
      setTimeout(() => {
        flatlistRef.current?.scrollToIndex({
          index: physique,
          animated: true,
          viewPosition: 0.5,
        });
      }, 1000);
    }
  }, []);

  const onConfirmPress = () => {
    if (physique === null) return;
    onConfirm();
  };

  const onItemPress = (item, index) => {
    flatlistRef.current?.scrollToIndex({
      index: index,
      animated: true,
      viewPosition: 0.5,
    });
    onChange?.(index);
  };

  return (
    <View style={RNStyles.container}>
      <Reanimated.View entering={FadeInDown.delay(200)}>
        <RNImage source={Images.section_2} style={selectionStyles.img} />
      </Reanimated.View>

      <Reanimated.View entering={FadeInDown.delay(400)}>
        <RNText style={selectionStyles.title}>
          {'Select Your Body Physique'}
        </RNText>
      </Reanimated.View>
      <Reanimated.View entering={FadeInDown.delay(600)}>
        <RNText style={selectionStyles.text}>
          {'Please select your body physique'}
        </RNText>
      </Reanimated.View>

      <Reanimated.View entering={FadeInDown.delay(800)} style={{ flex: 1 }}>
        <FlatList
          ref={flatlistRef}
          data={[{}, {}, {}]}
          keyExtractor={(v, i) => String(i)}
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: wp(2) }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <RenderShape
              item={item}
              index={index}
              selected={physique}
              onPress={onItemPress}
            />
          )}
        />
      </Reanimated.View>

      <Reanimated.View entering={FadeInDown.delay(1000)}>
        <RNButton
          title={'Continue'}
          style={selectionStyles.button}
          onPress={onConfirmPress}
        />
      </Reanimated.View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Physique;
