"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = exports.breakpoints = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: ", ";\n  margin-right: ", ";\n\n  @media (min-width: ", ") {\n    width: ", ";\n\n    flex: ", ";\n  }\n\n  @media (min-width: ", ") {\n    width: ", ";\n\n    flex: ", ";\n  }\n\n  @media (min-width: ", ") {\n    width: ", ";\n\n    flex: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: ", ";\n  margin-right: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var breakpoints = {
  sm: '425px',
  md: '768px',
  lg: '1440px'
};
exports.breakpoints = breakpoints;
var defaultGutter = '1rem';

var StyledRow = _styled["default"].div(_templateObject(), function (_ref) {
  var gutter = _ref.gutter;
  return "calc(-".concat(gutter, " / 2)");
}, function (_ref2) {
  var gutter = _ref2.gutter;
  return "calc(-".concat(gutter, " / 2)");
});

var StyledCol = _styled["default"].div(_templateObject2(), function (_ref3) {
  var gutter = _ref3.gutter;
  return "calc(".concat(gutter, " / 2)");
}, function (_ref4) {
  var gutter = _ref4.gutter;
  return "calc(".concat(gutter, " / 2)");
}, breakpoints.sm, function (_ref5) {
  var sm = _ref5.sm;

  if (sm === 'auto') {
    return 'auto';
  } else {
    return function (_ref6) {
      var gutter = _ref6.gutter;
      return "calc(100% * ".concat(sm, " - ").concat(gutter, ")");
    };
  }
}, function (_ref7) {
  var sm = _ref7.sm;

  if (sm === 'auto') {
    return '1';
  }
}, breakpoints.md, function (_ref8) {
  var md = _ref8.md;

  if (md === 'auto') {
    return 'auto';
  } else {
    return function (_ref9) {
      var gutter = _ref9.gutter;
      return "calc(100% * ".concat(md, " - ").concat(gutter, ")");
    };
  }
}, function (_ref10) {
  var md = _ref10.md;

  if (md === 'auto') {
    return '1';
  }
}, breakpoints.lg, function (_ref11) {
  var lg = _ref11.lg;

  if (lg === 'auto') {
    return 'auto';
  } else {
    return function (_ref12) {
      var gutter = _ref12.gutter;
      return "calc(100% * ".concat(lg, " - ").concat(gutter, ")");
    };
  }
}, function (_ref13) {
  var lg = _ref13.lg;

  if (lg === 'auto') {
    return '1';
  }
});

var Row = function Row(_ref14) {
  var _ref14$gutter = _ref14.gutter,
      gutter = _ref14$gutter === void 0 ? defaultGutter : _ref14$gutter,
      children = _ref14.children;
  return React.createElement(StyledRow, {
    gutter: gutter
  }, React.Children.map(children, function (child, index) {
    return React.cloneElement(child, {
      index: index,
      gutter: gutter
    });
  }));
};

exports.Row = Row;

var Col = function Col(_ref15) {
  var gutter = _ref15.gutter,
      sm = _ref15.sm,
      md = _ref15.md,
      lg = _ref15.lg,
      children = _ref15.children;
  return React.createElement(StyledCol, {
    gutter: gutter,
    sm: sm,
    md: md,
    lg: lg
  }, children);
};

exports.Col = Col;
