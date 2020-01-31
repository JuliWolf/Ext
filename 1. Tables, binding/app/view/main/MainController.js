/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('testApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onTeamListGridSelect: function(selectionRowModel, record, index){
        console.log(record.personnels());
    },

    roleIdRender: function(roleId){
    	const roleStore = this.getViewModel().getStore('roleStore');
    	const role = roleStore.findRecord('id', roleId);
    	return role ? role.get('name') : '<не найдена роль>';
    }
});
