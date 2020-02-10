Ext.define('testApp.view.personnelList.PersonnelList', {
    
    extend: 'Ext.grid.Panel',
    xtype: 'personnellist',
    controller: 'personnellist',
    viewModel: 'personnellist',
    requires: [
        'Ext.Promise',
        'Ext.toolbar.Paging',
        'textApp.view.personnelList.PersonnelListController',
        'textApp.view.personnelList.PersonnelListModel'
    ],

    title: 'Personnel',

    selModel: {
        mode: 'multi'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    tbar: [
        {
            text: 'New employee',
            handler: 'onInsertButtonClick'
        },
        {
            text: 'Edit',
            handler: 'onEditButtonClick',
            bind: {
                disabled: '{hasSelection}'
            }
        },
        {
            text: 'Delete',
            handler: 'onDeleteButtonClick',
            bind: {
                disabled: '{hasSelection}'
            }
        }
    ],

    listeners: {
        selectionchange: 'onSelectionChange',
        containerclick: 'onContainerClick'
    },

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});
