export default interface StockInterface {
    id: string;
    name: string;
    price: number | string | null;
    change: number;
    volume: number | string | null;
    date: string;
}