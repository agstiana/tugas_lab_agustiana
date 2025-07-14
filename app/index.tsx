import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, Dimensions, ScrollView } from 'react-native';


const agustianaGenerateImagePairs = () => {
  const baseNIM = '10584110';
  const suffix = '22';
  const baseURL = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
  const query = '_.jpg?1751871539';
  const altURL = 'https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif';

  const pairs = [];

  for (let i = 47; i <= 56; i++) {
    const nim = `${baseNIM}${i}${suffix}`;
    const main = `${baseURL}${nim}${query}`;
    const alt = altURL; // semua alternatif sama
    pairs.push({ main, alt });
  }

  return pairs;
};

const agustianaImagePairs = agustianaGenerateImagePairs();

export default function agustianaGambarGrid() {
  const [agustianaStates, setagustianaStates] = useState(
    agustianaImagePairs.map(() => ({ scale: 1, isAlt: false }))
  );

  const agustianaHandlePress = (index: number) => {
    setagustianaStates((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const newScale = item.scale < 2 ? item.scale * 1.2 : 2;
        return {
          scale: newScale,
          isAlt: !item.isAlt,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={agustianaStyles.grid}>
      {agustianaImagePairs.map((pair, index) => (
        <Pressable key={index} onPress={() => agustianaHandlePress(index)}>
          <Image
            source={{ uri: agustianaStates[index].isAlt ? pair.alt : pair.main }}
            style={[
              agustianaStyles.image,
              {
                transform: [{ scale: agustianaStates[index].scale }],
              },
            ]}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const agustianaStyles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').width / 3 - 20,
    margin: 5,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#ddd',
    borderWidth: 1,         
    borderColor: '#aaa',     
  },
});