
function generateMap(actors, relationships) {
    const relationshipMap = [];
    for(relationship in relationships) {
        relationshipMap.push({
            parties: [actors[0], actors[1]],
            nature: relationships[0],
            mutual: Math.random() > 0.2
        });
    }

    return relationshipMap;
}

module.exports = {
    generateMap
};