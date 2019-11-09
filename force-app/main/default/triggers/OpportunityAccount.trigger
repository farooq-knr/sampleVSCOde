trigger OpportunityAccount on Opportunity (before insert,after update,after insert) {
    if(Trigger.isInsert && Trigger.isBefore){
        opportunityHandler.checkDuplicates(Trigger.new);
    } 
    if((Trigger.isInsert || Trigger.isUpdate) && Trigger.isAfter){
        opportunityHandler.updateParent(Trigger.new);
    }
}