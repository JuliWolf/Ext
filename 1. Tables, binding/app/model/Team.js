Ext.define('testApp.model.Team', {

	extend: 'testApp.model.Base',

	fields: ['name'],

	hasMany: 'testApp.model.Personnel'
})