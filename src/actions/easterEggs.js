
export function turnLightsOn(){
    return {
        type: 'TURN_LIGHTS_ON',
        // payload: true
    };
};

export function turnLightsOff(){
    return {
        type: 'TURN_LIGHTS_OFF',
        // payload: false
    };
}

export function activateEasterEgg(easterEgg){
    return {
        type: 'ACTIVATE_EASTEREGG',
        // payload: true
    };
};



