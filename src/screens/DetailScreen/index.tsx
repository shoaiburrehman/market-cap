import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import Text from '../../components/Text';
import { RouteProp } from '@react-navigation/native';
import { IpInfo } from '../../utils/types';
import { fetchIpInfo } from '../../api/ipService';
import { ThemeColors } from '../../utils/colors';
import { hp, wp } from '../../utils/style.utils';
import styles from './styles';
import TextInfo from '../Shared/TextInfo';

type DetailsScreenProps = {
    route?: RouteProp<{ params: { ipInfo: IpInfo; image: number } }, 'params'>;
};
  
const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const { ipInfo = null, image = require('../../assets/image1.jpg') } = route?.params ?? {};

  const [ipDataInfo, setDataIpInfo] = useState<IpInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await fetchIpInfo();
        setDataIpInfo(info);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if(ipInfo){
      setDataIpInfo(ipInfo);
    } else {
      fetchData();
    }
  }, [ipInfo]);
  
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoView}>
        {loading ?
          <ActivityIndicator size="large" color={ThemeColors.White} />
        : ipDataInfo && (
          <View style={styles.infoContainer}>
            <TextInfo head="IP Address" text={ipDataInfo.ip || ''} />
            <TextInfo head="Location" text={(ipDataInfo.city || '') + ', ' + (ipDataInfo.country || '')} />
            <TextInfo head="Timezone" text={'UTC' + (ipDataInfo.timezone?.utc || '')} />
            <TextInfo head="ISP" text={ipDataInfo.connection?.isp || ''} />
          </View>
        )}
      </View>
    </View>
  );
}

export default DetailsScreen;