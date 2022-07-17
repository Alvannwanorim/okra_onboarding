import React, { useState } from 'react';
import { Alert, SafeAreaView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

import { Okra } from 'react-native-okra-webview';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<View style={[ styles.container, styles.flex ]}>
				<Okra.BuildWithOptions
					env="production"
					name="Aibanc"
					token=""
					okraKey=""
					products={[ 'auth', 'identity', 'balance', 'transactions' ]}
					onSuccess={(response) => {
						console.log('Success!', JSON.stringify(response));
						Alert.alert('Success!', JSON.stringify(response));
					}}
					onClose={(response) => {
						Alert.alert('error!', JSON.stringify(response));
					}}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	box: {
		width: 60,
		height: 60,
		marginVertical: 20
	}
});

export default App;
