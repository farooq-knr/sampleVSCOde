public class saveContactInfo {
    @AuraEnabled
    public static String saveContact(Contact contact){
        String id;
            System.debug('contact'+contact);
            upsert contact;
            Id = contact.Id;
        return id;
    }
    
}