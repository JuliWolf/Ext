Ext.define('MyApp.core.view.login.LogIn', {

    extend: 'Ext.window.Window',
    controller: 'login',
    viewModel: 'login',
    requires: [
        'MyApp.core.view.login.LoginController', 
        'MyApp.core.login.LoginModel'
    ],

    title: 'Аутентификация',
    closable: false,
    bodyPadding: 10,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items:[
            {
                xtype: 'textfield',
                allowBlank: false,
                fieldLabel: 'User Name',
                name: 'username',
                emptyText: 'User name',
                listeners: {
                    change: 'onChangeForm'
                }
            },
            {
                xtype: 'textfield',
                allowBlank: false,
                fieldLabel: 'Password',
                name: 'password',
                emptyText: 'Password',
                inputType: 'password',
                listeners: {
                    change: 'onChangeForm'
                }
            },
            {
                xtype:'checkbox',
                fieldLabel: 'Remember me',
                name: 'remember'
            },
            {
                xType: 'displayfield',
                hideEmptyLabel: false,
                vulue: 'Enter any non-blank password'
            }
        ],
        buttons: [
            {
                text: 'Clear',
                listeners: {
                    click: 'onClearClick'
                },
                bind: {
                    disabled: '{isFormEmpty}',
                }
            },
            {xtype: 'tbfill'},
            {
                text:'Login' ,
                formBind: true,
                listeners: {
                    click: 'onLoginClick'
                }
            }
        ]
    },

    
});
