"use strict";
const app = new Application ({
    appActions: new AppActions({
        selector: '.app-actions',
        actions: [
            new Action({
                selector: '[data-computer="simple"]',
            }),
            new Action({
                selector: '[data-computer="middle"]',
            }),
            new Action({
                selector: '[data-computer="hard"]',
            }),
            new Action({
                selector: '[data-type="random"]',
            }),
            new Action({
                selector: '[data-type="challenge"]',
            }),
            new Action({
                selector: '[data-action="manually"]',
            }),
            new Action({
                selector: '[data-action="randomize"]',
            }),
        ],
    }),
    battlefieldUser: new BattleField({
        selector: '[data-side="player"] .battlefield .battlefield-table',
        size: 10,
    }),
    battlefieldBot: new BattleField({
        selector: '[data-side="opponent"] .battlefield .battlefield-table',
        size: 10,
    }),
    battlefieldDock: new BattleFieldDock({
        selector: '.battlefield-dock',
    }),
});

app.run();