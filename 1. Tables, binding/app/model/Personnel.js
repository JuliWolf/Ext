Ext.define('testApp.model.Personnel', {
    extend: 'testApp.model.Base',

    fields: [
        'name', 'email', 'phone', 'roleId'
    ],

    proxy: {
        reader: {
            rootProperty: 'items'
        }
    }
});
