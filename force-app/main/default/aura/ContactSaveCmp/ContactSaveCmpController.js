({
	onSave : function(cmp, evt, helper) {
        console.log('entered');
        helper.handleRequest(cmp,'saveContact', {}, function(res){
			console.log(res);
        });
	}
})