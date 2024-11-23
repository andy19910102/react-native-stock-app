import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Header({ onRefresh, studentName }: { onRefresh: () => void, studentName: string }) {
    return <View
        className="bg-neutral-800 pt-16 pb-4 relative"
    >
        <Text
            className="text-white/90 text-center text-2xl font-light"
        >
            {studentName} 的關注清單
        </Text>
        <TouchableOpacity
            className="absolute right-4 bottom-5"
            onPress={onRefresh}
        >
            <FontAwesome name="refresh" size={20} color="white" />
        </TouchableOpacity>
    </View>
}