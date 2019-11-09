({
	handleCmpEvent : function(cmp, event) {
		var componentName = cmp.getName().substr(1);
        var phase = event.getPhase();
        console.log(componentName +' - event handled ('+ phase +')');
        var propogatingToggle = cmp.find('propagationToggle').get('v.value');
        if(propogatingToggle === 'Stop-'+phase){
            console.log(componentName+'(Stop Propogating phase -'+phase+')');
            event.stopPropagation();
        }
        if(propogatingToggle === 'Phase-'+phase){
            console.log(componentName+'(Stop Propogating phase -'+phase+')');
            event.pause();
            cmp.set('v.pausedCmpEvent',event);
        }
	},
    resumeEvent : function(cmp){
        var event = cmp.get('v.pausedCmpEvent');
        console.log(component.getName().substr(1) +' - resuming event propagation ('+ event.getPhase() +')');
		event.resume();
        cmp.set('v.pausedCmpEvent',null);
    }
})