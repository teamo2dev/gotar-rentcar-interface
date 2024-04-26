import { Reservation } from '../../../Reservation';
import CommonResponse from './CommonResponse';

/**
 * @interface GetReservationsResponse
 * @description 예약 목록 조회시 사용되는 Response DTO
 */
export interface GetReservationsResponse extends CommonResponse {
  /**
   * @type Reservation[]
   * @description 조회 성공한 예약 목록
   * @nullable false
   * @required true
   * @example Reservation[]
   * @default N/A
   */
  result: Reservation[];
}
