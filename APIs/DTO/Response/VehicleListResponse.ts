import CommonResponse from './CommonResponse';
import Car from '../../../Car';
import Vehicle from '../../../Vehicle';
import Vendor from '../../../Vendor';
import Shop from '../../../Shop';

/**
 * @interface VehicleListResponse
 * @description 차량 목록 조회시 사용되는 Response DTO
 * <br>
 * - 차량 목록 (VehicleList)에서는 에러상황 혹은 조회시 예약가능한 차량이 없다면
 * - Throw를 하는것이 아닌 ListResponse의 각 Component를 모두 빈배열로 내려준다
 * - Example: { cars: [], vehicles: [], vendors: [], shops: [] }
 */
export default interface VehicleListResponse extends CommonResponse {
  result: {
    /**
     * @type Car[]
     * @description 차종
     * @nullable false
     * @required true
     * @example Car[]
     * @default []
     */
    cars: Car[];
    /**
     * @type Vehicle[]
     * @description 차량 (보험 포함)
     * @nullable false
     * @required true
     * @example Vehicle[]
     * @default []
     */
    vehicles: Vehicle[];
    /**
     * @type Vendor[]
     * @description 업체 혹은 지점
     * @nullable false
     * @required true
     * @example Vendor[]
     * @default []
     */
    vendors: Vendor[];
    /**
     * @type Shop[]
     * @description 업체 혹은 지점
     * @nullable false
     * @required true
     * @example Shop[]
     * @default []
     */
    shops: Shop[];
  };
}
