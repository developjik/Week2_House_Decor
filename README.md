# ๐ฅ Optional Assignment
<br/>

๐งฑ ์ํฐ๋ ํ๋ฆฌ์จ๋ณด๋ฉ ํ๋ก ํธ์๋ ์ฝ์ค - ๊ณผ์ 
<br/>
## ๐ ๋ฐฐํฌ

[๋ฐฐํฌ ๋งํฌ] https://inspiring-brahmagupta-94e9c7.netlify.app/
<br/>
## ๐๐ป ํ์ ์๊ฐ

| ์ด๋ฆ                                       | ๋ด๋น ๊ธฐ๋ฅ                                                          |
| ------------------------------------------ | ------------------------------------------------------------------ |
| [์ ์ธ๊ถ](https://github.com/developjik)    | Tooltip ๊ธฐ๋ฅ ๊ตฌํ, ์ํ ๋ชฉ๋ก ๊ธฐ๋ฅ ๊ตฌํ  |
<br/>

## โ ๊ณผ์  ๊ตฌํ ๋ชฉ๋ก
- ToolTip ๊ธฐ๋ฅ
  - ๊ฐ๊ตฌ ์ ๋ณด๊ฐ ์๋ ๊ณณ์ ๋๋ณด๊ธฐ ๋ชจ์์ ๋ฒํผ์ ํ์
  - ๋๋ณด๊ธฐ๋ฅผ ํด๋ฆญํ๋ฉด ์ํ์ ๋ณด tool tip ์ถ๋ ฅ๋๋ฉด์ ๋๋ณด๊ธฐ๋ชจ์์ด ๋ซ๊ธฐ ๋ฒํผ์ผ๋ก ๋ณ๊ฒฝ
  - ๋ซ๊ธฐ ๋ฒํผ์ ํด๋ฆญํ๋ฉด tool tip์ ์์ ๊ณ  ๋๋ณด๊ธฐ ๋ฒํผ์ผ๋ก ๋ณ๊ฒฝ
  - ToolTip์ด ๋ธ์ถ๋๊ณ  ์๋ ์ํ์์ ๋ค๋ฅธ ๊ฐ๊ตฌ๋ฅผ ์ ํํ๋ฉด ๋ธ์ถ๋๊ณ  ์ ๋ ToolTip์ ๋ซํ๊ณ  ์๋ก ํด๋ฆญํ ๊ฐ๊ตฌ ToolTip๋ง ๋ธ์ถ
  - ๊ฐ๊ตฌ ์ ๋ณด๋ 2๊ฐ์ง ํ์์ ๋ง๊ฒ ๋ํ๋๋๋ก ๊ตฌํ
  - ToolTip์ด ์์น์ ๋ฐ๋ผ์ ๋ํ๋๋ ๋ชจ์ ๋ค๋ฅธ๊ฒ์ ์์น์ ๋ฐ๋ผ์ ๊ตฌํ
- ์ํ ๋ชฉ๋ก ๊ธฐ๋ฅ
  - ์ํ๋ชฉ๋ก์์ ํด๋น ๊ฐ๊ตฌ๊ฐ ์ ํ๋์์ผ๋ฉด tool tip ์ถ๋ ฅ
  - ์ํ๋ชฉ๋ก Dragํด์ Scroll ๊ฐ๋ฅํ๊ฒ ๊ตฌํ
  - ํ ์ธ์ด ์๋ ํ๋ชฉ์ ์ํ๋ชฉ๋ก์ ํ ์ธ์จ ํ์ ๊ตฌํ
<br/>

## ๐ ํ๋ก์ ํธ ์ค์น ๋ฐ ์คํ

1. Git Clone

```plaintext
$ git clone https://github.com/developjik/home_decor.git
```

2. ํ๋ก์ ํธ ํจํค์ง ์ค์น

```plaintext
$ yarn install
```

3. ํ๋ก์ ํธ ์คํ

```plaintext
$ yarn start
```

<br/>

## ๐ฒ ํ๋ก์ ํธ ๊ตฌ์กฐ
```bash
src
โโโ App.tsx
โโโ Common
โย ย  โโโ Styles
โย ย  โย ย  โโโ _reset.scss
โย ย  โย ย  โโโ common.scss
โย ย  โโโ Types
โย ย  โย ย  โโโ types.ts
โย ย  โโโ img
โย ย      โโโ toggle_before.png
โโโ Components
โย ย  โโโ Header
โย ย  โย ย  โโโ Header.tsx
โย ย  โย ย  โโโ Scss
โย ย  โย ย      โโโ Header.scss
โย ย  โโโ HouseIntroduction
โย ย      โโโ HouseIntroContent.tsx
โย ย      โโโ HouseIntroContentProduct.tsx
โย ย      โโโ HouseIntroContentToolTipDescription.tsx
โย ย      โโโ HouseIntroContentTooltip.tsx
โย ย      โโโ HouseIntroTitle.tsx
โย ย      โโโ Scss
โย ย          โโโ HouseIntroContent.scss
โย ย          โโโ HouseIntroContentProduct.scss
โย ย          โโโ HouseIntroContentTooltip.scss
โย ย          โโโ HouseIntroContentTooltipDescription.scss
โย ย          โโโ HouseIntroTitle.scss
โโโ Pages
โย ย  โโโ HouseIntroduction.tsx
โย ย  โโโ Scss
โย ย      โโโ HouseIntroduction.scss
โโโ index.tsx
```
<br/>

##  ๐ ํ์ด์ง ๊ตฌ์กฐ
![House_Decor drawio](https://user-images.githubusercontent.com/67889389/152349011-ce8e1a79-4e38-4303-9f15-c3d36611e781.png)

<br/>

## ๐ฝ ์์ฐ ์์

- ToolTips ๊ธฐ๋ฅ1 : ๋๋ณด๊ธฐ๋ฅผ ํด๋ฆญํ๋ฉด ์ํ์ ๋ณด tool tip ์ถ๋ ฅ๋๋ฉด์ ๋๋ณด๊ธฐ๋ชจ์์ด ๋ซ๊ธฐ ๋ฒํผ์ผ๋ก ๋ณ๊ฒฝ

  ![tooltip1](https://user-images.githubusercontent.com/67889389/152312776-a1bd2d2a-a7b0-4a88-9c84-62ea51cfe290.gif)
  <br/>
  
- ToolTip ๊ธฐ๋ฅ2 : ToolTip์ด ๋ธ์ถ ์ํ์์ ๋ค๋ฅธ ๊ฐ๊ตฌ๋ฅผ ์ ํ์ ๋ธ์ถ ToolTip์ ๋ซํ๊ณ  ์๋ก์ด ToolTip๋ง ๋ธ์ถ

  ![tooltip2](https://user-images.githubusercontent.com/67889389/152350973-81082f41-55cc-4bb5-b454-597aeae43061.gif)
  <br/>

- ์ํ ๋ชฉ๋ก ๊ธฐ๋ฅ1 : ์ํ๋ชฉ๋ก์์ ํด๋น ๊ฐ๊ตฌ๊ฐ ์ ํ๋์์ผ๋ฉด tool tip ์ถ๋ ฅ
  
  ![product](https://user-images.githubusercontent.com/67889389/152314685-955b4a2c-1d4c-4995-b2c1-6f392247a92a.gif)
  <br/>

- ์ํ ๋ชฉ๋ก ๊ธฐ๋ฅ2 : ์ํ๋ชฉ๋ก Dragํด์ Scroll ๊ฐ๋ฅํ๊ฒ ๊ตฌํ

  ![product-scroll](https://user-images.githubusercontent.com/67889389/152314703-8c5006a9-b35b-441e-a410-5879caa3e5ee.gif)
  <br/>



