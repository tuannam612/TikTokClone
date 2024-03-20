import React, { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function FollowButton() {
    const [title, setTitle] = useState('Follow');
    const [followStatus, setFollowStatus] = useState(false)
    function handlePress() {
        if (followStatus === false) {
            setFollowStatus(true)
            setTitle('Followed')
        }
        else {
            setFollowStatus(false)
            setTitle('Follow')
        }
    }
    return (
        <Pressable
            style={(followStatus === false) ? styles.button : styles.followedButton}
            onPress={handlePress}>
            <Text style={(followStatus === false) ? styles.text : styles.followedText}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "white",
        width: 180,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
    },
    followedButton: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
        width: 180,
    },
    followedText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    }
});