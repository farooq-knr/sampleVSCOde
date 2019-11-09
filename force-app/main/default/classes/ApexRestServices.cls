@RestResource(urlmapping='/Account/*')
global with sharing class ApexRestServices {
    @HttpGet
    global static List<Account> getAccount(){
        List<Account> acc = [Select id,Name from Account];
        return acc;
    }
    @HttpPost
    global static String doPost(String name,String phone, String accountNumber){
        Account acc = new Account(name = name,phone = phone, accountNumber = accountNumber);
        insert acc;
        return acc.Id;
        
    }
}