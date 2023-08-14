/**
 * @interface Vehicle
 * @description Vehicle 정보
 */
export default interface Vehicle {
  _id: string;
  _carId: string;
  _shopId: string;
  _returnShopId: string;
  carGroupTypeId: number;
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
   * @type Object
   * @description 차량의 연료 정책
   * @nullable false
   * @required true
   * @default N/A
   */
  agePolicy: {
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
  };
  /**
   * @type Object
   * @description 차량의 보험 정책
   * @nullable false
   * @required true
   * @default N/A
   */
  insurance: {
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
         * @type Object
         * @description 최소 보증금
         * @nullable true
         * @required true
         * @default N/A
         */
        depositMin: {
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
           * @example 1000000.00
           * @default 0
           */
          amount: number;
        } | null;
        /**
         * @type Object
         * @description 최대 보증금
         * @nullable true
         * @required true
         * @default N/A
         */
        depositMax: {
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
           * @example 1000000.00
           * @default 0
           */
          amount: number;
        } | null;
        /**
         * @type Object
         * @description 최소 자기부담금
         * @nullable true
         * @required true
         * @default N/A
         */
        excessMin: {
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
           * @example 0
           * @default 0
           */
          amount: number;
        } | null;
        /**
         * @type Object
         * @description 최대 자기부담금
         * @nullable true
         * @required true
         * @default N/A
         */
        excessMax: {
          /**
           * @type String
           * @description 통화(화폐)
           * @nullable true
           * @required true
           * @example 'USD'
           * @default N/A
           */
          currency: string;
          /**
           * @type Number
           * @description 금액
           * @nullable true
           * @required true
           * @example 0
           * @default 0
           */
          amount: number;
        } | null;
        /**
         * @type boolean
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
         * @type boolean
         * @description 자기부담금 세금 포함 여부
         * @nullable false
         * @required true
         * @example true
         * @default true
         */
        isExcessIncludeTax: boolean;
        /**
         * @type boolean
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
  };
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
       * @type Object
       * @description 총 지불 금액
       * <br>
       * ∙ totalPrice = payablePrice(사전 지불 금액) + payOnArrivalPrice(현장 지불 금액)
       * @nullable false
       * @required true
       * @default N/A
       */
      totalPrice: {
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
      };
      /**
       * @type Object
       * @description 사전 지불 금액
       * @nullable false
       * @required true
       * @default N/A
       */
      payablePrice: {
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
      };
      /**
       * @type Object
       * @description 현장 지불 금액
       * @nullable false
       * @required true
       * @default N/A
       */
      payOnArrivalPrice: {
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
      };
      /**
       * @type Object
       * @description OTA 사 판매 가격
       * <br>
       * - 정보성 데이터로 클룩에서만 제공
       * @nullable false
       * @required true
       * @default N/A
       */
      retailPrice: {
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
         * @example 192.35
         * @default N/A
         */
        amount: number;
      };
    };
    /**
     * @type Object[]
     * @description 예약 시 가능한 카드 정보
     * @nullable false
     * @required true
     * @default []
     */
    creditCard: {
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
       * @type Object
       * @description 최소 보증금
       * @nullable false
       * @required true
       * @default N/A
       */
      depositMin: {
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
         * @example 500.00
         * @default N/A
         */
        amount: number;
      };
      /**
       * @type Object
       * @description 최대 보증금
       * @nullable false
       * @required true
       * @default N/A
       */
      depositMax: {
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
         * @example 3000.00
         * @default N/A
         */
        amount: number;
      };
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
    }[];
    /**
     * @type Object
     * @description 취소 수수료 규정
     * @nullable false
     * @required true
     * @default N/A
     */
    cancellationPolicy: {
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
         * @type Object
         * @description 수수료 적용 금액
         * @nullable false
         * @required true
         * @default N/A
         */
        chargeFixedAmount: {
          /**
           * @type String
           * @description 통화(화폐)
           * @nullable true
           * @required true
           * @example null
           * @default N/A
           */
          currency: string | null;
          /**
           * @type Number
           * @description 금액
           * @nullable true
           * @required true
           * @example null
           * @default N/A
           */
          amount: number | null;
        };
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
    };
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
     * @type Object
     * @description 원웨이 금액
     * <br>
     * 정보성 데이터 (정보가 있다면 이미 위 price 객체에 포함되어있을 것임)
     * @nullable false
     * @required true
     * @default N/A
     */
    oneWayRental: {
      /**
       * @type Object
       * @description 원웨이 사전 지불 금액(payablePrice 에 포함되어 있는 금액)
       * @nullable false
       * @required true
       * @default N/A
       */
      paymentOnDeparture: {
        /**
         * @type String
         * @description 통화(화폐)
         * @nullable true
         * @required true
         * @example 'USD'
         * @default N/A
         */
        currency: string | null;
        /**
         * @type Number
         * @description 금액
         * @nullable false
         * @required true
         * @example 1537.29
         * @default 0
         */
        amount: number;
      };
      /**
       * @type Object
       * @description 원웨이 현장 지불 금액
       * @nullable false
       * @required true
       * @default N/A
       */
      paymentOnArrival: {
        /**
         * @type String
         * @description 통화(화폐)
         * @nullable true
         * @required true
         * @example 'USD'
         * @default N/A
         */
        currency: string | null;
        /**
         * @type Number
         * @description 금액
         * @nullable false
         * @required true
         * @example 0.00
         * @default 0
         */
        amount: number;
      };
    };
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
   * @type Object
   * @description 무료 추가운전자 정보
   * @nullable false
   * @required true
   * @default N/A
   */
  freeExtraDriverInfo: {
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
     * @type Number
     * @description 무료 추가운전자 가능 수
     * @nullable false
     * @required true
     * @example 1
     * @default 0
     */
    quantity: number;
  };
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
   * @type Object[]
   * @description free text로 된 대여규정 정보
   * <br>
   * *현재 버젯만 사용하고 있음
   * @nullable false
   * @required true
   * @example []
   * @default []
   */
  policies: {
    /**
     * @type String
     * @description 대여규정 제목
     * @nullable false
     * @required true
     * @example ''
     * @default ''
     */
    title: string;
    /**
     * @type String
     * @description 대여규정 내용
     * @nullable false
     * @required true
     * @example ''
     * @default ''
     */
    description: string;
  }[];
}
