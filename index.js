"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = exports.breakpoints = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: ", ";\n  margin-right: ", ";\n\n  width: ", ";\n\n  flex: ", ";\n\n  @media (min-width: ", ") {\n    width: ", ";\n\n    flex: ", ";\n  }\n\n  @media (min-width: ", ") {\n    width: ", ";\n\n    flex: ", ";\n  }\n"]);

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
  tablet: '425px',
  desktop: '1024px'
};
exports.breakpoints = breakpoints;
var defaultGutter = '2rem';

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
}, function (_ref5) {
  var def = _ref5["default"];

  if (def === 'auto') {
    return 'auto';
  } else {
    return function (_ref6) {
      var gutter = _ref6.gutter;
      return "calc(100% * ".concat(def, " - ").concat(gutter, ")");
    };
  }
}, function (_ref7) {
  var def = _ref7["default"];

  if (def === 'auto') {
    return '1';
  }
}, breakpoints.tablet, function (_ref8) {
  var tablet = _ref8.tablet;

  if (tablet === 'auto') {
    return 'auto';
  } else {
    return function (_ref9) {
      var gutter = _ref9.gutter;
      return "calc(100% * ".concat(tablet, " - ").concat(gutter, ")");
    };
  }
}, function (_ref10) {
  var tablet = _ref10.tablet;

  if (tablet === 'auto') {
    return '1';
  }
}, breakpoints.md, function (_ref11) {
  var desktop = _ref11.desktop;

  if (desktop === 'auto') {
    return 'auto';
  } else {
    return function (_ref12) {
      var gutter = _ref12.gutter;
      return "calc(100% * ".concat(desktop, " - ").concat(gutter, ")");
    };
  }
}, function (_ref13) {
  var desktop = _ref13.desktop;

  if (desktop === 'auto') {
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
      def = _ref15["default"],
      tablet = _ref15.tablet,
      desktop = _ref15.desktop,
      children = _ref15.children;
  return React.createElement(StyledCol, {
    gutter: gutter,
    "default": def,
    tablet: tablet,
    desktop: desktop
  }, children);
};

exports.Col = Col;
