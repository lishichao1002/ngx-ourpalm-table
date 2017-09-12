import { OurpalmTableColumn } from "./ourpalm-table-column";
import { OurpalmTableComponent } from "../component/ourpalm-table.component";
import { RowContextMenu } from "./row-content-menu";
export interface Page {
    currentPage?: number;
    pageSize?: number;
    total: number;
    rows: any[];
}
export declare class OurpalmTable {
    __columns?: OurpalmTableColumn[];
    tableClass: string;
    autoLoadData?: boolean;
    columns?: OurpalmTableColumn[];
    pagination?: boolean;
    singleSelect?: boolean;
    serverSort?: boolean;
    pageList?: number[];
    skipPage?: boolean;
    cacheKey?: string;
    cachePageSize?: boolean;
    cacheColumns?: boolean;
    pagePosition?: 'bottom' | 'top' | 'both';
    showRefreshBtn?: boolean;
    showSettingBtn?: boolean;
    enabledFloatThead?: boolean;
    floatTheadConfig?: any;
    checkOnSelect?: boolean;
    selectOnCheck?: boolean;
    ctrlSelect?: boolean;
    rowMenus: RowContextMenu[];
    loadData: (table: OurpalmTable, callback: (page: Page) => {}) => {};
    onClickRow: (rowIndex: number, rowData: any) => {};
    onDbClickRow: (rowIndex: number, rowData: any) => {};
    onClickCell: (rowIndex: number, cellIndex: number, rowData: any, column: OurpalmTableColumn) => {};
    onDbClickCell: (rowIndex: number, cellIndex: number, rowData: any, column: OurpalmTableColumn) => {};
    onHeaderCheckBoxChange: () => void;
    onRowCheckBoxChange: (rowData, rowIndex) => void;
    trackByFun: (rowIndex, rowData) => string;
    openSettings: boolean;
    total: number;
    rows: any[];
    currentPage: number;
    pageSize: number;
    tmpCurrentPage?: number;
    private tableComponent?;
    constructor(table?: OurpalmTable | Object);
    reflowTable(): void;
    onLoadSuccess(_page: Page): void;
    readonly allPage: number;
    readonly start: number;
    readonly end: number;
    getDisplayedColumns(): any[];
    getDisplayedRows(): any[];
    getSelectedRows(): any[];
    getCheckedRows(): any[];
    getSortColumns(): OurpalmTableColumn[];
    getOptions(): {
        currentPage: number;
        pageSize: number;
        pagination: boolean;
        singleSelect: boolean;
        serverSort: boolean;
        pageList: any[];
        skipPage: boolean;
        cacheKey: string;
        cachePageSize: boolean;
        cacheColumns: boolean;
        pagePosition: "bottom" | "top" | "both";
    };
    changeColumns(columns: OurpalmTableColumn[]): void;
    firstPage(): void;
    prePage(): void;
    nextPage(): void;
    lastPage(): void;
    refresh(): void;
    changePageSize(pageSize: number): void;
    gotoSkipPage(page: number): void;
    setPageData(page: Page): void;
    setOptions(table: OurpalmTable | Object): void;
    checkAll(): void;
    uncheckAll(): void;
    checkRow(index: number): void;
    uncheckRow(index: number): void;
    openSetting(): void;
    invokeLoadData(): void;
    setTableComponent(tableComponent: OurpalmTableComponent): void;
    reloadCacheColumns(): void;
    reloadCachePageSize(): void;
}
