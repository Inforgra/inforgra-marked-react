---
title: Inforgra React Markdown
date: 2024-02-01
author: Kukjin Kang
image: https://remix.run/blog-images/headers/the-future-is-now.jpg
imageAlt: A globe close-up photo zooming in to the North American continent.
tags:
  - markdown
  - react
  - tailwindcss
  - remix
---

`inforgra-react-markdown` 패키지는 마크다운 문서를 [React](https://react.dev) 프로젝트 에서 사용할 수 있도록 합니다. 이와 함께 문서의 스타일은 [tailwindcss](https://tailwindcss.com) 를 사용합니다. nextjs, remix-run 등의 프로젝트에서 보다 쉽게 마크다운을 사용할 수 있도록 합니다.

마크다운의 문법은 [GFM](https://github.github.com/gfm/) 을 기본으로 하면 다음과 같은 몇 가지 확장 문법을 제공합니다.

- 수식 문법
- 각주 문법
- 경고 문법
- 코드 문법

## 목차

- [설치 방법](#install)
- [사용 방법](#usage)
- [기본 문법](#syntax)
    - [제목](#header)
    - [단락](#header)
    - [단어의 강조](#header)
    - [문장의 인용](#header)
    - [단어의 인용](#header)
    - [링크](#header)
    - [이미지](#header)
    - [목록](#list)
    - [표](#table)
    - [HTML](#html)
- [확장 문법](#extends)
    - [코드](#code)
    - [수식](#math)
    - [각주](#footnote)
    - [경고](#alert)
      


## 설치 방법 <a id="install"></a>

`inforgra-react-markdown` 은 npm 이나 yarn 을 사용하여 설치합니다.

```bash
npm install inforgra-react-markdown
# or
yarn add inforgra-markdown
```

## 사용 방법 <a id="usage"></a>

설치 이후 `Markdown` 사용하여 마크다운 문서를 `React` 컴포넌트 형태로 출력할 수 있습니다. 출력하는 방법은 아래와 같습니다.

```typescript linenumbers
import { Markdown } from "inforgra-react-markdown";

function App() {
  return (
    <Markdown markdown="# Hello World!!!" />
  );
}
```

다음 명령으로 `storybook` 프레임웍에서 컴포넌트를 사용할 수 있습니다.

```bash
npm run stroybook
```

## 기본 문법 <a id="syntax"></a>

### 제목 (Header) <a id="header"></a>

제목을 만들려면 텍스트 앞에 1~6개의 `#` 기호를 추가합니다. 사용하는 `#`의 수에 따라 제목의 수준을 결정합니다.

```markdown preview
# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5
###### Heading6
```

### 글의 서식 (Text Format)

지정한 단어를 굵게, 기울이거나 취소선을 사용하여 강조할 수 있습니다.

| 서식     | 구문          | 예시                  | 출력                |
|:--------:|:-------------:|:---------------------:|:-------------------:|
| 굵게     | `**`          | `**테스트**`          | **테스트**          |
| 기울임   | `*`           | `*테스트*`            | *테스트*            |
| 취소선   | `~~`          | `~~테스트~~`          | ~~테스트~~          |
| 윗첨자   | `<sup></sup>` | `<sup>윗첨자</sup>`   | <sup>윗첨자</sup>   |
| 아래첨자 | `<sub></sub>` | `<sub>아래첨자</sub>` | <sub>아래첨자</sub> |

### 문장의 인용 (Blockquote)

문장을 시작할 때 `>` 를 사용하여 인용문을 작성합니다. 여러개의 문장을 하나의 인용문으로 사용할 수 있으며, 다른 인용문의 중첩도 가능합니다.

```markdown preview
> 이 문장은 인용문 입니다.

> 첫번째 인용문
> 두번째 인용문

> 첫번째 인용문
>
> 두번째 인용문

> 첫번째 인용문
>> 두번째 인용문
```

### 단어의 인용 (quoting word)

`\`` 기호를 사용하여 인용 단어를 작성합니다.

```markdown preview
`인용`은 이렇게 합니다.
```

### 코드 (Code)

```haskell
quicksort :: (Ord a) => [a] -> [a]
quicksort1 [] = []
quicksort (x:xs) =
  let smallerSorted = quicksort [a | a <- xs, a <= x]
      biggerSorted = quicksort [a | a <- xs, a > x]
  in  smallerSorted ++ [x] ++ biggerSorted
```

### 항목 (List)

```markdown preview
- Item1
- Item2
- Item3
```

#### 순서가 있는 항목

```markdown preview
1. Item1
1. Item1
1. Item1
```

#### 중첩 항목

```markdown preview
- Item1
- Item2
- Item3
  1. Item3-1
  1. Item3-2
```

## 이미지 (Image)

```markdown preview
![Naver](http://m-logoproject.naver.com/img/naver_bi.png)
```

## HTML

```markdown 
<ul>
  <li>Item1</li>
  <li>Item2</li>
  <li>Item3</li>
</ul>
```

## Table

```markdown 
```
