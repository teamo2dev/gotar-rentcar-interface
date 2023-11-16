import CommonResponse from './CommonResponse';

/**
 * @interface OrderCreateResponse
 * @description 예약 생성 Response DTO
 */
export default interface OrderCreateResponse extends CommonResponse {
  result: {
    /**
     * @type String
     * @description carmore-common-api에서 식별하는 예약건의 고유 번호
     * - $ {GlobalApiChannel Prefix}${OrderNumber}
     * @nullable false
     * @required true
     * @example BG1231312
     * @default N/A
     */
    reservationNumber: string;
    /**
     * @type Boolean
     * @description 예약 성공 여부
     * @nullable false
     * @required true
     * @example true
     * @default N/A
     */
    isSuccess: boolean;
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
    globalApiOrderId: string;
    /**
     * @type String
     * @description 외부 API에서 전달받은 예약건의 확정 번호
     * <br>
     * - 예약 번호와 예약 확정번호가 동일하다면 예약 확정번호에 예약 번호를 넣는다.
     * @nullable false
     * @required true
     * @example ''
     * @default N/A
     */
    confirmationId: string;
    /**
     * @type Boolean
     * @description 예약건이 확정이 됐는지에대한 여부
     * @nullable false
     * @required true
     * @example true
     * @default N/A
     */
    isConfirmed: boolean;
    /**
     * @type Number
     * @description 예약확정 최대 소요 시간
     * <br>
     * 0은 즉시 확정을 의미한다
     * @nullable false
     * @required true
     * @example 0
     * @default N/A
     */
    confirmInHours: number;
    /**
     * @type String
     * @description API 요청에대한 추적이 가능한 UUID.v4 형태의 String
     * <br>
     * CommonResponse에 있는 trackingId와 같은 ID이다.
     * @nullable true
     * @required false
     * @example UUID.v4
     * @default N/A
     */
    orderCreateTrackingId: string;
  };
}
