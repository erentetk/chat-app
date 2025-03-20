import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constants";

const Cell = ({ title, icon, onPress, tintColor, style }) => {
    return (
        <TouchableOpacity style={[styles.cell, style]} onPress={onPress}>
            <View style={[styles.iconContainer, { backgroundColor: tintColor }]}>
                <Ionicons name={icon} size={20} color="white" />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
            <Ionicons name="chevron-forward-outline" size={20} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cell: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: colors.border,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 6,          // iconu YUVARLAK YAP
        alignItems: 'center',    // iconu ortala
        justifyContent: 'center'  // iconu ortala
    },
    title: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginStart: 16,
        flex: 1
    }
})

export default Cell;