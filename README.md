# react-stupid-grid

Just a stupid mobile-first-only, React, fractional grid, made with flexbox.

## Installation

- `yarn add react-stupid-grid`

## Usage

```jsx
import { Col, Row } from 'react-stupid-grid'

// ...
<Row gutter="30px">
  <Col default="1/1">A</Col>
  <Col default="1/1" tablet="1/2">B</Col>
  <Col default="1/1" tablet="1/2" desktop="1/3">C</Col>
</Row>
// ...
```
