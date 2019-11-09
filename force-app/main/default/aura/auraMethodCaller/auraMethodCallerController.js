({
	callAuraMethodServerTrip : function(component, event, helper) {
        var childCmp = component.find("child");
        childCmp.echo(function(result) {
            console.log("callback for aura:method was executed");
            console.log("result: " + result);
        });
    },
})