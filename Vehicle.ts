/**
 * @interface Vehicle
 * @description Vehicle 정보
 */
export default interface Vehicle {
  /**
   * @type String
   * @description 차량에대한 고유 값
   * <br>
   * - Available: BG_와 같이 API Identifier + 차량에대한 고유함을 보장할 수 있는 조합 값
   * - 고유함을 보장하는 조합 값에 대해서는 모든 값이 허용된다.
   * - prefix로 API Identifier가 구분자와 함께 들어가야한다 (BG::BG_~)
   * @nullable false
   * @required true
   * @example 'BG::BG_ASASBDSBASDBAS_BDSBASDBASB_SABADSBSB'
   * @default N/A
   */
  _id: string;
  /**
   * @type String
   * @description 차종에대한 고유 값
   * <br>
   * - Available: BG_와 같이 API Identifier + 차종에대한 고유함을 보장할 수 있는 조합 값
   * - 고유함을 보장하는 조합 값에 대해서는 모든 값이 허용된다.
   * @nullable false
   * @required true
   * @example 'BG_ASASBDSBASDBAS_BDSBASDBASB_SABADSBSB'
   * @default N/A
   */
  _carId: string;
  /**
   * @type AvailableShopCombination[]
   * @description 해당 차량이 예약 가능한 업체들의 정보
   * <br>
   * pickupShop -> RetunShop이 가능한 구조로 나온다
   * 예: pickupShopId: 1
   * 예: returnShopId: 7
   * 1-7이런형태로 가능하다.
   * 원웨이예약이 아니라면 pickupShop과 returnShop은 항상 같다.
   * @nullable false
   * @required true
   * @example AvailableShopCombination
   * @default N/A
   */
  availableShopCombinations: AvailableShopCombination[];
  /**
   * @type CAR_GROUP
   * @description 차종 등급에대한 Int ENUM
   * 경형 = 0
   * 소형 = 1
   * 준중형 = 2
   * 중형 = 3
   * 대형 = 4
   * RV = 6
   * SUV = 7
   * 웨건 = 8
   * 스포츠 = 9
   * 컨버터블 = 10
   * 픽업트럭 = 11
   * UNKNOWN = -1
   * <br>
   * 외부API에서 차종 등급에대한 값이 없다면 -1
   * @nullable false
   * @required false
   * @example -1
   * @default -1
   */
  carGroupTypeId: CAR_GROUP;
  /**
   * @type String
   * @description 연료 정책
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
   * @type Boolean
   * @description 차량이 1년 이내 출시된 차량인지 여부(신차여부)
   * @nullable false
   * @required true
   * @example true
   * @default false
   */
  isReleasedInOneYear: boolean;
  /**
   * @type String
   * @description 차량 연식 최대값
   * @nullable true
   * @required true
   * @example '2020'
   * @default null
   */
  maxYear: string | null;
  /**
   * @type String
   * @description 차량 연식 최소값
   * @nullable true
   * @required true
   * @example '2020'
   * @default null
   */
  minYear: string | null;
  /**
   * @type Number
   * @description 차량을 운전하기 위한 운전경력 최소 년도 수
   * @nullable false
   * @required true
   * @example 1
   * @default 1
   */
  requiredDrivingExperience: number;
  /**
   * @type AgePolicy
   * @description 차량의 연령 정책
   * @nullable false
   * @required true
   * @default N/A
   */
  agePolicy: AgePolicy;
  /**
   * @type Insurance
   * @description 차량의 보험 정책
   * @nullable false
   * @required true
   * @example Insurance
   * @default N/A
   */
  insurance: Insurance;
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
   * @description 운행 거리 제한 기준
   * <br>
   * ∙ isDistanceUnlimited 값이 false 인 경우에만 해당 값이 존재
   * - DAY 1일당 {distanceLimit} 이하
   * - RENTAL 렌트 기간 동안 {distanceLimit} 이하
   * - HOUR 1시간 동안 {distanceLimit} 이하
   * @nullable true
   * @required false
   * @example 'RENTAL'
   * @default 'RENTAL'
   */
  distanceLimitType: string;
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
  /**
   * @type Object
   * @description 예약 정보
   * @nullable false
   * @required true
   * @default N/A
   */
  reservation: {
    /**
     * @type Boolean
     * @description 즉시 확정 가능한 차량인지 여부
     * @nullable false
     * @required true
     * @example true
     * @default N/A
     */
    isImmediateConfirmation: boolean;
    /**
     * @type Number
     * @description 즉시 확정 가능한 차량이 아닐 때, 확정까지 걸리는 시간(시간 단위)
     * @nullable false
     * @required true
     * @example 24
     * @default 0
     */
    confirmInHours: number;
    /**
     * @type Object
     * @description 예약 가격 정보
     * @nullable false
     * @required true
     * @default N/A
     */
    price: {
      /**
       * @type Number
       * @description 가격 지불 방법
       * <br>
       * ∙ 1: 현장 지불<br>
       * ∙ 2: 사전 지불<br>
       * ∙ 3: 보증금(부분) 지불
       * @nullable false
       * @required true
       * @example 1
       * @default N/A
       */
      paymentMode: number;
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
      /**
       * @type Price
       * @description OTA 사 판매 가격
       * <br>
       * - 정보성 데이터로 클룩에서만 제공
       * @nullable false
       * @required true
       * @default N/A
       */
      retailPrice: Price;
    };
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
     * @type CancellationPolicy
     * @description 차량의 취소 수수료 규정
     * @nullable false
     * @required true
     * @example CancellationPolicy
     * @default N/A
     */
    cancellationPolicy: CancellationPolicy;
    /**
     * @type Boolean
     * @description 보증금 여부
     * @nullable false
     * @required true
     * @example true
     * @default N/A
     */
    hasDeposit: boolean;
    /**
     * @type OneWayRental
     * @description 원웨이 금액
     * <br>
     * 정보성 객체
     * - 원웨이 가격은 항상 Vehicle Price객체에 포함된 상태여야한다.
     * Example: Vehicle Price 150 , OneWay Price 50이라면 차량 및 보험에 대한 가격이 100, 원웨이 가격이 50
     * - Vehicle 100 + Oneway 50 Vehicle Price = 150
     * @nullable false
     * @required true
     * @example OneWayRental
     * @default N/A
     */
    oneWayRental: OneWayRental;
    /**
     * @type Policy[]
     * @description free text로 된 결제 정보에 대한 설명들
     * <br>
     * 외부 API에서 제공하는 결제 정보에대한 설명 따위가 Free Text로 돼있는 경우
     * title, description 규격에 맞춰 제공해야한다.
     * @nullable false
     * @required true
     * @example Policy[]
     * @default []
     */
    reservationDescriptions: Policy[];
  };
  /**
   * @type Boolean
   * @description 차량이 GPS를 가지고 있는 지 여부(네비게이션이 있는 지 여부와 같은 의미)
   * @nullable false
   * @required true
   * @example true
   * @default false
   */
  hasGPS: boolean;
  /**
   * @type FreeExtraDriverInfo
   * @description 무료 추가운전자 정보
   * @nullable false
   * @required true
   * @example FreeExtraDriverInfo
   * @default N/A
   */
  freeExtraDriverInfo: FreeExtraDriverInfo;
  /**
   * @type Boolean
   * @description Deprecated.
   * @nullable false
   * @required false
   * @default false
   * @example false
   * @deprecated true
   */
  isNeedPort: boolean;
  /**
   * @type Boolean
   * @description Deprecated.
   * @nullable false
   * @required false
   * @default false
   * @example false
   * @deprecated true
   */
  isNeedFlightNo: boolean;
  /**
   * @type Policy[]
   * @description free text로 된 대여규정 정보
   * <br>
   * 외부 API에서 제공하는 규정 따위가 Free Text로 돼있는 경우
   * title, description 규격에 맞춰 제공해야한다.
   * @nullable false
   * @required true
   * @example Policy[]
   * @default []
   */
  policies: Policy;
  /**
   * @type AddOn[]
   * @description 외부에서 제공된 차량의 부가서비스 정보
   * @nullable false
   * @required true
   * @example AddOn[]
   * @default []
   */
  addOns: AddOn[];
}

