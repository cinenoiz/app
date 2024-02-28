import { StyleSheet, TextInput, View, Text } from "react-native"
import { FontAwesome } from "@expo/vector-icons";
import Colors, { FontColors } from "../constants/Colors";


export default function Input({label, icon, ...props}) {

    return <View>
      <Text style={styles.label}>{label}</Text>

      <View style={[styles.inputContainer]}>
        <FontAwesome name={icon} size={20} style={styles.icon} />
        <TextInput
            style={styles.txtInput}
            {...props}
        />
      </View>
    </View>
  }

const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 16,
        color: FontColors.light_back,
    },
    inputContainer: {
        height: 55,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.light_background,
        backgroundColor: Colors.background
    },
    txtInput: {
        flex: 1,
        height: '90%',
        paddingHorizontal: 20,
        fontSize: 16
    }
})
