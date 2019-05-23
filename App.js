/**
 * Simple React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Image, StatusBar, TouchableOpacity, View } from 'react-native';

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
			let route = enable == undefined ? 'toggle' : (enable ? 'on' : 'off')
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
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<View style={styles.section}>
					<Image source={require('./gdoor_black.png')}></Image>
					<Text style={styles.instructions}>{instructions}</Text>
				</View>
				<View>
					<Text style={styles.label}>Light</Text>
					<View style={styles.horizontal}>
						<TouchableOpacity onPress={() => this.setGpioPin(1, true)}>
							<Text style={styles.button}>ON</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.setGpioPin(1, false)}>
							<Text style={styles.button}>OFF</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View styles={styles.section}>
					<TouchableOpacity onPress={() => this.setGpioPin(12)}>
						<Text style={styles.button}>Garage Door</Text>
					</TouchableOpacity>
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
		backgroundColor: '#000000',
	},

	section: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	label: {
		textAlign: 'center',
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
	},

	button: {
		backgroundColor: 'blue',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 12,
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		overflow: 'hidden',
		padding: 12,
		margin: 10,
		textAlign: 'center',
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