/**
 * @enum CAR_GROUP
 * @description 차량에 사용되는 차종 그룹
 * 경형 = 0
 * 소형 = 1
 * 준중형 = 2
 * 중형 = 3
 * 대형 = 4
 * RV = 6
 * SUV = 7
 * 웨건 = 8
 * 스포츠 = 9
 * 컨버터블 = 10
 * 픽업트럭 = 11
 * UNKNOWN = -1
 * <br>
 * 외부API에서 차종 등급에대한 값이 없다면 -1
 */
export const enum CAR_GROUP {
  경형 = 0,
  소형 = 1,
  준중형 = 2,
  중형 = 3,
  대형 = 4,
  RV = 6,
  SUV = 7,
  웨건 = 8,
  스포츠 = 9,
  컨버터블 = 10,
  픽업트럭 = 11,
  UNKNOWN = -1,
}

/**
 * @interface Price
 * @description Price
 */
export interface Price {
  /**
   * @type String
   * @description 통화(화폐)
   * @nullable false
   * @required true
   * @example 'USD'
   * @default N/A
   */
  currency: string;
  /**
   * @type Number
   * @description 금액
   * @nullable false
   * @required true
   * @example 166.85
   * @default N/A
   */
  amount: number;
}

/**
 * @interface AgePolicy
 * @description 연령 정책
 */
