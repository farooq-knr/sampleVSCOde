({
	handleCmpEventBubble : function(cmp, evt, help) {
		help.handleCmpEvent(cmp,evt);
	},
    handleCmpEventCapture: function(cmp, evt, help){
        help.handleCmpEvent(cmp, evt);
    },
    onResumeCmpEvent : function(cmp, evt, help){
        help.resumeEvent(cmp);
    },
    fireEvent : function(cmp, evt, help) {
        console.log('');
        console.log(cmp.getName().substr(1) +' - firing event');
        var myEvent = cmp.getEvent("cmpEvent");
        myEvent.fire();
	}
})