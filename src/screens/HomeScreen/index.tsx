import React from 'react';
import { View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Text from '../../components/Text';
import InputField from '../../components/InputField';
import Carousel from 'react-native-reanimated-carousel';
import { IMAGES } from '../../utils/constants';
import { hp, wp } from '../../utils/style.utils';
import { ThemeColors } from '../../utils/colors';
import TextInfo from '../Shared/TextInfo';
import styles from './styles';
import useHomeHook from './useHomeHook';

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {

  const { ipInfo, ip, setIp, handleSearch, selectedImage, setSelectedImage, loading } = useHomeHook();

  const renderItem = ({ item, index }: { item: number, index: number }) => (
    <TouchableOpacity key={index} onPress={() => navigation.navigate('Profile', { ipInfo: ipInfo, image: item })} style={styles.imageContainer}>
      <Image source={item} style={selectedImage === index ? [styles.image, styles.selectedImage] : styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.ipContainer}>
        <Text style={styles.title}>IP Tracker</Text>
        <View style={styles.searchContainer}>
          <InputField value={ip} onChangeText={setIp} placeholder="Search for any IP address" style={styles.input} />
          <TouchableOpacity onPress={handleSearch} style={styles.button}>
            <Text style={styles.buttonText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoView}>
        {loading ?
          <ActivityIndicator size="large" color={ThemeColors.White} />
        : ipInfo && (
          <View style={styles.infoContainer}>
            <TextInfo head="IP Address" text={ipInfo.ip || ''} />
            <TextInfo head="Location" text={(ipInfo.city || '') + ', ' + (ipInfo.country || '')} />
            <TextInfo head="Timezone" text={'UTC' + (ipInfo.timezone?.utc || '')} />
            <TextInfo head="ISP" text={ipInfo.connection?.isp || ''} />
          </View>
        )}
      </View>
      <Carousel
        loop
        onSnapToItem={(currentIndex) => setSelectedImage(currentIndex)}
        width={wp(370)}
        height={hp(200)}
        autoPlay={false}
        data={IMAGES}
        style={{
          width: '100%',
          alignSelf: 'center',
        }}
        renderItem={renderItem}
      />
    </View>
  );
}
