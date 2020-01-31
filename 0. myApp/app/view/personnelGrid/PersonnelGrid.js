Ext.define('MyApp.view.personnelGrid.PersonnelGrid', {

	extend: 'Ext.grid.Panel',
	xtype: 'personnelGrid',
    requires: [
        'MyApp.view.personnelGrid.PersonnelGridModel',
        'MyApp.view.personnelGrid.PersonnelGridController'
    ],
    viewModel: 'personnelGrid',
    controller: 'personnelGrid',
    xtype: 'array-grid',

    title: 'Personnel',

    bind: '{personnelStore}',

    columnLines: false,
    selType: 'checkboxmodel',

    tbar: [
        {xtype: 'tbfill'},
        {
            xtype: 'button',
            text: 'Remove',
            handler: 'onRemoveClick'
        },
        {
            xtype: 'button',
            text: 'Add',
            listeners: {
                click: 'onAddClick'
            }
        },
        {
            xtype: 'button',
            text: 'Refresh',
            listeners: {
                click: 'onRefreshClick'
            }
        }
    ],

    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Email',
            dataIndex: 'email',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Phone',
            dataIndex: 'phone',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }
    ]
});