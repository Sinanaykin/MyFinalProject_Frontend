import { ResponseModel } from "./responseModel";

export interface ListResponseModel <T> extends ResponseModel{//ResponseModeldeki veriler gelsin diye buraya onuda belirtiyoruz
  data:T[];
}
