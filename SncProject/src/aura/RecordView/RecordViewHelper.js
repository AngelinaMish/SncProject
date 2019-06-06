/**
 * Created by amyshkovets on 5/27/2019.
 */
({ viewData: function (component, selectedObject, listField ){

        var action = component.get("c.fetchAccounts");

        action.setParams({
            "selectedObject": selectedObject ,
            "selectedFields": listField
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.recordList", response.getReturnValue());
            }
            else {
            }
        });
        $A.enqueueAction(action);
    },

    editRecord: function (component, row ,event ) {

        var editRecordEvent = $A.get("e.force:editRecord");

        editRecordEvent.setParams({
            "recordId": row.Id
        });
        editRecordEvent.fire();

    },

    sortData: function (component, fieldName, sortDirection) {
        var data = component.get("v.recordList");
        var reverse = sortDirection !== 'asc';
        data = Object.assign([],
            data.sort(this.sortBy(fieldName, reverse ? -1 : 1))
        );
        component.set("v.recordList", data);
    },
    sortBy: function (field, reverse, primer) {
        var key = primer
            ? function(x) { return primer(x[field]) }
            : function(x) { return x[field] };
        return function (a, b) {
            var A = key(a);
            var B = key(b);
            return reverse * ((A > B) - (B > A));
        };
    },
    removeBook: function (component, row ) {

        var data = component.get("v.recordList");
        var rowIndex = data.indexOf(row);
        var action = component.get("c.deleteRecords");
        var selectedObject = component.get ("v.objectNew");
        data.splice(rowIndex, 1);
        component.set("v.recordList", data);
        action.setParams({
            "row": row.Id ,
            "selectedObject" : selectedObject
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {

            }
            else {

            }
        });
        $A.enqueueAction(action);
    }
})