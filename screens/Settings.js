import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactRow from '../components/ContactRow';
import { colors } from '../config/constants';
import Seperator from '../components/Seperator';
import Cell from '../components/Cell';
const Settings = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ContactRow
                name="Erenn TETİK"
                subtitle="me@Erentetk.com"
                style={styles.contactRow}
            />
            <Seperator />
            <Cell
                title="Logout"
                icon="log-out-outline"
                tintColor={colors.red}
                onPress={() => {
                    alert("Hi, You pressed Logout")
                }}
            />
            <Cell
                title="Help"
                icon="information-circle-outline"
                tintColor={colors.green}
                onPress={() => {
                    alert("Hi, You pressed Logout")
                }}
                style={{ marginTop: 16 }}
            />
            <Cell
                title="Tell a friend"
                icon="share-outline"
                tintColor={colors.pink}
                onPress={() => {
                    alert("Hi, You pressed Logout")
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contactRow: {
        backgroundColor: "white",
        marginTop: 16,
        borderTopWidth: 1,
        borderColor: colors.border
    }
});

export default Settings;  