// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/on dojo/Evented dojo/_base/html dojo/_base/lang dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin".split(" "),function(a,c,d,b,e,f,g,h){return e([f,g,h,c],{templateString:"\x3cdiv\x3e\x3c/div\x3e",baseClass:"jimu-mobile-filter-popup",declaredClass:"jimu.dijit.MobileFilterPopup",filter:null,onClose:null,onOk:null,onCancel:null,postCreate:function(){this.inherited(arguments);this.filter.placeAt(this.domNode);this.own(a(this.filter,"apply",b.hitch(this,
function(){if("function"===typeof this.onOk)this.onOk();this.close()})));this.own(a(this.filter,"back",b.hitch(this,function(){if("function"===typeof this.onCancel)this.onCancel();this.close()})));d.place(this.domNode,document.body)},close:function(){if("function"===typeof this.onClose)this.onClose();this.destroy()}})});