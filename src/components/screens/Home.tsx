import React from 'react';
import { View, Text, ScrollView, ImageSourcePropType } from 'react-native';
import { Button, Header, SearchBar } from '@rneui/themed';
import { theme }  from '../theme'
import Recipe from '../Recipe/Recipe';
import en from '../../../en';

interface Meal {
  strMeal: string,
  idMeal: string,
  strMealThumb: string,
  strCategory: string,
}

const Home: React.FC = () => {

  const [search, setSearch] = React.useState<string>("");
  const [meals, setMeals] = React.useState<Meal[]>([])

  const updateSearch = (search:string) => {
    setSearch(search);
  };

  const fetchMeals = async (searchTerm: string) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    const data = await response.json()
    console.log(data.meals[0].strMealThumb)
    return data.meals;
  };

  const onClick = async () => {
    const data = await fetchMeals(search)
    setMeals(data)
  }

  return (
    <View>
      <Header
        placement="center"
        centerComponent={{ text: en.header.title, style: { color: '#fff', fontSize: theme.typography.fontSizes.large, marginTop: theme.layout.margin.large } }}
        leftComponent={{ icon: 'home', color: '#fff', size: 24, style: {marginTop: theme.layout.margin.large} }}
        containerStyle={{ backgroundColor: theme.colors.primary, height: 100 }}
      />

      <View style={{ alignItems: 'center', marginTop: theme.layout.margin.small }}>
        <Text style={{ fontSize: theme.typography.fontSizes.large, fontWeight: 'bold', marginTop: 20 }}>{en.home.title}</Text>
      </View>
      <View style={{ marginTop:theme.layout.margin.small, padding: theme.layout.padding.medium }}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          lightTheme={true}
          round={true}
          platform="ios"
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 5 }}>
      <Button
          title="Find Recipes"
          containerStyle={{ marginTop: 20 }}
          buttonStyle={{ backgroundColor: theme.colors.primary, borderRadius: 10 }}
          titleStyle={{ fontSize: theme.typography.fontSizes.medium, fontWeight: 'bold' }}
          onPress={onClick}
        />
        </View>
      <ScrollView contentContainerStyle={{ overflow: 'scroll', alignItems: 'center', marginTop: theme.layout.margin.small, gap: 20 }}>
        {meals.map((meal) => 
          <Recipe key={meal.idMeal} name={meal.strMeal} img={{uri: meal.strMealThumb}} description={meal.strCategory} />
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
