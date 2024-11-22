import { View, Text } from 'react-native';

export default function Header() {
    return <View
        className="bg-neutral-800 pt-16 pb-4"
    >
        <Text
            className="text-white/90 text-center text-2xl font-light"
        >
            Header 的關注清單
        </Text>
    </View>
}