export interface AgePolicy {
  /**
   * @type Number
   * @description 차량을 빌리기 위한 최소 연령
   * @nullable false
   * @required true
   * @example 21
   * @default N/A
   */
  minAge: number;
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
}

/**
 * @interface Insurance
 * @description 차량에 포함된 보험 정보
 */
export interface Insurance {
  /**
   * @type Object[]
   * @description 포함된 보험 정보
   * @nullable false
   * @required true
   * @default []
   */
  coverage: {
    /**
     * @type String
     * @description 보험명
     * @nullable false
     * @required true
     * @example '부가적인 제3자 책임보험'
     * @default N/A
     */
    title: string;
    /**
     * @type String
     * @description 보험코드
     * @nullable false
     * @required true
     * @example 'ALI'
     * @default N/A
     */
    code: string;
    /**
     * @type Object[]
     * @description 포함된 보험의 세부 정보(제공되지 않는 경우 고정된 값이 내려감)
     * @nullable false
     * @required true
     * @default N/A
     */
    subInsurances: {
      /**
       * @type String
       * @description 세부 보험명
       * @nullable false
       * @required true
       * @example '부가적인 제3자 책임보험'
       * @default N/A
       */
      title: string;
      /**
       * @type Price | null
       * @description 최소 보증금
       * @nullable true
       * @required true
       * @default N/A
       */
      depositMin: Price | null;
      /**
       * @type Price | null
       * @description 최대 보증금
       * @nullable true
       * @required true
       * @default N/A
       */
      depositMax: Price | null;
      /**
       * @type Price | null
       * @description 최소 자기부담금
       * @nullable true
       * @required true
       * @default N/A
       */
      excessMin: Price | null;
      /**
       * @type Price | null
       * @description 최대 자기부담금
       * @nullable true
       * @required true
       * @default N/A
       */
      excessMax: Price | null;
      /**
       * @type Boolean
       * @description 자기부담금 여부
       * @nullable false
       * @required true
       * @example true
       * @default N/A
       */
      hasExcess: boolean;
      /**
       * @type boolean
       * @description 보증금 여부
       * @nullable false
       * @required true
       * @example true
       * @default N/A
       */
      hasDeposit: boolean;
      /**
       * @type Price
       * @description 보험의 선 결제 요금
       * <br>
       * - 차량 요금(Vehicle.reservation.price)에는 보험의 가격이 항상 합산된다
       * - 보험의 가격을 알려주기 위한 정보성 Key
       * @nullable true
       * @required false
       * @example Price
       * @default Price
       */
      prepaidPrice: Price | null;
      /**
       * @type Price
       * @description 보험의 현장 결제 요금
       * 차량 요금(Vehicle.reservation.price)에는 보험의 가격이 항상 합산된다
       * <br>
       * - 차량 요금(Vehicle.reservation.price)에는 보험의 가격이 항상 합산된다
       * - 보험의 가격을 알려주기 위한 정보성 Key
       * @nullable true
       * @required false
       * @example Price
       * @default Price
       */
      payOnArrivalPrice: Price | null;
      /**
       * @type Boolean
       * @description 자기부담금 세금 포함 여부
       * @nullable false
       * @required true
       * @example true
       * @default true
       */
      isExcessIncludeTax: boolean;
      /**
       * @type Boolean
       * @description 보증금 세금 포함 여부
       * @nullable false
       * @required true
       * @example true
       * @default true
       */
      isDepositIncludeTax: boolean;
      /**
       * @type String
       * @description 주의사항
       * @nullable false
       * @required true
       * @example ''
       * @default ''
       */
      remark: string;
      /**
       * @type String
       * @description 보험 보장 범위 설명
       * @nullable false
       * @required true
       * @example '대여 차량의 정상적인 사용 과정에서 사고 또는 도난 발생시, 보험사에서 발생한 비용 전액을 부담합니다. (차량 유리, 섀시(차대), 타이어, 지붕 파손은 보장에서 제외됩니다.)'
       * @default ''
       */
      coverageScope: string;
      /**
       * @type String
       * @description 보험 적용 가능 운전 경력
       * @nullable true
       * @required true
       * @example 0
       * @default 1
       */
      requiredDrivingExperience: number;
      /**
       * @type String
       * @description 보험 적용 가능 나이
       * @nullable true
       * @required true
       * @example 21
       * @default N/A
       */
      age: number;
    }[];
  }[];
  /**
   * @type String
   * @description 보험 패키지명
   * @nullable false
   * @required true
   * @example 'BASIC'
   * @default N/A
   */
  originCoveragePackage: string;
  /**
   * @type String
   * @description 보험 패키지명(originalCoveragePackage 와 동일한 값)
   * @nullable false
   * @required true
   * @example 'BASIC'
   * @default N/A
   */
  coveragePackage: string;
}

