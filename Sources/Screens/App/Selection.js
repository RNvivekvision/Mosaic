import { useState } from 'react';
import { RNContainer, RNHeader } from '../../Common';
import {
  MOSteps,
  Gender,
  Shape,
  Physique,
  Height,
  Shirt,
  Waist,
  Blazer,
  Shoes,
} from '../../Components';

const Selection = ({ navigation }) => {
  const [State, setState] = useState({
    selectedScreen: 0,
    gender: null,
    shape: null,
    physique: null,
    height: null,
    shirt: { size: null, tendToRun: null },
    waist: { size: null, tendToRun: null },
    blazer: { size: null, tendToRun: null },
    shoes: { size: null, tendToRun: null },
  });

  console.log('State -> ', JSON.stringify(State, null, 2));

  const onBackPress = () => {
    if (State.selectedScreen === 0) return navigation.goBack();
    setState(p => ({ ...p, selectedScreen: p.selectedScreen - 1 }));
  };

  const increaseSteps = () =>
    setState(p => ({ ...p, selectedScreen: p.selectedScreen + 1 }));

  const onConfirm = (v, key) => {
    setState(p => ({
      ...p,
      [key]: { ...p[key], size: v.size, tendToRun: v.tendToRun },
    }));
    increaseSteps();
  };

  return (
    <RNContainer bottomSafeArea>
      <RNHeader noScroll={true} onBack={onBackPress}>
        <MOSteps selectedIndex={State.selectedScreen} />
        {State.selectedScreen === 0 && (
          <Gender
            gender={State.gender}
            onChange={v => setState(p => ({ ...p, gender: v }))}
            onConfirm={increaseSteps}
          />
        )}

        {State.selectedScreen === 1 && (
          <Shape
            shape={State.shape}
            onChange={v => setState(p => ({ ...p, shape: v }))}
            onConfirm={increaseSteps}
          />
        )}

        {State.selectedScreen === 2 && (
          <Physique
            physique={State.physique}
            onChange={v => setState(p => ({ ...p, physique: v }))}
            onConfirm={increaseSteps}
          />
        )}

        {State.selectedScreen === 3 && (
          <Height
            height={State.height}
            onChange={v => setState(p => ({ ...p, height: v }))}
            onConfirm={increaseSteps}
          />
        )}

        {State.selectedScreen === 4 && (
          <Shirt shirt={State.shirt} onConfirm={v => onConfirm(v, 'shirt')} />
        )}

        {State.selectedScreen === 5 && (
          <Waist waist={State.waist} onConfirm={v => onConfirm(v, 'waist')} />
        )}

        {State.selectedScreen === 6 && (
          <Blazer
            blazer={State.blazer}
            onConfirm={v => onConfirm(v, 'blazer')}
          />
        )}

        {State.selectedScreen === 7 && (
          <Shoes shoes={State.shoes} onConfirm={v => onConfirm(v, 'shoes')} />
        )}
      </RNHeader>
    </RNContainer>
  );
};

export default Selection;
