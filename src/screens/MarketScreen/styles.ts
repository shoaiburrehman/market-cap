import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, hp, wp } from "../../utils/style.utils";
import { ThemeColors } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp(16),
        backgroundColor: ThemeColors.White
    },
    priceList: {
        height: SCREEN_HEIGHT * 0.3,
    },
    noDataText: {
        fontSize: wp(18),
        textAlign: 'center',
        marginTop: wp(20),
        color: ThemeColors.Red
    },
    loadingText: {
        fontSize: wp(18),
        textAlign: 'center',
        marginTop: hp(20),
        color: ThemeColors.primary
    },
    mb20: {
        marginBottom: hp(20)
    }
});

export default styles;