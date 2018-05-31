import React, {Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Form extends Component<{}>{
	render(){
		return(
			<View style={styles.container}>
				<TextInput style={styles.inputBox}  
				underlineColorAndroid='rgba(0,0,0,0)' 
				placeholder="Email" 
				placeholderTextColor="#ffffff"
				/>
				<TextInput style={styles.inputBox}  
				underlineColorAndroid='rgba(0,0,0,0)' 
				placeholder="Password" 
				placeholderTextColor="#ffffff"
				secureTextEntry={true}
				/>
				<TouchableOpacity style={styles.ButtonStyle}>
					<Text style={styles.ButtonTextStyle}>{this.props.type}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flexGrow:1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	inputBox:{
		width:300, 
		backgroundColor:'rgba(255,255,255,0.3)',
		borderRadius:25,
		paddingHorizontal:16,
		fontSize:16,
		color:'#ffffff',
		marginVertical :10,
	},
	ButtonStyle:{
		width:300,
		backgroundColor:'#1c313a',
		borderRadius:25,
		marginVertical:10,
		paddingVertical:12,
	},
	ButtonTextStyle:{
		fontSize:16,
		fontWeight:'500',
		color:'#ffffff',
		textAlign:'center',
	}
});
