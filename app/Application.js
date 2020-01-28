/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',

    requires: [
        'MyApp.core.view.login.LogIn',
        
        'MyApp.view.main.Main'
    ],
    launch: function(){
        const loginBind = Ext.create('MyApp.core.view.login.LogIn');
        loginBind.on('loginclose', 'onLoginClose', this);
    },

    onLoginClose: function(){
        this.setMainView('MyApp.view.main.Main');
    }


});
