Ext.define('MyApp.core.view.login.LoginController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {
        this.fireViewEvent('loginclose');
        this.getView().close();
    },

    onClearClick: function(){
    	this.getReferences().form.reset();
    },

    onChangeForm: function(el){
		let formInputs = this.getView().lookup('form').getValues();
		for(var i in formInputs){
			if(formInputs[i] != ''){
				this.getViewModel().set('isFormEmpty', false);
				return;
			}
	   }
		this.getViewModel().set('isFormEmpty', true);
    }
});
