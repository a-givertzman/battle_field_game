/**
 * Класс реализует игровое поле одного игрока
 */
class BattleField {
    _selector = '';
    _elem;
    _size;
    constructor({
        selector = '',
        size = 10,
    }) {
        console.log('[BattleField] selector:', selector);
        this._selector = selector;
        this._size = size;
        this._elem = document.querySelector(this._selector);
        for (let y = 0; y < this._size; y++) {
            let tr = document.createElement('tr');
            tr.classList.add('battlefield-row');
            this._elem.appendChild(tr);
            console.log('[BattleField] tr:', tr);
            for (let x = 0; x < this._size; x++) {
                let td = document.createElement('td');
                td.classList.add('battlefield-item');
                td.innerHTML = `${x}:${y}`;
                tr.appendChild(td);
            }
        }
    }
}