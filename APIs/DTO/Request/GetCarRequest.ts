/**
 * @interface GetCarRequestParam
 * @description 캐싱 차량 단일 조회시 사용되는 Request Param DTO
 */
export interface GetCarRequestParam {
  /**
   * @type String
   * @description 조회할 캐싱된 차량의 ID (Car._id와 동일한 값)
   * @nullable false
   * @required true
   * @example ''
   * @default N/A
   */
  id: string;
}
