({
    doInit : function(c, e, h) {
        
    },
    save: function(c,e,h){
    	var contacts = c.get('v.contacts');
        var flag = false;
        contacts.forEach(function(contact){
                if(contact.name !='' && contact.phone !='' && contact.address !=''){
                    flag = true;
                }
            });
        if(!flag){
            alert('please add atleast one contact');
        }else{
            var accountInfo = c.get('v.account');
            debugger;
            console.log(typeof accountInfo);
            var action = c.get('c.saveAccountContact');
            action.setParams({account: JSON.stringify(accountInfo), contact: JSON.stringify(contacts)});
            action.setCallback(this,function(res){
            });
            $A.enqueueAction(action);
        }

    },
    addContact: function(c,e,h){
        var constWrap = c.get('v.contacts');
        var cont = Object.assign({},h.getContacts());
        constWrap.push(cont);
        c.set('v.contacts',constWrap);
        console.log('hello');
    }
})