import React from "react";
import { Text, View } from "react-native";
import CoinInfo from "../../../assets/data/crypto.json";
import CoinDetailHeader from "./components/CoinDetailHeader";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

const CoinDetailScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = CoinInfo;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoinDetailHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>${current_price.usd}</Text>
        </View>
        <View
          style={{
            backgroundColor: percentageColor,
            paddingHorizontal: 5,
            paddingVertical: 8,
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <FontAwesome
            name={price_change_percentage_24h < 0 ? "caret-down" : "caret-up"}
            size={16}
            color="white"
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.priceChange}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CoinDetailScreen;
