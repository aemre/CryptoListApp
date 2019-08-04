import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import * as NetInfo from "@react-native-community/netinfo";
import { FetchCoinData } from "./../Actions/FetchCoinData";
import { connect } from "react-redux";
import { updateNetstatus } from "../Actions/NetworkStatus";

class Netinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barColor: "green"
    };
  }

  _handleNetInfo(isConnected) {
    isConnected
      ? this.setState({ barColor: "green" })
      : this.setState({ barColor: "red" });
    isConnected
      ? this.props.updateStatus(true)
      : this.props.updateStatus(false);
  }
  componentDidMount() {
    NetInfo.addEventListener(state => {
      this._handleNetInfo(state.isConnected);
    });
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener("change", this._handleNetInfo);
  }
  onlineAgainView() {
    return (
      <View>
        <Text style={{ color: "white" }}>online</Text>
        <Button
          onPress={() => {
            this.props.getCoinData();
          }}
          title="Update data"
          color="white"
          backgroundColor={this.state.barColor}
        />
      </View>
    );
  }
  render() {
    return (
      <View style={{ backgroundColor: this.state.barColor }}>
        {!this.props._isConnected && (
          <Text style={{ color: "white" }}>No internet connection</Text>
        )}
        {this.props._isConnected && this.onlineAgainView()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.network,
    _isConnected: state.network.connection
  };
};
const mapDispatchToProps = dispatch => ({
  updateStatus: status => {
    dispatch(updateNetstatus(status));
  },
  getCoinData: () => {
    return dispatch(FetchCoinData());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Netinfo);
