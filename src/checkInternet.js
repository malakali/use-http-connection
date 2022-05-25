/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState} from 'react';


import NetInfo from '@react-native-community/netinfo';

export const useCheckInternet = () => {
  const [isConnected, setIsConnected] = useState();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return unsubscribe;
  }, [isConnected]);

  return isConnected;
};
