/**
 * Created by amyshkovets on 5/24/2019.
 */
({
    openModel: function(component, event, helper) {
        component.set("v.isModalOpen", true);
        helper.init(component, event, helper);
    },

    closeModel: function(component, event, helper) {
        component.set("v.isModalOpen", false);
    },

    submitDetails: function(component, event, helper) {
        var  fields = component.get("v.values");
        var object = component.get("v.obj.DeveloperName");
        component.set("v.isModalOpen", false);
        var cmpEvent = component.getEvent("cmpEvent");
        cmpEvent.setParams({
            "fields" : fields,
            "selectedObj" : object
        });
        cmpEvent.fire();
    },

    handleChange: function (cmp, event) {
        var selectedOptionValue = event.getParam("value");
    },
})