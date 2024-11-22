import { ScrollView, StyleSheet } from 'react-native';

export default function Container({ children }: { children: React.ReactNode }) {
    return <ScrollView
        contentContainerStyle={styles.container}
    >
        {children}
    </ScrollView>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
});
