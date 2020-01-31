/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyApp.view.personnelGrid.PersonnelGridModel', {
    extend: 'Ext.app.ViewModel',
	
    alias: 'viewmodel.personnelGrid',
    requires: ['MyApp.model.Personnel'],

    stores: {
    	personnelStore: {
    		model: 'MyApp.model.Personnel',
    		autoLoad: true,
    		autorSync: true
    	}
    }
});
