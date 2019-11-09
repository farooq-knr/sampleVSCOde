global class BatchableApex implements Database.Batchable<sObject>{
    global Database.QueryLocator start(Database.BatchableContext bc){
        return null;
    }   
    global void execute(Database.BatchableContext bc, List<Account> scope){
        
    }
    global void finish(Database.BatchableContext bc){
        
    }
}