import { ResponseModel } from "./responseModel";

export interface SingleResponseModel<T> extends ResponseModel{ //Aynı listResponseModel gibi buda ResponseModelden türedi ancak burda liste değil tek değer dönücek
  data:T //Asıl amacımız token ı döndürmek için böyle
}
