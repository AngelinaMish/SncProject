/**
 * Created by amyshkovets on 5/27/2019.
 */

public with sharing class Describer {


   @AuraEnabled
        public static List<Field> showFields( String  selectedObject) {

            List<Field> lstfieldname = new List<Field>();
            Map <String, Schema.SObjectField> fieldMap = Schema.getGlobalDescribe().get(selectedObject).getDescribe().fields.getMap();

            for(Schema.SObjectField sfield : fieldMap.Values())
            {
                Schema.describefieldresult dfield = sfield.getDescribe();
                Field field = new Field();
                field.name = dfield.getname();
                field.type = dfield.getType();
                field.label = dfield.getLabel();

                lstfieldname.add(field);
            }
            return lstfieldname;
        }
    public class Field
    {
        @AuraEnabled public String name {get; set;}
        @AuraEnabled public Schema.DisplayType type {get; set;}
        @AuraEnabled public String label {get; set;}
    }



}

