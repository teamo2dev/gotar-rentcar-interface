/**
 * @interface Vendor
 * @description vendor 정보
 *  <br>
 *  - API가 1차 벤더일 경우, vendor는 API사 한 개만 존재함.
 *  - API가 2차 벤더일 경우, vendor는 API사에 따름.
 *  - API가 API만 제공하는 인터페이스 벤더일 경우, vendor는 업체에 대응, shop은 지점에 대응함.
 */
export default interface Vendor {
  /**
   * @type String
   * @description Unique identifier of the vendor
   *  <br>
   *  - Available: BG_와 같이 API Identifier + underscore로 시작하는 어떠한 값
   * @nullable false
   * @required true
   * @example BG_001
   * @default N/A
   */
  _id: string;
  /**
   * @type String
   * @description 외부에서 제공된 벤더 이름
   *  <br>
   *  - Available: N/A
   * @nullable false
   * @required true
   * @example Budget
   * @default ""
   */
  name: string;
  /**
   * @type String
   * @description 외부에서 제공된 벤더 코드
   *  <br>
   *  - Available: N/A
   * @nullable false
   * @required true
   * @example BUG
   * @default ""
   */
  code: string;
}
