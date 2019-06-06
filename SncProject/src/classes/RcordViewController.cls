/**
 * Created by amyshkovets on 5/27/2019.
 */

public with sharing class RcordViewController {

        @AuraEnabled
        public static   List<sObject>  fetchAccounts ( String selectedObject, String selectedFields) {

            String query = 'SELECT ' + selectedFields + ' FROM ' + selectedObject + ' LIMIT 2000';
            try {
                List<sObject> recList =  Database.query(query);

                return recList;
            }
            catch(Exception e) {
                System.debug('The following exception has occurred: ' + e.getMessage());
                List<sObject> recList = new List<sObject>() ;

                return recList;

            }
        }



    @AuraEnabled
    public static List<String> deleteRecords( Id row, String selectedObject)
    {
        List <String> oErrorMsg = new List < String > ();
        String query = 'SELECT Id   FROM ' + selectedObject + ' WHERE Id =: row';
        try{
            sObject doomedAccts = Database.query(query);
            oErrorMsg.add(doomedAccts.Id);
            Database.DeleteResult DR_Dels = Database.delete(doomedAccts);
            oErrorMsg.add('successful delete contact');
            return oErrorMsg;
        }
        catch(Exception e) {
            oErrorMsg.add('unsuccessful delete contact');
            return oErrorMsg;
        }

    }



}