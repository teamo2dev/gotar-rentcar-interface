import Shop from './Shop';
import { AddOn, CAR_GROUP, CancellationPolicy, CreditCard, Insurance, Policy, Price } from './Vehicle';

/**
 * @interface Order
 * @description Order 정보
 */
export default interface Order {
  /**
   * @type OrderCar
   * @description 예약된 차종 및 차량 정보
   * @nullable false
   * @required true
   * @example OrderCar
   * @default N/A
   */
  car: OrderCar;
  /**
   * @type OrderShop
   * @description 예약 당시의 업체 정보
   * @nullable false
   * @required true
   * @example OrderShop
   * @default N/A
   */
  shop: OrderShop;
  /**
   * @type String
   * @description 예약 상태
   * <br>
   * - CONFIRMED : 예약 확정
   * - CANCELED : 예약 취소
   * - CONFIRMING : 예약 확정 중
   * - UNKNOWN : 알수 없음
   * @nullable false
   * @required true
   * @example 'CANCELED'
   * @default N/A
   */
  status: string;
  /**
   * @type String
   * @description 예약 생성 시간 (Asia/Seoul)
   * <br>
   * - Format: YYYY-MM-DDTHH:mm:ss
   * @nullable true
   * @required false
   * @example 2022-11-22T00:00:00
   * @default N/A
   */
  orderDateTime: string;
  /**
   * @type String
   * @description 현지 시간 기준 대여 시간
   * <br>
   * - Format: YYYY-MM-DDTHH:mm:ss
   * @nullable false
   * @required true
   * @example 2022-11-22T05:31:45
   * @default N/A
   */
  pickUpDateTime: string;
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
   * @description 국가코드 ISO 3166-1 alpha-2
   * @nullable false
   * @required true
   * @example 'US'
   * @default N/A
   */
  countryCode: string;
  /**
   * @type String
   * @description 외부 API에서 전달받은 예약건의 번호
   * <br>
   * - 예약 번호가 확정번호라면 예약 확정번호에 예약 번호를 넣는다.
   * @nullable false
   * @required true
   * @example 'BLA1111'
   * @default N/A
   */
  orderId: string;
  /**
   * @type Driver[]
   * @description 예약자(운전자) 정보
   * <br>
   * - 운전자의 1번째 (Driver[0])값이 예약자와 동일하다
   * - 그 이후 추가되는 운전자는 모두 추가운전자 처리
   * @nullable false
   * @required true
   * @example Driver[]
   * @default N/A
   */
  driver: Driver[];
  /**
   * @type Number
   * @description 예약된 차량에 탑승하는 성인의 수
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
   * @description 예약된 차량에 탑승하는 아동의 수
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
   * @description 예약된 차량에 탑승하는 영유아의 수
   * <br>
   * 차량에 탑승하는 총 인원은 adult + child + infant로 계산된다.
   * @nullable false
   * @required true
   * @example 1
   * @default 0
   */
  infant: number;
  /**
   * @type String
   * @description 외부 API에서 전달받은 예약건의 확정 번호
   * <br>
   * - 예약 번호와 예약 확정번호가 동일하다면 예약 확정번호에 예약 번호를 넣는다.
   * @nullable false
   * @required true
   * @example ''
   * @default N/A
   */
  confirmationNumber: string;
  /**
   * @type Boolean
   * @description 예약건이 확정이 됐는지에대한 여부
   * @nullable false
   * @required true
   * @example true
   * @default N/A
   */
  isConfirmed: boolean;
  /**
   * @type Number
   * @description 예약확정 최대 소요 시간
   * <br>
   * 0은 즉시 확정을 의미한다
   * @nullable false
   * @required true
   * @example 0
   * @default N/A
   */
  confirmInHours: number;
  /**
   * @type OrderPrice
   * @description 예약된 차량의 가격 정보
   * @nullable false
   * @required true
   * @example OrderPrice
   * @default N/A
   */
  price: OrderPrice;
  /**
   * @type Policy[]
   * @description free text로 된 결제에 포함되는 기타 정보에 대한 설명들
   * <br>
   * 외부 API에서 제공하는 결제에 포함되는 기타 정보에대한 설명 따위가 Free Text로 돼있는 경우
   * title, description 규격에 맞춰 제공해야한다.
   * @nullable false
   * @required false
   * @example Policy[]
   * @default []
   */
  reservationDescriptions: Policy[];
  /**
   * @type Policy[]
   * @description 예약된 차량의 대여규정 정보
   * @nullable false
   * @required false
   * @example Policy[]
   * @default []
   */
  policies: Policy[];
  /**
   * @type AddOn[]
   * @description 예약된 차량의 부가서비스 정보
   * @nullable false
   * @required true
   * @example AddOn[]
   * @default []
   */
  addOns: AddOn[];
}

