import Affiliate from '../../../Affiliate';
import CommonResponse from './CommonResponse';

/**
 * @interface GetAffiliatesResponse
 * @description 업체 목록 조회시 사용되는 Response DTO
 */
export default interface GetAffiliatesResponse extends CommonResponse {
  /**
   * @type Affiliate[]
   * @description 업체 목록 배열
   * @nullable false
   * @required true
   * @example Affiliate[]
   * @default N/A
   */
  result: Affiliate[];
}
