sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("sap.ui.demo.nav.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "sap.ui.demo.nav",
                    async: true,
                    manifest: true,
                },
            });
        },
    });
});
