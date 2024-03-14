---
title: Inforgra Marked React
date: 2024-02-01
author: Kukjin Kang
tags:
  - markdown
  - react
  - tailwindcss
  - remix
---

## 설치 방법

```bash
npm install inforgra-marked-react
```

## 사용 방법

```typescript
import { Markdown } from "inforgra-marked-react";

function App() {
  return (
    <Markdown markdown="# Hello World!!!" />
  );
}
```

## 주요요소

### 표제 (Headings)

```markdown preview
# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5
###### Heading6
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

```markdown preview
<ul>
  <li>Item1</li>
  <li>Item2</li>
  <li>Item3</li>
</ul>
```

## Table

```markdown preview
| Default | Left | Center | Right |
|---|:---|:---:|---:|
| Row | Row | Row | Row |
| Row | Row | Row | Row |
```
