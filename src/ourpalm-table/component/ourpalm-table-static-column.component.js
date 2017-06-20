"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ourpalm_table_column_1 = require("../model/ourpalm-table-column");
var OurpalmTableStaticColumnComponent = (function () {
    function OurpalmTableStaticColumnComponent() {
    }
    OurpalmTableStaticColumnComponent.prototype.ngOnInit = function () {
        this.column = new ourpalm_table_column_1.OurpalmTableColumn(this.column);
    };
    return OurpalmTableStaticColumnComponent;
}());
__decorate([
    core_1.Input()
], OurpalmTableStaticColumnComponent.prototype, "column");
__decorate([
    core_1.ContentChild(core_1.TemplateRef)
], OurpalmTableStaticColumnComponent.prototype, "template");
OurpalmTableStaticColumnComponent = __decorate([
    core_1.Component({
        selector: 'ourpalm-table-column',
        template: ""
    })
], OurpalmTableStaticColumnComponent);
exports.OurpalmTableStaticColumnComponent = OurpalmTableStaticColumnComponent;
var OurpalmTableColumnTemplateRenderer = (function () {
    function OurpalmTableColumnTemplateRenderer() {
    }
    OurpalmTableColumnTemplateRenderer.prototype.onCheckBoxChange = function () {
        if (this.row.__checked__ && this.table.singleSelect) {
            this.table.rows.forEach(function (row) { return row.__checked__ = false; });
            this.row.__checked__ = true;
        }
    };
    return OurpalmTableColumnTemplateRenderer;
}());
__decorate([
    core_1.Input()
], OurpalmTableColumnTemplateRenderer.prototype, "row");
__decorate([
    core_1.Input()
], OurpalmTableColumnTemplateRenderer.prototype, "index");
__decorate([
    core_1.Input()
], OurpalmTableColumnTemplateRenderer.prototype, "table");
__decorate([
    core_1.Input()
], OurpalmTableColumnTemplateRenderer.prototype, "column");
OurpalmTableColumnTemplateRenderer = __decorate([
    core_1.Component({
        selector: 'ourpalm-table-columnTemplateRenderer',
        template: "\n        <!-- \u6392\u5E8F\u5217 -->\n        <ng-container *ngIf=\"column.sort\">\n            <ng-template [ngTemplateOutlet]=\"column.__template__\" [ngOutletContext]=\"{'$implicit': column, '$row': row}\"></ng-template>\n        </ng-container>\n        <!-- checkbox\u5217 -->\n        <ng-container *ngIf=\"column.checkbox\">\n            <input type=\"checkbox\" [(ngModel)]=\"row.__checked__\" (change)=\"onCheckBoxChange()\">\n        </ng-container>\n        <!-- \u5E8F\u53F7\u5217 -->\n        <ng-container *ngIf=\"column.rownumbers\">\n            {{index+1}}\n        </ng-container>\n        <!-- \u6B63\u5E38\u5217 -->\n        <ng-container *ngIf=\"!column.sort && !column.checkbox && !column.rownumbers\">\n            <ng-template [ngTemplateOutlet]=\"column.__template__\" [ngOutletContext]=\"{'$implicit': column, '$row': row}\"></ng-template>\n        </ng-container>\n    "
    })
], OurpalmTableColumnTemplateRenderer);
exports.OurpalmTableColumnTemplateRenderer = OurpalmTableColumnTemplateRenderer;
