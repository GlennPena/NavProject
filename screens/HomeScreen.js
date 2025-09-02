import React from 'react';
import { View, Text, Button, ScrollView, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const { name } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
          style={styles.logo}
        />

        <Text style={styles.welcome}>Welcome, {name || "Guest"}!</Text>

        <Image
          source={{ uri: 'https://placedog.net/200/200' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://placebear.com/200/200' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://placebeard.it/200x200' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://loremflickr.com/320/240/mountains' }}
          style={styles.image}
        />

        <Button
          title="Go Back to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5cb8cfff'
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});
