import CommonResponse from './CommonResponse';
import Order from '../../../Order';

/**
 * @interface OrderDetailResponse
 * @description 예약 상세 Response DTO
 *
 */
export default interface OrderDetailResponse extends CommonResponse {
  /**
   * @type Order
   * @description 예약 상세
   * <br>
   * Order Interface와 동일하다
   * @nullable false
   * @required true
   * @example Order
   * @default N/A
   */
  result: Order;
}
