({
	handleCmpEvent : function(component, event, helper) {
        console.log('entry');
		var messageValue = event.getParam('message');
        alert('child==>'+messageValue);
	},
})