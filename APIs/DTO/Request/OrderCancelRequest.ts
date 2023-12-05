/**
 * @interface OrderCancelRequestParam
 * @description 예약 취소시 사용되는 Request Query DTO
 */
export interface OrderCancelRequestParam {
  /**
   * @type String
   * @description 예약 취소할 주문의 고유 ID
   * <br>
   * 해당 주문건으로 생성된 예약 ID를 받는다
   * OrderCreateResponse에서 받는 `globalApiOrderId`와 동일
   * @nullable false
   * @required true
   * @example 'BLA1111'
   * @default N/A
   */
  orderId: string;
}
