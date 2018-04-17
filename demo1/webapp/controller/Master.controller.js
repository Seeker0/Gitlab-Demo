sap.ui.define(["hello/controller/Base.controller"], function(Controller) {
  "use strict";

  /**
   * Master controller
   * @class Master
   */
  return Controller.extend("hello.controller.Master", {
    // ********************************************************* //
    // lifecycle
    // ******************************************************* //

    /**
     * Runs on Controller "init" event
     * @return   {[type]}
     * @memberof Master
     */
    onInit: function() {
      sap.m.MessageToast.show("Hello!! :)");
      var page1 = new sap.m.Page("page1", {
        title: "Hello World",
        showNavButton: false,
        content: new sap.m.Button({
          text: "Go to Page 2",
          press: function() {
            // navigate to page2
            app.to("page2");
          }
        })
      });

      app.addPage(page1);
      app.placeAt("content");
    }
  });
});
