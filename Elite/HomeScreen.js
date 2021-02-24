import React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity,ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CardCustScreen from './CardCustScreen';

export default function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
<View  style={styles.container}>
  
<View style={styles.categoryContainer}>
  <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
<View style={styles.categoryIcon}>
<Image source={require('../assets/ana.png' ) }    size={35} style={styles.categoryIcon}/>
</View>
<Text style={styles.categoryBtnTxt}>Analytics</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate(CardCustScreen)}>
<View style={styles.categoryIcon}>
<Image source={require('../assets/cus.png' ) }    size={35} style={styles.categoryIcon}/>
</View>
<Text style={styles.categoryBtnTxt}>Customers</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.categoryBtn}onPress={()=>navigation.navigate(CardCustScreen)}>
<View style={styles.categoryIcon}>
<Image source={require('../assets/order.png' ) }    size={35} style={styles.categoryIcon}/>

</View>
<Text style={styles.categoryBtnTxt}>Orders</Text>
</TouchableOpacity>
</View>
<View>
<Image source={require('../assets/anal.png' ) }resizeMode="cover" style={{width:280,height:170,alignSelf:"center"}} />
</View>
<View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>
TOTAL REVENUE
                  </Text>
                  
                  <Text style={styles.cardDetails}>
                  35500$
            </Text>
            
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>
TOTAL PROFIT
                  </Text>
                  
                  <Text style={styles.cardDetails}>
                  30000$
            </Text>
            
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>
TOTAL VIEWS
                  </Text>
                  
                  <Text style={styles.cardDetails}>
                  30000$
            </Text>
            
                </View>
<View style={styles.cardsWrapper}>
              <Text style={{alignSelf:"center",fontSize:18,fontWeight:"bold", marginTop:20}} >Recent Orders</Text>
              <TouchableOpacity onPress= {()=>{}}>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                <Image source={require('../assets/skd.png' ) }resizeMode="cover" style={styles.cardImg}/>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>
Skater Dress
                  </Text>
                  
                  <Text style={styles.cardDetails}>
            30$ For 1 Pair
            </Text>
                </View>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress= {()=>{}}>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                <Image source={require('../assets/shn.png' ) }resizeMode="cover" style={styles.cardImg}/>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>
Nike Shoes
                  </Text>
                  
                  <Text style={styles.cardDetails}>
                  30$ with Free Deliviery
            </Text>
                </View>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress= {()=>{}}>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                <Image source={require('../assets/rs.png' ) }resizeMode="cover" style={styles.cardImg}/>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>
Ray Ban Sunglasses
                  </Text>
                  
                  <Text style={styles.cardDetails}>
             1 Pair of Polarized Sunglases 20$            </Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
            
            
</View>
</ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#40E0D0' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: 'black',
    fontWeight:"bold"
    
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});