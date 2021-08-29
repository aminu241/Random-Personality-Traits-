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
            break;
        case 'INTP':
            return 'Logician';
        case 'ENTP':
            return 'Commander';
        case 'ENTP':
            return 'Debater';
        case 'INFJ':
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
console.log(getTypeName(getRandomPersonalityType()));
/**
 * 
*/
function getRandomXtics(type) {
    
}
    //Second stage Array: 
        /**
         * [[5 characteristics of E],[5 characteristics of I]]
         * [[5 characteristics of N],[5 characteristics of S]]
         * [[5 characteristics of T],[5 characteristics of F]]
         * [[5 characteristics of J],[5 characteristics of P]]
         */
//generate a random index from each arrays and output it

//Concactenate the randomized indexes to form a string

//Output the string to the console

    // Todays Personality type is ____. Individuals of this personality type
    // ________, _________, ________, ________. Do you recognize these traits in any of your friends?