import axios from "axios";


const initialState = {
    coordinatesArr: [{name: 'Виктор', lat: 55.741009, long: 52.402031}, 
    {name: 'Надежда', lat: 55.741009, long: 52.400031},
    {name: 'Сэм', lat: 55.741009, long: 52.392031},]
}

const setCoordinate = (payload) => ({type: 'SET_COORDINATE', payload});


const coordinatesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_COORDINATE':
            return {...state, 
                coordinatesArr: [...state.coordinatesArr, action.payload]}
        default: 
        return state;

    }
}

export const getCoordinatesThunkCreator = (name, address) => async (dispatch) => {
    const apiKey = '99d27a37-a2bc-4a4a-ac4f-99ad602977f3';
    let response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${address}`);
    response = response.data.response.GeoObjectCollection.featureMember
    if (response.length === 0) {
        alert('По данному запросу ничего не найдено')
        return
    } else if (response.length > 1) {
        alert('Уточните адрес')
        return 
    }
    response = response[0].GeoObject.Point.pos
    response = response.split(' ').reverse()
    const [lat, long] = response; /* for string use join() */
    dispatch(setCoordinate({name, lat, long}))
}
export default coordinatesReducer;