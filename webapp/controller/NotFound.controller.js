sap.ui.define([
	"hello/controller/Base.controller"
], function (Controller) {

	"use strict";

	/**
	* NotFound controller
	* @class NotFound
	*/
	return Controller.extend("hello.controller.NotFound", {

	// ********************************************************* //
	// lifecycle
	// ******************************************************* //

	/**
	 * Runs on Controller "init" event
	 * @return   {[type]}
 	 * @memberof NotFound
	 */
	onInit: function () {
		sap.m.MessageToast.show("Hello!! :)");
	},

	});
});
