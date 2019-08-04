import React, { Component } from "react";
import { connect } from "react-redux";

import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList
} from "react-native";

import { FetchCoinData } from "./../Actions/FetchCoinData";
import CoinCard from "./CoinCard";
import Netinfo from "./Netinfo";

class CryptoContainer extends Component {
  componentWillMount() {
    this.props.getCoinData();
  }
  renderCoinCards() {
    const { crypto } = this.props;
    return (
      <FlatList
        data={crypto.data}
        renderItem={this._renderItem}
        numColumns={1}
        keyExtractor={(item, index) => index}
        ListFooterComponent={<View style={styles.footer} />}
        ListEmptyComponent={
          <View style={styles.emptyList}>
            <Text>There is no coin data</Text>
          </View>
        }
      />
    );
  }
  _renderItem = ({ item, index }) => (
    <CoinCard
      key={item.name}
      coin_name={item.name}
      symbol={item.symbol}
      price_usd={item.quote.USD.price}
      percent_change_24h={item.quote.USD.percent_change_24h}
      percent_change_7d={item.quote.USD.percent_change_24h}
      tags={item.tags}
    />
  );
  render() {
    const { crypto } = this.props;
    const { contentContainer } = styles;

    return (
      <ScrollView contentContainerStyle={contentContainer}>
        <Netinfo />
        {!this.props.isConnected && (
          <View>
            <Text style={styles.offlineText}>
              You are offline. Data showing at getting this time
              {new Date(crypto.time).toISOString()}
            </Text>
          </View>
        )}
        {crypto.hasError && (this.rehydrate(), null)}
        {crypto.isFetching && (
          <ActivityIndicator size="large" color="#00ff00" />
        )}

        {this.renderCoinCards()}
      </ScrollView>
    );
  }
  rehydrate = () => {
    this.props.getCoinDataFromPersist();
  };
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto,

    isConnected: state.network.connection
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getCoinData: () => {
      return dispatch(FetchCoinData());
    },
    getCoinDataFromPersist: () => dispatch({ type: "API_CALL_RESTORE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoContainer);

const styles = {
  contentContainer: {
    paddingBottom: 100,
    backgroundColor: "black"
  },
  footer: {
    height: 0,
    marginBottom: 10
  },
  emptyList: {
    height: 100,
    justifyContent: "center",
    alignSelf: "center"
  },
  offlineText: { color: "white" }
};
