import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const [vulpix, setVulpix] = useState(null);
  const [loading, setLoading] = useState(true);

  const getVulpix = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/37');
      const data = await res.json();

      setVulpix(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVulpix();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>This is {vulpix.name}!</Text>
        <Image
          style={styles.image}
          source={{ uri: vulpix.sprites.front_default }}
        />
        <Text>{vulpix.types.map(type => type['type']['name'])}</Text>
        <Text>Weight: {vulpix.weight}</Text>
        <Text>Height: {vulpix.height}</Text>
        <Text>Base experience: {vulpix.base_experience}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    backgroundColor: 'yellow',
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 10
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: 'orange'
  }
});
