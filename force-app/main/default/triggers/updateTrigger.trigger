trigger updateTrigger on A__c (before update) {
    //Bringing all selected 
    List<c__c> c = [Select Phone_Number__c from c__c where b__r.a__c In: Trigger.new];

    System.debug('c==>'+Trigger.new);
    for(a__c a: Trigger.new){
        for(c__c c: c){
            c.Phone_Number__c = a.phone__c;
        }
    }
    update c;
}