/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('testApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'testApp.view.main.MainController',
        'testApp.view.main.MainModel',
        'testApp.view.main.List',

        'testApp.view.teamList.TeamList',
        'testApp.view.personnelList.PersonnelList',
        'testApp.view.roleList.RoleList'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist',
            bind: {
                 store: '{personnelStore}'
            }
        }]
    }, {
        title: 'Teams',
        iconCls: 'fa-user',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [
            {
                reference: 'teamlistgrid',
                xtype: 'teamlist',
                bind: {
                    store: '{teamListStore}'
                },
                flex: 1
            },
            {
                xtype: 'personnellist',
                bind: {
                    store: '{teamlistgrid.selection.personnels}',
                    title: 'Участники команды №{teamlistgrid.selection.name}'
                },
                flex: 1
            }
        ]
    }, {
        title: 'Roles',
        iconCls: 'fa-users',
        items: [{
            xtype: 'rolelist',
            bind: {
                 store: '{roleStore}'
            }
        }]
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
