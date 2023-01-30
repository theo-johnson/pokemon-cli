const { Pokemon } = require('../pokemon')

class Rattata extends Pokemon {
    constructor(name, hitPoints, attackDamage, move) {
        super(name, hitPoints, attackDamage, move);
        this.art = `
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡯⣭⣟⢿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⡏⠻⢿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠉⢿⣦⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣞⢷⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡆⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⣾⡟⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⢿⡀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡗⣿⣵⣶⣿⣿⣿⣷⣶⣤⡀⣤⣾⢟⣻⣭⡽⣷⠀⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠈⠒⢄⡀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣟⣵⣿⣿⣿⡇⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⢀⣤⣷⣿⣿⣿⣿⣿⣿⡿⠟⣯⣯⣿⣿⣿⣼⣿⣿⣿⣧⡟⢀⣠⣤⣶⣦⣤⣀⠀⢀⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣟⣁⣧⢦⣿⢯⣿⣿⠿⣿⣟⣻⣟⡾⣳⣶⣿⣿⣿⣿⣿⣿⣷⡼⠃⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⣝⣻⣿⣿⢟⢿⣿⣿⣿⣿⣿⣯⢽⣿⣿⣖⣒⣒⣶⣶⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⢀⣠⣤⣶⣿⢿⣿⢯⢿⣷⣝⢿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
        ⠀⠀⠈⣩⣿⣽⣿⣿⣽⣹⣯⣿⣷⡹⢯⣶⣝⢿⣿⣿⣿⣿⣟⣽⣿⣿⣿⣿⢿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀
        ⠀⠀⠈⠉⠈⠉⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⢹⣿⡿⠿⢿⣾⣿⣿⣿⣿⢯⣿⣿⣿⣿⣿⣿⡻⣿⣿⣿⣿⣿⣤⣀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⢿⣿⣿⠟⠋⠀⢠⣿⣿⣿⣿⣿⡃⣽⣛⣛⠛⠛⠋⠁⠀⠉⠻⠿⣿⣿⠿⣿⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡿⠱⠛⠕⠛⠁⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⡿⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢴⣾⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⡟⢫⠟⠁⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠟⠩⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;
    }
}

module.exports = {
    Rattata
}