sap.ui.define([
	"hello/controller/Base.controller"
], function (Controller) {

	"use strict";

	/**
	* Blank controller
	* @class Blank
	*/
	return Controller.extend("hello.controller.Blank", {

	// ********************************************************* //
	// lifecycle
	// ******************************************************* //

	/**
	 * Runs on Controller "init" event
	 * @return   {[type]}
 	 * @memberof Blank
	 */
	onInit: function () {
		sap.m.MessageToast.show("Hello!! :)");
	},

	});
});
