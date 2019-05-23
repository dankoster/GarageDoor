/**
 * Simple React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Image, Button, View } from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

//type Props = {};
export default class App extends Component { //<Props> {

	async setGpioPin(pin, enable) {
		try {
			let route = enable != undefined ? (enable ? 'on' : 'off') : 'toggle'
			let response = await fetch(`http://garagedoor/${route}${pin}`)
			// let responseJson = await response.json()
			// return responseJson
		} catch (error) {
			alert(error)
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.section}>
					<Image source={require('./gdoor.png')}></Image>
					<Text style={styles.instructions}>{instructions}</Text>
				</View>
				<View styles={styles.section}>
					<Button
						onPress={() => this.setGpioPin(1, true)}
						title="LED ON"
						color="#841584"
						accessibilityLabel="Turn on the red LED"
					/>
					<Button
						style={styles.button}
						onPress={() => this.setGpioPin(1, false)}
						title="LED OFF"
						color="#841584"
						accessibilityLabel="Turn off the red LED"
					/>
					<Button
						style={styles.button}
						onPress={() => this.setGpioPin(12)}
						title="Garage Door"
						color="#841584"
						accessibilityLabel="Toggle the garage door button!"
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},

	section: {
		justifyContent: 'center',
		alignItems: 'center'
	},

	button: {
		borderStyle: 'solid'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
