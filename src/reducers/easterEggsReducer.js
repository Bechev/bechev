export default function easterEggsReducer(
    state = {
        lights:{
            lightsOn: false,
            activated: false,
        }
    }
, action) {

    switch (action.type) {

        case 'TURN_LIGHTS_ON':
            return ({...state, lights: {...state.lights, lightsOn: true}})
            // return  [].concat(state, action.payload)
        
        case 'TURN_LIGHTS_OFF':
            return ({...state, lights: {...state.lights, lightsOn: false}})
            // return state.filter((val) => val.id !== action.payload.id)

        case 'ACTIVATE_EASTEREGG':
            return state
            // return state.filter((val) => val.id !== action.payload.id)
        
        default:
            return state;
    }
}