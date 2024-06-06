import Snackbar from "react-native-snackbar";
import { TOAST_COLORS } from "./colors";

function success(message: string) {
    Snackbar.show({
        text: message || "Success",
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: TOAST_COLORS.success
    });
}

function fail(message: string) {
    Snackbar.show({
        text: message || "Error",
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: TOAST_COLORS.error
    });
}

export const toast = {
    success,
    fail
};
