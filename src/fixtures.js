const Item = require('../modules/items');
const Promotions = require('../modules/promotions');

function loadPromotions() {
    return [
        new Promotions('BUY_TWO_GET_ONE_FREE', ['ITEM000000', 'ITEM000001', 'ITEM000005'])
    ];
}

exports.loadPromotions = loadPromotions;
