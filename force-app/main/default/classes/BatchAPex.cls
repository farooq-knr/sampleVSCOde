global class BatchAPex implements Database.Batchable<sObject> {
    global Database.QueryLocator start(Database.BatchableContext bc){
        return Database.getQueryLocator('Select id from Account');
    }
    global void execute(Database.BatchableContext bc, List<sobject> scope){
        
    }
    global void finish(Database.BatchableContext bc){
        
    }

}