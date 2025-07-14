import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, Dimensions, ScrollView } from 'react-native';

// Membuat pasangan gambar dengan jumlah tepat 9 untuk grid 3x3
const generatePairsAgus = () => {
  const prefixNIM = '10584110';
  const postfixNIM = '22';
  const mainBase = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
  const imageQuery = '_.jpg?1751871539';
  const fallbackImage = 'https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif';

  let data = [];

  for (let idx = 47; idx <= 55; idx++) { // <= 55 agar jumlah tepat 9
    const nim = `${prefixNIM}${idx}${postfixNIM}`;
    const mainImage = `${mainBase}${nim}${imageQuery}`;
    const altImage = fallbackImage;
    data.push({ mainImage, altImage });
  }

  return data;
};

const imagePairsAgus = generatePairsAgus();

export default function GridGambarAgus() {
  const [imageStates, setImageStates] = useState(
    imagePairsAgus.map(() => ({ zoom: 1, showAlt: false }))
  );

  const handlePressImage = (idx: number) => {
    setImageStates((prev) =>
      prev.map((item, i) => {
        if (i !== idx) return item;
        const zoomed = item.zoom < 2 ? item.zoom * 1.2 : 2;
        return {
          zoom: zoomed,
          showAlt: !item.showAlt,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={stylesAgus.containerGrid}>
      {imagePairsAgus.map((pair, idx) => (
        <Pressable key={idx} onPress={() => handlePressImage(idx)}>
          <Image
            source={{ uri: imageStates[idx].showAlt ? pair.altImage : pair.mainImage }}
            style={[
              stylesAgus.itemImage,
              {
                transform: [{ scale: imageStates[idx].zoom }],
              },
            ]}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const stylesAgus = StyleSheet.create({
  containerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 8,
  },
  itemImage: {
    width: Dimensions.get('window').width / 3 - 16, // agar presisi 3 kolom
    height: Dimensions.get('window').width / 3 - 16,
    margin: 4,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#bbb',
  },
});
