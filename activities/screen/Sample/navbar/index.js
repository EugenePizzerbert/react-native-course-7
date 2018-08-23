import React, { Component } from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class NavTabBar extends Component {

    render() {
        const {navigate, state} = this.props.navigation;
        const {index, routes} = state;
        const active = routes[index].key;
        return (
            <View style={styles.container}>

                <TouchableWithoutFeedback onPress={() => navigate('Tab1')} >
                    <Text
                        style={active === 'Tab1' ? styles.active : styles.nonactive}
                    >
                       1
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('Tab2')}>
                    <Text
                        style={active === 'Tab2' ? styles.active : styles.nonactive}
                    >
                        2
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('Tab3')}>
                    <Text
                        style={active === 'Tab3' ? styles.active : styles.nonactive}
                    >
                        3
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('Tab4')}>
                    <Text
                        style={active === 'Tab4' ? styles.active : styles.nonactive}
                    >
                        4
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('Tab5')}>
                    <Text
                        style={active === 'Tab5' ? styles.active : styles.nonactive}
                    >
                        5
                    </Text>
                </TouchableWithoutFeedback>
                
            </View>
        );
    }
}

NavTabBar.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default NavTabBar;
