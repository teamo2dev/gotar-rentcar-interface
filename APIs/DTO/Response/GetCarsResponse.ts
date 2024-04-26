import { CachedCar } from '../../../CachedCar';
import CommonResponse from './CommonResponse';

/**
 * @interface GetCarsResponse
 * @description 캐싱 차량 목록 조회시 사용되는 Response DTO
 */
export interface GetCarsResponse extends CommonResponse {
  /**
   * @type CachedCar[]
   * @description 캐싱된 차량 정보 배열
   * @nullable false
   * @required true
   * @example CachedCar[]
   * @default N/A
   */
  result: CachedCar[]
}
