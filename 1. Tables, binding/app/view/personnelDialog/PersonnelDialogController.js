Ext.define('textApp.view.personnelDialog.PersonnelDialogController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.personneldialogwindow',

    onSubmitButtonClick(){
        this.getView().down('form').updateRecord();
        this.fireViewEvent('submit', this.getView().getRecord());
    },

    onCancelButtonClick(){
        this.getView().close();
    },

    afterRender(personnelDialogView){
        this.getView().down('form').loadRecord(personnelDialogView.getRecord());
    }
});