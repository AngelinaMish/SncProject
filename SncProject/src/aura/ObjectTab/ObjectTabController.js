/**
 * Created by amyshkovets on 5/24/2019.
 */
({
    doInit: function(component, event, helper) {

        var page = component.get("v.page") || 1;
        var recordToDisply = 20;
        helper.getObjects(component, page, recordToDisply);
    },

    navigate: function(component, event, helper) {
        var page = component.get("v.page") || 1;
        var direction = event.getSource().get("v.label");
        var recordToDisply = 20;
        page = direction === "Previous Page" ? (page - 1) : (page + 1);
        helper.getObjects(component, page, recordToDisply);

    },

    onSelectChange: function(component, event, helper) {
        var page = 1;
        var recordToDisply = 20;
        helper.getObjects(component, page, recordToDisply);
    },
    handleComponentEvent : function(component, event) {
        var fields = event.getParam("fields");
        var selectedObject = event.getParam("selectedObj");
        component.set("v.fields", fields);
        component.set("v.selectedObject", selectedObject);
        component.set("v.truthy",true);
        var reccomp  = component.find("records");
        reccomp.getScoreMethod(fields,selectedObject);
    },

})