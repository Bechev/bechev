export default function easterEggsReducer(
    state = {
        titleColors:{
            activated: false,
        },
        easterEggCounter:{
            activated: false,
        },
        lights:{
            lightsOn: false,
            activated: false,
        },
        profilePictureHovered:{
            activated: false,
        },
        profilePictureClicked:{
            activated: false,
        },
        underConstruction:{
            activated: false,
        },
    }
, action) {

    switch (action.type) {

        case 'TURN_LIGHTS_ON':
            return ({...state, lights: {...state.lights, lightsOn: true}})
        
        case 'TURN_LIGHTS_OFF':
            return ({...state, lights: {...state.lights, lightsOn: false}})

        case 'ACTIVATE_EASTEREGG':
            console.log(action.payload)
            return ({...state, [action.payload]: {...state[action.payload], activated: true}})
        
        default:
            return state;
    }
}