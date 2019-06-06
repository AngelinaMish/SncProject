/**
 * Created by amyshkovets on 6/4/2019.
 */

@isTest
private class  TestClass {

//    @testSetup static void setup() {
//        List<Account> testAccts = new List<Account>();
//        for(Integer i=0;i<5;i++) {
//            testAccts.add(new Account(Name = 'TestAcct'+i));
//        }
//        insert testAccts;
//    }

    @isTest static void showFieldsTest() {

        List<Describer.Field>  listField = Describer.showFields('Account');
        System.assertEquals('Id',listField[0].name);


    }

    @isTest static void fetchObjectTest() {

        ObjectPageController.ObjectPagerWrapper obj = ObjectPageController.fetchObject(1,1);
        System.assertEquals(1,obj.pageSize);



    }

//    @isTest static void fetchAccountsTest() {
//
//        List<sObject> rec1 = RcordViewController.fetchAccounts('Account', 'Id');
//        String query = 'SELECT Id FROM  Account LIMIT 1';
//        sObject obj1 = Database.query(query);
//        System.assertEquals(obj1,rec1[0]);
//        List<sObject> rec2 = RcordViewController.fetchAccounts('Account', 'bred');
//        List<sObject> obj2 = new List<sObject>();
//        System.assertEquals(obj2,rec2);
//    }

    @isTest static void TestDeleteAccountRecord() {

        Account[] accts = TestDataFactory.createAccounts(1 );
        List <String> right  = new List < String > ();
        List <String> wrong  = new List < String > ();

        Test.startTest();

        List<String> rightdel  = RcordViewController.deleteRecords( accts[0].Id , 'Account');
        List<String> wrongdel  = RcordViewController.deleteRecords( accts[0].Id , 'Account');

        Test.stopTest();

//        wrong.add(accts[0].Id);
        right.add('successful delete contact');
        System.assertEquals(right,rightdel);
        wrong.add('unsuccessful delete contact');
        System.assertEquals(wrong,wrongdel);

    }

    @isTest static void TestFetchAccountRecord() {

        Account[] accts = TestDataFactory.createAccounts(1 );
        List<sObject> obj2 = new List<sObject>();

        Test.startTest();

        List<sObject> rec1 = RcordViewController.fetchAccounts('Account', ' Id ,  Name ');
        List<sObject> rec2 = RcordViewController.fetchAccounts('Account', 'bred');

        Test.stopTest();

        System.assertEquals(accts[0], rec1[0]);
        System.assertEquals(obj2,rec2);

    }


//
//    @isTest static void  deleteRecordsTest() {
//
//
//        List <String> right  = new List < String > ();
//        List <String> wrong  = new List < String > ();
//        String query = 'SELECT Id FROM  Account LIMIT 1';
//        sObject obj1 = Database.query(query);
//        right.add(obj1.Id);
//        wrong.add(obj1.Id);
//        List<String> rightdel  = RcordViewController.deleteRecords( obj1.Id , 'Account');
//        right.add('successful delete contact');
//        System.assertEquals(right,rightdel);
//        List<String> wrongdel  = RcordViewController.deleteRecords( obj1.Id , 'Account');
//        wrong.add('unsuccessful delete contact');
//        System.assertEquals(wrong,wrongdel);
//
//
//    }

}