import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { NativeModules } from 'react-native';

import { 
    View,
    Text,
    StyleSheet,
    
} from 'react-native';
import CoinCard from "../src/components/CoinCard"

NativeModules.RNCNetInfo = {
    getCurrentConnectivity: jest.fn(),
    isConnectionMetered: jest.fn(),
    addListener: jest.fn(),
    removeListeners: jest.fn()
  };
configure({adapter: new Adapter()});

describe('coin', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<CoinCard
                key={"test_coin"}
                coin_name={"test_coin_name"}
                symbol={"test_coin_symbol"}
                price_usd={"12"}
                percent_change_24h={"50"}
                percent_change_7d={"-19"}
                tags={"test_coin_tags"}
              />)
            expect(component).toMatchSnapshot()
        });
    });
});