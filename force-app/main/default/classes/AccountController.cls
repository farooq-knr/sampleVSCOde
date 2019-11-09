public class AccountController{
    @AuraEnabled
    public static List <Account> fetchAccounts() {
        //Qyery 10 accounts
        List<Account> accList = [SELECT Id,Name,Industry,Phone,Website from Account LIMIT 10];
        //return list of accounts
        return accList;
    }
}