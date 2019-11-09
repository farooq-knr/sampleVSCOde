({
	onTriggerInternalServerError : function(cmp, event, helper) {
        console.log('entered');
        let action = cmp.get('c.triggerInternalError');
        debugger;
        action.setCallback(this,function(res){
            let state = res.getState();
            if(state == "ERROR"){
                let errors = res.getError();
                if(errors && Array.isArray(errors) && errors.length > 0){
                    console.error(errors[0].message);
                }else{
                    console.error("Unknown Errors");
                }                
            }
        });
        $A.enqueueAction(action);
		console.log('exit');
	},
    onTriggerBasicServerError : function(cmp,event,helper){
        let action = cmp.get('c.triggerBasicAuraHandledError');
        action.setCallback(this,function(res){
            let state = res.getState();
            if(state == 'ERROR'){
                let errors = res.getError();
                if(errors && Array.isArray(errors) && errors.length >0){
                    console.error(errors[0].message);
                }else{
                    console.error(errors[0].message);
                    console.log("Unkown Errors");
                }
            }            
        });
        $A.enqueueAction(action);
    },
    onTriggerCustomServerError: function(cmp,event,helper){
        let action = cmp.get('c.triggerCustomAuraHandledError');
        action.setCallback(this,function(res){
            let state = res.getState();
            if(state == 'ERROR'){
                let errors = res.getError();
                if(errors && Array.isArray(errors) && errors.length > 0){
                    let errorData = JSON.parse(errors[0].message);
                    console.error(errorData.name +" (code "+ errorData.code +"): "+ errorData.message);

                }else{
                    console.log("Unkown Errors");
                }
            }
        });
        $A.enqueueAction(action);
    },
    onTriggerUnhandledClientError: function(cmp,event,helper){
        throw new Error('Unhandled client error');
    },
    onTriggerBasicClientError: function(cmp,event,helper){
        try{
            let value = helper.doSomethingThatFails();
        }catch(e){
            console.error(e);
        }
    },
    onTriggerCustomClientError: function(cmp,event,helper){
        console.log('entered');
        function MyCustomError(name, message, code){
            this.name = name;
            this.message = message;
            this.code = code;
        }
        MyCustomError.prototype = Object.create(Error.prototype);
        MyCustomError.prototype.constructor = MyCustomError;
        try{
            throw new MyCustomError('MyCustomError','This is due to some reason',456);
        }catch(e){
                if(e instanceof MyCustomError){
                    console.error(e.name+'--'+e.code+'--'+e.message);
                }else{
                    console.log(e.message);
                }
        }
        console.log('exit');
    } 

})