# 🔥 Optional Assignment

🧱 원티드 프리온보딩 프론트엔드 코스 - 과제

<br/>

## 🌎 배포

[배포 링크]
https://inspiring-brahmagupta-94e9c7.netlify.app/
<br/>

## 👋🏻 팀원 소개

| 이름                                       | 담당 기능                                                          |
| ------------------------------------------ | ------------------------------------------------------------------ |
| [정인권](https://github.com/developjik)    | Tooltip 기능 구현, 상품 목록 기능 구현  |

<br/>

## ✔ 과제 구현 목록
- ToolTip 기능
  - 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
  - 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경
  - 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
  - ToolTip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있 던 ToolTip은 닫히고 새로 클릭한 가구 ToolTip만 노출
  - 가구 정보는 2가지 형식에 맞게 나타나도록 구현
- 상품 목록 기능
  - 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
  - 상품목록 Drag해서 Scroll 가능하게 구현
  - 할인이 있는 품목에 상품목록에 할인율 표시 구현

<br/>

## 🚀 프로젝트 설치 및 실행

<br/>

1. Git Clone

```plaintext
$ git clone https://github.com/developjik/home_decor.git
```

2. 프로젝트 패키지 설치

```plaintext
$ yarn install
```

3. 프로젝트 실행

```plaintext
$ yarn start
```

<br/>

## 🌲 프로젝트 구조
```bash
src
├── App.tsx
├── Common
│   ├── Styles
│   │   ├── _reset.scss
│   │   └── common.scss
│   ├── Types
│   │   └── types.ts
│   └── img
│       └── toggle_before.png
├── Components
│   ├── Header
│   │   ├── Header.tsx
│   │   └── Scss
│   │       └── Header.scss
│   └── HouseIntroduction
│       ├── HouseIntroContent.tsx
│       ├── HouseIntroContentProduct.tsx
│       ├── HouseIntroContentToolTipDescription.tsx
│       ├── HouseIntroContentTooltip.tsx
│       ├── HouseIntroTitle.tsx
│       └── Scss
│           ├── HouseIntroContent.scss
│           ├── HouseIntroContentProduct.scss
│           ├── HouseIntroContentTooltip.scss
│           ├── HouseIntroContentTooltipDescription.scss
│           └── HouseIntroTitle.scss
├── Pages
│   ├── HouseIntroduction.tsx
│   └── Scss
│       └── HouseIntroduction.scss
├── index.tsx
```
<br/>

## 📽 시연 영상




