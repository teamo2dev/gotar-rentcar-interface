/**
 * @interface Car
 * @description 차종
 */
export default interface Car {
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
  id: string;
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
   * @description 차종 모델 명
   * @nullable false
   * @required true
   * @example 'K3'
   * @default N/A
   */
  model: string;
  /**
   * @type String
   * @description 차종 브랜드 명
   * @nullable false
   * @required true
   * @example 'KIA'
   * @default N/A
   */
  brand: string;
  /**
   * @type String
   * @description 차종 상세 설명
   * @nullable false
   * @required false
   * @example 'K3에대한 설명입니다'
   * @default ''
   */
  description: string;
  /**
   * @type Object
   * @description 예약된 차량의 사진
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
   * @description 좌석 수
   * @nullable false
   * @required false
   * @example 4
   * @default -1
   */
  seats: number;
  /**
   * @type Number
   * @description 문 개수
   * @nullable false
   * @required false
   * @example 4
   * @default -1
   */
  doors: number;
  /**
   * @type Number
   * @description 해당 차종에 수납 가능한 최대 수하물
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
}
