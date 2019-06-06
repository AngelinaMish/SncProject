/**
 * Created by amyshkovets on 5/24/2019.
 */

public with sharing class ObjectPageController {

        @AuraEnabled
        public static ObjectPagerWrapper fetchObject(Decimal pageNumber ,Integer recordToDisply) {
            Integer pageSize = recordToDisply;
            Integer offset = ((Integer)pageNumber - 1) * pageSize;
            ObjectPagerWrapper obj =  new ObjectPagerWrapper();
            obj.pageSize = pageSize;
            obj.page = (Integer) pageNumber;
            obj.total = [SELECT count() FROM EntityDefinition];
            obj.objects = [SELECT MasterLabel, PluralLabel, DeveloperName, QualifiedApiName FROM EntityDefinition  Order by MasterLabel LIMIT :recordToDisply OFFSET :offset];
            return obj;
        }


            public class ObjectPagerWrapper {
            @AuraEnabled public Integer pageSize {get;set;}
            @AuraEnabled public Integer page {get;set;}
            @AuraEnabled public Integer total {get;set;}
            @AuraEnabled public List<sObject> objects {get;set;}
        }
    }
