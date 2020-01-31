Ext.define('testApp.model.Base', {
    extend: 'Ext.data.Model',

    schema: {
    	namespace: 'testApp.model',
        proxy: {
	        type: 'memory',
	        reader: {
	            type: 'json'
	        }
	    }
    },
});
