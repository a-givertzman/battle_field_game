/**
 * Класс реализует игровое поле одного игрока
 */
class BattleField {
    _selector = '';
    _elem;
    _size;
    _items = [];
    constructor({
        selector = '',
        size = 10,
    }) {
        console.log('[BattleField] selector:', selector);
        this._selector = selector;
        this._size = size;
        this._elem = document.querySelector(this._selector);
        for (let y = 0; y < this._size; y++) {
            let tr = new HtmlElement({
                parent: this._elem,
                classList: ['battlefield-row',],
                tag: 'tr',
                content: '',
            });
            for (let x = 0; x < this._size; x++) {
                let item = new BattleFieldItem({
                    element: new HtmlElement({
                        parent: tr,
                        classList: ['battlefield-item',],
                        tag: 'td',
                        content: `${y}:${x}`,
                    }),
                });
                this._items.push(item);
            }
        }
    }
}
