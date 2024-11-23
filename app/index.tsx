import { useState, useEffect } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { DarkContainer } from '@/components/Container';
import { StockListItem, StockListItemHeader } from '@/components/StockListItem';
import StockInterface from '@/interfaces/StockInterface';
import Header from '@/components/Header';

export default function IndexPage() {
    // =============== YOUR BACKEND API REQUEST URL ===============
    const API_REQUEST_URL = "REPLACE_WITH_YOUR_BACKEND_API_REQUEST_URL"
    // =============== YOUR BACKEND API REQUEST URL ===============
    const [studentName, setStudentName] = useState("");
    const [stockList, setStockList] = useState<StockInterface[]>([]);
    const [isWaiting, setIsWaiting] = useState(false);
    const fetchStockList = () => {
        setStudentName("");
        setStockList([])
        setIsWaiting(true)
        console.log("=====================================")
        console.log("Fetching stock list");
        console.log("API_REQUEST_URL:", API_REQUEST_URL)
        axios.get(API_REQUEST_URL)
            .then(res => {
                setIsWaiting(false)
                console.log("Stock list fetched");
                console.log(res.data);
                const { name, stock_list } = res.data;
                setStudentName(name);
                setStockList(stock_list);
            })
            .catch(err => {
                setIsWaiting(false)
                // alert("Error fetching stock list");
                console.error("Error fetching stock list")
                console.error("err:", err);
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
            <Header
                onRefresh={fetchStockList}
                studentName={studentName}
            />
            <DarkContainer>
                {isWaiting ? <View className="py-[100px] justify-center items-center w-full">
                    <ActivityIndicator size="large" />
                    <Text className="text-white text-lg py-4">Waiting for response...</Text>
                </View> : <ScrollView horizontal>
                    <View>
                        <StockListItemHeader />
                        {stockList.map((stock, idx) => (
                            <StockListItem key={idx} stock={stock} />
                        ))}
                    </View>
                </ScrollView>}


            </DarkContainer>
        </>
    )
}