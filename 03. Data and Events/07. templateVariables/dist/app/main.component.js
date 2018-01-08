"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.onKeyUp = function (email) {
        console.log('Value: ' + email);
    };
    MainComponent.prototype.onKeyUpTeste = function ($event) {
        console.log('Value: ' + $event.target.value);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            template: "\n        <input #email (keyup.enter)=\"onKeyUp(email.value)\" />\n        <input (keyup.enter)=\"onKeyUpTeste($event)\" />\n    "
        })
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
/*
    Ambos tem o mesmo efeito porém através do Template Variable podemos capturar qualquer informação do elemento
*/
