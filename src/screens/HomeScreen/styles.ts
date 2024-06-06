import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/colors";
import { hp, wp } from "../../utils/style.utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeColors.White
    },
    ipContainer: {
        backgroundColor: ThemeColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: hp(80),
    },
    title: {
        fontSize: wp(20),
        fontWeight: 'bold',
        color: ThemeColors.White,
        marginBottom: hp(20),
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: ThemeColors.White,
        height: hp(40),
        width: '75%',
        borderRadius: wp(8),
    },
    input: {
        padding: wp(10),
    },
    button: {
        height: hp(40),
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
        borderTopRightRadius: wp(8),
        borderBottomRightRadius: wp(8),
        backgroundColor: ThemeColors.Black,
    },
    buttonText: {
        color: ThemeColors.White,
        fontSize: wp(16),
    },
    infoView: {
        backgroundColor: ThemeColors.Black,
        padding: wp(20),
        marginBottom: hp(30),
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp(10),
    },
    imageContainer: {
        width: '100%',
        height: hp(200),
        marginRight: wp(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: wp(300),
        height: hp(200),
        borderRadius: wp(8)
    },
    selectedImage: {
        borderWidth: wp(5),
        borderColor: 'red'
    },
});
  
export default styles;