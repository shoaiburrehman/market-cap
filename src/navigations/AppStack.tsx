import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailScreen';
import MarketScreen from '../screens/MarketScreen';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '../components/Icon';
import { TAB_ICONS } from '../utils/constants';
import Text from '../components/Text';
import { ThemeColors } from '../utils/colors';
import { hp, wp } from '../utils/style.utils';

const Tab = createBottomTabNavigator();

const AppStack = () => {  
    
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: styles.tabBar,
                    headerTitleAlign: 'center',
                    headerTitleStyle: { color: ThemeColors.primary },
                    headerShadowVisible: false,
                }}    
            >
                <Tab.Screen name="Dashboard" component={HomeScreen} options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? ThemeColors.primary : ThemeColors.Black, fontSize: wp(12) }}>Dashboard</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Icon source={TAB_ICONS.HOME} color={focused ? ThemeColors.primary : ThemeColors.Black} width={wp(25)} height={wp(25)}  />
                    ),
                    headerShown: true,
                }}/>
                <Tab.Screen name="Market Data" component={MarketScreen} options={({ navigation }) => ({
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? ThemeColors.primary : ThemeColors.Black, fontSize: wp(12) }}>Market</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Icon source={TAB_ICONS.MARKET} color={focused ? ThemeColors.primary : ThemeColors.Black} width={wp(25)} height={wp(25)}  />
                    ),
                    headerShown: true,
                    headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: wp(10) }}>
                        <Icon source={require("../assets/icons/back.png")} color={ThemeColors.Black} width={wp(25)} height={wp(25)} />
                    </TouchableOpacity>
                    ),    
                })}/>
                <Tab.Screen name="Profile" component={DetailsScreen} options={({ navigation }) => ({
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? ThemeColors.primary : ThemeColors.Black, fontSize: wp(12) }}>Profile</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Icon source={TAB_ICONS.PROFILE} color={focused ? ThemeColors.primary : ThemeColors.Black} width={wp(25)} height={wp(25)}  />
                    ),
                    headerShown: true,
                    headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: wp(10) }}>
                        <Icon source={require("../assets/icons/back.png")} color={ThemeColors.Black} width={wp(25)} height={wp(25)} />
                    </TouchableOpacity>
                    ),    
                })}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create<any>({
    tabBar: {
        position: "absolute",
        bottom: 0,
        height: hp(60),
        paddingBottom: 0,
    },
});

export default AppStack;