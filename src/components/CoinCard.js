import React from "react";
import { View, Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20,
    backgroundColor: "#4b4b4b"
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },
  mineableContainer: {
    alignSelf: "flex-end"
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold",
    color: "white"
  },
  mineable: {
    marginLeft: 20,
    marginRight: 5,
    paddingLeft: 20,
    fontWeight: "bold",
    alignSelf: "flex-end"
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
    color: "white"
  },
  seperator: {
    marginTop: 10,
    color: "white"
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold",
    color: "white"
  },
  image: {
    width: 35,
    height: 35
  },
  moneySymbol: {
    fontWeight: "bold",
    color: "white"
  },
  statisticsContainer: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  percentChangePlus: {
    color: "#00BFA5",
    fontWeight: "bold",
    marginLeft: 5
  },
  percentChangeMinus: {
    color: "#DD2C00",
    fontWeight: "bold",
    marginLeft: 5
  }
});

const {
  container,
  moneySymbol,
  upperRow,
  coinSymbol,
  coinName,
  coinPrice,
  statisticsContainer,
  seperator,
  percentChangePlus,
  percentChangeMinus,
  mineableContainer
} = styles;

const CoinCard = ({
  symbol,
  coin_name,
  price_usd,
  percent_change_24h,
  percent_change_7d,
  tags
}) => {
  tagsRender = tags.length > 0;
  return (
    <View style={container}>
      <View style={upperRow}>
        <Text style={coinSymbol}>{symbol}</Text>
        <Text style={seperator}>|</Text>
        <Text style={coinName}>{coin_name}</Text>
        <Text style={coinPrice}>
          {price_usd}
          <Text style={moneySymbol}> $ </Text>
        </Text>
      </View>

      <View style={statisticsContainer}>
        <Text style={{ fontWeight: "bold" }}>
          24h:
          <Text
            style={
              percent_change_24h < 0 ? percentChangeMinus : percentChangePlus
            }
          >
            
            {percent_change_24h} %
          </Text>
        </Text>
        <Text style={{ fontWeight: "bold" }}>
          7d:
          <Text
            style={
              percent_change_7d < 0 ? percentChangeMinus : percentChangePlus
            }
          >
            
            {percent_change_7d} %
          </Text>
        </Text>
      </View>
      {tagsRender && (
        <View style={mineableContainer}>
          <Text style={coinSymbol}>{tags}</Text>
        </View>
      )}
    </View>
  );
};

export default CoinCard;
