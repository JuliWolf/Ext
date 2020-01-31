/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('testApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    requires: [
        'testApp.model.Personnel', 
        'testApp.model.Role'
    ],

    data: {
        name: 'testApp',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    stores: {
    	personnelStore: {
		    model: 'testApp.model.Personnel',

		    autoload: true,
            autoSync: true,
	    	data: {
				items: [
					{name: 'Jean Luc', email: 'jenluc.picard@enterprise.com', phone: '555-111-1111'},
					{name: 'Worf', email: 'worf.moghasson@enterprise.com', phone: '555-222-2222'},
					{name: 'Doanna', email: 'doanna.troi@enterprise.com', phone: '555-333-3333'},
					{name: 'Data', email: 'mr.data@enterprise.com', phone: '555-444-4444'}
				]
            },
    	},
        teamListStore: {
            model: 'testApp.model.Team',

            autoload: true,
            data: [{
                name: 'Team1',
                personnels: [
                    {name: 'Jean Luc', email: 'jenluc.picard@enterprise.com', phone: '555-111-1111'},
                    {name: 'Worf', email: 'worf.moghasson@enterprise.com', phone: '555-222-2222'},
                    {name: 'Doanna', email: 'doanna.troi@enterprise.com', phone: '555-333-3333'},
                    {name: 'Data', email: 'mr.data@enterprise.com', phone: '555-444-4444'}
                ]
            },
            {
                name: 'Team2',
                personnels: [
                    {name: 'Jean Luc', email: 'jenluc.picard@enterprise.com', phone: '555-111-1111'},
                    {name: 'Worf', email: 'worf.moghasson@enterprise.com', phone: '555-222-2222'}
                ] 
            }]
        },
        roleStore: {
            model: 'testApp.model.Role',
            autoload: true,
            data: [
                    {id: 1, name: 'Scrum-master'},
                    {id: 2, name: 'Product owner'},
                    {id: 3, name: 'Developer'}
            ],
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
