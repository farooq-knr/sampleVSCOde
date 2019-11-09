({
	onSave : function(cmp, evt, helper) {
		var action = cmp.get('c.saveContact');
        action.setParams({'contact': cmp.get('v.contact')})
        action.setCallback(this,function(res){
            var state = res.getState();
            console.log(state);
            if(state=='SUCCESS'){
                var showToast = $A.get('e.force:showToast');
                showToast.setParams({type:'success',mode: 'dismissible',message:'Record saved successfully'}).fire();
            }else if(state=='ERROR'){
                var errors = res.getError();  
                debugger;
                var errorMessage =[];
                if(Array.isArray(errors) && errors.length > 0){
                    errors.forEach(function(error){
                        if(Array.isArray(error.pageErrors) && error.pageErrors){
                            error.pageErrors.forEach(function(pageError){
								errorMessage.push(pageError.message);                             
                            });                              
                        }
					});
				}
                if(errorMessage.length > 0){
                    var showToast = $A.get('e.force:showToast');
                    showToast.setParams({type:'warning',mode: 'dismissible',message: errorMessage.join(',')}).fire();
                }
                               
            }
        });
        $A.enqueueAction(action);
	},

})