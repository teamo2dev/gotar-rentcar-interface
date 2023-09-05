/**
 * @interface Shop
 * @description shop 정보
 */
export default interface Shop {
  /**
   * @type String
   * @description Unique identifier of the shop
   * <br>
   * - Available: BG_와 같이 API Identifier + underscore로 시작하는 어떠한 값
   * @nullable false
   * @required true
   * @example BG_ABC_123
   * @default N/A
   */
  _id: string;
  /**
   * @type String
   * @description Unique identifier of the vendor
   * <br>
   * - Available: BG_와 같이 API Identifier + underscore로 시작하는 어떠한 값
   * @nullable false
   * @required true
   * @example BG_001
   * @default N/A
   */
  _vendorId: string;
  /**
   * @type String
   * @description 외부에서 제공된 업체 혹은 지점 이름
   * <br>
   * - Available: N/A
   * @nullable false
   * @required true
   * @example Budget Hawthorne Ca
   * @default N/A
   */
  name: string;
  /**
   * @type String[]
   * @description 외부에서 제공된 업체 혹은 지점의 연락처
   * <br>
   * - Available: N/A
   * @nullable false
   * @required true
   * @example ['310-970-1792']
   * @default []
   */
  contacts: string[];
  /**
   * @type Object[]
   * @description 외부에서 제공된 업체 혹은 지점의 운영 시간
   * <br>
   * - 운영 시간이 변동되는 API의 경우 "가장 많이 노출된 운영시간"을 사용한다.
   * @nullable false
   * @required true
   * @default []
   */
  operationTimes: {
    /**
     * @type String
     * @description 요일
     * @nullable false
     * @required true
     * @example MON | TUE | WED | THU | FRI | SAT | SUN;
     * @default N/A
     */
    day: string;
    /**
     * @type String
     * @description 운영 시작 시간
     * @nullable false
     * @required true
     * @example 00:00
     * @default 00:00
     */
    open: string;
    /**
     * @type String
     * @description 운영 종료 시간
     * @nullable false
     * @required true
     * @example 22:00
     * @default 00:00
     */
    close: string ;
    /**
     * @type Boolean
     * @description 다음날에 닫는 경우
     * <br>
     * - day가 MON일때 true인 경우, 월요일에 열어서 화요일에 닫는 것을 의미.
     * - day가 MON일때 false인 경우, 월요일에 열어서 월요일에 닫는 것을 의미.
     * @nullable false
     * @required true
     * @example false
     * @default false
     */
    closeNextDay: boolean;
  }[];
  /**
   * @type Object[]
   * @description 외부에서 제공된 업체 혹은 지점의 특정 구간 동안의 운영 시간
   * @nullable false
   * @required true
   * @default []
   */
  seasonalOperationTimes: {
    /**
     * @type String
     * @description 요일
     * @nullable false
     * @required true
     * @example MON | TUE | WED | THU | FRI | SAT | SUN;
     * @default N/A
     */
    day: string;
    /**
     * @type String
     * @description 특정 구간의 시작 일 (YYYY-MM-DD)
     * @nullable false
     * @required true
     * @example 2023-01-01
     * @default N/A
     */
    startDate: string;
    /**
     * @type String
     * @description 특정 구간의 종료 일 (YYYY-MM-DD)
     * @nullable false
     * @required true
     * @example 2023-01-31
     * @default N/A
     */
    endDate: string;
    /**
     * @type String
     * @description 운영 시작 시간
     * @nullable false
     * @required true
     * @example 00:00
     * @default 00:00
     */
    open: string;
    /**
     * @type String
     * @description 운영 종료 시간
     * @nullable false
     * @required true
     * @example 22:00
     * @default 00:00
     */
    close: string;
    /**
     * @type Boolean
     * @description 다음날에 닫는 경우
     * <br>
     * - day가 MON일때 true인 경우, 월요일에 열어서 화요일에 닫는 것을 의미.
     * - day가 MON일때 false인 경우, 월요일에 열어서 월요일에 닫는 것을 의미.
     * @nullable false
     * @required true
     * @example false
     * @default false
     */
    closeNextDay: boolean;
  }[];
  /**
   * @type Object[]
   * @description 외부에서 제공된 업체 혹은 지점의 브레이크 타임 (하루 안에서 운영시간이 나뉠 경우, 중간 비는 시간을 정의)
   * @nullable false
   * @required true
   * @default []
   */
  operationBreakTimes: {
    /**
     * @type String
     * @description 요일
     * @nullable false
     * @required true
     * @example MON | TUE | WED | THU | FRI | SAT | SUN;
     * @default N/A
     */
    day: string;
    /**
     * @type String
     * @description 브레이크 타임 시작 시간
     * @nullable false
     * @required true
     * @example 14:00
     * @default N/A
     */
    start: string;
    /**
     * @type String
     * @description 브레이크 타임 종료 시간
     * @nullable false
     * @required true
     * @example 15:00
     * @default N/A
     */
    end: string;
  }[];
  /**
   * @type Object[]
   * @description 외부에서 제공된 업체 혹은 지점의 특정 구간 동안의 브레이크 타임 (하루 안에서 운영시간이 나뉘는 것이 경우, 중간 비는 시간을 정의)
   * @nullable false
   * @required true
   * @default []
   */
  seasonalOperationBreakTimes: {
    /**
     * @type String
     * @description 요일
     * @nullable false
     * @required true
     * @example MON | TUE | WED | THU | FRI | SAT | SUN;
     * @default N/A
     */
    day: string;
    /**
     * @type String
     * @description 특정 구간의 시작 일 (YYYY-MM-DD)
     * @nullable false
     * @required true
     * @example 2023-01-01
     * @default N/A
     */
    startDate: string;
    /**
     * @type String
     * @description 특정 구간의 종료 일 (YYYY-MM-DD)
     * @nullable false
     * @required true
     * @example 2023-01-31
     * @default N/A
     */
    endDate: string;
    /**
     * @type String
     * @description 브레이크 타임 시작 시간
     * @nullable false
     * @required true
     * @example 14:00
     * @default N/A
     */
    start: string;
    /**
     * @type String
     * @description 브레이크 타임 종료 시간
     * @nullable false
     * @required true
     * @example 15:00
     * @default N/A
     */
    end: string;
  }[];
  /**
   * @type Object[]
   * @description 외부에서 제공된 업체 혹은 지점의 면허 규정
   * @nullable false
   * @required true
   * @default []
   */
  licensePolicies: {
    /**
     * @type boolean
     * @description 외국인 규정인지 여부
     * <br>
     * - true (현지인 기준)
     * - false (외국인 기준)
     * @nullable false
     * @required true
     * @example true
     * @default N/A
     */
    foreigner: boolean;
    /**
     * @type String[]
     * @description 필요한 면허증 및 서류
     * @nullable false
     * @required true
     * @example ["국제운전면허증", "거주지의 실물 운전 면허증"]
     * @default []
     */
    requiredLicenses: string[];
    /**
     * @type String
     * @description 면허 규정 설명
     * @nullable false
     * @required true
     * @example "국제운전면허증(IDP)은 운전면허증의 번역본입니다. 따라서 반드시 운전면허증 원본을 지참하셔야 합니다."
     * @default ""
     */
    description: string;
  }[];
  /**
   * @type Object
   * @description 외부에서 제공된 업체 혹은 지점의 상세 위치
   * @nullable false
   * @required true
   * @default N/A
   */
  location: {
    /**
     * @type String
     * @description 외부에서 제공된 업체 혹은 지점의 위치 이름
     * @nullable false
     * @required true
     * @example "LOS ANGELES INTL AIRPORT"
     * @default ""
     */
    name: string;
    /**
     * @type String
     * @description 외부에서 제공된 업체 혹은 지점의 위치 주소
     * <br>
     * API에서 주소가 상위 주소/하위 주소로 나뉘는 경우, 상위 주소에 해당됩니다. 만약 API에서 구분되지 않는다면, 가장 작은 단위인 streetAddress에 모두 넣어야 합니다.
     * @nullable false
     * @required true
     * @example ""
     * @default ""
     */
    address: string;
    /**
     * @type String
     * @description 외부에서 제공된 업체 혹은 지점의 위치 상세 주소
     * <br>
     * API에서 주소가 상위 주소/하위 주소로 나뉘는 경우, 하위 주소에 해당됩니다.
     * @nullable false
     * @required true
     * @example "9000 AIRPORT BOULEVARD"
     * @default ""
     */
    streetAddress: string;
    /**
     * @type Number
     * @description 외부에서 제공된 업체 혹은 지점의 위치한 구역
     * <br>
     * - 1 : 공항 터미널
     * - 2 : 공항 내부
     * - 3 : 공항 외부
     * - 4 : 국내선 터미널
     * - 5 : 국제선 터미널
     * - -1 : 알수 없음
     * @nullable false
     * @required true
     * @example -1
     * @default -1
     */
    positionType: number;
    /**
     * @type String
     * @description 외부에서 제공된 업체 혹은 지점의 터미널 코드
     * <br>
     * - 터미널에 위치한 업체라면, 해당 공항터미널 코드가 들어갑니다
     * @nullable true
     * @required true
     * @example "T1"
     * @default null
     */
    terminalCode: string | null;
    /**
     * @type string
     * @description 외부에서 제공된 업체 혹은 지점까지 가는 방법
     * @nullable false
     * @required true
     * @example "무료 셔틀버스 이용"
     * @default ""
     */
    wayOfArrival: string;
    /**
     * @type Boolean
     * @description 외부에서 제공된 업체 혹은 지점이 공항에 위치하는지 여부
     * <br>
     * Default: API에서 공항 위치 여부를 내려주지 않는다면 false
     * @nullable false
     * @required true
     * @example false
     * @default false
     */
    isAirportShop: boolean;
    /**
     * @type Number
     * @description 외부에서 제공된 업체 혹은 지점의 위도
     * @nullable false
     * @required true
     * @example 127.001
     * @default N/A
     */
    latitude: number;
    /**
     * @type Number
     * @description 외부에서 제공된 업체 혹은 지점의 경도
     * @nullable false
     * @required true
     * @example 1.234
     * @default N/A
     */
    longitude: number;
  };
  /**
   * @type Object[]
   * @description 외부에서 제공된 업체 혹은 지점의 신분증 검증 규정
   * @nullable false
   * @required true
   * @default N/A
   */
  identificationPolicies: {
    /**
     * @type boolean
     * @description 외국인 규정인지 여부
     * <br>
     * - true (현지인 기준)
     * - false (외국인 기준)
     * @nullable false
     * @required true
     * @example false
     * @default N/A
     */
    foreigner: boolean;
    /**
     * @type String[]
     * @description 외부에서 제공된 업체 혹은 지점의 신분증 검증시 필요한 신분증 및 서류
     * @nullable false
     * @required true
     * @example ["유효한 신분증 카드"]
     * @default []
     */
    requiredDocuments: string[];
  }[];
  /**
   * @type String
   * @description 외부에서 제공된 업체 혹은 지점의 전반적인 공지사항
   * @nullable false
   * @required true
   * @example ""
   * @default ""
   */
  shopGuide: string;
  /**
   * @type Object[]
   * @description 외부에서 제공된 업체 혹은 지점에서 차량 인수 방법
   * @nullable false
   * @required true
   * @default []
   */
  pickupGuide: {
    /**
     * @type String
     * @description 외부에서 제공된 업체 혹은 지점에서 차량 인수 방법 제목
     * @nullable false
     * @required true
     * @example "pickup information"
     * @default ""
     */
    title: string;
    /**
     * @type String
     * @description 외부에서 제공된 업체 혹은 지점에서 차량 인수 방법 상세 내용
     * @nullable false
     * @required true
     * @example "Exit baggage claim and follow the sign to 'Ground Transportation' and wait at the shuttle bus pick up area."
     * @default ""
     */
    content: string;
  }[];
  /**
   * @type Object[]
   * @description 외부에서 제공된 업체 혹은 지점에서 차량 반납 방법
   * @nullable false
   * @required true
   * @default []
   */
  returnGuide: {
    /**
     * @type String
     * @description 외부에서 제공된 업체 혹은 지점에서 차량 반납 방법 제목
     * @nullable false
     * @required true
     * @example "return information"
     * @default ""
     */
    title: string;
    /**
     * @type String
     * @description 외부에서 제공된 업체 혹은 지점에서 차량 반납 방법 상세 내용
     * @nullable false
     * @required true
     * @example "Exit baggage claim and follow the sign to 'Ground Transportation' and wait at the shuttle bus pick up area."
     * @default ""
     */
    content: string;
  }[];
  /**
   * @type String
   * @description 외부에서 제공된 업체 혹은 지점 공휴일 관련 공지사항
   * @nullable false
   * @required true
   * @example ""
   * @default ""
   */
  holidayNotice: string;
  /**
   * @type String
   * @description 외부에서 제공된 업체 혹은 지점 공지사항
   * @nullable false
   * @required true
   * @example ""
   * @default ""
   */
  specialNotice: string;
  /**
   * @type Object[]
   * @description 외부에서 제공된 업체 혹은 지점 추가요금이 부과되는 운영 시간
   * @nullable false
   * @required true
   * @default []
   */
  chargedTimes: {
    /**
     * @type String
     * @description 요일
     * @nullable false
     * @required true
     * @example MON | TUE | WED | THU | FRI | SAT | SUN;
     * @default N/A
     */
    day: string;
    /**
     * @type String
     * @description 추가 요금이 부과되는 운영 시작 시간
     * @nullable false
     * @required true
     * @example 12:00
     * @default N/A
     */
    open: string;
    /**
     * @type String
     * @description 추가 요금이 부과되는 운영 종료 시간
     * @nullable false
     * @required true
     * @example 14:00
     * @default N/A
     */
    close: string;
  }[];
  /**
   * @type Object
   * @description 외부에서 제공된 업체 혹은 지점 추가요금 운영시간에 부과되는 추가 요금
   * @nullable true
   * @required true
   * @default null
   */
  chargedTimePrice: {
    /**
     * @type String
     * @description 추가 요금 통화
     * @nullable false
     * @required true
     * @example USD
     * @default N/A
     */
    currency: string;
    /**
     * @type String
     * @description 부과되는 추가 요금
     * @nullable false
     * @required true
     * @example 10
     * @default 0
     */
    amount: number;
  } | null;
  /**
   * @type Object
   * @description 반납 업체 정보
   * <br>
   * 구조는 Shop 그 자체와 동일하다. 차량리스트에서는 해당 객체가 아예 없으며, 차량 상세, 예약 상세에서만 존재할 수 있다.
   * @nullable false
   * @required true
   * @default N/A
   */
  returnShop: {};
}
