/**
 * Created by amyshkovets on 5/27/2019.
 */
({
    refreshView: function (component ,event,helper ){
        var selectedObject = component.get("v.objectNew");
        var listField = component.get("v.selectedField");
        helper.viewData(component, selectedObject, listField  );

    },

    createNew : function(component, event, helper) {
        var selectedObject =component.get("v.objectNew");
        var listField = component.get("v.selectedField");
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": selectedObject,
            "navigationLocation":"LOOKUP",
            "panelOnDestroyCallback": function(event) {
            }
        });
        createRecordEvent.fire();
    },
    calcScore : function(component, event, helper) {

        var args = event.getParam("arguments");
        var fields = args.fields;
        var selectedObject = args.selectedObject;
        component.set("v.fields", fields);
        component.set("v.selectedObject", selectedObject);
        component.set("v.objectNew", selectedObject);
        var list =[];
        var columns =[];
        for (var i = 0; i < fields.length; i++) {
            list.push(fields[i]);
            var item = {
                "label":   fields[i],
                "fieldName":   fields[i],
                "sortable": true
            };
            columns.push(item);
        }
        var itemDelete= {type: "button", typeAttributes:  {
                label: 'delete',
                name: 'delete',
                title: 'delete',
                disabled: false,
                value: 'delete',
                iconPosition: 'left'
            }};
        var itemEdit= {type: "button", typeAttributes:  {
                label: 'edit',
                name: 'edit',
                title: 'edit',
                disabled: false,
                value: 'edit',
                iconPosition: 'left'
            }};
        columns.push(itemDelete);
        columns.push(itemEdit);
        var listField=  list.join();
        component.set("v.selectedField",listField);
        component.set("v.columns", columns);
        helper.viewData(component, selectedObject, listField );

    },

    updateColumnSorting: function (component, event, helper) {
        component.set('v.isLoading', true);

        setTimeout(function() {
            var fieldName = event.getParam('fieldName');
            var sortDirection = event.getParam('sortDirection');
            component.set("v.sortedBy", fieldName);
            component.set("v.sortedDirection", sortDirection);
            helper.sortData(component, fieldName, sortDirection);
            component.set('v.isLoading', false);
        }, 0);
    },
    handleRowAction: function (component, event, helper) {
      var action = event.getParam( 'action');
      var row = event.getParam('row');
      component.set("v.recordId", row.Id);
      switch (action.name) {
          case 'edit':
              helper.editRecord(component, row , event);
              break;
         case 'delete':
             helper.removeBook(component, row);
             break;
           default:
               break;
        }
    },


})