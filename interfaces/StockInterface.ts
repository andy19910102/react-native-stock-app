export default interface StockInterface {
    id: string;
    name: string;
    price: number | string | null;
    volume: number | string | null;
    date: string;
}