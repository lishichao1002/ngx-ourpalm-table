import {AfterViewInit, Component, ContentChild, Input, TemplateRef} from "@angular/core";
import {OurpalmTableColumn} from "../../model/ourpalm-table-column";

@Component({
    selector: 'ourpalm-table-column',
    template: ` `
})
export class OurpalmTableColumnComponent implements AfterViewInit {

    @Input()
    column: OurpalmTableColumn;

    @ContentChild(TemplateRef)
    template: TemplateRef<any>;

    @ContentChild('header', {read: TemplateRef})
    headerTemplate: TemplateRef<any>;

    @ContentChild('row', {read: TemplateRef})
    rowTemplate: TemplateRef<any>;

    ngAfterViewInit() {
        this.template = this.rowTemplate || this.template;
    }

}