export class RequestModel {
  requestId: string = "";
  sourceSystem: string = "";
  targetSystem: string = "";
  sourceDatabase: string = "";
  targetDatabase: string = "";
  type: string = "";
  tableMappingModel: Array<string> = new Array<string>();
  ddlFlag: boolean = false;
}