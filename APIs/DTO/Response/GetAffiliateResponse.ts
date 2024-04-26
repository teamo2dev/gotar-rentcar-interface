import Affiliate from '../../../Affiliate';
import CommonResponse from './CommonResponse';

/**
 * @interface GetAffiliateResponse
 * @description 업체 단일 조회시 사용되는 Response DTO
 */
export default interface GetAffiliateResponse extends CommonResponse {
  /**
   * @type Affiliate
   * @description 업체 정보
   * @nullable false
   * @required true
   * @example Affiliate
   * @default N/A
   */
  result: Affiliate;
}
