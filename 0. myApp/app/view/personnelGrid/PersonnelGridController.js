/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.personnelGrid.PersonnelGridController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.personnelGrid',

    onRemoveClick: function(){
    	let elements = this.getView().getSelectionModel().getSelection();
    	this.getView().getStore().remove(elements);
    },

    onAddClick: function(){
    	let choosenElem = this.getView().getSelectionModel().getSelection()[0];
    	let view = this.getView();
    	let elemsLength = view.getStore().getCount();
    	let itemId;
    	if(choosenElem){
			itemId = view.getStore().getData().items.indexOf(choosenElem)*1+1;
    	}else{
    		itemId = elemsLength*1;
    	}
    	view.getStore().insert(itemId, {})
    },

    onRefreshClick: function() {
    	this.getView().getStore().reload();
    }

});
