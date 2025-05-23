import {
  Guide,
  IdentificationPolicy,
  LicensePolicy,
  OperationBreakTime,
  OperationTime,
  SeasonalOperationBreakTime,
  SeasonalOperationTime,
  Location,
} from './Shop';
import {CancellationPolicy} from "./Vehicle";

/**
 * @interface Affiliate
 * @description Affiliate
 */
export default interface Affiliate {
  /**
   * @type String
   * @description Unique identifier of the shop
   * <br>
   * - Available: BG_와 같이 API Identifier + underscore로 시작하는 어떠한 값
   * @nullable false
   * @required true
   * @example BG_ABC_123
   * @default N/A
   */
  id: string;
  /**
   * @type String
   * @description Unique identifier of the vendor
   * <br>
   * - Available: BG_와 같이 API Identifier + underscore로 시작하는 어떠한 값
   * @nullable false
   * @required true
   * @example BG_001
   * @default N/A
   */
  vendorId: string;
  /**
   * @type String
   * @description 외부에서 제공된 업체 혹은 지점 이름
   * <br>
   * - Available: N/A
   * @nullable false
   * @required true
   * @example Budget Hawthorne Ca
   * @default N/A
   */
  name: string;
  /**
   * @type String[]
   * @description 외부에서 제공된 업체 혹은 지점의 연락처
   * <br>
   * - Available: N/A
   * @nullable false
   * @required true
   * @example ['310-970-1792']
   * @default []
   */
  contacts: string[];
  /**
   * @type OperationTime[]
   * @description 외부에서 제공된 업체 혹은 지점의 운영 시간
   * <br>
   * - 운영 시간이 변동되는 API의 경우 "가장 많이 노출된 운영시간"을 사용한다.
   * @nullable false
   * @required true
   * @example OperationTime[]
   * @default []
   */
  operationTimes: OperationTime[];
  /**
   * @type SeasonalOperationTime[]
   * @description 외부에서 제공된 업체 혹은 지점의 특정 구간 동안의 운영 시간
   * @nullable false
   * @required true
   * @example SeasonalOperationTime[]
   * @default []
   */
  seasonalOperationTimes: SeasonalOperationTime[];
  /**
   * @type OperationBreakTime[]
   * @description 외부에서 제공된 업체 혹은 지점의 브레이크 타임 (하루 안에서 운영시간이 나뉠 경우, 중간 비는 시간을 정의)
   * @nullable false
   * @required true
   * @example OperationBreakTime[]
   * @default []
   */
  operationBreakTimes: OperationBreakTime[];
  /**
   * @type SeasonalOperationBreakTime[]
   * @description 외부에서 제공된 업체 혹은 지점의 특정 구간 동안의 브레이크 타임 (하루 안에서 운영시간이 나뉘는 것이 경우, 중간 비는 시간을 정의)
   * @nullable false
   * @required true
   * @example SeasonalOperationBreakTime[]
   * @default []
   */
  seasonalOperationBreakTimes: SeasonalOperationBreakTime[];
  /**
   * @type LicensePolicy[]
   * @description 외부에서 제공된 업체 혹은 지점의 면허 규정
   * @nullable false
   * @required true
   * @example LicensePolicy[]
   * @default []
   */
  licensePolicies: LicensePolicy[];
  /**
   * @type Location
   * @description 외부에서 제공된 업체 혹은 지점의 상세 위치
   * @nullable false
   * @required true
   * @example Location
   * @default N/A
   */
  location: Location;
  /**
   * @type IdentificationPolicy[]
   * @description 외부에서 제공된 업체 혹은 지점의 신분증 검증 규정
   * @nullable false
   * @required true
   * @example IdentificationPolicy[]
   * @default N/A
   */
  identificationPolicies: IdentificationPolicy[];
  /**
   * @type String
   * @description 외부에서 제공된 업체 혹은 지점의 전반적인 공지사항
   * @nullable false
   * @required true
   * @example ""
   * @default ""
   */
  shopGuide: string;
  /**
   * @type Guide[]
   * @description 외부에서 제공된 업체 혹은 지점에서 차량 인수 방법
   * @nullable false
   * @required true
   * @example Guide[]
   * @default []
   */
  pickupGuide: Guide[];
  /**
   * @type Guide[]
   * @description 외부에서 제공된 업체 혹은 지점에서 차량 반납 방법
   * @nullable false
   * @required true
   * @example Guide[]
   * @default []
   */
  returnGuide: Guide[];
  /**
   * @type CancellationPolicy
   * @description 업체의 취소수수료 규정 정보
   * <br>
   * 업체 단위로 발생할 수 있는 취소수수료의 정책 정보가 존재할 경우 반환
   * @nullable true
   * @required false
   * @example CancellationPolicy
   * @default N/A
   */
  cancellationPolicy: CancellationPolicy;
}
