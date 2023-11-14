import { Text, SafeAreaView, StyleSheet, ScrollView,View,Image,TouchableOpacity, ImageBackground } from 'react-native';

export default function Home() {
   
  return (

    <SafeAreaView style={styles.container}> 

     <ScrollView>
<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/logo_farm.png')}
          />        
          </View>
          <Text style={styles.texto}>
          Sheep are raised primarily for their fleece, which is sheared and made into wool. Some breeds are also farmed for lamb meat. Sheep generally graze on pasture and rangeland and may be herded or kept in fenced pens.

          </Text>
</View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor:'#307050'
  },
  img: {
    width:300,
    height:250,
    paddingTop:50
  },
   cxFoto: {
    margin:5,
    alignItems:"center",
    width:300,
    height:250,
    borderWidth:2,
    borderRadius:900,
    borderColor:'#C1CDCD'
   },
  caixa:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    borderStyle:'solid',
    margin:20,
    padding:30,
    borderColor:'#C1CDCD'
  },
   texto:{
    textAlign:'center',
    paddingTop:50,
    color:'yellow'
  },
});

