/**
 * @interface GetReservationsRequest
 * @description 예약 목록 조회시 사용 되는 Request Query DTO
 */
export interface GetReservationsRequestQuery {
  /**
   * @type String
   * @description 조회할 예약의 카모아 예약 번호 (,로 각각의 예약임을 나타낸다)
   * - Available: OrderCreateRequestBody에서 받은 carmore-common-api에서 식별하는 예약건의 고유 번호
   * @nullable false
   * @required true
   * @example 'BG123,BG124,BG125'
   * @default N/A
   */
  reservationNumbers: string;
}
