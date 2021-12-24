/**
 * Класс реализует создание html элемента в документе. 
 *  selector - string, селектор родителя в котором будет 
 *  зоздан элемент
 */
class HtmlElement {
    _parent;
    _elem;
    constructor({
        parent = {}, /** Селектор родителя */
        classList = [],
        tag = 'div',
        content = '',
    }) {
        this._parent = parent;
        this._elem = document.createElement(tag);
        classList.forEach((_class) => {
            this._elem.classList.add(_class);
        });
        this._elem.innerHTML = content;
        this._parent.appendChild(this._elem);
        return this._elem;
    }
    // appendChild(element) {
    //     this._elem.appendChild(element);
    // }
}
