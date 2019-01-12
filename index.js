const random = require('rrees-js-random');

function generateMap(actors, relationships) {
    const relationshipMap = [];
    const shuffledRelationships = random.shuffle(relationships);
    for(relationship in relationships) {
        relationshipMap.push({
            parties: [actors[0], actors[1]],
            nature: shuffledRelationships.pop(),
            mutual: Math.random() > 0.2
        });
    }

    return relationshipMap;
}

module.exports = {
    generateMap
};

const generatedMap = generateMap(['Man', 'Woman'], ['Love', 'Hate', 'Former friends']);
console.log(generatedMap);