import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// card
const Card = (image,weight, setWeight) =>{
    <View >
        <Pressable onPress={() => setWeight(weight)} >
        <Image style={styles.card} source={require(image)}  />
        </Pressable>
    </View>;
};

const FlatList = ({Children}) =>{
    <View
    style={styles.flatList}
    >
        {Children}
    </View>;
};

const Grid = () => {
  return (
    <View>
      <FlatList>
      </FlatList>
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({});