import React from 'react'
import { Button, TextInput, View, StyleSheet, FlatList, Text, ActivityIndicator} from 'react-native'
import { getFIlmsFromApiWithSearchedText } from '../API/TMDBApi'
import FilmsItem from './FilmsItem'
import FilmList from './FilmList'
import { connect } from 'react-redux'



class Search extends React.Component{

    constructor(probs) {
        super(probs)
        this.searchedText = ""
        this.page=0
        this.totalPage=0
        
        this.state = {
            films:[],
            isLoading: false
            
        }
        
        this._loadFilms=this._loadFilms.bind(this)
    }

    _loadFilms() {
        
        if(this.searchedText.length>0){
            this.setState({ isLoading: true})
            getFIlmsFromApiWithSearchedText(this.searchedText, this.page+1)
            .then(data => {
            this.page = data.page
            this.totalPage = data.total_pages
            this.setState({
                films: [ ...this.state.films, ...data.results],
                isLoading: false
            })
        })
        }
    }

    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' color='blue'/>
                    <Text>Tann...</Text>
                </View>
            )
        }
    }

    _searchTextInputChanged(text){
        this.searchedText = text
    }

    _searchFilms(){
        this.page=0
        this.totalPage=0
        this.setState({
            films:[]
        }, () => {
            this._loadFilms()
        })

        
    }

    _displayDetailForFilm = (idFilm) => {
        console.log("Display film with is: " + idFilm)
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm})
    }

    render() { 
        return(
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                <TextInput
                    style={styles.textin}
                    placeholder="search"
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._searchFilms()}
                />
                </View>
                <Button
                    title="jwenn" onPress={() => this._searchFilms()}
                />
                <FilmList
                    films={this.state.films}
                    navigation={this.props.navigation}
                    loadFilms={this._loadFilms}
                    page={this.page}
                    totalPage={this.totalPage}
                    favoriteList={false}
               />

               {/*<FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => 
                        <FilmsItem film={item}
                        
                        isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
              displayDetailForFilm={this._displayDetailForFilm}
                        />}
                            onEndReachedThreshold={0.5}
                            onEndReached={() => {
                                if (this.page < this.totalPages) {
                                    this._loadFilms()
                                }
                            }}
                />
                */}
                {this._displayLoading()}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#efefef',
        justifyContent:'center',
        //alignItems: 'center'
    },
    textin:{
        marginLeft: 10, 
        marginRight: 10, 
        height: 50, 
        width:200,
        borderColor: '#0f0f9f', 
        borderWidth: 1, 
        paddingLeft: 20,
        marginTop: 30,
        borderRadius:30,
        marginBottom:10,
        backgroundColor:'#efefef',
        color: '#0f0f9f'
    },
    loading_container:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'

    }
})

const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}

  export default connect(mapStateToProps)(Search)