trigger reduce_Duplicate on Contact (before insert) {
	
    Set<String> conNames = new Set<String>();
    for(Contact cont: Trigger.new){
		conNames.add(cont.LastName);        
    }
	List<Contact> con = [Select Id,LastName from Contact where Name In: conNames];
    Map<String,contact> conMap = new Map<String,contact>();
    for(Contact co:con){
        conMap.put(co.LastName,co);
    }
    System.debug('map=>'+conMap);
    for(Contact co: Trigger.new){
        if(conMap.containsKey(co.LastName)){
            co.LastName.addError('Dublicate entry');
        }
        System.debug('co==>'+co);
    }
     
    
}