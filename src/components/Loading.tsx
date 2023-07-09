import React from 'react'
import { ActivityIndicator, View } from 'react-native';

export default function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"#09090A" }}>
            <ActivityIndicator color={"#7c3aed"} />
        </View>
    )
}