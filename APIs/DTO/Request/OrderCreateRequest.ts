import { AvailableShopCombination } from '../../../Vehicle';

/**
 * @interface OrderCreateRequestBody
 * @description 예약 생성시 사용되는 Request Body DTO
 * <br>
 * - 2.0기준으로 추가운전자에대한 대응이 안돼있음
 * - API에서 만약 추가운전자에대한 정보를 요구한다면 수정 필요
 */
export default interface OrderCreateRequestBody {
  /**
   * @type String
   * @description carmore-common-api에서 식별하는 예약건의 고유 번호
   * - $ {GlobalApiChannel Prefix}${OrderNumber}
   * @nullable false
   * @required true
   * @example BG1231312
   * @default N/A
   */
  _id: string;
  /**
   * @type String
   * @description 예약할 차량의 ID (Vehicle._id와 동일한 값)
   * @nullable false
   * @required true
   * @example ''
   * @default N/A
   */
  id: string;
  /**
   * @type String
   * @description 예약할 차량의 대여업체
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
   * @description 예약할 차량의 반납업체
   * <br>
   * 원웨이예약이 아니라면 pickupShop과 returnShop은 항상 같다.
   * 차량목록에서 받은 AvailableShopCombination에서 가능한 조합만 상세 조회가 가능하다.
   * @nullable false
   * @required true
   * @example KL_12
   * @default N/A
   */
  returnShopId: string;
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
   * @type String
   * @description carmore-common-api에서 식별하는 예약건의 고유 번호
   * - $ {GlobalApiChannel Prefix}${OrderNumber}
   * @nullable false
   * @required true
   * @example BG1231312
   * @default N/A
   */
  carmoreOrderId: string;
  /**
   * @type String
   * @description 국가코드 ISO 3166-1 alpha-2
   * @nullable false
   * @required true
   * @example 'US'
   * @default N/A
   */
  countryCode: string;
  /**
   * @type String
   * @description 국가코드 ISO 3166-1 alpha-2
   * <br>
   * 원웨이가 아닌경우 countryCode와 항상 같다
   * @nullable false
   * @required true
   * @example 'US'
   * @default N/A
   */
  returnCountryCode: string;
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
   * @description 예약자의 국제전화 번호를 포함한 휴대전화 번호
   * <br>
   * 반드시 ITU-T 권고 E.164 번호를 사용해야한다.
   * @nullable false
   * @required true
   * @example '+8201012345678'
   * @default N/A
   */
  driverPhone: string;
  /**
   * @type String
   * @description 예약자의 이메일
   * @nullable false
   * @required true
   * @example dev@teamo2.kr
   * @default N/A
   */
  driverEmail: string;
  /**
   * @type String
   * @description 예약자의 출국 비행기 번호
   * @nullable true
   * @required false
   * @example 'KE111'
   * @default ''
   */
  flightNo: string;
  /**
   * @type String
   * @description 예약자 이름
   * @nullable false
   * @required true
   * @example '오투'
   * @default N/A
   */
  driverFirstName: string;
  /**
   * @type String
   * @description 예약자 성씨
   * @nullable false
   * @required true
   * @example '팀'
   * @default N/A
   */
  driverLastName: string;
  /**
   * @type String
   * @description 예약자의 성별
   * <br>
   * - M : 남성
   * - F : 여성
   * - 그외는 모두 정해지지 않은값.
   * @nullable false
   * @required false
   * @example 'M'
   * @default 'M'
   */
  driverGender: string;
  /**
   * @type String
   * @description 예약자의 연령
   * @nullable false
   * @required false
   * @example 'M'
   * @default 'M'
   */
  driverAge: number;
  /**
   * @type Number
   * @description 예약된 차량에 탑승할 성인의 수
   * <br>
   * - 차량에 탑승하는 총 인원은 adult + child + infant로 계산된다.
   * @nullable false
   * @required true
   * @example 1
   * @default 1
   */
  adult: number;
  /**
   * @type Number
   * @description 예약된 차량에 탑승할 아동의 수
   * <br>
   * 차량에 탑승하는 총 인원은 adult + child + infant로 계산된다.
   * @nullable false
   * @required true
   * @example 1
   * @default 0
   */
  child: number;
  /**
   * @type Number
   * @description 예약된 차량에 탑승할 영유아의 수
   * <br>
   * 차량에 탑승하는 총 인원은 adult + child + infant로 계산된다.
   * @nullable false
   * @required true
   * @example 1
   * @default 0
   */
  infant: number;
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
  /**
   * @type OrderCreateRequestAddOn[]
   * @description 예약 생성시 사용되는 차량의 부가서비스 구매 정보
   * @nullable false
   * @required true
   * @example OrderCreateRequestAddOn[]
   * @default []
   */
  addOns: OrderCreateRequestAddOn[];
}

/**
 * @interface OrderCreateRequestAddOn
 * @description 예약 생성시 사용되는 차량의 부가서비스 정보
 */
export interface OrderCreateRequestAddOn {
  /**
   * @type String
   * @description Unique Identifier of the AddOn
   * <br>
   * - Available: Vehicle의 _id + 부가서비스에 대한 고유 값 혹은 구분 가능한 이름 등
   * @nullable false
   * @required true
   * @example ''
   * @default N/A
   */
  id: string;
  /**
   * @type Object[]
   * @description 구매한 부가서비스의 옵션
   * @nullable false
   * @required truer
   * @example []
   * @default []
   */
  selectableOptions: {
    /**
     * @type String
     * @description 구매한 부가서비스 선택 가능한 옵션의 고유 값
     * @nullable false
     * @required true
     * @example ''
     * @default N/A
     */
    value: string;
  }[];
  /**
   * @type Number
   * @description 구매한 부가서비스 갯수
   * @nullable false
   * @required true
   * @example 1
   * @default N/A
   */
  count: number;
}
