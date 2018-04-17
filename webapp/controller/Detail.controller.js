sap.ui.define([
	"hello/controller/Base.controller"
], function (Controller) {

	"use strict";

	/**
	* Detail controller
	* @class Detail
	*/
	return Controller.extend("hello.controller.Detail", {

	// ********************************************************* //
	// lifecycle
	// ******************************************************* //

	/**
	 * Runs on Controller "init" event
	 * @return   {[type]}
 	 * @memberof Detail
	 */
	onInit: function () {
		sap.m.MessageToast.show("Hello!! :)");
	},

	});
});