/**
 * @interface CreditCard
 * @description 예약 시 가능한 카드 정보 및 부과될 보증금에대한 정보
 */
export interface CreditCard {
  /**
   * @type String[]
   * @description 신용카드 종류
   * @nullable false
   * @required true
   * @example ['China UnionPay', 'VISA', 'MasterCard', 'Diners', 'AMEX']
   * @default N/A
   */
  availableCardVendor: string[];
  /**
   * @type Number
   * @description 보증금 비율(렌트비의 %)
   * @nullable true
   * @required true
   * @example null
   * @default N/A
   */
  rentalRate: number | null;
  /**
   * @type Price
   * @description 최소 보증금
   * @nullable false
   * @required true
   * @example Price
   * @default N/A
   */
  depositMin: Price;
  /**
   * @type Price
   * @description 최대 보증금
   * @nullable false
   * @required true
   * @example Price
   * @default N/A
   */
  depositMax: Price;
  /**
   * @type String
   * @description 보증금 관련 정보성 문구
   * @nullable true
   * @required false
   * @example '보증금에대한 추가적인 설명'
   * @default '''
   */
  depositRemark: string;
  /**
   * @type Number
   * @description (보증금)최소 반환 기간(일)
   * @nullable false
   * @required true
   * @example 30
   * @default N/A
   */
  thawDaysMin: number;
  /**
   * @type Number
   * @description (보증금)최대 반환 기간(일)
   * @nullable false
   * @required true
   * @example 60
   * @default N/A
   */
  thawDaysMax: number;
  /**
   * @type Boolean
   * @description (보증금 결제 시)PIN 코드 필요 여부
   * @nullable false
   * @required true
   * @example false
   * @default N/A
   */
  isNeedPinCode: boolean;
  /**
   * @type Boolean
   * @description 고급 자동차 대여 시 보증금 필요 여부
   * @nullable false
   * @required true
   * @example true
   * @default N/A
   */
  isForUpscaleCar: boolean;
  /**
   * @type Number
   * @description 신용카드 유형
   * <br>
   * - 1: chip card (칩 카드)<br>
   * - 2: convex card (볼록한 카드)<br>
   * - 3: embossed chip card (볼록한 칩 카드)<br>
   * - 4: no special requirements
   * @nullable false
   * @required true
   * @example 2
   * @default N/A
   */
  creditCardProperty: number;
}

/**
 * @interface CancellationPolicy
 * @description 업체 및 차량의 취소 규정
 */
