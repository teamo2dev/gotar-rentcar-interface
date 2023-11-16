/**
 * @interface VehicleListRequest
 * @description 차량목록 조회시 사용되는 Request DTO
 */
export default interface VehicleListRequest {
  /**
   * @type String
   * @description Country Code (ISO 3166-1 alpha-2)
   * @nullable false
   * @required true
   * @example 'US'
   * @default N/A
   */
  countryCode: string;
  /**
   * @type String
   * @description Country Code (ISO 3166-1 alpha-2)
   * <br>
   * 원웨이 차량 조회에 사용되는 값
   * @nullable  false
   * @required true
   * @example 'US'
   * @default N/A
   */
  returnCountryCode: string;

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
   * @description Airport Location Code (공항 IATA 코드)
   * @nullable true
   * @required false
   * @example 'LAX'
   * @default ''
   */
  pickupLocationCode: string | null;
  /**
   * @type String
   * @description Airport Location Code (공항 IATA 코드)
   * @nullable true
   * @required false
   * @example 'LAX'
   * @default ''
   */
  returnLocationCode?: string;
  /**
   * @type Number
   * @description 차량검색시 대여하고싶은 좌표 (위도)
   * @nullable false
   * @required true
   * @example 127.001
   * @default N/A
   */
  pickupLatitude: number;
  /**
   * @type Number
   * @description 차량검색시 대여하고싶은 좌표 (경도)
   * @nullable false
   * @required true
   * @example 1.234
   * @default N/A
   */
  pickupLongitude: number;
  /**
   * @type Number
   * @description 차량검색시 반납하고싶은 좌표 (위도)
   * <br>
   * 원웨이 차량조회시 해당값은 항상 다르다
   * 만약 원웨이가 아닌경우 해당값은 항상 같다
   * @nullable false
   * @required true
   * @example 127.001
   * @default N/A
   */
  returnLatitude: number;
  /**
   * @type Number
   * @description 차량검색시 반납하고싶은 좌표 (경도)
   * <br>
   * 원웨이 차량조회시 해당값은 항상 다르다
   * 만약 원웨이가 아닌경우 해당값은 항상 같다
   * @nullable false
   * @required true
   * @example 127.001
   * @default N/A
   */
  returnLongitude: number;
}
