import React from "react";
import {StyleSheet, Dimensions} from "react-native";

const BR = 10;

module.exports = StyleSheet.create({
  loadView:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    margin: 14,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: BR,
  },
  empty:{
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  emptyText:{
    marginTop:6,
    fontSize:16,
    textAlign:'center',
    backgroundColor:'transparent'
  },
  emptyTextDetail:{
    textAlign:'center',
    marginTop:2,
    backgroundColor:'transparent'
  },
  img:{
    width: Dimensions.get('window').width, 
    height: Math.floor(Dimensions.get('window').height-122),
    backgroundColor:'#ddd',
    flex:1
  },
  imgModal:{
    width:Dimensions.get('window').width,
    height: Math.floor(Dimensions.get('window').height/1.7),
    backgroundColor:'#ddd',
    flex:1
  },
  description:{
    flex:1,
    alignSelf: 'flex-start',
    padding:20
  },
  linearGradient: {
    flex: 1
  },
  mainTitle:{
    marginTop:32,
    marginBottom:0,
    paddingHorizontal:18
  },
  mainTitleText:{
    color:'white',
    fontSize:18,
    opacity:0.8,
    backgroundColor:'transparent'
  },
  collection:{
    overflow:'hidden',
    margin:16,
    marginBottom:0,
    borderRadius:3,
    backgroundColor:'white',
    justifyContent:'center',
    
  },
  collectionImage:{
    height:200,
    borderRadius:3,
    backgroundColor:'#eee',
    alignItems:'center',
    justifyContent:'center'
  },
  collectionMetadata:{
    padding:20
  },
  collectionTitle:{
    marginBottom:8,
    fontSize:20
  },
  collectionDescription:{
    marginBottom:8,
    fontSize: 14
  },
  collectionUpdated:{
    color:'#999'
  },
  title: {
    fontSize: 25,
    color: '#333',
  },
  subTitle: {
    fontSize: 18,
    color: '#333',
  },
  normalText: {
    fontSize: 15,
    color:'#333'
  },
  lightText: {
    color:'#999',
    fontSize: 15
  },
  titleView: {
    justifyContent:'flex-end',
    width:280,
    marginHorizontal:10,
    padding:20,
    backgroundColor:'transparent'
  },
  price: {
    fontSize: 30,
    color: '#fff',
    textAlign:'center',
    backgroundColor:'transparent',
    position:'absolute',
    right:6,
    bottom:6
  },
  priceView:{
    position:'absolute',
    borderRadius:8,
    justifyContent:'center',
    right:0,
    bottom:0
  },
  modal: {
    height: 420,
    width:Dimensions.get('window').width-20,
    borderRadius: BR,
    backgroundColor: "#fff",
    justifyContent:'center',
    overflow:'hidden'
  },
  modalNotify: {
    height:240
  },
  modalInfoContainer:{
    padding:20
  },
  modalButton:{
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:20,
    alignItems:'center'
  },
  modalButtonIcon:{
    marginTop:4
  },
  sizeBoxContainer:{
    flexDirection:'row',
    flexWrap: 'wrap',
    marginVertical:10
  },
  sizeBox:{
    width:Math.floor(Dimensions.get('window').width/4),
    height:Math.floor(Dimensions.get('window').width/4),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#eee',
    overflow:'hidden',
    marginRight:8,
    marginBottom:8,
    borderRadius: BR
  },
  sizeBoxText:{
    color:'#999',
    padding:8,
    fontSize: 20,
    fontWeight:'normal',
    textAlign:'center'
  },
  sizeSelected:{
    backgroundColor: '#999'
  },
  sizeSelectedText:{
    color:'#eee',
    fontWeight: 'bold'
  },
  actionButtonContainer:{
    flexWrap: 'wrap',
    flexDirection:'row'
  },
  actionButton:{
    flex:2
  },
  actionButtonText:{
    fontSize:25,
    color:'#fff',
    textAlign:'center'  
  },
  disableAddToCartButton:{
    opacity: 0.4
  },
  nav:{
    backgroundColor:'transparent',
    padding:10,
    flexDirection:'row',
    justifyContent: 'center'
  },
  cartNav:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  cartNavElement:{
    padding:6,
    borderRadius:4,
    marginLeft:6
  },
  navText:{
    color:'white',
    fontSize: 12
  },
  navElement:{
    marginHorizontal: 10
  },
  cartItem:{
    paddingVertical: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  menuContainer:{
    justifyContent:'center',
    padding:30,
    flex:1,
    backgroundColor:'transparent'
  },
  menuLink:{
    fontSize: 30,
    color:'#fff'
  },
  formContainer:{
    margin:20, 
    marginBottom:0,
    borderColor:'#bbb',
    borderWidth:1,
    borderRadius: 5,

  },
  formInputRowContainer:{
    flex:2, 
    borderColor:'#bbb', 
    borderTopWidth:1,
    padding:10
  },
  formInputRow:{
    height:30,
    fontSize:20
  },
  formInputPlaceholder:{
    color:'#aaa'
  },
  checkbox:{
    width:30,
    height:30,
    marginRight:10,
    borderColor:'#bbb',
    borderWidth:1,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center'
  },
  checkboxChecked:{
    backgroundColor:'#eee',
    borderRadius:10,
    width:20,
    height:20
  },
  imageLoading:{
    fontSize:16,
    textAlign:'center',
    color:'#aaa'
  },
  progressOuterCircle:{
    width:100,
    height:100,
    borderRadius: 50,
    backgroundColor: 'transparent',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#fff', 
    borderWidth:1, 
    borderStyle: 'dashed',
    opacity: 0.6,
  },
  progressInnerCircle:{
    height:16, 
    width:16, 
    borderRadius:8, 
    overflow:'hidden',
    borderColor:'#fff', 
    borderWidth:1, 
    opacity: 0.1,
    borderStyle: 'solid',
    backgroundColor:'white',
    alignItems:'center', 
    justifyContent:'center'
  },
  center:{
    flex:1, 
    alignItems:'center', 
    justifyContent:'center'
  },
  orderStatus:{
    flexDirection:'row',
    paddingVertical:2,
    alignItems: 'center'
  },
  statusText:{
    color:'#999',
    marginTop:4,
    marginLeft:2
  },
  reviewRow:{
    flexDirection: 'row',
    borderBottomWidth:1,
    borderBottomColor:'#ddd'
  },
  reviewLeftColumn:{
    flex:2,
    paddingVertical:10,
    alignItems:'flex-start'
  },
  reviewRightColumn:{
    paddingVertical:10,
    flex:1,
  },
  reviewIcon:{
    marginTop:10
  }


});