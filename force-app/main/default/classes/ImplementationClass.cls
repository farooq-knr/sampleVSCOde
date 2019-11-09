public class ImplementationClass {
    public static void testCustomSetting(){
        Id profileId = [Select id from Profile where Name='System Administrator'].Id;
		Account__c	ac = Account__c.getInstance(profileId);
        map<String,String> alphabets = new map<String,String>{'a' => 'apple', 'b' => 'ball', 'c' => 'cat'};
        list<string> colors =new List<String>{'red','red','blue'};
        System.debug('colors list'+ colors);
        set<String> color =new set<String>{'red','red','blue'};
         System.debug('colors list'+ color);
        System.debug('map colors'+ alphabets);
        List<Student__mdt> studentmetadata = [Select MasterLabel,DeveloperName from Student__mdt];
        System.debug('student Metadate=>'+studentmetadata[0].DeveloperName);
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');
        request.setMethod('get');
        
        HttpResponse response = http.send(request);
        if(response.getStatusCode() == 200){
            System.debug('response==>'+response.getBody());
        }
    }
}