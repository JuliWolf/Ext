Ext.define('testApp.view.personnelDialog.PersonnelDialogForm', {

    extend: 'Ext.form.Panel',
    xtype: 'personneldialogform',

    layout: 'anchor',
    bodyPadding: 10,

    defaults: {
        xtype: 'textfield',
        anchor: '100%'
    },

    fieldDefaults: {
        labelAlign: 'top',
        margin: 0
    },

    items: [
        {
            fieldLabel: 'Name',
            allowBlank: false,
            name: 'name'
        },
        {
            fieldLabel: 'Email',
            name: 'email'
        },
        {
            fieldLabel: 'Phone',
            name: 'phone'
        },
        {
            fieldLabel: 'Role',
            name: 'roleId',
            xtype: 'combo',
            queryMode: 'remote',
            displayField: 'name',
            editable: false,
            valueField: 'id',
            bind: {
                store: '{roleStore}'
            }
        }
    ],

    buttons: [
        {
            handler: 'onSubmitButtonClick',
            text: 'Submit'
            // bind: {
            //     disabled: '{submitButtonDisabled}'
            // }
        },
        {
            text: 'Cancel',
            handler: 'onCancelButtonClick'
        }
    ]
});