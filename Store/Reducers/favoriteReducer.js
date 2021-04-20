
const initialeSate = { favoritesFilm: []}

function toggleFavorite(state=initialeSate, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            console.log("sese*****")
            const favoriteFilmIndex = state.favoritesFilm
            .findIndex(item => item.id === action.value.id)
            if(favoriteFilmIndex !== -1){
                console.log("sese---------------------------------------------------------------------------------------")
                nextState = {
                    ...state, 
                    favoritesFilm: state.favoritesFilm.filter((item, index) => index !== favoriteFilmIndex)
                }
            }
            else{
                console.log("sese++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
                nextState={
                    ...state, 
                    favoritesFilm: [ ...state.favoritesFilm, action.value]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default toggleFavorite