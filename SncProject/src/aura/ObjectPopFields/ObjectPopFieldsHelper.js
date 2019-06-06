/**
 * Created by amyshkovets on 5/27/2019.
 */
({
    init: function (component, event, helper) {

    var object = component.get("v.obj.DeveloperName");
    var action = component.get("c.showFields");
    action.setParams({
        "selectedObject": object
        });
    action.setCallback(this, function(response) {
        var result = response.getReturnValue();
        var size =  result.length;
        var items = [];
        for (var i = 0; i < size; i++) {
            var item = {
                "label":   result[i].label,
                "value":   result[i].name,
                "type": result[i].type
            };
            items.push(item);
        }
        component.set("v.options", items);
        component.set("v.values", []);
        component.set("v.fields",result.label);
    });
    $A.enqueueAction(action);

    },
})