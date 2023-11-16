# Global OTA RequestAndResponse (GOTAR)
> 글로벌 OTA 렌터카 API들의 대한 통합 규격을 정의하는 Repository

## APIs
> 글로벌 OTA 렌터카 API들에대한 DTO Interface

  - `${API Name}`Request
    - `${API Name}`의 요청 값에 대한 정의

  - `${API Name}`Response
    - `${API Name}`의 응답 값에 대한 정의

## Interfaces
> 글로벌 OTA 렌터카 API에 사용되는 Interface

- `Required`: 아래 정의되는 `Interface`의 각 `Key`는 모두 필수 값입니다.
  - 작업하는 API에서 Key에대한 Value값을 정의할 수 없다면 아래 기본값을 넣어야합니다. __(Nullable인경우 Null)__
  - 주석 내용 중 __`@required`: true__ 인 경우 기본값을 넣을 수 없는 `Key`입니다.
  - 기본값을 할당할 수 없는 `Key`는 기본값을 상수로 만들어 할당해야합니다.
    - `String` : null or ''
    - `Number` : null or 0
    - `Boolean` : false
    - `Array` : [] (Empty Array)

### Comment Component
  - `@type`
    - String, Boolean등 Component에대한 타입
  - `@description`
    - Component에대한 설명
  - `@nullable`
    - Null허용 여부
  - `@required`
    - Interface에서 기본값이 불가능한 필수적으로 정의해야하는 값인지에대한 여부
  - `@example`
    - Component 예시값 (실제 값과 최대한 비슷하게), 열거 가능한 값인 경우 열거 가능한 값을 전부 작성.
  - `@default`
    - Component 기본값, 불가능한 경우 `N/A`

### Interface
  - [`Car`](Car.ts)
    - 차종에대한 정의 (실제 판매되는 렌터카에대한 `차종` EX: `K5`등)

  - [`Vehicle`](Vehicle.ts)
    - 차량에대한 정의 (실제 판매되는 렌터카 상품)

  - [`Affiliate`](Affiliate.ts)
    - 업체에대한 정의

  - [`Vendor`](Vendor.ts)
    - `Budget`, `Avis`와 같은 업체 브랜드

  - [`Shop`](Shop.ts)
    - `Budget LA공항점`과 같은 업체의 지점

  - [`Order`](Order.ts)
    - `Vehicle`에대한 실제 주문 내용

  - `Reservation`
    - `Carmore` 운영에 사용되는 예약에대한 `Interface`

### APIs
> Global API에서 필수적으로 제공해야하는 API

  - `Vehicle`
    - `차량 목록`, `차량 상세`를 제공해야 한다.
      - `차량 목록`
        - [Request](./APIs/DTO/Request/VehicleListRequest.ts)
        - [Response](./APIs/DTO/Response/VehicleListResponse.ts)
      - `차량 상세`
        - [Request](./APIs/DTO/Request/VehicleDetailRequest.ts)
        - [Response](./APIs/DTO/Response/VehicleDetailResponse.ts)
  - `Order`
    - `예약 생성`, `예약 상세`를 제공해야 한다.
      - `예약 생성`
        - [Request](./APIs/DTO/Request/OrderCreateRequest.ts)
        - [Response](./APIs/DTO/Response/OrderCreateResponse.ts)
      - `예약 상세`
        - [Request](./APIs/DTO/Request/OrderDetailRequest.ts)
        - [Response](./APIs/DTO/Response/OrderDetailResponse.ts)
