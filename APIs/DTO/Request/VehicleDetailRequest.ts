/**
 * @interface VehicleDetailRequestQuery
 * @description 차량 상세 조회시 사용되는 Request Param DTO
 */
export interface VehicleDetailRequestParam {
  /**
   * @type String
   * @description 상세 조회할 차량의 ID (Vehicle._id와 동일한 값)
   * @nullable false
   * @required true
   * @example ''
   * @default N/A
   */
  id: string;
}

/**
 * @interface VehicleDetailRequestQuery
 * @description 차량 상세 조회시 사용되는 Request Query DTO
 */
export interface VehicleDetailRequestQuery {
  /**
   * @type String
   * @description Currency (ISO 4217)
   * @nullable false
   * @required true
   * @example 'USD'
   * @default N/A
   */
  currency: string;
  /**
   * @type Number
   * @description 운전자 연령
   * @nullable false
   * @required true
   * @example 30
   * @default N/A
   */
  age: number;
  /**
   * @type String
   * @description 현지 기준 차량 대여 시간
   * <br>
   * - Format: YYYY-MM-DDTHH:mm:ss
   * @nullable false
   * @required true
   * @example 2022-11-22T05:31:45
   * @default N/A
   */
  pickupDateTime: string;
  /**
   * @type String
   * @description 현지 시간 기준 반납 시간
   * <br>
   * - Format: YYYY-MM-DDTHH:mm:ss
   * @nullable false
   * @required true
   * @example 2022-11-24T05:31:45
   * @default N/A
   */
  returnDateTime: string;
  /**
   * @type String
   * @description 상세 조회할 차량의 대여업체
   * <br>
   * 원웨이예약이 아니라면 pickupShop과 returnShop은 항상 같다.
   * 차량목록에서 받은 AvailableShopCombination에서 가능한 조합만 상세 조회가 가능하다.
   * @nullable false
   * @required true
   * @example KL_12
   * @default N/A
   */
  pickupShopId: string;
  /**
   * @type String
   * @description 상세 조회할 차량의 반납업체
   * <br>
   * 원웨이예약이 아니라면 pickupShop과 returnShop은 항상 같다.
   * 차량목록에서 받은 AvailableShopCombination에서 가능한 조합만 상세 조회가 가능하다.
   * @nullable false
   * @required true
   * @example KL_12
   * @default N/A
   */
  returnShopId: string;
}
