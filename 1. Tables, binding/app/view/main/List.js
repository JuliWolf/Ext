/**
 * This view is an example list of people.
 */
Ext.define('testApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    requires: ['Ext.grid.plugin.CellEditing', 'Ext.form.field.Text'],

    title: 'Personnel',

    columns: [
        { text: 'Name',  dataIndex: 'name', editor: 'textfield' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Role', dataIndex: 'roleId', flex: 1, editor: {
            xtype: 'combo',
            hideLabel: true,
            queryMode: 'remote',
            displayField: 'name',
            valueField: 'id',
            bind: {
                store: '{roleStore}'
            }
        },
        renderer: 'roleIdRender'}
    ],

    plugins: [{
        ptype: 'cellediting',
        clickToEdit: 1
    }]
});
