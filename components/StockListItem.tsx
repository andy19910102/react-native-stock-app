import { View, Text, ScrollView } from 'react-native';
import StockInterface from '@/interfaces/StockInterface';

function StockTableData({ data, width = 100, textAlign = 'right' }: { data: string | number | null, width?: number | string, textAlign?: 'center' | 'left' | 'right' }) {
    return <View className="py-3 justify-center border-r border-neutral-200/10"
        style={{
            width: Number(width),
        }}>
        <Text style={{ textAlign }} className="text-2xl text-white/90">{data}</Text>
    </View>
}

export default function StockListItem({ stock }: { stock: StockInterface }) {
    return <View>
        <View className="flex-row border-b border-neutral-200/10">
            <StockTableData data={stock.id} width={80} textAlign="center" />
            <StockTableData data={stock.name} width={80} textAlign="center" />
            <StockTableData data={stock.price} width={100} />
            <StockTableData data={stock.volume} width={100} />
            <StockTableData data={stock.date} width={150} />
        </View>
    </View>
}