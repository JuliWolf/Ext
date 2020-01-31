Ext.define('testApp.view.teamList.TeamList', {

    extend: 'Ext.grid.Panel',
    xtype: 'teamlist',

    title: 'Teams',

    columns: [
        { text: 'Name',  dataIndex: 'name', flex: 1 }
    ],

    listeners: {
    	select: 'onTeamListGridSelect'
    }

});