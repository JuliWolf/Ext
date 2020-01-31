Ext.define('testApp.view.roleList.RoleList', {

    extend: 'Ext.grid.Panel',
    xtype: 'rolelist',

    title: 'Roles',

    columns: [
        { text: 'Name',  dataIndex: 'name', flex: 1 }
    ]

});