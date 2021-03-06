import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Rectangle_2_link} from './assets/imageLinks.js'
import {image_Rectangle_4_link} from './assets/imageLinks.js'
const Page_contact_details  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_layer_a75ce5 = () => {
					navigation.navigate("Page_nuur")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page1]}    >
			<View style = {noneModeStyles._Rectangle}    >
			</View>
			<View style = {noneModeStyles._contact_details}    >
				<View style = {noneModeStyles._layer_a75ce5}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_a75ce5();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._layer_554457}   >
						<Svg style={{height: 17, width: 17}} viewBox = "0 0 17 17">
							<Path fill = {"#313233"}     d = "M8.49999 17L10.0015 15.4985L4.07185 9.54341H17V7.45658H4.07185L10.0015 1.5015L8.49999 0L0 8.49999L8.49999 17Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.__}    >
				</View>
				<Text style = {noneModeStyles._Contact_Details}   >
					БҮРТГЭЛ
				</Text>
			</View>
			<View style = {noneModeStyles._details_profile}    >
				<View style = {noneModeStyles._Rectangle_container}    >
					<View style = {noneModeStyles._Rectangle_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_2_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_3}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_13}    >
					<View style = {noneModeStyles._Mask}    >
					</View>
					<View style = {noneModeStyles._Mask_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_container_2}    >
						<View style = {noneModeStyles._Rectangle_4}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_4_link}}/>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Maria_Nkechi}   >
					М.Эрдэнэжаргал
				</Text>
				<Text style = {noneModeStyles._Project_Manager}   >
					11А ангийн сурагч
				</Text>
				<Text style = {noneModeStyles._Motivated__personabl}   >
					Математик болон Физикийн хичээлийг гүнзгийрүүлэн суралцдаг.
				</Text>
				<View style = {noneModeStyles._Group_5}    >
					<View style = {noneModeStyles._Group_2}    >
						<View style = {noneModeStyles._Rectangle_5}    >
						</View>
						<Text style = {noneModeStyles._Business}   >
							УСАН СЭЛЭЛТ
						</Text>
					</View>
					<View style = {noneModeStyles._Group_3}    >
						<View style = {noneModeStyles._Rectangle_Copy}    >
						</View>
						<View style = {noneModeStyles._Management_2}    >
							<Text style = {noneModeStyles._Management}   >
								ЖИҮ ЖИЦҮ
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Group_4}    >
						<View style = {noneModeStyles._Rectangle_Copy_2}    >
						</View>
						<Text style = {noneModeStyles._Product}   >
							ЖУДО
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Oval}    >
				</View>
			</View>
			<Text style = {noneModeStyles._10_00}   >
				Чөлөө авах хүсэлт илгээх
			</Text>
			<View style = {noneModeStyles._Rectangle_6}    >
			</View>
			<Text style = {noneModeStyles._10_00_2}   >
				Өвчтэй{'\n'}мэдэгдэл 
			</Text>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_contact_details

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(252, 251, 251)",
	},
_Rectangle: {
	width: 138,
	height: 52,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	transform: [
		{translateX: 26},
		{translateY: 489},
	],
	borderTopWidth: 0.2,
	borderRightWidth: 0.2,
	borderBottomWidth: 0.2,
	borderLeftWidth: 0.2,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.25)",
	shadowRadius: 4,
	},
_contact_details: {
	width: 339.016,
	height: 25,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 19.984,
	top: 64,
	},
_layer_a75ce5: {
	position: "absolute",
	transform: [
		{translateY: 3.58401},
	],
	},
_layer_554457: {
	},
__: {
	width: 4.03198,
	height: 16.032,
	position: "absolute",
	transform: [
		{translateX: 325},
		{translateY: 3.58401},
	],
	},
_Contact_Details: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 133.016},
		{translateY: -11.5},
	],
	color: "rgb(49, 50, 51)",
	fontSize: 15,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_details_profile: {
	width: 375,
	height: 343,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 109,
	},
_Rectangle_container: {
	width: 375,
	height: 208,
	position: "absolute",
	},
_Rectangle_2: {
	width: "100%",
	height: "100%",
	transform: [
		{translateY: -10.9},
	],
	},
_Rectangle_3: {
	width: 343,
	height: 239,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 104},
	],
	borderRadius: 6,
	},
_Rectangle_Copy_13: {
	width: 80,
	height: 80,
	position: "absolute",
	left: 148,
	top: 67,
	},
_Mask: {
	width: 80,
	height: 80,
	position: "absolute",
	},
_Mask_2: {
	width: 80,
	height: 80,
	position: "absolute",
	},
_Rectangle_container_2: {
	width: 93.4736,
	height: 93.4737,
	position: "absolute",
	transform: [
		{translateX: -8.42102},
		{translateY: -2.52632},
	],
	},
_Rectangle_4: {
	width: "100%",
	height: "100%",
	},
_Maria_Nkechi: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 123},
		{translateY: -10.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Project_Manager: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 132},
		{translateY: 11.5},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "left",
	},
_Motivated__personabl: {
	width: 311,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 32},
		{translateY: 219},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "center",
	},
_Group_5: {
	width: 289,
	height: 24,
	position: "absolute",
	left: 43,
	top: 303,
	},
_Group_2: {
	width: 76,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_Rectangle_5: {
	width: 76,
	height: 24,
	backgroundColor: "rgb(196, 219, 253)",
	position: "absolute",
	borderRadius: 2,
	},
_Business: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 7.5},
		{translateY: -5},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 8,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "center",
	},
_Group_3: {
	width: 101,
	height: 24,
	position: "absolute",
	left: 96,
	top: 0,
	},
_Rectangle_Copy: {
	width: 101,
	height: 24,
	backgroundColor: "rgb(196, 219, 253)",
	position: "absolute",
	borderRadius: 2,
	},
_Management_2: {
	width: 69,
	height: 15,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 4},
	],
	},
_Management: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -4.5},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 8,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "center",
	},
_Group_4: {
	width: 72,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 217},
	],
	},
_Rectangle_Copy_2: {
	width: 72,
	height: 24,
	backgroundColor: "rgb(196, 219, 253)",
	position: "absolute",
	borderRadius: 2,
	},
_Product: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 22},
		{translateY: -5},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 8,
	fontWeight: "600",
	fontFamily: "Montserrat",
	letterSpacing: 0,
	textAlign: "center",
	},
_Oval: {
	width: 12,
	height: 12,
	position: "absolute",
	transform: [
		{translateX: 208},
		{translateY: 133},
	],
	},
_10_00: {
	width: 128,
	height: 25,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 31},
		{translateY: 91},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 14,
	fontWeight: "600",
	lineHeight: 16.4062,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "center",
	},
_Rectangle_6: {
	width: 147,
	height: 47,
	backgroundColor: "rgb(242, 244, 252)",
	position: "absolute",
	transform: [
		{translateX: 200},
		{translateY: 489},
	],
	borderTopWidth: 0.2,
	borderRightWidth: 0.2,
	borderBottomWidth: 0.2,
	borderLeftWidth: 0.2,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 4,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.25)",
	shadowRadius: 4,
	},
_10_00_2: {
	width: 140,
	height: 34,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 203},
		{translateY: 88},
	],
	color: "rgb(60, 135, 251)",
	fontSize: 14,
	fontWeight: "600",
	lineHeight: 16.4062,
	fontFamily: "Montserrat",
	letterSpacing: -0.214286,
	textAlign: "center",
	},
})