export interface CancellationPolicy {
  /**
   * @type Number
   * @description 대여 N시간 전 무료취소가능
   * @nullable false
   * @required true
   * @example 0
   * @default 0
   */
  freeCancellationHours: number;
  /**
   * @type Number
   * @description 예약 N시간 이내 무료취소가능
   * @nullable false
   * @required true
   * @example 0
   * @default 0
   */
  freeCancellationHoursAfterReservation: number;
  /**
   * @type Object[]
   * @description 구간별 취소 수수료 금액 및 기간 정보 (대여시작 beforeRentalWithinStart시간 전부터 대여시작 beforeRentalWithinEnd시간 전까지로 해석한다)
   * @nullable false
   * @required true
   * @default N/A
   */
  cancellationCharges: {
    /**
     * @type Number
     * @description 구간 적용 시작 시간(대여시작시간에서 거꾸로 계산, N시간 전)
     * @nullable false
     * @required true
     * @example 0
     * @default N/A
     */
    beforeRentalWithinEnd: number;
    /**
     * @type Number
     * @description 구간 적용 종료 시간(대여시작시간에서 거꾸로 계산, N시간 전)
     * @nullable false
     * @required true
     * @example 48
     * @default N/A
     */
    beforeRentalWithinStart: number;
    /**
     * @type Number
     * @description 수수료 적용 방법
     * <br>
     * - 1: 일자<br>
     * - 2: 비율<br>
     * - 3: 고정 금액<br>
     * @nullable false
     * @required true
     * @example 2
     * @default N/A
     */
    chargeMode: number;
    /**
     * @type Price
     * @description 수수료 적용 금액
     * @nullable false
     * @required true
     * @default N/A
     */
    chargeFixedAmount: Price;
    /**
     * @type Number
     * @description 수수료 적용 비율(chargeMode: 2 인 경우)
     * <br> 0 ~ 1 사이의 값이며, 0.1은 10%를 취소수수료로 부과한다는 의미이다.
     * @nullable true
     * @required true
     * @example 0.5
     * @default N/A
     */
    chargePercentage: number | null;
    /**
     * @type Number
     * @description 수수료 적용 일자 수(chargeMode: 1 인 경우)
     * <br> 대여금액 / 대여일 수 * this 를 계산하여 취소수수료를 부과한다는 의미이다.
     * @nullable true
     * @required true
     * @example 1
     * @default N/A
     */
    chargeDays: number | null;
  }[];
}

/**
 * @interface OneWayRental
 * @description 편도예약 추가 금액 정보
 * <br>
 * 추가금액은 별도로 계산되는것이 아닌 항상 Vehicle.price에 합산된 상태로 반환돼야한다.
 */
export interface OneWayRental {
  /**
   * @type Price
   * @description 원웨이 사전 지불 금액 (Vehicle.price.payablePrice 에 포함되어 있는 금액)
   * @nullable false
   * @required true
   * @example Price
   * @default N/A
   */
  paymentOnDeparture: Price;
  /**
   * @type Price
   * @description 원웨이 현장 지불 금액 (Vehicle.price.payOnArrivalPrice 에 포함되어 있는 금액)
   * @nullable false
   * @required true
   * @example Price
   * @default N/A
   */
  paymentOnArrival: Price;
}

/**
 * @interface FreeExtraDriverInfo
 * @description 차량에 포함 가능한 무료 추가운전자 정보
 */
export interface FreeExtraDriverInfo {
  /**
   * @type Boolean
   * @description 무료 추가운전자 가능 여부
   * @nullable false
   * @required true
   * @example true
   * @default false
   */
  isAvailableFreeExtraDriver: boolean;
  /**
   * @type Numbe
   * @description 무료 추가운전자 가능 수
   * @nullable false
   * @required true
   * @example 1
   * @default 0
   */
  quantity: number;
}

/**
 * @interface Policy
 * @description 차량의 대여 규정
 */
export interface Policy {
  /**
   * @type String
   * @description 대여 규정 제목
   * @nullable false
   * @required true
   * @example ''
   * @default ''
   */
  title: string;
  /**
   * @type String
   * @description 대여 규정 내용
   * @nullable false
   * @required true
   * @example ''
   * @default ''
   */
  description: string;
}

/**
 * @interface AddOn
 * @description 차량의 부가서비스 정보
 */
