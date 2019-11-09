public class OpportunityHandler {
    //To check the duplicates from the other opportunities
    public static void checkDuplicates(List<Opportunity> newOpp){
        Set<String> uniqueNames = new Set<String>();
        for(Opportunity opp: newOpp){
            uniqueNames.add(opp.Name);//Add all the unique names
        }
        //Collect from all existing values.
        List<Opportunity> oppList =[Select id,name from Opportunity where Name In: uniqueNames];
        //Collect all the opportunity names and opprotunities in a Map
        Map<String,Opportunity> mapOpp = new Map<String,Opportunity>();
        for(Opportunity opp: oppList){
            mapOpp.put(opp.Name,opp);
        }
        //Check with new values wheather exists on not.
        for(Opportunity op: newOpp){
            if(mapOpp.get(op.name) != null){
                op.addError('This Opportunity is duplicate');            
            }
        }   
    }
    public static void updateParent(List<opportunity> newOpp){
        List<Id> accIds = new List<Id>();
        //Collect all parent account Id's
        for(Opportunity opp: newOpp){
            accIds.add(opp.AccountId);
        }
        //Collect Parent-Child query for the Account.
        Map<Id,Account> accmap = new Map<Id,Account>([Select id,Rating,(Select Id,StageName from Opportunities) from Account where Id In: accIds]);
        //Check the new Child which are inserted updated and updated parent value.
        for(Opportunity opp: newOpp){
            if(opp.StageName == 'Closed Won'){
                accMap.get(opp.AccountId).Rating = 'Hot';
            }
        }
        update accmap.values();
    }
    
}