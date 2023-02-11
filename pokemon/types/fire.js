const { Pokemon } = require('../pokemon.js')

class Fire extends Pokemon {
    constructor(
        name, 
        level,
        moves, 
        catchDifficulty, 
        hitPoints, 
        attack, 
        defence,
                ) 
        {
            super(name, level, 'fire', moves, catchDifficulty, hitPoints, attack, defence)
        }
}

module.exports = {Fire, }