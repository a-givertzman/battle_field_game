/**
 * Класс реализует меню приложения. 
 * selector - String, селектор, указывающий на элемент в html
 */
class AppActions {
    constructor({
        selector = '',
        actions = [],
    }) {
        console.log('[AppActions] selector:', selector);
        console.log('[AppActions] actions:', actions);
    }
}
