"use strict";
// Import statements
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = void 0;
const aws_dynamodb_1 = require("aws-cdk-lib/aws-dynamodb");
const aws_cdk_lib_1 = require("aws-cdk-lib");
// Defination Statements
/*
class HelperDyTb {
    
    constructor() {
        
      }
    
    createTable(this: Construct, id_: string, key: string, sort: string) {
        const table = new Table(
            this,
            id_,
            {
                partitionKey: { name: key, type: AttributeType.STRING },          // Partition Key for the table
                sortKey: {name: sort, type: AttributeType.STRING },            // Sort Key for the table
                replicationRegions: ['us-east-1'],
                contributorInsightsEnabled: true,            // Enable cloudwatch contributer insights
                removalPolicy: RemovalPolicy.DESTROY          // Set removal policy
            }
            
        )
        return table
    }
}

export const helperDyTb = new HelperDyTb()
*/
function createTable(V, id_, key, sort) {
    const table = new aws_dynamodb_1.Table(V, id_, {
        partitionKey: { name: key, type: aws_dynamodb_1.AttributeType.STRING },
        sortKey: { name: sort, type: aws_dynamodb_1.AttributeType.STRING },
        replicationRegions: ['us-east-1'],
        contributorInsightsEnabled: true,
        removalPolicy: aws_cdk_lib_1.RemovalPolicy.DESTROY // Set removal policy 
    });
}
exports.createTable = createTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyRHluYW1vVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWxwZXJEeW5hbW9UYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0JBQW9COzs7QUFFcEIsMkRBQWdFO0FBQ2hFLDZDQUE0QztBQUc1Qyx3QkFBd0I7QUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF5QkU7QUFFRixTQUFnQixXQUFXLENBQUMsQ0FBWSxFQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsSUFBWTtJQUMzRSxNQUFNLEtBQUssR0FBRyxJQUFJLG9CQUFLLENBQ25CLENBQUMsRUFDRCxHQUFHLEVBQ0g7UUFDSSxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSw0QkFBYSxDQUFDLE1BQU0sRUFBRTtRQUN2RCxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSw0QkFBYSxDQUFDLE1BQU0sRUFBRTtRQUNsRCxrQkFBa0IsRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUNqQywwQkFBMEIsRUFBRSxJQUFJO1FBQ2hDLGFBQWEsRUFBRSwyQkFBYSxDQUFDLE9BQU8sQ0FBVSxzQkFBc0I7S0FDdkUsQ0FFSixDQUFBO0FBQ0wsQ0FBQztBQWJELGtDQWFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHN0YXRlbWVudHNcblxuaW1wb3J0IHsgVGFibGUsIEF0dHJpYnV0ZVR5cGUgfSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZHluYW1vZGInO1xuaW1wb3J0IHsgUmVtb3ZhbFBvbGljeSB9IGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuXG4vLyBEZWZpbmF0aW9uIFN0YXRlbWVudHNcbi8qXG5jbGFzcyBIZWxwZXJEeVRiIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgXG4gICAgICB9XG4gICAgXG4gICAgY3JlYXRlVGFibGUodGhpczogQ29uc3RydWN0LCBpZF86IHN0cmluZywga2V5OiBzdHJpbmcsIHNvcnQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCB0YWJsZSA9IG5ldyBUYWJsZShcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBpZF8sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFydGl0aW9uS2V5OiB7IG5hbWU6IGtleSwgdHlwZTogQXR0cmlidXRlVHlwZS5TVFJJTkcgfSwgICAgICAgICAgLy8gUGFydGl0aW9uIEtleSBmb3IgdGhlIHRhYmxlXG4gICAgICAgICAgICAgICAgc29ydEtleToge25hbWU6IHNvcnQsIHR5cGU6IEF0dHJpYnV0ZVR5cGUuU1RSSU5HIH0sICAgICAgICAgICAgLy8gU29ydCBLZXkgZm9yIHRoZSB0YWJsZSBcbiAgICAgICAgICAgICAgICByZXBsaWNhdGlvblJlZ2lvbnM6IFsndXMtZWFzdC0xJ10sXG4gICAgICAgICAgICAgICAgY29udHJpYnV0b3JJbnNpZ2h0c0VuYWJsZWQ6IHRydWUsICAgICAgICAgICAgLy8gRW5hYmxlIGNsb3Vkd2F0Y2ggY29udHJpYnV0ZXIgaW5zaWdodHNcbiAgICAgICAgICAgICAgICByZW1vdmFsUG9saWN5OiBSZW1vdmFsUG9saWN5LkRFU1RST1kgICAgICAgICAgLy8gU2V0IHJlbW92YWwgcG9saWN5IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHRhYmxlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaGVscGVyRHlUYiA9IG5ldyBIZWxwZXJEeVRiKClcbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJsZShWOiBDb25zdHJ1Y3QsaWRfOiBzdHJpbmcsIGtleTogc3RyaW5nLCBzb3J0OiBzdHJpbmcpe1xuICAgIGNvbnN0IHRhYmxlID0gbmV3IFRhYmxlKFxuICAgICAgICBWLFxuICAgICAgICBpZF8sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhcnRpdGlvbktleTogeyBuYW1lOiBrZXksIHR5cGU6IEF0dHJpYnV0ZVR5cGUuU1RSSU5HIH0sICAgICAgICAgIC8vIFBhcnRpdGlvbiBLZXkgZm9yIHRoZSB0YWJsZVxuICAgICAgICAgICAgc29ydEtleToge25hbWU6IHNvcnQsIHR5cGU6IEF0dHJpYnV0ZVR5cGUuU1RSSU5HIH0sICAgICAgICAgICAgLy8gU29ydCBLZXkgZm9yIHRoZSB0YWJsZSBcbiAgICAgICAgICAgIHJlcGxpY2F0aW9uUmVnaW9uczogWyd1cy1lYXN0LTEnXSxcbiAgICAgICAgICAgIGNvbnRyaWJ1dG9ySW5zaWdodHNFbmFibGVkOiB0cnVlLCAgICAgICAgICAgIC8vIEVuYWJsZSBjbG91ZHdhdGNoIGNvbnRyaWJ1dGVyIGluc2lnaHRzXG4gICAgICAgICAgICByZW1vdmFsUG9saWN5OiBSZW1vdmFsUG9saWN5LkRFU1RST1kgICAgICAgICAgLy8gU2V0IHJlbW92YWwgcG9saWN5IFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIClcbn1cbiJdfQ==