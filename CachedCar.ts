/**
 * @interface CachedCar
 * @description 서버에서 캐싱 차종
 */
export interface CachedCar {
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
  id: string,
  /**
   * @type String
   * @description 렌터카의 주요 특징을 식별하는 네글자의 코드
   * <br>
   * - Reference: https://car-hire-centre.co.uk/sipp-codes.html
   * @nullable false
   * @required false
   * @example 'CBAD'
   * @default ''
   */
  sippCode: string,
  /**
   * @type String
   * @description 차종 모델 명
   * @nullable false
   * @required true
   * @example 'K3'
   * @default N/A
   */
  model: string,
  /**
   * @type String
   * @description 차종 브랜드 명
   * @nullable false
   * @required true
   * @example 'KIA'
   * @default N/A
   */
  brand: string,
  /**
   * @type String
   * @description 차종 상세 설명
   * @nullable false
   * @required false
   * @example 'K3에대한 설명입니다'
   * @default ''
   */
  description: string,
  /**
   * @type String
   * @description 예약된 차량의 메인 이미지
   * @nullable false
   * @required false
   * @example ''
   * @default ''
   */
  primaryImage: string,
  /**
   * @type String[]
   * @description 예약된 차량의 메인 이미지를 포함한 해당 차종의 모든 사진
   * @nullable false
   * @required false
   * @example []
   * @default []
   */
  images: string[],
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
}
