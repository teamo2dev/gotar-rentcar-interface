import Affiliate from './Affiliate';
import { CachedCar } from './CachedCar';
import { CancellationPolicy, CreditCard, Insurance } from './Vehicle';

/**
 * @interface Reservation
 * @description 예약 정보
 */
export interface Reservation {
  /**
   * @type string
   * @description 예약 번호 (카모아에서 전달 받은 예약 번호)
   * <br>
   * - Available: BG_와 같이 API Identifier + underscore로 시작하는 어떠한 값 (카모아에서 저장한 예약에대한 고유 번호)
   * @nullable false
   * @required true
   * @example BG999999999
   * @default N/A
   */
  reservationNumber: string;
  /**
   * @type CachedCar
   * @description 예약한 차량의 차종 정보
   * @nullable false
   * @required true
   * @example CachedCar
   * @default N/A
   */
  car: CachedCar;
  /**
   * @type Affiliate
   * @description 예약한 업체 정보
   * @nullable false
   * @required true
   * @example Affiliate
   * @default N/A
   */
  shop: Affiliate;
  /**
   * @type ReservationVehicle
   * @description 예약한 차량 정보
   * @nullable false
   * @required true
   * @example ReservationVehicle
   * @default N/A
   */
  vehicle:ReservationVehicle;
}

/**
 * @interface ReservationVehicle
 * @description 예약한 차량 정보
 */
export interface ReservationVehicle {
  fuelPolicy: string;
  /**
   * @type Insurance
   * @description 예약 된 차량의 보험
   * <br>
   * - 운영 시간이 변동되는 API의 경우 "가장 많이 노출된 운영시간"을 사용한다.
   * @nullable false
   * @required true
   * @example Insurance
   * @default N/A
   */
  insurance: Insurance;
  /**
   * @type Number
   * @description 예약 된 차량의 예약 가능 최소 연령
   * @nullable false
   * @required true
   * @example 21
   * @default N/A
   */
  minimumAge: number;
  /**
   * @type Number
   * @description 예약 된 차량의 최소 무료 연령
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
   * @description 예약 된 차량의 예약 가능 최대 연령
   * @nullable false
   * @required true
   * @example 80
   * @default N/A
   */
  maximumAge: number;
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
  /**
   * @type CancellationPolicy[]
   * @description 예약 된 차량의 취소수수료 정보
   * <br>
   * 예약 당시 정보를 저장하여 보내야 한다.
   * @nullable false
   * @required true
   * @example CancellationPolicy
   * @default N/A
   */
  cancellationPolicy: CancellationPolicy;
}
