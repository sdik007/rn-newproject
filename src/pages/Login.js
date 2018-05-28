import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native'; 

import Logo from './components/Logo';
import Form from './components/Form';

type Props = {};
export default class Login extends Component<Props> {
	render(){
		return( 
			<View style={styles.container}>
				<Logo/>
				<Form type="Signup" />
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Alredy have an account </Text>
					<Text style={styles.sugnupButton}>Sign in</Text>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container:{
		backgroundColor:'#455a64',
		flex: 1,
		alignItems :'center',
		justifyContent :'center'
	},
	signupTextCont:{
		flexGrow:1,
		alignItems:'flex-end',
		justifyContent:'center',
		paddingVertical:16,
		flexDirection:'row'
	},
	signupText:{
		color:'rgba(255,255,255,0.6)',
		fontSize:16
	},
	sugnupButton:{
		color:'#ffffff',
		fontSize:16,
		fontWeight:'500'
	}
});


