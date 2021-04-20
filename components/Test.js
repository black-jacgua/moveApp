import React from 'react'
import {Platform, StyleSheet, View} from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'
import HelloWorld from './HelloWorld'

class Test extends React.Component {


    constructor(props){
        super(props)
        this.state={
            topPosition: new Animated.Value(0)
        }
    }

  
    componentDidMount() {
      Animated.timing(
        this.state.topPosition,
        {
          toValue: 100,
          duration: 3000, // Le temps est en milliseconds ici (3000ms = 3sec)
          easing: Easing.linear,
        }
      ).start() // N'oubliez pas de lancer votre animation avec la fonction start()
  }
  
  
    render() {
        return(
            <View style={styles.main_container}>
                    <Animated.View style={[styles.animation_view, 
                        {top: this.state.topPosition}]}>

                    </Animated.View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main_container:{
        flex:1,
       justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#dddddd'
    },

    animation_view:{
  
                backgroundColor:'#aaaaff',
                height:200,
                width:200,   
                borderRadius:100,
    }

})

export default Test