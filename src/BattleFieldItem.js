/**
 * Класс реализует клетку игрового поля
 */
class BattleFieldItem {
    _elem;
    constructor({
        element = {},
    }) {
        console.log('[BattleFieldItem]');
        this._elem = element;
    }
}