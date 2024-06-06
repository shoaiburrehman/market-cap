import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils/style.utils";
import { ThemeColors } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeColors.White
    },
    image: {
        width: '85%',
        height: hp(200),
        borderRadius: wp(8),
        marginTop: hp(40),
        marginBottom: hp(20),
        alignSelf: 'center',
    },
    infoView: {
        backgroundColor: ThemeColors.Black,
        padding: wp(20),
        marginVertical: hp(30),
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp(10),
    },
    infoText: {
        color: ThemeColors.White
    }
});

export default styles;