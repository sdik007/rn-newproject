import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

type Props = {};

export default class Logo extends Component<Props>{
	render(){
		return(
			<View style={styles.container}>
				<Image style={styles.imageStyle} source={require('../images/logo_icon.png')}/> 
				<Text style={styles.textStyle}>The BackPacker</Text>
			</View>
		
			);
	}
}

const styles = StyleSheet.create({
	container:{
		flexGrow :1,
		alignItems :'center',
		justifyContent : 'flex-end',
	},
	textStyle:{
		marginVertical :15,
		fontSize:18,
		color:'rgba(255,255,255,0.7)',
	},
	imageStyle:{
		width:80,
		height:80,
	},
});