import React from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../styles/screens/terms.style';
import { terms } from '../constant/Terms';
import ReturnButton from '../components/ReturnButton';

Feather.loadFont()

const TermsAndConditions = () => {

  const renderItem = ({item}:any) => (
    <View style={styles.item}>
      <Text style={{...styles.bold, ...styles.white, lineHeight: 17}}>{item.id}</Text>
      <View style={{paddingLeft: 20, paddingRight: 44}}>
        <Text style={{...styles.white, lineHeight: 17 }}>{item.text}</Text>
      </View>
    </View>
  )
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={{marginTop: -4}}>
            <ReturnButton onClick={() =>{}}/>
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={[styles.white, styles.f24, styles.bold]}>
              Papeo General Terms and Conditions
            </Text>
            <Text style={[styles.gray, styles.mt8]}>from 14.12 2020</Text>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList 
            data={terms}
            renderItem={renderItem}
            keyExtractor={(item:any)=> item.id}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default TermsAndConditions;