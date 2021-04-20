// Navigation/Navigation.js

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Search from '../components/Search'
import FilmDetail from '../components/FilmDetail'
import Favorites from '../components/Favorites'
import { createBottomTabNavigator} from 'react-navigation-tabs'
import {StyleSheet, Image} from 'react-native'
import React from 'react'
import Test from '../components/Test'


const SearchStackNavigator = createStackNavigator({
 
  Search:{
    screen: Search,
    navigationOptions:{
      title: "akey"
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions:{
      title:""
    }
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites:{
    screen: Favorites,
    navigationOptions:{
      title:"Favori"
    }
  },
  FilmDetail:{
    screen: FilmDetail,
    navigationOptions:{
      title:""
    }
  }
  
})

const MoviesTabNavigator = createBottomTabNavigator({
  Search:{
    screen: SearchStackNavigator,
    navigationOptions:{
      tabBarIcon: () => {
        return <Image
        source = {require('../Images/ic_search.png')}
        style={styles.icon}
        />
      }
    }
  },

  Favorites:{
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarIcon:() => {
        return <Image
        source={require('../Images/ic_favorite.png')}
        style={styles.icon}/>
      }
    }
  },
  Test:{
    screen:Test
  }
},
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true
    }
  
})

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(MoviesTabNavigator)