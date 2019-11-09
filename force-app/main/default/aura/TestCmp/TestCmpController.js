({
	handleClick : function(component, event, helper) {
        var params ={};
        var h = helper;
        h.showToast('success', 'Case Saved Successfully',{});
	},
    edit : function(component, event, helper) {
    var editRecordEvent = $A.get("e.force:editRecord");
    editRecordEvent.setParams({
        "recordId": component.get("v.recordId")
    });
    editRecordEvent.fire();
}
})