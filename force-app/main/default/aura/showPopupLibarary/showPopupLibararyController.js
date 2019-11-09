({
    handleShow: function(component, event, helper) {
        var modalBody;
        var modalFooter;
        $A.createComponents([[
            "c:lightningsaveARecord",
            {}],["c:modalFooter",{}]],
                           function(components, status, errorMessage) {
                               if (status === "SUCCESS") {
                                   modalBody = components[0];
                                   modalFooter = components[1];
                                   component.find("overlayLib").showCustomModal({
                                       header: "Contact  Edit",
                                       body: modalBody,
                                       footer:modalFooter,
                                       showCloseButton: true,
                                       cssClass: "mymodal"
                                   });
                               }
                           }
        );
    },
    handleCancel: function(component, event, helper) {
        console.log('entered again');
        component.find('overlayLib').notifyClose();
    }
});