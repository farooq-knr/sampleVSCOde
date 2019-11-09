public class accountContactController {
    @AuraEnabled
    public static boolean saveAccountContact(String account,String contact){
        try{
            List<Contact> con = new List<Contact>();
            accountWrapper accWrap = (accountWrapper)JSON.deserialize(account,accountWrapper.class);
            Account acc = new Account(Name = accWrap.Name, Phone = accWrap.phone,BillingStreet = accWrap.billingStreet);
            insert acc;
			List<contactWrapper> conWrapList = (List<contactWrapper>)JSON.deserialize(contact,List<contactWrapper>.class);
            System.debug('conWrapList==>'+conWrapList);
            for(contactWrapper conWrap : conWrapList){
                con.add(new contact(firstName = conWrap.firstName,lastName = '-', phone = conwrap.phone, Email = conWrap.Email,AccountId = acc.Id));
            }
            insert con;
        }catch(Exception e){
            
        }
        return false;
    }
    class accountWrapper{
        String name{get;set;}
        String phone{get;set;}
        String billingStreet{get;set;}
        public accountWrapper(Account acc){
			acc.Name = name;
			acc.phone = phone;
			acc.billingStreet = billingStreet;             
        }
    }
    class contactWrapper{
        String firstName{get;set;}
        String phone{get;set;}
        String Email{get;set;}
        public contactWrapper(Contact con){
            con.firstName = firstName;
            con.Phone = phone;
            con.Email =Email;
            
        }
    }

}