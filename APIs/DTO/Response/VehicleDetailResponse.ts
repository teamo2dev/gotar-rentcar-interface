import CommonResponse from './CommonResponse';
import Car from '../../../Car';
import Vehicle from '../../../Vehicle';
import Vendor from '../../../Vendor';
import Shop from '../../../Shop';

/**
 * @interface VehicleDetailResponse
 * @description 차량 상세 조회시 사용되는 Response DTO
 */
export default interface VehicleDetailResponse extends CommonResponse {
  result: {
    /**
     * @type Car
     * @description 차종
     * @nullable false
     * @required true
     * @example Car
     * @default N/A
     */
    car: Car;
    /**
     * @type Vehicle
     * @description 차량 (보험 포함)
     * @nullable false
     * @required true
     * @example Vehicle
     * @default N/A
     */
    vehicles: Vehicle;
    /**
     * @type Vendor
     * @description 업체 혹은 지점
     * @nullable false
     * @required true
     * @example Vendor
     * @default N/A
     */
    vendors: Vendor;
    /**
     * @type Shop
     * @description 업체 혹은 지점
     * @nullable false
     * @required true
     * @example Shop
     * @default N/A
     */
    shops: Shop;
  };
}
