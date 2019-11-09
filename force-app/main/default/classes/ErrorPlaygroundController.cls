public class ErrorPlaygroundController {
    @AuraEnabled
    public static void triggerInternalError(){
        Integer i = 10/0;
    }
    @AuraEnabled
    public static void triggerBasicAuraHandledError(){
        try{
            Integer i = 10/0;
        }catch(Exception e){
            throw new AuraHandledException('Basic error caused by '+e.getMessage());
        }
    }
    @AuraEnabled
    public static void triggerCustomAuraHandledError(){
        CustomAuraExceptionData  data = new CustomAuraExceptionData('MyCustomServerError','Some message about the error',123);
        throw new AuraHandledException(JSON.serialize(data));
        
    }
    

}