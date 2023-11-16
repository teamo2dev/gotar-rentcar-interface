export default interface CommonResponse {
  /**
   * @type Number
   * @description HTTP Status Code
   * @nullable false
   * @required true
   * @example 200
   * @default N/A
   */
  statusCode: number;
  /**
   * @type String
   * @description 응답 당시의 시간
   * - format YYYY-MM-DDTHH:mm:ss.000Z
   * @nullable false
   * @required true
   * @example 2022-10-05T14:48:00.000Z
   * @default N/A
   */
  timestamp: string;
  /**
   * @type String
   * @description Request URL
   * @nullable false
   * @required true
   * @example 'https://..../....'
   * @default N/A
   */
  path: string;
  /**
   * @type String
   * @description API 요청에대한 추적이 가능한 UUID.v4 형태의 String
   * @nullable true
   * @required false
   * @example UUID.v4
   * @default N/A
   */
  trackingId: string | null;
  /**
   * @type Boolean
   * @description 요청에대한 성공,실패 여부
   * @nullable false
   * @required true
   * @example true
   * @default N/A
   */
  ok: boolean;
}
