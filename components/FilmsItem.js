import React from 'react'
import {View,Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {getImageFromApi} from '../API/TMDBApi'

class FilmsItem extends React.Component{
    
    
    _displayFavoriteImage() {
        if (this.props.isFilmFavorite) {
          // Si la props isFilmFavorite vaut true, on affiche le 🖤
          return (
            <Image
              style={styles.favorite_image}
              source={require('../Images/ic_favorite.png')}
            />
          )
        }
      }
    
    
    render(){
        //const film=this.props.film
        const { film, displayDetailForFilm} = this.props
        return(
            <TouchableOpacity 
                style={styles.container } 
                onPress={() => displayDetailForFilm(film.id)}>
                <Image
                    style={styles.img}
                    source={{uri: getImageFromApi(film.poster_path)}}
                />
                <View style={styles.subContainer}>
                    <View style={styles.headerContainer}>
                        {this._displayFavoriteImage()}
                        <Text style={styles.tit}>{film.title}</Text>
                        <Text style={styles.vote}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.desckipContainer}>
                        <Text style={styles.teks0} numberOfLines={6}>
                            {film.overview}
                        </Text>

                    </View>
                    <View style={styles.datContainer}>
                        <Text style={styles.teks1}>
                            Sorti le {film.release_date}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        //prensipal container
        flexDirection: 'row',
        margin: 10
    },
        img:{
            //imaj 
            height:180,
            width:120,
            backgroundColor: 'gray',
            marginLeft:10,
            marginRight:10,
            marginTop:10,
            marginBottom:10
        },
        
        subContainer:{
            //container segndeh
            flex:1

        },

            headerContainer:{
                //container anteht
                flex: 2,
                flexDirection:'row'
            },
                tit:{
                    //tit fim yo
                    flex:1,
                    flexWrap: 'wrap',
                    fontWeight:'bold',
                    fontSize:20,
                    paddingRight:5

                },
                vote:{
                    //kntt voht yo
                    fontWeight:'bold',
                    fontSize: 26,
                    color:'#666666'

                },
            desckipContainer:{
                // deskripsyn 
                flex: 7
            },
                teks0:{
                    //teks deskripsyn an
                    fontStyle:'italic',
                    color:'#666666',
                  //  textAlign:'justify'
                    
                },
            
            datContainer:{
                //dat container yo
                flex:1
            },
                teks1:{
                    //teks pou dat la
                    textAlign:'right',
                    fontSize:14
                },
                
    favorite_image :{
        width:20,
        height:20,
        marginTop:5,
        marginRight: 5
    }


})


  export default FilmsItem  