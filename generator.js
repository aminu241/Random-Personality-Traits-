/**
 * Generates a random personality type out of 
 * a possible 16 combination and returns 
 * the type in an array.
 * 
*/
function getRandomPersonalityType() {
    let typeGroups = [['E', 'I'], ['N', 'S'], ['T', 'F'], ['J', 'P']];
    let type = [];
    for (const typeGroup in typeGroups) {
        let curr = typeGroups[typeGroup];
        type[typeGroup] = curr[Math.floor(Math.random() * 2)];
    }
    return type;
}
/**
 * Takes in an array which contains the  characteristic traits of a personality type
 * and returns the normal name of the personality type;
 * 
 * @param {*} typeArray 
 */
function getTypeName(typeArray) {
    let joinedType = typeArray.join('');
    switch (joinedType) {
        case 'INTJ':
            return 'Architech';
        case 'INTP':
            return 'Logician';
        case 'ENTP':
            return 'Commander';
        case 'ENTJ':
            return 'Debater';
        case 'INFJ':
            return 'Advocate';
         case 'INFP':
            return 'Mediator';
        case 'ENFJ':
            return 'Protagonist';
        case 'ENTP':
            return 'Campaigner';
        case 'ISTJ':
            return 'Logistician';
        case 'ISFJ':
            return 'Defender';
        case 'ISTJ':
            return 'Executive';
        case 'ESTJ':
            return 'Consol';
        case 'ISTP':
            return 'Virtuoso';
        case 'ISFP':
            return 'Adventurer';
        case 'ESTP':
            return 'Entrepreneur';
        case 'ESFP':
            return 'Entertainer';
        default:
            return 'Human';
    }
}
/**
 * 
*/
function getRandomPersonalityXtics(Type) {
    let xtics = [];

    let E = ['tend to prefer group activities', 'tend to get energized by social interaction', 'tend to be very enthusiastic and easily excited individuals'];
    if (Type[0] === 'E') {
        xtics[0] = E[Math.floor(Math.random() * 3)];
    }

    let I = ['tend to prefer solitary activities.', 'tend to get exhausted by social interaction.','tend to be quite sensitive to external stimulation (e.g. sound, sight or smell).'];
    if (Type[0] === 'I') {
        xtics[0] = I[Math.floor(Math.random() * 3)];
    }

    let N = ['tend to be very imaginative,  open-minded and curious', 'tend to prefer novelty over stability', 'tend to focus on hidden meanings and future possibilities'];
    if (Type[1] === 'N') {
        xtics[1] = N[Math.floor(Math.random() * 3)];
    }

    let S = ['tend to be highly practical, pragmatic and down-to-earth individuals', 'tend to have strong habits which are often hard to break.', 'tend to focus on what is happening or has already happened.'];
    if (Type[1] === 'S') {
        xtics[1] = S[Math.floor(Math.random() * 3)];
    }

    let T = ['tend to focus on objectivity and rationality, prioritizing logic over emotions', 'tend to hide their true feelings from others', 'tend to see efficiency as more important than cooperation'];
    if (Type[2] === 'T') {
         xtics[2] = T[Math.floor(Math.random() * 3)];
    }

    let F = ['tend to be sensitive and emotionally expressive', 'tend to be more empathic to others and less competitive by nature', 'tend to focus on social harmony and cooperation'];
    if (Type[2] === 'F') {
        xtics[2] = F[Math.floor(Math.random() * 3)];
    }

    let J = ['being decisive, thorough and highly organized', 'having abundant value clarity, predictability and closure', 'prefering structure and planning to spontaneity'];
    if (Type[3] === 'J') {
        xtics[3] = J[Math.floor(Math.random() * 3)];
    }

    let P = ['being very good at improvising and spotting opportunities', 'being flexible and relaxed individuals', 'being nonconformists who prefer keeping their options open'];
    if (Type[3] === 'P') {
        xtics[3] = P[Math.floor(Math.random() * 3)];
    }
    return xtics;
}

function getTraitNames(type) {
    let names = [];
    if (type[0] === 'E') {
        names[0] = 'Extrovert'
    }else if (type[0] =='I') {
        names[0] = 'Introvert'
    }

    if (type[1] === 'N') {
        names[1] = 'Intuitive'
    }else if (type[1] =='S') {
        names[1] = 'Observant'
    }

    if (type[2] === 'T') {
        names[2] = 'Thinking'
    }else if (type[2] =='F') {
        names[2] = 'Feeling'
    }

     if (type[3] === 'P') {
        names[3] = 'Prospecting'
    }else if (type[3] =='J') {
        names[3] = 'Judging'
     }
    return names;
}

function randomGeneratorEngine() {
    let type = getRandomPersonalityType();
    let typeName = getTypeName(type);
    let xtics = getRandomPersonalityXtics(type);
    let traits = getTraitNames(type)
    console.log(`Todays Personality type is ${typeName}. Thier personality triat(${type.join()}) represents ${traits[0]}, ${traits[1]}, ${traits[2]}, and ${traits[3]}. 
 
 Individuals of this personality type ${xtics[0]}, they also ${xtics[1]}.
 Another characteristics of these personality is that they ${xtics[2]}, while also ${xtics[3]}. 
 
 Do you recognize these traits in any of your friends?`);
}

randomGeneratorEngine();

    