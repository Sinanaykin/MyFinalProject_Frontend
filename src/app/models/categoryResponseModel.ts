import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseModel extends ResponseModel{ //altta datayı verdik message ve success i ResponseModel den kalıtım alır

  data:Category[]//bizim datamız bir dizi halinde Category döner bize ondan böyle

}
