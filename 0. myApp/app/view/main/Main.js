/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {

    extend: 'Ext.panel.Panel',
    viewModel: 'main',
    requires: [
        'MyApp.view.personnelGrid.PersonnelGrid',
        'MyApp.view.personnelGrid.PersonnelGrid'
    ],

    controller: {
        onPersonnelGridItemClick: function(gridView, record){
            this.getViewModel().set('personnelName', record.get('name'));
        }
    },

    layout: {
        type: 'vbox',
        align: 'stretch',
        padding: 5
    },

    items: [
        {
            xtype: 'personnelGrid',
            flex: 1,
            listeners: {
                itemClick: 'onPersonnelGridItemClick'
            }
        },
        {
            xtype: 'splitter'   // A splitter between the two child items
        },
        {
            html: 'Здесь будет расширенная инфа по выбранной записи',
            flex: 1,
            bind: {
                title: '{personnelName ? "Выбран " + personnelName : "Выберите персону"}'
            }
        }
    ]

});
