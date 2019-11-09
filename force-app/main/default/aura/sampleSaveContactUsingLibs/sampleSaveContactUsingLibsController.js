({
    doInit : function(component, event, helper) {
        var modelCmp = component.find('uiModel');
        modelCmp.open('New Contact');
    },
    onClose: function(component, event, helper) {
        var modelCmp = component.find('uiModel');
        modelCmp.closeModel(component);
    },
    onSave: function(component, event, helper) {
        var isValid = helper.isValid(component,'');
        console.log(isValid);
        if(isValid){
            helper.handleRequest(component,'saveContact', { contact : component.get('v.con') } ,function(res){
                if(res){
                    helper.success('Contact updated successfully');
                    var modelCmp = component.find('uiModel');
                    console.log(res);
                    modelCmp.set('v.isOpen',false);
                    var navEvt = $A.get("e.force:navigateToSObject");
                    navEvt.setParams({
                        "recordId": res,
                        "detail": "Contact"
                    });
                    navEvt.fire();
                }
            });
        }
    }
})