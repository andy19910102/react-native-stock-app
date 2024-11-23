import { View, Text } from 'react-native';
import StockInterface from '@/interfaces/StockInterface';

function StockTableData({ data, width = 120, textAlign = 'right', change = 0, makeTrendColor = false, showSign = false, isBold = false }: { data: string | number | null, width?: number | string, textAlign?: 'center' | 'left' | 'right', change?: number, makeTrendColor?: boolean, showSign?: boolean, isBold?: boolean }) {
    // 預設為 黃色 如果是 up 改紅色 如果是 down 改綠色 使用色碼
    let priceColor = "#ffd700"
    if (change > 0) priceColor = "#ff0000"
    if (change < 0) priceColor = "#00ff00"

    let sign = ""
    if (showSign) {
        if (change > 0) {
            sign = "+"
        }
    }


    return (<View className="py-3 justify-center border-neutral-200/10"
        style={{
            width: Number(width),
        }}>
        <Text
            style={{
                textAlign,
                color: makeTrendColor ? priceColor : "white",
                fontWeight: isBold ? "bold" : "normal",
            }}
            className="text-xl">
            {sign}{data}
        </Text>
    </View>)
}

export function StockListItem({ stock }: { stock: StockInterface }) {
    return <View>
        <View className="flex-row border-b border-neutral-200/10">
            <StockTableData data={stock.id} width={96} textAlign="center" />
            <StockTableData data={stock.name} textAlign="center" />
            <StockTableData data={stock.price} width={90} change={stock.change} makeTrendColor={true} isBold={true} />
            <StockTableData data={stock.change} width={90} change={stock.change} makeTrendColor={true} showSign={true} isBold={true} />
            <StockTableData data={stock.volume} />
            <StockTableData data={stock.date} width={150} />
        </View>
    </View>
}

export function StockListItemHeader() {
    return <View className="flex-row border-b border-neutral-200/10">
        <StockTableData data="股票代號" width={96} textAlign="center" />
        <StockTableData data="股票名稱" textAlign="center" />
        <StockTableData data="成交價" width={90} />
        <StockTableData data="漲跌" width={90} />
        <StockTableData data="成交量" />
        <StockTableData data="更新時間" width={150} />
    </View>
}