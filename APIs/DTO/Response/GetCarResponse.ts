import { CachedCar } from '../../../CachedCar';
import CommonResponse from './CommonResponse';

/**
 * @interface GetCarResponse
 * @description 캐싱 차량 단일 조회시 사용되는 Response DTO
 */
export interface GetCarResponse extends CommonResponse {
  /**
   * @type CachedCar
   * @description 캐싱된 차량 정보
   * @nullable false
   * @required true
   * @example CachedCar
   * @default N/A
   */
  result: CachedCar;
}