/**
 * @interface OrderCar
 * @description 예약 차종 및 차량 정보
 */
interface OrderCar {
  /**
   * @type String
   * @description Unique identifier of the shop
   * <br>
   * - Available: BG_와 같이 API Identifier + underscore로 시작하는 어떠한 값
   * @nullable false
   * @required true
   * @example BG_QA_12
   * @default N/A
   */
  _id: string;
  /**
   * @type String
   * @description 렌터카의 주요 특징을 식별하는 네글자의 코드
   * @nullable false
   * @required false
   * @example 'CBAD'
   * @default ''
   */
  sippCode: string;
  /**
   * @type String
   * @description 예약된 차량의 차종 모델 명
   * @nullable false
   * @required true
   * @example 'K3'
   * @default N/A
   */
  model: string;
  /**
   * @type String
   * @description 예약된 차량의 차종 브랜드 명
   * @nullable false
   * @required true
   * @example 'KIA'
   * @default N/A
   */
  brand: string;
  /**
   * @type String
   * @description 예약된 차량의 상세 설명
   * @nullable false
   * @required false
   * @example 'K3에대한 설명입니다'
   * @default ''
   */
  description: string;
  /**
   * @type Object
   * @description 예약된 차량의 사진
   * <br>
   * - Car.priamryImage와 Car.images를 Key로 가지고있는 Object
   * @nullable false
   * @required true
   * @example { primary: '', images: [] }
   * @default N/A
   */
  images: {
    /**
     * @type String
     * @description 예약된 차량의 메인 이미지
     * @nullable false
     * @required false
     * @example ''
     * @default ''
     */
    primary: string;
    /**
     * @type String[]
     * @description 예약된 차량의 메인 이미지를 포함한 해당 차종의 모든 사진
     * @nullable false
     * @required false
     * @example []
     * @default []
     */
    images: string[];
  };
  /**
   * @type Number
   * @description 예약된 차량의 좌석 수
   * @nullable false
   * @required false
   * @example 4
   * @default -1
   */
  seats: number;
  /**
   * @type Number
   * @description 예약된 차량의 문 개수
   * @nullable false
   * @required false
   * @example 4
   * @default -1
   */
  doors: number;
  /**
   * @type Number
   * @description 예약된 차량의 수납 가능한 최대 수하물
   * @nullable false
   * @required false
   * @example 2
   * @default -1
   */
  baggageQuantity: number;
  /**
   * @type Boolean
   * @description 예약된 차량의 에어컨 설치 여부
   * <br>
   * 외부에서 제공하는 값이 없다면 null 혹은 false
   * @nullable true
   * @required false
   * @example true
   * @default false
   */
  hasAirCondition: boolean;
  /**
   * @type String
   * @description 예약된 차량의 차종의 변속기
   * - A/T : 오토
   * - M/T : 메뉴얼 (수동)
   * @nullable false
   * @required true
   * @example 'A/T'
   * @default N/A
   */
  transmissionType: string;
  /**
   * @type Boolean
   * @description 예약된 차량의 차종 보장 가능 여부
   * <br>
   * - true : 항상 이 차종이 보장된다
   * - false : 다른 차종이 배정될 수 있다.
   * @nullable false
   * @required true
   * @example true
   * @default N/A
   */
  isModelGuaranteed: boolean;
  /**
   * @type CAR_GROUP
   * @description 예약된 차량의 차종 등급
   * @nullable false
   * @required false
   * @example -1
   * @default -1
   */
  carGroupTypeId: CAR_GROUP;
  /**
   * @type String
   * @description 예약된 차량의 연료 정책
   * <br>
   * - FULL_TO_FULL: 풀로 받아서 풀로 반납
   * - SAME_TO_SAME: 받은 연료만큼 반납 (FULL_TO_FULL에서 FULL이 보장이 안되는 경우 선택)
   * - FULL_TO_EMPTY: 풀로 받아서 자유롭게 반납
   * - FREE_TANK: 자유롭게 반납 (FULL_TO_EMPTY에서 FULL이 보장이 안되는 경우 선택)
   * - UNKNOWN: 알 수 없음
   * @nullable false
   * @required true
   * @example FULL_TO_FULL, SAME_TO_SAME, FULL_TO_EMPTY, FREE_TANK, UNKNOWN
   * @default N/A
   */
  fuelPolicy: string;
  /**
   * @type Insurance
   * @description 예약된 차량의 보험 정책
   * @nullable false
   * @required true
   * @example Insurance
   * @default N/A
   */
  insurance: Insurance;
  /**
   * @type Number
   * @description 차량을 빌리기 위한 최소 연령
   * @nullable false
   * @required true
   * @example 21
   * @default N/A
   */
  minimumAge: number;
  /**
   * @type Number
   * @description 차량을 빌리기 위한 최소 무료 연령
   * <br>
   * *이 나이 이상이면 나이에 따른 추가요금이 부과되지 않아야 함.<br>
   * *나이별 추가 금액이 없다면 freeAge는 보통 minAge이다.
   * @nullable false
   * @required true
   * @example 23
   * @default N/A
   */
  freeAge: number;
  /**
   * @type Number
   * @description 차량을 빌리기 위한 최대 연령
   * @nullable false
   * @required true
   * @example 80
   * @default N/A
   */
  maxAge: number;
  /**
   * @type String
   * @description 차량을 운전하기 위한 운전경력 최소 년도 수
   * @nullable true
   * @required true
   * @example 0
   * @default 1
   */
  requiredDrivingExperience: number;
  /**
   * @type CreditCard[]
   * @description 예약 시 가능한 카드 정보 및 부과될 보증금에대한 정보
   * @nullable false
   * @required true
   * @example CreditCard[]
   * @default []
   */
  creditCard: CreditCard[];
  /**
   * @type Boolean
   * @description 운행 거리 제한 여부
   * @nullable false
   * @required true
   * @example true
   * @default N/A
   */
  isDistanceUnlimited: boolean;
  /**
   * @type String
   * @description 가능한 운행 거리
   * <br>
   * ∙ isDistanceUnlimited 값이 false 인 경우에만 해당 값이 존재
   * @nullable false
   * @required true
   * @example '150(Mile)'
   * @default ''
   */
  distanceLimit: string;
}

