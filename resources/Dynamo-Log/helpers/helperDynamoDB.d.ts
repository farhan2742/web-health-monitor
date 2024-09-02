declare class HelperDynamoDB {
    client: any;
    putItemDB(this: HelperDynamoDB, tablename: string, item: {}): Promise<void>;
}
export declare const helperDynamoDB: HelperDynamoDB;
export {};
