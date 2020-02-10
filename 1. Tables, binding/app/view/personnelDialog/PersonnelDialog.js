Ext.define('textApp.view.personnelDialog.PersonnelDialog', {

    extend: 'Ext.window.Window',
    xtype: 'personneldialogwindow',
    controller: 'personneldialogwindow',
    viewModel: 'personneldialogwindow',
    requires: [
        'testApp.view.personnelDialog.PersonnelDialogForm',
        'textApp.view.personnelDialog.PersonnelDialogController',
        'testApp.view.personnelDialog.PersonnelDialogModel'
    ],

    /**
     * @event submit
     * @param {textApp.view.personnelDialog.PersonnelDialog} personnelDialog
     * @param {testApp.model.Personnel} record
     */

    config: {
      record: null
    },

    updateRecord(record){
        this.getViewModel().set('record', record.phantom ? record : record.copy());
    },

    width: 400,
    modal: true,
    resizable: false,

    items: {
        xtype: 'personneldialogform'
    }

});