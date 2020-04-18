import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="Go To Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals' });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
