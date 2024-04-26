/**
 * @interface GetAffiliateRequestParam
 * @description 업체 단일 조회시 사용되는 Request Param DTO
 */
export default interface GetAffiliateRequestParam {
  /**
   * @type String
   * @description 조회할 캐싱된 업체의 ID (Shop._id와 동일한 값)
   * @nullable false
   * @required true
   * @example ''
   * @default N/A
   */
  id: string;
}
