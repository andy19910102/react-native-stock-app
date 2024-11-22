import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return <View style={styles.header}>
        <Text>Header</Text>
    </View>
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#333',
    }
})