Ext.define('testApp.view.personnelList.PersonnelList', {
    
    extend: 'Ext.grid.Panel',
    xtype: 'personnellist',

    title: 'Personnel',

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
