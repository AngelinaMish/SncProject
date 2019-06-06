/**
 * Created by amyshkovets on 5/24/2019.
 */
({

    getObjects: function(component, page, recordToDisply) {

        var action = component.get("c.fetchObject");
        action.setParams({
            "pageNumber": page,
            "recordToDisply": recordToDisply
        });
        var colomns = [];
        action.setCallback(this, function(response) {
            var result = response.getReturnValue();
            component.set("v.Objects", result.objects);
            component.set("v.page", result.page);
            component.set("v.total", result.total);
            component.set("v.pages", Math.ceil(result.total / recordToDisply));
            for(var i= 0; i <result.objects.length;i++) {
                var tmpobj=result.objects[i++];
                var tmp= {
                    "col1" :result.objects[i],
                    "col2" : tmpobj
                }
                i++;
                colomns.push(tmp);
            }
            component.set("v.rows", colomns);

        });

        $A.enqueueAction(action);
    }
})