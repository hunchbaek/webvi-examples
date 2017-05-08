"use strict";JQX("jqx-numeric-text-box",function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"template",value:function(){return'<div id="container" class="jqx-container"><div id="radixDisplayButton" class="jqx-unselectable jqx-numeric-text-box-component jqx-numeric-text-box-radix-display"></div><input id="input" type="text" class="jqx-numeric-text-box-component" placeholder="[[placeholder]]" readonly="[[readonly]]" disabled="[[disabled]]"><div id="unitDisplay" class="jqx-unselectable jqx-numeric-text-box-component jqx-numeric-text-box-unit-display"></div><div id="spinButtonsContainer" class="jqx-numeric-text-box-component jqx-spin-buttons-container"><jqx-repeat-button initial-delay="0" delay="75" id="upButton" class="jqx-spin-button"><div class="jqx-arrow jqx-arrow-up"></div></jqx-repeat-button><jqx-repeat-button initial-delay="0" delay="75" id="downButton" class="jqx-spin-button"><div class="jqx-arrow jqx-arrow-down"></div></jqx-repeat-button></div><ul id="popup" class="jqx-hidden jqx-popup"><li id="popupItem2" class="jqx-list-item" data-value="2"></li><li id="popupItem8" class="jqx-list-item" data-value="8"></li><li id="popupItem10" class="jqx-list-item" data-value="10"></li><li id="popupItem16" class="jqx-list-item" data-value="16"></li></ul></div>'}},{key:"ready",value:function(){babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"ready",this).call(this);var e=this;e._checkMissingModules(),e._numericProcessor=new JQX.Utilities.NumericProcessor(e,"inputFormat"),e._radixPrefixes={10:"d",2:"b",8:"o",16:"x"},e._regex={2:new RegExp(/^[0-1]*$/),8:new RegExp(/^[0-7]*$/),10:new RegExp(/^[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?$/),16:new RegExp(/^[0-9a-f]*$/i)},e._regexSpecial={nan:new RegExp(/^(nan)$/i),inf:new RegExp(/^-?inf(inity)?$/i),nonNumericValue:new RegExp(/^((nan)|(-?inf(inity)?))$/i),exaValue:new RegExp(/^[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[E][+\-]\d*)?i$/)},e._initialPopupOptionsSet=!1,"left"===e.spinButtonsPosition&&e.$.container.insertBefore(e.$.spinButtonsContainer,e.$.radixDisplayButton),e._setInitialComponentDisplay(),e._initialAdjustments(),e._initialized=!0}},{key:"val",value:function(e,t){var n=this,i="object"===(void 0===e?"undefined":babelHelpers.typeof(e))&&0===Object.keys(e).length;return void 0===e||i!==!1?n.value:(e=e.toString(),e.toUpperCase()===n.value.toString().toUpperCase()?e:(void 0===t?n._validate(!1,e):n._setValue(e),void(n._programmaticValueIsSet=!0)))}},{key:"focus",value:function(){this.$.input.focus()}},{key:"_checkMissingModules",value:function(){var e=this,t=[];try{BigNumber}catch(e){t.push("jqxmath.js")}void 0===JQX.Utilities.NumberRenderer&&t.push("jqxnumberrenderer.js"),void 0===JQX.Utilities.NumericProcessor&&t.push("jqxnumericprocessor.js");try{NIComplex}catch(e){t.push("niComplex.js")}t.length>0&&e.error(e.localize("missingReference",{files:t.join(", ")}))}},{key:"_updateSpinButtonsStepObject",value:function(){var e=this;e._spinButtonsStepObject=e._numericProcessor.createDescriptor(e.spinButtonsStep,!0)}},{key:"_setInitialComponentDisplay",value:function(){var e=this;e.spinButtons===!1&&e.$spinButtonsContainer.addClass("jqx-hidden"),e.radixDisplay===!1&&e.$radixDisplayButton.addClass("jqx-hidden"),e.showUnit===!1&&e.$unitDisplay.addClass("jqx-hidden")}},{key:"_initialAdjustments",value:function(){var e=this;e._radixNumber=e._getRadix(e.radix),e._wordLengthNumber=e._numericProcessor.getWordLength(e.wordLength),e._unsigned="u"===e.wordLength.charAt(0),e._validatePropertyCompatibility(),e._numericProcessor.validateMinMax(!0,!0),e._updateSpinButtonsStepObject(),e._validate(!0),e._cachedInputValue=e.$.input.value,e.$.radixDisplayButton.innerHTML=e._radixPrefixes[e._radixNumber],e.$.unitDisplay.innerHTML=e.unit}},{key:"_validatePropertyCompatibility",value:function(){var e=this;"integer"!==e.inputFormat&&(10!==e._radixNumber&&e.error(e.localize("integerOnly",{property:"radix"})),e.radixDisplay&&e.error(e.localize("integerOnly",{property:"radixDisplay"})),"int32"!==e.wordLength&&e.error(e.localize("integerOnly",{property:"wordLength"}))),null===e.significantDigits&&null===e.precisionDigits?e.significantDigits=8:null!==e.significantDigits&&null!==e.precisionDigits&&e.error(e.localize("significantPrecisionDigits"))}},{key:"_validate",value:function(e,t){var n=this,i=void 0;if(e)i=n.value;else if(void 0===t){if((i=n.$.input.value)===n.value&&n._programmaticValueIsSet!==!0)return}else i=t;var a=n._numericProcessor.prepareForValidation(e,t,i);if(void 0!==a){var r=n._numericProcessor.createDescriptor(a.value,!0,!0,void 0===t,e||void 0!==t,a.enteredComplexNumber);if(e){n._number=r;var o=n._renderValue(r);n.value=r.toString(),n.$.input.value=o}else n._updateValue(r);n._programmaticValueIsSet=!1}}},{key:"_handleNonNumericValue",value:function(e,t,n){var i=this;if("integer"!==i.inputFormat){if(i._regexSpecial.nan.test(n))return void i._handleNaN(e);if(i._regexSpecial.inf.test(n))return void i._handleInfinity(e,t,n)}if(e){var a=i._numericProcessor.createDescriptor(0);i._number=i._validateRange(a);var r=i._renderValue(i._number);i.value=i._number.toString(),i.$.input.value=r}else if(void 0===t)i.$.input.value=i._cachedInputValue;else{var o=i._number.toString();i.value!==o&&(i.value=o)}}},{key:"_handleNaN",value:function(e){var t=this;if(t.$.input.value="NaN",e)t.value=NaN,t._number=NaN;else{var n=t.value;"NaN"!==n.toString()&&(t.value=NaN,t._number=NaN,t._cachedInputValue="NaN",t._triggerChangeEvent&&t.$.fireEvent("change",{value:NaN,oldValue:n,radix:t._radixNumber}))}}},{key:"_handleInfinity",value:function(e,t,n){var i=this,a=void 0,r=void 0;if("-"===n.charAt(0)?(a="-Inf",r=-(1/0)):(a="Inf",r=1/0),"-Inf"===a&&i.min===-(1/0)||"Inf"===a&&i.max===1/0||void 0!==t)if(e)i.value=r,i._number=r,i.$.input.value=a;else{var o=i.value;n!==a&&(i.$.input.value=a),o!==r&&(i.value=r,i._number=r,i._cachedInputValue=a,i._triggerChangeEvent&&i.$.fireEvent("change",{value:r,oldValue:o,radix:i._radixNumber}))}else"-Inf"===a?i._validate(!1,i.min):i._validate(!1,i.max)}},{key:"_validateRange",value:function(e){var t=this;return e=t._numericProcessor.validate(e,t._minObject,t._maxObject)}},{key:"propertyChangedHandler",value:function(e,n,i){babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"propertyChangedHandler",this).call(this,e,n,i);var a=this,r=a.$.input;if(i!=n)switch(e){case"enableMouseWheelAction":case"disabled":case"placeholder":case"readonly":break;case"value":var o=i.toString(),u=n.toString();u!==o&&(u.toUpperCase()===o.toUpperCase()&&(a.value=n),a._validate(!1,o),a._programmaticValueIsSet=!0);break;case"radix":"integer"===a.inputFormat?a._changeRadix(i):a.error(a.localize("integerOnly",{property:"radix"}));break;case"min":case"max":if(null!==i&&(a["_"+e+"IsNull"]=!1),a._numericProcessor.validateMinMax("min"===e,"max"===e),a._regexSpecial.nonNumericValue.test(a.value)===!1){var l=a._numericProcessor.createDescriptor(a._number),s=a._validateRange(l);a._updateValue(s)}break;case"spinButtons":i?a.$spinButtonsContainer.removeClass("jqx-hidden"):a.$spinButtonsContainer.addClass("jqx-hidden");break;case"spinButtonsStep":a._updateSpinButtonsStepObject();break;case"significantDigits":case"precisionDigits":"precisionDigits"===e&&"integer"===a.inputFormat&&a.error(a.localize("noInteger",{property:e})),"significantDigits"===e&&null!==a.precisionDigits?a.precisionDigits=null:"precisionDigits"===e&&null!==a.significantDigits&&(a.significantDigits=null);var p=a._renderValue(a._number);r.value=p;break;case"decimalSeparator":var c=a._discardDecimalSeparator(r.value,n),d=a._applyDecimalSeparator(c);r.value=d;break;case"spinButtonsPosition":"left"===i?a.$.container.insertBefore(a.$.spinButtonsContainer,a.$.radixDisplayButton):a.$.container.insertBefore(a.$.spinButtonsContainer,a.$.popup);break;case"wordLength":if("integer"===a.inputFormat){if(a._wordLengthNumber=a._numericProcessor.getWordLength(i),a._unsigned="u"===i.charAt(0),a._numericProcessor.validateMinMax(!0,!0),a._regexSpecial.nonNumericValue.test(a.value)===!1){var m=a._validateRange(new BigNumber(a._number));a._updateValue(m)}}else a.error(a.localize("integerOnly",{property:"wordLength"}));break;case"radixDisplay":i?("integer"!==a.inputFormat&&a.error(a.localize("integerOnly",{property:"radixDisplay"})),a.$radixDisplayButton.removeClass("jqx-hidden")):a.$radixDisplayButton.addClass("jqx-hidden");break;case"inputFormat":a._changeInputFormat(n,i);break;case"showUnit":i?a.$unitDisplay.removeClass("jqx-hidden"):a.$unitDisplay.addClass("jqx-hidden");break;case"unit":a.$.unitDisplay.innerHTML=i;break;case"scientificNotation":var v=a._renderValue(a._number);r.value=v;break;case"language":case"messages":a._initialPopupOptionsSet=!1}else"string"!=typeof i&&"string"==typeof n&&(a[e]=n);a._cachedInputValue=r.value}},{key:"_changeInputFormat",value:function(e,t){var n=this;if(n._numericProcessor=new JQX.Utilities.NumericProcessor(n,"inputFormat"),"complex"===e)return void n._changeFromComplexInputFormat(t);"integer"===t&&"floatingPoint"===e&&n._changeFromIntegerToFloatingPointInputFormat(),"floatingPoint"===t&&"integer"===e&&n._changeFromFloatingPointToIntegerInputFormat(),"complex"===t&&n._changeToComplexInputFormat(e),n._updateSpinButtonsStepObject(),n._inputFormatChangedFlag=!0,n._validate(void 0,n._number.toString()),n._inputFormatChangedFlag=!1}},{key:"_changeFromComplexInputFormat",value:function(e){var t=this;t.spinButtonsStep=t._spinButtonsStepObject.realPart,t._updateSpinButtonsStepObject(),"integer"===e?(t.min===-(1/0)?t.min=null:t.min=t._minObject.realPart,t.max===1/0?t.max=null:t.min=t._maxObject.realPart):(t.min!==-(1/0)&&(t.min=t._minObject.realPart),t.max!==1/0&&(t.max=t._maxObject.realPart)),t._numericProcessor.validateMinMax(!0,!0),t._inputFormatChangedFlag=!0,t._validate(void 0,t._number.realPart.toString()),t._inputFormatChangedFlag=!1}},{key:"_changeFromIntegerToFloatingPointInputFormat",value:function(){var e=this;e.min===-(1/0)&&(e.min=null),e.max===1/0&&(e.max=null),e._numericProcessor.validateMinMax(!0,!0)}},{key:"_changeFromFloatingPointToIntegerInputFormat",value:function(){var e=this;e.radixDisplay&&(e.radixDisplay=!1,e.$radixDisplayButton.addClass("jqx-hidden")),10!==e._radixNumber&&(e.radix=10,e._radixNumber=10),e._minIsNull?(e.min=-(1/0),e._minObject=-(1/0)):e._minObject=parseFloat(e._minObject.toString()),e._maxIsNull?(e.max=1/0,e._maxObject=1/0):e._maxObject=parseFloat(e._maxObject.toString())}},{key:"_changeToComplexInputFormat",value:function(e){var t=this;"integer"===e&&(t.radixDisplay&&(t.radixDisplay=!1,t.$radixDisplayButton.addClass("jqx-hidden")),t._minIsNull&&(t.min=null),t._maxIsNull&&(t.max=null)),t._numericProcessor.validateMinMax(t.min!==-(1/0),t.max!==1/0)}},{key:"_updateValue",value:function(e){var t=this,n=t.$.input.value,i=e.toString(t._radixNumber,t._wordLengthNumber);if(n!==i||n!==t._cachedInputValue){var a=t._renderValue(e),r=t.value,o=t._regexSpecial.nonNumericValue.test(i);if(t.$.input.value=a,t._cachedInputValue=a,o&&a!==r||o===!1&&t._numericProcessor.compare(e,t._number)||t._inputFormatChangedFlag){t._number=t._numericProcessor.createDescriptor(e);var u=t._number.toString();t.value=u,t._setPopupOptions(),t._triggerChangeEvent&&t.$.fireEvent("change",{value:u,oldValue:r,radix:t._radixNumber})}}}},{key:"_setValue",value:function(e){var t=this;t.value=e,t.$.input.value=e,t._number=t._numericProcessor.createDescriptor(e,!0),t._setPopupOptions()}},{key:"_changeRadix",value:function(e){var t=this,n=t._getRadix(e),i=t.radix;if(n!==t._radixNumber){t.radix=e,t._radixNumber=n;var a=t.$.input,r=a.value,o=t._number.toString(n,t._wordLengthNumber),u=t._renderValue(o);a.value=u,t.$.radixDisplayButton.innerHTML=t._radixPrefixes[n],t.$.fireEvent("radixChange",{radix:e,oldRadix:i,displayedValue:u,oldDisplayedValue:r})}}},{key:"_openRadix",value:function(){var e=this;e.radixDisplay!==!1&&(e._initialPopupOptionsSet===!1&&(e._setPopupOptions(),e._initialPopupOptionsSet=!0),e.$radixDisplayButton.addClass("jqx-numeric-text-box-pressed-component"),e.$popup.addClass("jqx-shown"),e._opened=!0,e.$.fireEvent("open",{popup:e.$.popup}))}},{key:"_closeRadix",value:function(){var e=this;e.radixDisplay!==!1&&(e.$radixDisplayButton.removeClass("jqx-numeric-text-box-pressed-component"),e.$popup.removeClass("jqx-shown"),e._opened=!1,e.$.fireEvent("close",{popup:e.$.popup}))}},{key:"_isLeftButtonPressed",value:function(e){var t=0===e.buttons||1===e.which;return 1===e.detail.buttons||t}},{key:"_isIncrementOrDecrementAllowed",value:function(){var e=this;return!e.disabled&&!e.readonly&&e._regexSpecial.nonNumericValue.test(e.$.input.value)===!1}},{key:"_upButtonClickHandler",value:function(e){var t=this;t._isLeftButtonPressed(e)&&t._isIncrementOrDecrementAllowed()&&(t.$upButton.addClass("jqx-numeric-text-box-pressed-component"),t._incrementOrDecrement("add"))}},{key:"_downButtonClickHandler",value:function(e){var t=this;t._isLeftButtonPressed(e)&&t._isIncrementOrDecrementAllowed()&&(t.$downButton.addClass("jqx-numeric-text-box-pressed-component"),t._incrementOrDecrement("subtract"))}},{key:"_documentMousedownHandler",value:function(e){var t=this;t._opened&&!t.contains(e.target)&&t._closeRadix()}},{key:"_documentMouseupHandler",value:function(){var e=this;e.$upButton.removeClass("jqx-numeric-text-box-pressed-component"),e.$downButton.removeClass("jqx-numeric-text-box-pressed-component")}},{key:"_radixDisplayButtonClickHandler",value:function(){var e=this;e.popupEnabled&&!e.disabled&&(e._opened?e._closeRadix():e._openRadix())}},{key:"_popupItemClickHandler",value:function(e){if(e.target.classList.contains("jqx-list-item")){var t=this,n=e.target.getAttribute("data-value");t._changeRadix(parseInt(n,10)),t._closeRadix()}}},{key:"_inputKeydownHandler",value:function(e){var t=this,n=e.charCode?e.charCode:e.which;40===n&&t._isIncrementOrDecrementAllowed()?t._incrementOrDecrement("subtract"):38===n&&t._isIncrementOrDecrementAllowed()&&t._incrementOrDecrement("add")}},{key:"_inputKeyupHandler",value:function(e){var t=this;13===e.keyCode?(t._triggerChangeEvent=!0,t._validate(),t._triggerChangeEvent=!1,t.$.input.blur()):27===e.keyCode&&(t.$.input.value=t._cachedInputValue),e.stopPropagation(),e.preventDefault()}},{key:"_inputBlurHandler",value:function(){var e=this;e._suppressBlurEvent===!0?e._suppressBlurEvent=!1:(e._triggerChangeEvent=!0,e._validate(),e._triggerChangeEvent=!1),e.radixDisplay&&e.$radixDisplayButton.removeClass("jqx-numeric-text-box-focused-component"),e._opened&&e._closeRadix(),e.spinButtons&&e.$spinButtonsContainer.removeClass("jqx-numeric-text-box-focused-component"),e.showUnit&&e.$unitDisplay.removeClass("jqx-numeric-text-box-focused-component")}},{key:"_inputFocusHandler",value:function(){var e=this;e.spinButtons&&e.$spinButtonsContainer.addClass("jqx-numeric-text-box-focused-component"),e.radixDisplay&&e.$radixDisplayButton.addClass("jqx-numeric-text-box-focused-component"),e.showUnit&&e.$unitDisplay.addClass("jqx-numeric-text-box-focused-component"),e._opened&&e._closeRadix()}},{key:"_inputChangeHandler",value:function(e){e.stopPropagation(),e.preventDefault()}},{key:"_inputMousewheelHandler",value:function(e){var t=this;t.$.input===document.activeElement&&t.enableMouseWheelAction&&t._isIncrementOrDecrementAllowed()&&(e.stopPropagation(),e.preventDefault(),e.wheelDelta>0?t._incrementOrDecrement("add"):t._incrementOrDecrement("subtract"))}},{key:"_getRadix",value:function(e){switch(e.toString()){case"10":case"decimal":return 10;case"2":case"binary":return 2;case"8":case"octal":return 8;case"16":case"hexadecimal":return 16}}},{key:"_setPopupOptions",value:function(){var e=this;if(e.radixDisplay!==!1){var t=e._wordLengthNumber;e.$.popupItem2.innerHTML=e._number.toString(2,t)+" ("+e.localize("binary")+")",e.$.popupItem8.innerHTML=e._number.toString(8,t)+" ("+e.localize("octal")+")",e.$.popupItem10.innerHTML=e._renderValue(e._number.toString(10,t),!0)+" ("+e.localize("decimal")+")",e.$.popupItem16.innerHTML=e._number.toString(16,t)+" ("+e.localize("hexadecimal")+")"}}},{key:"_incrementOrDecrement",value:function(e){var t=this;if(t.$.input===document.activeElement&&(t._suppressBlurEvent=!0),t.$.input.value===t._cachedInputValue&&!t._programmaticValueIsSet||(t._triggerChangeEvent=!0,t._validate(),t._triggerChangeEvent=!1,t._isIncrementOrDecrementAllowed()!==!1)){var n=t._numericProcessor.incrementDecrement(t._number,e,t._spinButtonsStepObject),i=t._validateRange(n);t._triggerChangeEvent=!0,t._updateValue(i),t._triggerChangeEvent=!1}}},{key:"_toBigNumberDecimal",value:function(e,t){var n=this,i=void 0;return 10===t?i=new BigNumber(e):n._isNegative(e,t)===!1?n._wordLengthNumber<64?(i=parseInt(e,t),i=new BigNumber(i)):i=n._getBigNumberFrom64BitBinOctHex(e,t):(i=n._getNegativeDecimal(e,t),i=new BigNumber(i)),i}},{key:"_isNegative",value:function(e,t){var n=this,i=e.length,a=e.charAt(0).toLowerCase();if(2===t)return i===n._wordLengthNumber&&"1"===a;if(8!==t)return i===n._wordLengthNumber/4&&["8","9","a","b","c","d","e","f"].indexOf(a)!==-1;switch(n._wordLengthNumber){case 8:return 3===i&&("2"===a||"3"===a);case 16:return 5===i&&"1"===a;case 32:return 11===i&&("2"===a||"3"===a);case 64:return 22===i&&"1"===a}}},{key:"_getBigNumberFrom64BitBinOctHex",value:function(e,t){for(var n=new BigNumber(0),i=e.length-1;i>=0;i--){var a=new BigNumber(parseInt(e.charAt(i),t));n=n.add(a.multiply(new BigNumber(t).pow(e.length-1-i)))}return n}},{key:"_getNegativeDecimal",value:function(e,t){var n=this,i=e;if(8===t){for(var a=[],r=0;r<e.length;r++){for(var o=parseInt(e.charAt(r),8).toString(2);3!==o.length;)o="0"+o;a.push(o)}for(i=a.join("");"0"===i.charAt(0);)i=i.slice(1)}else if(16===t){for(var u=[],l=0;l<e.length;l++){for(var s=parseInt(e.charAt(l),16).toString(2);4!==s.length;)s="0"+s;u.push(s)}i=u.join("")}var p=i.replace(/0/g,"a");return p=p.replace(/1/g,"b"),p=p.replace(/a/g,"1"),p=p.replace(/b/g,"0"),this._wordLengthNumber<64?p=(parseInt(p,2)+1)*-1:(p=n._getBigNumberFrom64BitBinOctHex(p,t),p=p.add(1).negate()),p}},{key:"_discardDecimalSeparator",value:function(e,t){var n=this;if(void 0===t&&(t=n.decimalSeparator),"."!==t&&e!==1/0&&e!==-(1/0)){var i=new RegExp(t,"g");return e.replace(i,".")}return e}},{key:"_applyDecimalSeparator",value:function(e){var t=this;return"string"!=typeof e&&(e=e.toString()),"."!==t.decimalSeparator&&(e=e.replace(/\./g,t.decimalSeparator)),e}},{key:"_renderValue",value:function(e,t){var n=this;return t=10===n._radixNumber||t===!0,e=n._numericProcessor.render(e,t),"."!==n.decimalSeparator&&t&&(e=n._applyDecimalSeparator(e)),e}}],[{key:"properties",get:function(){return{decimalSeparator:{value:".",type:"string"},enableMouseWheelAction:{value:!1,type:"boolean"},inputFormat:{value:"integer",allowedValues:["integer","floatingPoint","complex"],type:"string"},max:{value:null,type:"any"},messages:{value:{en:{binary:"BIN",octal:"OCT",decimal:"DEC",hexadecimal:"HEX",missingReference:"jqxNumericTextBox: Missing reference to {{files}}.",integerOnly:"jqxNumericTextBox: The property {{property}} can only be set when inputFormat is integer.",noInteger:"jqxNumericTextBox: the property {{property}} cannot be set when inputFormat is integer.",significantPrecisionDigits:"jqxNumericTextBox: the properties significantDigits and precisionDigits cannot be set at the same time."}},type:"object",extend:!0},min:{value:null,type:"any"},placeholder:{value:"",type:"string"},popupEnabled:{value:!1,type:"boolean"},precisionDigits:{value:null,type:"number?"},radix:{value:10,allowedValues:[2,8,10,16,"binary","octal","decimal","hexadecimal"],type:"any"},radixDisplay:{value:!1,type:"boolean"},readonly:{value:!1,type:"boolean"},scientificNotation:{value:!1,type:"boolean"},showUnit:{value:!1,type:"boolean"},significantDigits:{value:null,type:"number?"},spinButtons:{value:!1,type:"boolean"},spinButtonsPosition:{value:"right",allowedValues:["left","right"],type:"string"},spinButtonsStep:{value:"1",type:"any"},unit:{value:"kg",type:"string"},value:{value:"0",type:"any"},wordLength:{value:"int32",allowedValues:["int8","uint8","int16","uint16","int32","uint32","int64","uint64"],type:"string"}}}},{key:"listeners",get:function(){return{"input.focus":"_inputFocusHandler","input.blur":"_inputBlurHandler","input.keydown":"_inputKeydownHandler","input.keyup":"_inputKeyupHandler","input.change":"_inputChangeHandler","input.mousewheel":"_inputMousewheelHandler","upButton.click":"_upButtonClickHandler","downButton.click":"_downButtonClickHandler","document.mousedown":"_documentMousedownHandler","document.mouseup":"_documentMouseupHandler","popup.click":"_popupItemClickHandler","radixDisplayButton.click":"_radixDisplayButtonClickHandler"}}}]),t}(JQX.BaseElement));
//# sourceMappingURL=jqxnumerictextbox.js.map
