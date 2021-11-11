/**
 * Класс реализует работу всего приложения
 *  Рендерит элементы приложения в html
 *  Принимает команды от appMenu и передает их 
 *  объектам игровой сцены. 
 * 
 */
class Application {
    constructor({
        appActions = {},
        battlefieldUser = {},
        battlefieldBot = {},
        battlefieldDock = {},
        win = {},
        doc = {},
    }) {
        console.log('[Application] appActions:', appActions);
        console.log('[Application] battlefieldUser:', battlefieldUser);
        console.log('[Application] battlefieldBot:', battlefieldBot);
        console.log('[Application] battlefieldDock:', battlefieldDock);
    }
    run() {
        console.log('[Application.run]', );

    }
}