# React Native Stock App

這是一個使用 Expo + React Native 開發的手機 App 應用程式，可用於產生 iOS 與 Android 的 App 安裝檔。
後端的 API 將由 NTU CSIE Python程式設計課程學員提供，用於串接此應用程式所需要的股價資訊。

# 後端API資訊

API 請求路徑：

GET -> https://your-website.com

```
{
    "name": "Andy", # 你的名字
    "stock_list": [
        {
            "id": "2330", # 股票代號 id
            "name": "台積電", # 股票名稱 stock["n"]
            "price": int or float, # 最新成交價 stock["z"]
            "change": int or float, # 漲跌價 stock["z"] - stock["y"]
            "volume": int or float, # 成交量 stock["v"]
            "date": "2024-01-01" # 更新時間 stock["d"]
        },
        {
            ...
        },
        {
            ...
        }
    ]
}
```

## 開發環境準備與啟動方法

### 1. 安裝 Node.js

前往 Node.js 官方網站，下載並安裝 Node.js(LTS)版本(22.11.0)

[https://nodejs.org/en](https://nodejs.org/en)

### 2. 安裝必要套件

```
npm install
```

如果安裝成功你會看到專案目錄中多出一個 node_modules 資料夾。
這個 node_modules 資料夾用於存放所有專案會用到的套件。
相關套件資訊與版本可參考 package.json 檔案。

### 3. 透過實體手機安裝 Expo Go

Expo Go 是一個手機App應用程式開發工具（可在 iOS 和 Android 上使用），讓開發者可以快速在真實裝置上運行和測試使用 Expo 框架 建立的 React Native 應用程式，而不需要進行繁瑣的編譯與打包過程。

#### 使用 iOS 手機下載 Expo Go:
https://apps.apple.com/us/app/expo-go/id982107779

#### 使用 Android 手機下載 Expo Go:
https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&pli=1

### 3.1 Mac電腦可考慮安裝 Xcode 與 iOS Simulator

點選 App Store 搜尋 Xcode 並安裝。安裝通常需要一段時間請保持電腦有持續的電源供應與穩定的網路。

安裝完成後，打開 Xcode，點選上方選單列的 Xcode > Preferences > Components，等待 iOS Simulator 相關組件下載完成。

點選 Xcode 上方選單列的 Xcode > Open Developer Tool > Simulator，即可開啟 iOS Simulator。

![開啟iOS Simulator](https://i.imgur.com/sUQcqzA.jpeg)

### 4. 啟動React Native App應用程式

確保你的手機與開發時所使用的電腦連結同一個網路來源（亦可使用手機熱點），並透過以下指令啟動應用程式。

```
npm run start
```

#### 使用實體手機預覽

掃描終端機畫面上出現的 QR Code 即可在手機上預覽 App 的運作。

#### 使用 iOS Simulator 預覽

確保 iOS Simulator 已經開啟，按下 `i` 鍵即可在 iOS Simulator 上預覽 App 的運作。

### 關閉應用程式

在終端機中按下 `Ctrl + C` 即可關閉應用程式。
