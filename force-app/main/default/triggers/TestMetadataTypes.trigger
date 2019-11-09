trigger TestMetadataTypes on B__c (before insert) {
    for(Integer i=0;i<151;i++){
    	List<Student__mdt> stud = [Select DeveloperName,MasterLabel from Student__mdt];
    }

}