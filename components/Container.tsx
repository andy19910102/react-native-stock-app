import { ScrollView, StyleSheet } from 'react-native';

export function DarkContainer({ children }: { children: React.ReactNode }) {
    return <ScrollView
        contentContainerStyle={styles.container}
        className="bg-neutral-900"
    >
        {children}
    </ScrollView>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
