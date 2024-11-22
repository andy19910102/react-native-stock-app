import { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import { DarkContainer } from '@/components/Container';
import StockListItem from '@/components/StockListItem';
import StockInterface from '@/interfaces/StockInterface';
import Header from '@/components/Header';

export default function IndexPage() {
    // =============== YOUR BACKEND API REQUEST URL ===============
    const API_REQUEST_URL = "REPLACE_WITH_YOUR_BACKEND_API_REQUEST_URL"
    // =============== YOUR BACKEND API REQUEST URL ===============
    const [stockList, setStockList] = useState<StockInterface[]>([]);

    const fetchStockList = () => {
        console.log("=====================================")
        console.log("Fetching stock list");
        axios.get(API_REQUEST_URL)
            .then(res => {
                console.log("Stock list fetched");
                console.log(res.data);
                setStockList(res.data);
            })
            .catch(err => {
                alert("Error fetching stock list");
                console.log(err);
            })
    }

    useEffect(() => {
        fetchStockList()
        // fetch stock every 5 seconds 
        // const interval = setInterval(fetchStockList, 5000);
        // unsubscribe when component unmounts
        // return () => clearInterval(interval);
    }, [])

    return (
        <>
            <Header />
            <DarkContainer>
                <ScrollView horizontal>
                    <View>
                        {stockList.map((stock, idx) => (
                            <StockListItem key={idx} stock={stock} />
                        ))}
                    </View>
                </ScrollView>
            </DarkContainer>
        </>
    )
}