/**
 * @interface OrderShop
 * @description 예약 업체 정보
 * <br>
 * - Shop에서 'holidayNotice' | 'specialNotice' | 'chargedTimes' | 'chargedTimePrice' 키를 제외하고
 * - 예약 당시의 취소수수료 정보에대한 키(CancellationPolicy)를 추가한 예약 당시의 업체 정보
 */
interface OrderShop extends Omit<Shop, 'holidayNotice' | 'specialNotice' | 'chargedTimes' | 'chargedTimePrice'> {
  /**
   * @type CancellationPolicy[]
   * @description 예약당시 업체에서 부과하는 취소수수료 정보
   * <br>
   * 예약 당시 정보를 저장하여 예약상세에 보내야한다
   * @nullable false
   * @required true
   * @example CancellationPolicy
   * @default N/A
   */
  cancellationPolicy: CancellationPolicy[];
}

/**
 * @interface Driver
 * @description 운전자 정보
 * <br>
 * - 단일값으로 사용시 운전자와 예약자는 동일하다.
 * - 배열값으로 사용된다면 배열의 첫번째 값은 항상 "주 운전자"이며 예약자와 동일하다.
 * - 이후의 값은 "추가운전자"이며 예약자가 아닌 Driver 객체이다.
 */
interface Driver {
  /**
   * @type String
   * @description 운전자 이름
   * @nullable false
   * @required true
   * @example '오투'
   * @default N/A
   */
  firstName: string;
  /**
   * @type String
   * @description 운전자 성씨
   * @nullable false
   * @required true
   * @example '팀'
   * @default N/A
   */
  lastName: string;
  /**
   * @type String
   * @description 운전자의 국제전화 번호를 포함한 휴대전화 번호
   * <br>
   * 반드시 ITU-T 권고 E.164 번호를 사용해야한다.
   * @nullable false
   * @required true
   * @example '+8201012345678'
   * @default N/A
   */
  phone: string;
  /**
   * @type String
   * @description 운전자의 이메일
   * @nullable false
   * @required true
   * @example dev@teamo2.kr
   * @default N/A
   */
  email: string;
  /**
   * @type String
   * @description 운전자의 성별
   * <br>
   * - M : 남성
   * - F : 여성
   * - 그외는 모두 정해지지 않은값.
   * @nullable false
   * @required false
   * @example 'M'
   * @default 'M'
   */
  gender: string;
}

/**
 * @interface OrderPrice
 * @description OrderPrice
 */
interface OrderPrice {
  /**
   * @type Price
   * @description 총 지불 금액
   * <br>
   * ∙ totalPrice = payablePrice(사전 지불 금액) + payOnArrivalPrice(현장 지불 금액)
   * @nullable false
   * @required true
   * @default N/A
   */
  totalPrice: Price;
  /**
   * @type Price
   * @description 사전 지불 금액
   * @nullable false
   * @required true
   * @default N/A
   */
  payablePrice: Price;
  /**
   * @type Price
   * @description 현장 지불 금액
   * @nullable false
   * @required true
   * @default N/A
   */
  payOnArrivalPrice: Price;
}
