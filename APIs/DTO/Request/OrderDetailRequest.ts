/**
 * @interface OrderDetailRequest
 * @description 예약 상세 API Request DTO
 */
export default interface OrderDetailRequest {
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
}
