import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';
import {useCheckInternet} from './checkInternet';
export const useHttp = url => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState();
  const isConnected = useCheckInternet(); //to check internet -->if offline  then alert msg

  useEffect(() => {
    fetch();
  }, [isConnected]);

  const fetch = async () => {
    if (isConnected === true) {
      setIsLoading(true);
      try {
        const response = await axios.post(url[0], {username: url[1]});
        setIsLoading(false);
        setFetchedData(response.data.info);
        console.log(response.data.info);
      } catch (error) {
        setIsLoading(false);
        if (error.response) {
          if (error.response.status == '404') {
            //there is API connection but cannot access to remote database
            Alert.alert('تعذر الوصول الى خادم قواعد البيانات');
          }
        }
      }
    } else if (isConnected === false) {
      setIsLoading(false);
      Alert.alert(
        'عذراً',
        'حدث خطأ في الاتصال بالانترنت ... الرجاء المحاولة مرة أخرى',
        [{text: 'OK', onPress: () => console.log('Ok Pressed')}],
      );
    }
  };

  return [isLoading, fetchedData, setFetchedData, fetch];
};
