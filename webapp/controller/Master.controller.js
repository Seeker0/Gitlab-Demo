sap.ui.define([
	"hello/controller/Base.controller"
], function (Controller) {

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
	onInit: function () {
		sap.m.MessageToast.show("Hello!! :)");
	},

	});
});