export interface AddOn {
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
   * @type String
   * @description 부가서비스의 이름
   * @nullable false
   * @required true
   * @example 유아용 카시트
   * @default N/A
   */
  name: string;
  /**
   * @type String
   * @description 부가서비스의 설명
   * @nullable false
   * @required true
   * @example 유아대상의 카시트입니다.
   * @default ''
   */
  description: string;
  /**
   * @type Number
   * @description 부가서비스 재고
   * <br>
   * 만약, API에서 재고를 제공하지 않는다면 Default: -1
   * @nullable false
   * @required true
   * @example 99
   * @default -1
   */
  stockCount: number;
  /**
   * @type Number
   * @description 부가서비스 최대 주문 가능 갯수
   * <br>
   * API에서 최대 주문 가능 갯수를 제공하지 않는다면 Default: -1
   * @nullable false
   * @required true
   * @example 3
   * @default -1
   */
  maxAvailableCountPerReservation: number;
  /**
   * @type Object[]
   * @description 부가서비스 선택 가능한 옵션
   * @nullable false
   * @required true
   * @default []
   */
  selectableOptions: {
    /**
     * @type String
     * @description 부가서비스 선택 가능한 옵션의 표기명
     * @nullable false
     * @required true
     * @example ''
     * @default N/A
     */
    name: string;
    /**
     * @type String
     * @description 부가서비스 선택 가능한 옵션의 고유 값
     * @nullable false
     * @required true
     * @example ''
     * @default N/A
     */
    value: string;
  }[];
  /**
   * @type Number
   * @description 부가서비스 선택 가능한 옵션의 최대 선택 가능 갯수
   * <br>
   * 선택 가능한 옵션의 갯수보다 클 수 없다
   * @nullable false
   * @required true
   * @example 1
   * @default 0
   */
  maximumSelectableOptionsCount: number;
  /**
   * @type Number
   * @description 부가서비스 선택 가능한 옵션의 최소 필요 갯수
   * <br>
   * 선택 가능한 옵션이 존재하다면 0보다 커야한다
   * @nullable false
   * @required true
   * @example 1
   * @default 0
   */
  minimumSelectableOptionsCount: number;
  /**
   * @type Number
   * @description 부가서비스 지불 방법
   * <br>
   * ∙ 1: 현장 지불<br>
   * ∙ 2: 사전 지불
   * @nullable false
   * @required true
   * @example 1
   * @default N/A
   */
  paymentMode: number;
  /**
   * @type Object
   * @description 부가서비스 가격 정보
   * <br>
   * 부가서비스 가격은 항상 100% 현장지불이거나 100% 사전지불이여야 한다
   * @nullable false
   * @required true
   * @default N/A
   */
  price: {
    /**
     * @type Price
     * @description 사전 지불 금액
     * @nullable false
     * @required true
     * @default N/A
     */
    prepaidPrice: Price;
    /**
     * @type Price
     * @description 현장 지불 금액
     * @nullable false
     * @required true
     * @default N/A
     */
    payOnArrivalPrice: Price;
  };
  /**
   * @type String
   * @description 부가서비스 가격 계산 방법
   * <br>
   * - PER_HOUR: 부가서비스 1개마다 예약 시간으로 계산한다. ((reservationHour * count) * price)
   * - PER_COUNT: 부가서비스 1개마다 계산한다. (count * price)
   * - PER_RESERVATION: 부가서비스 1개마다 계산한다. (count * price), 다만 해당 타입은 1개만 예약이 가능한경우에만 사용이 가능하다
   * - PER_DAY: 부가서비스 1개마다 예약 일로 계산한다 (1일 1시간인경우 2일로 계산한다.) ((day * count) * price)
   * @nullable false
   * @required true
   * @example 'PER_HOUR' | 'PER_COUNT' | 'PER_DAY'
   * @default N/A
   */
  chargeType: 'PER_HOUR' | 'PER_COUNT' | 'PER_RESERVATION' | 'PER_DAY';
  /**
   * @type Boolean
   * @description 부가서비스 필수 신청 여부
   * <br>
   * - true: 해당 부가서비스는 예약건에 필수로 신청해야할 경우
   * - false: 필수 신청 부가서비스가 아닌경우 (기본값)
   * @nullable false
   * @required true
   * @example false
   * @default false
   */
  isRequired: boolean;
  /**
   * @type Boolean
   * @description 해당 부가서비스를 신청하면 업체의 확정이 필요한 경우
   * <br>
   * - true: 업체의 확정이 필요한 부가서비스
   * - false: 해당값을 확인할 수 없거나, 확정이 필요 없는 경우 (기본값)
   * @nullable false
   * @required true
   * @example false
   * @default false
   */
  isNeedConfirm: boolean;
}

/**
 * @interface AvailableShopCombination
 * @description 차량이 대여-반납이 가능한 업체조합에대한 Id를 담은 Interface
 */
export interface AvailableShopCombination {
  /**
   * @type String
   * @description 대여 가능한 업체의 Id
   * @nullable false
   * @required true
   * @example 'KL_12'
   * @default N/A
   */
  pickupShopId: string;
  /**
   * @type String
   * @description 반납 가능한 업체의 Id
   * @nullable false
   * @required true
   * @example 'KL_13'
   * @default N/A
   */
  returnShopId: string;
}
