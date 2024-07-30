import { useEffect, useState } from 'react';
import { Functions } from '../Utils';

const useLocalStorage = () => {
  const [State, setState] = useState({ localdata: null });

  // console.log('useLocalStorage -> ', JSON.stringify(State, null, 2));

  useEffect(() => {
    getDataFromLocalStorage();
    // getDataFromKeychain();
  }, []);

  const getDataFromLocalStorage = async () => {
    try {
      const appdata = await Functions.getAppData('appdata');
      if (appdata !== null) {
        setState(p => ({ ...p, localdata: appdata }));
        // dispatch(setLocalData(appdata));
      }
    } catch (e) {
      console.error('Error getDataFromLocalStorage -> ', e);
    }
  };

  return State;
};

export default useLocalStorage;
