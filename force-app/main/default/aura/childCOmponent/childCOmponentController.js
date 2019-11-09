({
    buttonClicked : function(cmp, event, helper) {

        var cmpEvent = cmp.getEvent("cmpEvent");
        cmpEvent.setParams({"message":"This is from child"});
        cmpEvent.fire();
			console.log('exit');	
	}
})