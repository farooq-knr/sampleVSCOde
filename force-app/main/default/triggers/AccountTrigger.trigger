//This Trigger is for copying values from parent to child
trigger AccountTrigger on Account (after update) {

    List<Account> acc = [Select Id,BillingStreet,(Select id,accountId,otherStreet from Contacts) from Account where Id in: Trigger.new];
    List<Contact> conList = new List<Contact>();
    for(Account ac: acc){
        for(Contact con: ac.contacts){
            System.debug('old vlaue'+Trigger.oldMap.get(ac.Id).billingStreet);
            System.debug('new vlaue'+ac.billingStreet);
        	if(Trigger.oldMap.get(ac.Id).billingStreet != ac.billingStreet){
            	con.otherStreet = ac.BillingStreet;
                conList.add(con);
        	}
        }
    }
    System.debug('con'+conList.size());
    update conList;
    
}