Ext.define('MyApp.model.Personnel', {
    extend: 'Ext.data.Model',
    
    fields: [
        'name', 'email', 'phone'
    ],

    proxy: {
        type: 'ajax',
        url: '/app/model/Personnel.json',
        render: {
            type: 'json'
        },
        pageParam: false,
        startParam: false,
        limitParam: false
    }
});