Ext.define('textApp.view.personnelList.PersonnelListController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.personnellist',
    requires: [
        'textApp.view.personnelDialog.PersonnelDialog'
    ],

    onSelectionChange(grid, selected){
        this.getViewModel().set('hasSelection', !selected.length);
    },

    onContainerClick(grid, event){
        grid.getSelectionModel().deselectAll();
    },

    onInsertButtonClick(){
        // Ext.create('textApp.view.personnelDialog.PersonnelDialog');
        const record = this.getView().getStore().getModel().create();
        this.createPersonnelDialog(record);
    },

    onEditButtonClick(){
        const selection = this.getView().getSelection();
        this.createPersonnelDialog(selection[0]);
    },

    onDeleteButtonClick(){
        const deleted = this.getView().getSelection();
        const names = deleted.map(record => record.get('name')).join(', ');
        Ext.Msg.show({
            title: 'Delete?',
            message: `Delete "${names}"?`,
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: button => {
                if(button === 'yes'){
                    this.delete(deleted);
                }
            }
        });
    },

    createPersonnelDialog(record){
        Ext.create({
            xtype: 'personneldialogwindow',
            autoShow: true,
            record: record,
            listeners: {
                submit: 'onPersonnelDialogWindowSubmit',
                scope: this
            }
        });
    },

    onPersonnelDialogWindowSubmit(personnelDialogWindow, record){
        let action = record.phantom ? 'insert' : 'update';
        this[action](personnelDialogWindow, record).then(() => {
            personnelDialogWindow.close();
        }).catch(err => {
            Ext.Msg.alert(err.message);
        });
    },

    insert(personnelDialogWindow, record){
        return new Ext.Promise((resolve, reject) => {
            record.save({
                success: resolve,
                failure(record, operation){
                    const err = new Error('Error occured');
                    err.operation = operation;
                    reject(err);
                }
            });
        }).then(record => {
            this.getView().getStore().add(record);
        });
    },

    update(personnelDialogWindow, record){
        const store = this.getView().getStore();
        store.add(record);
        return new Ext.Promise((resolve, reject) => {
            store.sync({
                success: resolve,
                failure(batch, options){
                    const err = new Error('Error occured');
                    err.batch = batch;
                    err.options = options;
                    reject(err);
                }
            });
        });
    },

    delete(record){
        this.getView().getStore().remove(record);
    }

});