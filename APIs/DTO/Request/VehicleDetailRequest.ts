/**
 * @interface VehicleDetailRequest
 * @description 차량 상세 조회시 사용되는 Request DTO
 */
export default interface VehicleDetailRequest {
  /**
   * @type String
   * @description 상세 조회할 차량의 ID (Vehicle._id와 동일한 값)
   * @nullable false
   * @required true
   * @example ''
   * @default N/A
   */
  id: string;
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
}
