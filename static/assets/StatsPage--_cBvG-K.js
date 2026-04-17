import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, u as useTranslation, p as parseUTCDate, B as Button, ae as Eye, a as useToast, k as useAuth, d as useQuery, L as LoaderCircle, i as FileText, o as Calendar, A as ChevronDown, Z as Zap, Q as CircleCheckBig, _ as CircleX, T as TriangleAlert, f as api, D as formatDuration } from "./index-CeSodUhS.js";
import { E as createSelector, ak as pickAxisType, al as pickAxisId, am as itemAxisPredicate, an as selectBaseAxis, ao as combineGraphicalItemsSettings, ap as combineGraphicalItemsData, aq as selectChartDataAndAlwaysIgnoreIndexes, ar as combineDisplayedData, as as combineAppliedValues, a2 as getValueByDataKey, at as selectAllErrorBarSettings, au as combineDomainOfAllAppliedNumericalValuesIncludingErrorValues, av as selectDomainDefinition, aw as selectDomainFromUserPreference, F as selectChartLayout, ax as combineNumericalDomain, ay as selectStackOffsetType, az as combineAxisDomain, aA as selectRenderableAxisSettings, aB as selectRealScaleType, aC as combineNiceTicks, aD as combineAxisDomainWithNiceTicks, aE as combineCheckedDomain, Q as getTooltipNameProp, aF as selectChartOffsetInternal, i as useAppDispatch, aG as setActiveMouseOverItemIndex, aH as mouseLeaveItem, aI as setActiveClickItemIndex, r as resolveDefaultProps, D as DefaultZIndexes, ab as svgPropertiesNoEvents, R as RegisterGraphicalItemId, aJ as SetPolarGraphicalItem, aK as findAllByType, u as useAppSelector, aL as SetPolarLegendPayload, c as clsx, L as Layer, Z as ZIndexLayer, T as SetTooltipEntrySettings, a5 as useAnimationId, a6 as JavascriptAnimate, aM as get, a7 as interpolate, aN as isNumber, aO as mathSign, aP as PolarLabelListContextProvider, aQ as selectActiveTooltipIndex, aR as selectActiveTooltipDataKey, aS as selectActiveTooltipGraphicalItemId, aT as DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, aU as DATA_ITEM_INDEX_ATTRIBUTE_NAME, a as adaptEventsOfChild, aa as Shape, a8 as LabelListFromLabelProp, aV as getMaxRadius, aW as getPercentValue, aX as polarToCartesian, aY as svgPropertiesNoEventsFromUnknown, aZ as Curve, a_ as getClassNameFromUnknown, a$ as Text, b0 as isStacked, a4 as isNullish, z as isWellBehavedNumber, b1 as getStackSeriesIdentifier, b2 as defaultAxisId, b3 as selectChartDataWithIndexesIfNotInPanoramaPosition3, b4 as selectChartBaseValue, H as selectAxisWithScale, I as selectTicksOfGraphicalItem, K as isCategoricalAxis, M as getBandSizeOfAxis, J as selectUnfilteredCartesianItems, b5 as selectStackGroups, N as propsAreEqual, o as useIsPanorama, O as SetLegendPayload, P as SetCartesianGraphicalItem, b6 as getNormalizedStackId, U as noop, X as useChartLayout, b7 as useChartName, V as useNeedsClip, W as usePlotArea, Y as getRadiusAndStrokeWidthFromDot, _ as isClipDot, $ as GraphicalItemClipPath, a1 as ActivePoints, a3 as getCateCoordinateOfLine, b8 as useCartesianChartLayout, b9 as isNan, a9 as CartesianLabelListContextProvider, x as svgPropertiesAndEvents, ac as Dots, ba as Global, bb as selectAxisViewBox, bc as selectRootMaxBarSize, bd as selectBarGap, be as selectBarCategoryGap, bf as selectRootBarSize, bg as selectCartesianAxisSize, a0 as SetErrorBarContext, bh as getBaseValueOfBar, bi as truncateByDomain, bj as getCateCoordinateOfBar, ad as CartesianChart, ae as arrayTooltipSearcher, bk as updatePolarOptions, bl as RechartsStoreProvider, bm as ChartDataContextProvider, bn as ReportMainChartProps, bo as ReportChartProps, bp as CategoricalChart, af as ResponsiveContainer, ag as CartesianGrid, ah as XAxis, ai as YAxis, aj as Tooltip } from "./CartesianChart-B0ZoVXmr.js";
import { u as useSensors, a as useSensor, s as sortableKeyboardCoordinates, K as KeyboardSensor, P as PointerSensor, D as DndContext, c as closestCenter, S as SortableContext, r as rectSortingStrategy, d as arrayMove, b as useSortable, C as CSS } from "./sortable.esm-CnsscAeY.js";
import { R as RotateCcw } from "./rotate-ccw-B9yPDYYb.js";
import { G as GripVertical } from "./grip-vertical-BDz0Ue96.js";
import { M as Minimize2 } from "./minimize-2-DgmNW2qh.js";
import { M as Maximize2 } from "./maximize-2-DQBUNz8w.js";
import { E as EyeOff } from "./eye-off-8IknPwNx.js";
import { g as getCurrencySymbol } from "./currency-xmcJ_vO3.js";
import { F as FileSpreadsheet } from "./file-spreadsheet-BzYZ1mUY.js";
import { P as Package } from "./package-D76dkLyW.js";
import { C as Clock } from "./clock-rmajxGGN.js";
import { D as DollarSign } from "./dollar-sign-BdrAlsUh.js";
import { T as Target } from "./target-C1lOXUxZ.js";
import { T as TrendingDown } from "./trending-down-CFRGaplt.js";
import "./index-ByI6E0fo.js";
import "./with-selector-BmcBLQvQ.js";
const __iconNode = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
];
const Calculator = createLucideIcon("calculator", __iconNode);
var Cell = (_props) => null;
Cell.displayName = "Cell";
var selectUnfilteredPolarItems = (state) => state.graphicalItems.polarItems;
var selectAxisPredicate = createSelector([pickAxisType, pickAxisId], itemAxisPredicate);
var selectPolarItemsSettings = createSelector([selectUnfilteredPolarItems, selectBaseAxis, selectAxisPredicate], combineGraphicalItemsSettings);
var selectPolarGraphicalItemsData = createSelector([selectPolarItemsSettings], combineGraphicalItemsData);
var selectPolarDisplayedData = createSelector([selectPolarGraphicalItemsData, selectChartDataAndAlwaysIgnoreIndexes], combineDisplayedData);
var selectPolarAppliedValues = createSelector([selectPolarDisplayedData, selectBaseAxis, selectPolarItemsSettings], combineAppliedValues);
createSelector([selectPolarDisplayedData, selectBaseAxis, selectPolarItemsSettings], (data, axisSettings, items) => {
  if (items.length > 0) {
    return data.flatMap((entry) => {
      return items.flatMap((item) => {
        var _axisSettings$dataKey;
        var valueByDataKey = getValueByDataKey(entry, (_axisSettings$dataKey = axisSettings.dataKey) !== null && _axisSettings$dataKey !== void 0 ? _axisSettings$dataKey : item.dataKey);
        return {
          value: valueByDataKey,
          errorDomain: []
          // polar charts do not have error bars
        };
      });
    }).filter(Boolean);
  }
  if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.dataKey) != null) {
    return data.map((item) => ({
      value: getValueByDataKey(item, axisSettings.dataKey),
      errorDomain: []
    }));
  }
  return data.map((entry) => ({
    value: entry,
    errorDomain: []
  }));
});
var unsupportedInPolarChart = () => void 0;
var selectDomainOfAllPolarAppliedNumericalValues = createSelector([selectPolarDisplayedData, selectBaseAxis, selectPolarItemsSettings, selectAllErrorBarSettings, pickAxisType], combineDomainOfAllAppliedNumericalValuesIncludingErrorValues);
var selectPolarNumericalDomain = createSelector([selectBaseAxis, selectDomainDefinition, selectDomainFromUserPreference, unsupportedInPolarChart, selectDomainOfAllPolarAppliedNumericalValues, unsupportedInPolarChart, selectChartLayout, pickAxisType], combineNumericalDomain);
var selectPolarAxisDomain = createSelector([selectBaseAxis, selectChartLayout, selectPolarDisplayedData, selectPolarAppliedValues, selectStackOffsetType, pickAxisType, selectPolarNumericalDomain], combineAxisDomain);
var selectPolarNiceTicks = createSelector([selectPolarAxisDomain, selectRenderableAxisSettings, selectRealScaleType], combineNiceTicks);
var selectPolarAxisDomainIncludingNiceTicks = createSelector([selectBaseAxis, selectPolarAxisDomain, selectPolarNiceTicks, pickAxisType], combineAxisDomainWithNiceTicks);
createSelector([selectRealScaleType, selectPolarAxisDomainIncludingNiceTicks], combineCheckedDomain);
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), true).forEach(function(r2) {
      _defineProperty$5(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$5(e, r, t) {
  return (r = _toPropertyKey$5(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$5(t) {
  var i = _toPrimitive$5(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$5(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var pickId = (_state, id) => id;
var selectSynchronisedPieSettings = createSelector([selectUnfilteredPolarItems, pickId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "pie").find((item) => item.id === id));
var emptyArray = [];
var pickCells$1 = (_state, _id, cells) => {
  if ((cells === null || cells === void 0 ? void 0 : cells.length) === 0) {
    return emptyArray;
  }
  return cells;
};
var selectDisplayedData = createSelector([selectChartDataAndAlwaysIgnoreIndexes, selectSynchronisedPieSettings, pickCells$1], (_ref, pieSettings, cells) => {
  var {
    chartData
  } = _ref;
  if (pieSettings == null) {
    return void 0;
  }
  var displayedData;
  if ((pieSettings === null || pieSettings === void 0 ? void 0 : pieSettings.data) != null && pieSettings.data.length > 0) {
    displayedData = pieSettings.data;
  } else {
    displayedData = chartData;
  }
  if ((!displayedData || !displayedData.length) && cells != null) {
    displayedData = cells.map((cell) => _objectSpread$5(_objectSpread$5({}, pieSettings.presentationProps), cell.props));
  }
  if (displayedData == null) {
    return void 0;
  }
  return displayedData;
});
var selectPieLegend = createSelector([selectDisplayedData, selectSynchronisedPieSettings, pickCells$1], (displayedData, pieSettings, cells) => {
  if (displayedData == null || pieSettings == null) {
    return void 0;
  }
  return displayedData.map((entry, i) => {
    var _cells$i;
    var name = getValueByDataKey(entry, pieSettings.nameKey, pieSettings.name);
    var color;
    if (cells !== null && cells !== void 0 && (_cells$i = cells[i]) !== null && _cells$i !== void 0 && (_cells$i = _cells$i.props) !== null && _cells$i !== void 0 && _cells$i.fill) {
      color = cells[i].props.fill;
    } else if (typeof entry === "object" && entry != null && "fill" in entry) {
      color = entry.fill;
    } else {
      color = pieSettings.fill;
    }
    return {
      value: getTooltipNameProp(name, pieSettings.dataKey),
      color,
      // @ts-expect-error we need a better typing for our data inputs
      payload: entry,
      type: pieSettings.legendType
    };
  });
});
var selectPieSectors = createSelector([selectDisplayedData, selectSynchronisedPieSettings, pickCells$1, selectChartOffsetInternal], (displayedData, pieSettings, cells, offset) => {
  if (pieSettings == null || displayedData == null) {
    return void 0;
  }
  return computePieSectors({
    offset,
    pieSettings,
    displayedData,
    cells
  });
});
var useMouseEnterItemDispatch = (onMouseEnterFromProps, dataKey, graphicalItemId) => {
  var dispatch = useAppDispatch();
  return (data, index) => (event) => {
    onMouseEnterFromProps === null || onMouseEnterFromProps === void 0 || onMouseEnterFromProps(data, index, event);
    dispatch(setActiveMouseOverItemIndex({
      activeIndex: String(index),
      activeDataKey: dataKey,
      activeCoordinate: data.tooltipPosition,
      activeGraphicalItemId: graphicalItemId
    }));
  };
};
var useMouseLeaveItemDispatch = (onMouseLeaveFromProps) => {
  var dispatch = useAppDispatch();
  return (data, index) => (event) => {
    onMouseLeaveFromProps === null || onMouseLeaveFromProps === void 0 || onMouseLeaveFromProps(data, index, event);
    dispatch(mouseLeaveItem());
  };
};
var useMouseClickItemDispatch = (onMouseClickFromProps, dataKey, graphicalItemId) => {
  var dispatch = useAppDispatch();
  return (data, index) => (event) => {
    onMouseClickFromProps === null || onMouseClickFromProps === void 0 || onMouseClickFromProps(data, index, event);
    dispatch(setActiveClickItemIndex({
      activeIndex: String(index),
      activeDataKey: dataKey,
      activeCoordinate: data.tooltipPosition,
      activeGraphicalItemId: graphicalItemId
    }));
  };
};
var _excluded$4 = ["key"], _excluded2$2 = ["onMouseEnter", "onClick", "onMouseLeave"], _excluded3$1 = ["id"], _excluded4$1 = ["id"];
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function(r2) {
      _defineProperty$4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$4(e, r, t) {
  return (r = _toPropertyKey$4(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$4(t) {
  var i = _toPrimitive$4(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$4(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _extends$5() {
  return _extends$5 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$5.apply(null, arguments);
}
function _objectWithoutProperties$4(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$4(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$4(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function SetPiePayloadLegend(props) {
  var cells = reactExports.useMemo(() => findAllByType(props.children, Cell), [props.children]);
  var legendPayload = useAppSelector((state) => selectPieLegend(state, props.id, cells));
  if (legendPayload == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(SetPolarLegendPayload, {
    legendPayload
  });
}
var SetPieTooltipEntrySettings = /* @__PURE__ */ reactExports.memo((_ref) => {
  var {
    dataKey,
    nameKey,
    sectors,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    tooltipType,
    id
  } = _ref;
  var tooltipEntrySettings = {
    dataDefinedOnItem: sectors.map((p) => p.tooltipPayload),
    getPosition: (index) => {
      var _sectors$Number;
      return (_sectors$Number = sectors[Number(index)]) === null || _sectors$Number === void 0 ? void 0 : _sectors$Number.tooltipPosition;
    },
    settings: {
      stroke,
      strokeWidth,
      fill,
      dataKey,
      nameKey,
      name: getTooltipNameProp(name, dataKey),
      hide,
      type: tooltipType,
      color: fill,
      unit: "",
      // why doesn't Pie support unit?
      graphicalItemId: id
    }
  };
  return /* @__PURE__ */ reactExports.createElement(SetTooltipEntrySettings, {
    tooltipEntrySettings
  });
});
var getTextAnchor = (x, cx) => {
  if (x > cx) {
    return "start";
  }
  if (x < cx) {
    return "end";
  }
  return "middle";
};
var getOuterRadius = (dataPoint, outerRadius, maxPieRadius) => {
  if (typeof outerRadius === "function") {
    return getPercentValue(outerRadius(dataPoint), maxPieRadius, maxPieRadius * 0.8);
  }
  return getPercentValue(outerRadius, maxPieRadius, maxPieRadius * 0.8);
};
var parseCoordinateOfPie = (pieSettings, offset, dataPoint) => {
  var {
    top,
    left,
    width,
    height
  } = offset;
  var maxPieRadius = getMaxRadius(width, height);
  var cx = left + getPercentValue(pieSettings.cx, width, width / 2);
  var cy = top + getPercentValue(pieSettings.cy, height, height / 2);
  var innerRadius = getPercentValue(pieSettings.innerRadius, maxPieRadius, 0);
  var outerRadius = getOuterRadius(dataPoint, pieSettings.outerRadius, maxPieRadius);
  var maxRadius = pieSettings.maxRadius || Math.sqrt(width * width + height * height) / 2;
  return {
    cx,
    cy,
    innerRadius,
    outerRadius,
    maxRadius
  };
};
var parseDeltaAngle = (startAngle, endAngle) => {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign * deltaAngle;
};
var renderLabelLineItem = (option, props) => {
  if (/* @__PURE__ */ reactExports.isValidElement(option)) {
    return /* @__PURE__ */ reactExports.cloneElement(option, props);
  }
  if (typeof option === "function") {
    return option(props);
  }
  var className = clsx("recharts-pie-label-line", typeof option !== "boolean" ? option.className : "");
  var {
    key
  } = props, otherProps = _objectWithoutProperties$4(props, _excluded$4);
  return /* @__PURE__ */ reactExports.createElement(Curve, _extends$5({}, otherProps, {
    type: "linear",
    className
  }));
};
var renderLabelItem = (option, props, value) => {
  if (/* @__PURE__ */ reactExports.isValidElement(option)) {
    return /* @__PURE__ */ reactExports.cloneElement(option, props);
  }
  var label = value;
  if (typeof option === "function") {
    label = option(props);
    if (/* @__PURE__ */ reactExports.isValidElement(label)) {
      return label;
    }
  }
  var className = clsx("recharts-pie-label-text", getClassNameFromUnknown(option));
  return /* @__PURE__ */ reactExports.createElement(Text, _extends$5({}, props, {
    alignmentBaseline: "middle",
    className
  }), label);
};
function PieLabels(_ref2) {
  var {
    sectors,
    props,
    showLabels
  } = _ref2;
  var {
    label,
    labelLine,
    dataKey
  } = props;
  if (!showLabels || !label || !sectors) {
    return null;
  }
  var pieProps = svgPropertiesNoEvents(props);
  var customLabelProps = svgPropertiesNoEventsFromUnknown(label);
  var customLabelLineProps = svgPropertiesNoEventsFromUnknown(labelLine);
  var offsetRadius = typeof label === "object" && "offsetRadius" in label && typeof label.offsetRadius === "number" && label.offsetRadius || 20;
  var labels = sectors.map((entry, i) => {
    var midAngle = (entry.startAngle + entry.endAngle) / 2;
    var endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
    var labelProps = _objectSpread$4(_objectSpread$4(_objectSpread$4(_objectSpread$4({}, pieProps), entry), {}, {
      // @ts-expect-error customLabelProps is contributing unknown props
      stroke: "none"
    }, customLabelProps), {}, {
      index: i,
      textAnchor: getTextAnchor(endPoint.x, entry.cx)
    }, endPoint);
    var lineProps = _objectSpread$4(_objectSpread$4(_objectSpread$4(_objectSpread$4({}, pieProps), entry), {}, {
      // @ts-expect-error customLabelLineProps is contributing unknown props
      fill: "none",
      // @ts-expect-error customLabelLineProps is contributing unknown props
      stroke: entry.fill
    }, customLabelLineProps), {}, {
      index: i,
      points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
      key: "line"
    });
    return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
      zIndex: DefaultZIndexes.label,
      key: "label-".concat(entry.startAngle, "-").concat(entry.endAngle, "-").concat(entry.midAngle, "-").concat(i)
    }, /* @__PURE__ */ reactExports.createElement(Layer, null, labelLine && renderLabelLineItem(labelLine, lineProps), renderLabelItem(label, labelProps, getValueByDataKey(entry, dataKey))));
  });
  return /* @__PURE__ */ reactExports.createElement(Layer, {
    className: "recharts-pie-labels"
  }, labels);
}
function PieLabelList(_ref3) {
  var {
    sectors,
    props,
    showLabels
  } = _ref3;
  var {
    label
  } = props;
  if (typeof label === "object" && label != null && "position" in label) {
    return /* @__PURE__ */ reactExports.createElement(LabelListFromLabelProp, {
      label
    });
  }
  return /* @__PURE__ */ reactExports.createElement(PieLabels, {
    sectors,
    props,
    showLabels
  });
}
function PieSectors(props) {
  var {
    sectors,
    activeShape,
    inactiveShape: inactiveShapeProp,
    allOtherPieProps,
    shape,
    id
  } = props;
  var activeIndex = useAppSelector(selectActiveTooltipIndex);
  var activeDataKey = useAppSelector(selectActiveTooltipDataKey);
  var activeGraphicalItemId = useAppSelector(selectActiveTooltipGraphicalItemId);
  var {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps
  } = allOtherPieProps, restOfAllOtherProps = _objectWithoutProperties$4(allOtherPieProps, _excluded2$2);
  var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherPieProps.dataKey, id);
  var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherPieProps.dataKey, id);
  if (sectors == null || sectors.length === 0) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, sectors.map((entry, i) => {
    if ((entry === null || entry === void 0 ? void 0 : entry.startAngle) === 0 && (entry === null || entry === void 0 ? void 0 : entry.endAngle) === 0 && sectors.length !== 1) return null;
    var graphicalItemMatches = activeGraphicalItemId == null || activeGraphicalItemId === id;
    var isActive = String(i) === activeIndex && (activeDataKey == null || allOtherPieProps.dataKey === activeDataKey) && graphicalItemMatches;
    var inactiveShape = activeIndex ? inactiveShapeProp : null;
    var sectorOptions = activeShape && isActive ? activeShape : inactiveShape;
    var sectorProps = _objectSpread$4(_objectSpread$4({}, entry), {}, {
      stroke: entry.stroke,
      tabIndex: -1,
      [DATA_ITEM_INDEX_ATTRIBUTE_NAME]: i,
      [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: id
    });
    return /* @__PURE__ */ reactExports.createElement(Layer, _extends$5({
      key: "sector-".concat(entry === null || entry === void 0 ? void 0 : entry.startAngle, "-").concat(entry === null || entry === void 0 ? void 0 : entry.endAngle, "-").concat(entry.midAngle, "-").concat(i),
      tabIndex: -1,
      className: "recharts-pie-sector"
    }, adaptEventsOfChild(restOfAllOtherProps, entry, i), {
      // @ts-expect-error the types need a bit of attention
      onMouseEnter: onMouseEnterFromContext(entry, i),
      onMouseLeave: onMouseLeaveFromContext(entry, i),
      onClick: onClickFromContext(entry, i)
    }), /* @__PURE__ */ reactExports.createElement(Shape, _extends$5({
      option: shape !== null && shape !== void 0 ? shape : sectorOptions,
      index: i,
      shapeType: "sector",
      isActive
    }, sectorProps)));
  }));
}
function computePieSectors(_ref4) {
  var _pieSettings$paddingA;
  var {
    pieSettings,
    displayedData,
    cells,
    offset
  } = _ref4;
  var {
    cornerRadius,
    startAngle,
    endAngle,
    dataKey,
    nameKey,
    tooltipType
  } = pieSettings;
  var minAngle = Math.abs(pieSettings.minAngle);
  var deltaAngle = parseDeltaAngle(startAngle, endAngle);
  var absDeltaAngle = Math.abs(deltaAngle);
  var paddingAngle = displayedData.length <= 1 ? 0 : (_pieSettings$paddingA = pieSettings.paddingAngle) !== null && _pieSettings$paddingA !== void 0 ? _pieSettings$paddingA : 0;
  var notZeroItemCount = displayedData.filter((entry) => getValueByDataKey(entry, dataKey, 0) !== 0).length;
  var totalPaddingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
  var realTotalAngle = absDeltaAngle - notZeroItemCount * minAngle - totalPaddingAngle;
  var sum = displayedData.reduce((result, entry) => {
    var val = getValueByDataKey(entry, dataKey, 0);
    return result + (isNumber(val) ? val : 0);
  }, 0);
  var sectors;
  if (sum > 0) {
    var prev;
    sectors = displayedData.map((entry, i) => {
      var val = getValueByDataKey(entry, dataKey, 0);
      var name = getValueByDataKey(entry, nameKey, i);
      var coordinate = parseCoordinateOfPie(pieSettings, offset, entry);
      var percent = (isNumber(val) ? val : 0) / sum;
      var tempStartAngle;
      var entryWithCellInfo = _objectSpread$4(_objectSpread$4({}, entry), cells && cells[i] && cells[i].props);
      if (i) {
        tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
      } else {
        tempStartAngle = startAngle;
      }
      var tempEndAngle = tempStartAngle + mathSign(deltaAngle) * ((val !== 0 ? minAngle : 0) + percent * realTotalAngle);
      var midAngle = (tempStartAngle + tempEndAngle) / 2;
      var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
      var tooltipPayload = [{
        name,
        value: val,
        payload: entryWithCellInfo,
        dataKey,
        type: tooltipType,
        graphicalItemId: pieSettings.id
      }];
      var tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);
      prev = _objectSpread$4(_objectSpread$4(_objectSpread$4(_objectSpread$4({}, pieSettings.presentationProps), {}, {
        percent,
        cornerRadius: typeof cornerRadius === "string" ? parseFloat(cornerRadius) : cornerRadius,
        name,
        tooltipPayload,
        midAngle,
        middleRadius,
        tooltipPosition
      }, entryWithCellInfo), coordinate), {}, {
        value: val,
        dataKey,
        startAngle: tempStartAngle,
        endAngle: tempEndAngle,
        payload: entryWithCellInfo,
        paddingAngle: mathSign(deltaAngle) * paddingAngle
      });
      return prev;
    });
  }
  return sectors;
}
function PieLabelListProvider(_ref5) {
  var {
    showLabels,
    sectors,
    children
  } = _ref5;
  var labelListEntries = reactExports.useMemo(() => {
    if (!showLabels || !sectors) {
      return [];
    }
    return sectors.map((entry) => ({
      value: entry.value,
      payload: entry.payload,
      clockWise: false,
      parentViewBox: void 0,
      viewBox: {
        cx: entry.cx,
        cy: entry.cy,
        innerRadius: entry.innerRadius,
        outerRadius: entry.outerRadius,
        startAngle: entry.startAngle,
        endAngle: entry.endAngle,
        clockWise: false
      },
      fill: entry.fill
    }));
  }, [sectors, showLabels]);
  return /* @__PURE__ */ reactExports.createElement(PolarLabelListContextProvider, {
    value: showLabels ? labelListEntries : void 0
  }, children);
}
function SectorsWithAnimation(_ref6) {
  var {
    props,
    previousSectorsRef,
    id
  } = _ref6;
  var {
    sectors,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    activeShape,
    inactiveShape,
    onAnimationStart,
    onAnimationEnd
  } = props;
  var animationId = useAnimationId(props, "recharts-pie-");
  var prevSectors = previousSectorsRef.current;
  var [isAnimating, setIsAnimating] = reactExports.useState(false);
  var handleAnimationEnd = reactExports.useCallback(() => {
    if (typeof onAnimationEnd === "function") {
      onAnimationEnd();
    }
    setIsAnimating(false);
  }, [onAnimationEnd]);
  var handleAnimationStart = reactExports.useCallback(() => {
    if (typeof onAnimationStart === "function") {
      onAnimationStart();
    }
    setIsAnimating(true);
  }, [onAnimationStart]);
  return /* @__PURE__ */ reactExports.createElement(PieLabelListProvider, {
    showLabels: !isAnimating,
    sectors
  }, /* @__PURE__ */ reactExports.createElement(JavascriptAnimate, {
    animationId,
    begin: animationBegin,
    duration: animationDuration,
    isActive: isAnimationActive,
    easing: animationEasing,
    onAnimationStart: handleAnimationStart,
    onAnimationEnd: handleAnimationEnd,
    key: animationId
  }, (t) => {
    var _first$startAngle;
    var stepData = [];
    var first = sectors && sectors[0];
    var curAngle = (_first$startAngle = first === null || first === void 0 ? void 0 : first.startAngle) !== null && _first$startAngle !== void 0 ? _first$startAngle : 0;
    sectors === null || sectors === void 0 || sectors.forEach((entry, index) => {
      var prev = prevSectors && prevSectors[index];
      var paddingAngle = index > 0 ? get(entry, "paddingAngle", 0) : 0;
      if (prev) {
        var angle = interpolate(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle, t);
        var latest = _objectSpread$4(_objectSpread$4({}, entry), {}, {
          startAngle: curAngle + paddingAngle,
          endAngle: curAngle + angle + paddingAngle
        });
        stepData.push(latest);
        curAngle = latest.endAngle;
      } else {
        var {
          endAngle,
          startAngle
        } = entry;
        var deltaAngle = interpolate(0, endAngle - startAngle, t);
        var _latest = _objectSpread$4(_objectSpread$4({}, entry), {}, {
          startAngle: curAngle + paddingAngle,
          endAngle: curAngle + deltaAngle + paddingAngle
        });
        stepData.push(_latest);
        curAngle = _latest.endAngle;
      }
    });
    previousSectorsRef.current = stepData;
    return /* @__PURE__ */ reactExports.createElement(Layer, null, /* @__PURE__ */ reactExports.createElement(PieSectors, {
      sectors: stepData,
      activeShape,
      inactiveShape,
      allOtherPieProps: props,
      shape: props.shape,
      id
    }));
  }), /* @__PURE__ */ reactExports.createElement(PieLabelList, {
    showLabels: !isAnimating,
    sectors,
    props
  }), props.children);
}
var defaultPieProps = {
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  cx: "50%",
  cy: "50%",
  dataKey: "value",
  endAngle: 360,
  fill: "#808080",
  hide: false,
  innerRadius: 0,
  isAnimationActive: "auto",
  label: false,
  labelLine: true,
  legendType: "rect",
  minAngle: 0,
  nameKey: "name",
  outerRadius: "80%",
  paddingAngle: 0,
  rootTabIndex: 0,
  startAngle: 0,
  stroke: "#fff",
  zIndex: DefaultZIndexes.area
};
function PieImpl(props) {
  var {
    id
  } = props, propsWithoutId = _objectWithoutProperties$4(props, _excluded3$1);
  var {
    hide,
    className,
    rootTabIndex
  } = props;
  var cells = reactExports.useMemo(() => findAllByType(props.children, Cell), [props.children]);
  var sectors = useAppSelector((state) => selectPieSectors(state, id, cells));
  var previousSectorsRef = reactExports.useRef(null);
  var layerClass = clsx("recharts-pie", className);
  if (hide || sectors == null) {
    previousSectorsRef.current = null;
    return /* @__PURE__ */ reactExports.createElement(Layer, {
      tabIndex: rootTabIndex,
      className: layerClass
    });
  }
  return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: props.zIndex
  }, /* @__PURE__ */ reactExports.createElement(SetPieTooltipEntrySettings, {
    dataKey: props.dataKey,
    nameKey: props.nameKey,
    sectors,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth,
    fill: props.fill,
    name: props.name,
    hide: props.hide,
    tooltipType: props.tooltipType,
    id
  }), /* @__PURE__ */ reactExports.createElement(Layer, {
    tabIndex: rootTabIndex,
    className: layerClass
  }, /* @__PURE__ */ reactExports.createElement(SectorsWithAnimation, {
    props: _objectSpread$4(_objectSpread$4({}, propsWithoutId), {}, {
      sectors
    }),
    previousSectorsRef,
    id
  })));
}
function Pie(outsideProps) {
  var props = resolveDefaultProps(outsideProps, defaultPieProps);
  var {
    id: externalId
  } = props, propsWithoutId = _objectWithoutProperties$4(props, _excluded4$1);
  var presentationProps = svgPropertiesNoEvents(propsWithoutId);
  return /* @__PURE__ */ reactExports.createElement(RegisterGraphicalItemId, {
    id: externalId,
    type: "pie"
  }, (id) => /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(SetPolarGraphicalItem, {
    type: "pie",
    id,
    data: propsWithoutId.data,
    dataKey: propsWithoutId.dataKey,
    hide: propsWithoutId.hide,
    angleAxisId: 0,
    radiusAxisId: 0,
    name: propsWithoutId.name,
    nameKey: propsWithoutId.nameKey,
    tooltipType: propsWithoutId.tooltipType,
    legendType: propsWithoutId.legendType,
    fill: propsWithoutId.fill,
    cx: propsWithoutId.cx,
    cy: propsWithoutId.cy,
    startAngle: propsWithoutId.startAngle,
    endAngle: propsWithoutId.endAngle,
    paddingAngle: propsWithoutId.paddingAngle,
    minAngle: propsWithoutId.minAngle,
    innerRadius: propsWithoutId.innerRadius,
    outerRadius: propsWithoutId.outerRadius,
    cornerRadius: propsWithoutId.cornerRadius,
    presentationProps,
    maxRadius: props.maxRadius
  }), /* @__PURE__ */ reactExports.createElement(SetPiePayloadLegend, _extends$5({}, propsWithoutId, {
    id
  })), /* @__PURE__ */ reactExports.createElement(PieImpl, _extends$5({}, propsWithoutId, {
    id
  }))));
}
Pie.displayName = "Pie";
var getBarSize = (globalSize, totalSize, selfSize) => {
  var barSize = selfSize !== null && selfSize !== void 0 ? selfSize : globalSize;
  if (isNullish(barSize)) {
    return void 0;
  }
  return getPercentValue(barSize, totalSize, 0);
};
var combineBarSizeList = (allBars, globalSize, totalSize) => {
  var initialValue = {};
  var stackedBars = allBars.filter(isStacked);
  var unstackedBars = allBars.filter((b) => b.stackId == null);
  var groupByStack = stackedBars.reduce((acc, bar) => {
    var s = acc[bar.stackId];
    if (s == null) {
      s = [];
    }
    s.push(bar);
    acc[bar.stackId] = s;
    return acc;
  }, initialValue);
  var stackedSizeList = Object.entries(groupByStack).map((_ref) => {
    var _bars$;
    var [stackId, bars] = _ref;
    var dataKeys = bars.map((b) => b.dataKey);
    var barSize = getBarSize(globalSize, totalSize, (_bars$ = bars[0]) === null || _bars$ === void 0 ? void 0 : _bars$.barSize);
    return {
      stackId,
      dataKeys,
      barSize
    };
  });
  var unstackedSizeList = unstackedBars.map((b) => {
    var dataKeys = [b.dataKey].filter((dk) => dk != null);
    var barSize = getBarSize(globalSize, totalSize, b.barSize);
    return {
      stackId: void 0,
      dataKeys,
      barSize
    };
  });
  return [...stackedSizeList, ...unstackedSizeList];
};
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$3(e, r, t) {
  return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$3(t) {
  var i = _toPrimitive$3(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$3(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function getBarPositions(barGap, barCategoryGap, bandSize, sizeList, maxBarSize) {
  var _sizeList$;
  var len = sizeList.length;
  if (len < 1) {
    return void 0;
  }
  var realBarGap = getPercentValue(barGap, bandSize, 0, true);
  var result;
  var initialValue = [];
  if (isWellBehavedNumber((_sizeList$ = sizeList[0]) === null || _sizeList$ === void 0 ? void 0 : _sizeList$.barSize)) {
    var useFull = false;
    var fullBarSize = bandSize / len;
    var sum = sizeList.reduce((res, entry) => res + (entry.barSize || 0), 0);
    sum += (len - 1) * realBarGap;
    if (sum >= bandSize) {
      sum -= (len - 1) * realBarGap;
      realBarGap = 0;
    }
    if (sum >= bandSize && fullBarSize > 0) {
      useFull = true;
      fullBarSize *= 0.9;
      sum = len * fullBarSize;
    }
    var offset = (bandSize - sum) / 2 >> 0;
    var prev = {
      offset: offset - realBarGap,
      size: 0
    };
    result = sizeList.reduce((res, entry) => {
      var _entry$barSize;
      var newPosition = {
        stackId: entry.stackId,
        dataKeys: entry.dataKeys,
        position: {
          offset: prev.offset + prev.size + realBarGap,
          size: useFull ? fullBarSize : (_entry$barSize = entry.barSize) !== null && _entry$barSize !== void 0 ? _entry$barSize : 0
        }
      };
      var newRes = [...res, newPosition];
      prev = newPosition.position;
      return newRes;
    }, initialValue);
  } else {
    var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);
    if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) {
      realBarGap = 0;
    }
    var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
    if (originalSize > 1) {
      originalSize >>= 0;
    }
    var size = isWellBehavedNumber(maxBarSize) ? Math.min(originalSize, maxBarSize) : originalSize;
    result = sizeList.reduce((res, entry, i) => [...res, {
      stackId: entry.stackId,
      dataKeys: entry.dataKeys,
      position: {
        offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
        size
      }
    }], initialValue);
  }
  return result;
}
var combineAllBarPositions = (sizeList, globalMaxBarSize, barGap, barCategoryGap, barBandSize, bandSize, childMaxBarSize) => {
  var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
  var allBarPositions = getBarPositions(barGap, barCategoryGap, barBandSize !== bandSize ? barBandSize : bandSize, sizeList, maxBarSize);
  if (barBandSize !== bandSize && allBarPositions != null) {
    allBarPositions = allBarPositions.map((pos) => _objectSpread$3(_objectSpread$3({}, pos), {}, {
      position: _objectSpread$3(_objectSpread$3({}, pos.position), {}, {
        offset: pos.position.offset - barBandSize / 2
      })
    }));
  }
  return allBarPositions;
};
var combineStackedData = (stackGroups, barSettings) => {
  var stackSeriesIdentifier = getStackSeriesIdentifier(barSettings);
  if (!stackGroups || stackSeriesIdentifier == null || barSettings == null) {
    return void 0;
  }
  var {
    stackId
  } = barSettings;
  if (stackId == null) {
    return void 0;
  }
  var stackGroup = stackGroups[stackId];
  if (!stackGroup) {
    return void 0;
  }
  var {
    stackedData
  } = stackGroup;
  if (!stackedData) {
    return void 0;
  }
  return stackedData.find((sd) => sd.key === stackSeriesIdentifier);
};
var combineBarPosition = (allBarPositions, barSettings) => {
  if (allBarPositions == null || barSettings == null) {
    return void 0;
  }
  var position = allBarPositions.find((p) => p.stackId === barSettings.stackId && barSettings.dataKey != null && p.dataKeys.includes(barSettings.dataKey));
  if (position == null) {
    return void 0;
  }
  return position.position;
};
function getZIndexFromUnknown(input, defaultZIndex) {
  if (input && typeof input === "object" && "zIndex" in input && typeof input.zIndex === "number" && isWellBehavedNumber(input.zIndex)) {
    return input.zIndex;
  }
  return defaultZIndex;
}
function selectXAxisIdFromGraphicalItemId(state, id) {
  var _state$graphicalItems, _state$graphicalItems2;
  return (_state$graphicalItems = (_state$graphicalItems2 = state.graphicalItems.cartesianItems.find((item) => item.id === id)) === null || _state$graphicalItems2 === void 0 ? void 0 : _state$graphicalItems2.xAxisId) !== null && _state$graphicalItems !== void 0 ? _state$graphicalItems : defaultAxisId;
}
function selectYAxisIdFromGraphicalItemId(state, id) {
  var _state$graphicalItems3, _state$graphicalItems4;
  return (_state$graphicalItems3 = (_state$graphicalItems4 = state.graphicalItems.cartesianItems.find((item) => item.id === id)) === null || _state$graphicalItems4 === void 0 ? void 0 : _state$graphicalItems4.yAxisId) !== null && _state$graphicalItems3 !== void 0 ? _state$graphicalItems3 : defaultAxisId;
}
var selectXAxisWithScale$1 = (state, graphicalItemId, isPanorama) => selectAxisWithScale(state, "xAxis", selectXAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);
var selectXAxisTicks$1 = (state, graphicalItemId, isPanorama) => selectTicksOfGraphicalItem(state, "xAxis", selectXAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);
var selectYAxisWithScale$1 = (state, graphicalItemId, isPanorama) => selectAxisWithScale(state, "yAxis", selectYAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);
var selectYAxisTicks$1 = (state, graphicalItemId, isPanorama) => selectTicksOfGraphicalItem(state, "yAxis", selectYAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);
var selectBandSize = createSelector([selectChartLayout, selectXAxisWithScale$1, selectYAxisWithScale$1, selectXAxisTicks$1, selectYAxisTicks$1], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks) => {
  if (isCategoricalAxis(layout, "xAxis")) {
    return getBandSizeOfAxis(xAxis, xAxisTicks, false);
  }
  return getBandSizeOfAxis(yAxis, yAxisTicks, false);
});
var pickAreaId = (_state, id) => id;
var selectSynchronisedAreaSettings = createSelector([selectUnfilteredCartesianItems, pickAreaId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "area").find((item) => item.id === id));
var selectNumericalAxisType = (state) => {
  var layout = selectChartLayout(state);
  var isXAxisCategorical = isCategoricalAxis(layout, "xAxis");
  return isXAxisCategorical ? "yAxis" : "xAxis";
};
var selectNumericalAxisIdFromGraphicalItemId = (state, graphicalItemId) => {
  var axisType = selectNumericalAxisType(state);
  if (axisType === "yAxis") {
    return selectYAxisIdFromGraphicalItemId(state, graphicalItemId);
  }
  return selectXAxisIdFromGraphicalItemId(state, graphicalItemId);
};
var selectNumericalAxisStackGroups = (state, graphicalItemId, isPanorama) => selectStackGroups(state, selectNumericalAxisType(state), selectNumericalAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);
var selectGraphicalItemStackedData = createSelector([selectSynchronisedAreaSettings, selectNumericalAxisStackGroups], (areaSettings, stackGroups) => {
  var _stackGroups$stackId;
  if (areaSettings == null || stackGroups == null) {
    return void 0;
  }
  var {
    stackId
  } = areaSettings;
  var stackSeriesIdentifier = getStackSeriesIdentifier(areaSettings);
  if (stackId == null || stackSeriesIdentifier == null) {
    return void 0;
  }
  var groups = (_stackGroups$stackId = stackGroups[stackId]) === null || _stackGroups$stackId === void 0 ? void 0 : _stackGroups$stackId.stackedData;
  var found = groups === null || groups === void 0 ? void 0 : groups.find((v) => v.key === stackSeriesIdentifier);
  if (found == null) {
    return void 0;
  }
  return found.map((item) => [item[0], item[1]]);
});
var selectArea = createSelector([selectChartLayout, selectXAxisWithScale$1, selectYAxisWithScale$1, selectXAxisTicks$1, selectYAxisTicks$1, selectGraphicalItemStackedData, selectChartDataWithIndexesIfNotInPanoramaPosition3, selectBandSize, selectSynchronisedAreaSettings, selectChartBaseValue], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks, stackedData, _ref, bandSize, areaSettings, chartBaseValue) => {
  var {
    chartData,
    dataStartIndex,
    dataEndIndex
  } = _ref;
  if (areaSettings == null || layout !== "horizontal" && layout !== "vertical" || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || xAxisTicks.length === 0 || yAxisTicks.length === 0 || bandSize == null) {
    return void 0;
  }
  var {
    data
  } = areaSettings;
  var displayedData;
  if (data && data.length > 0) {
    displayedData = data;
  } else {
    displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
  }
  if (displayedData == null) {
    return void 0;
  }
  return computeArea({
    layout,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    dataStartIndex,
    areaSettings,
    stackedData,
    displayedData,
    chartBaseValue,
    bandSize
  });
});
var _excluded$3 = ["id"], _excluded2$1 = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function _extends$4() {
  return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$4.apply(null, arguments);
}
function _objectWithoutProperties$3(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$3(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$3(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function getLegendItemColor(stroke, fill) {
  return stroke && stroke !== "none" ? stroke : fill;
}
var computeLegendPayloadFromAreaData = (props) => {
  var {
    dataKey,
    name,
    stroke,
    fill,
    legendType,
    hide
  } = props;
  return [{
    inactive: hide,
    dataKey,
    type: legendType,
    color: getLegendItemColor(stroke, fill),
    value: getTooltipNameProp(name, dataKey),
    payload: props
  }];
};
var SetAreaTooltipEntrySettings = /* @__PURE__ */ reactExports.memo((_ref) => {
  var {
    dataKey,
    data,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    unit,
    tooltipType,
    id
  } = _ref;
  var tooltipEntrySettings = {
    dataDefinedOnItem: data,
    getPosition: noop,
    settings: {
      stroke,
      strokeWidth,
      fill,
      dataKey,
      nameKey: void 0,
      name: getTooltipNameProp(name, dataKey),
      hide,
      type: tooltipType,
      color: getLegendItemColor(stroke, fill),
      unit,
      graphicalItemId: id
    }
  };
  return /* @__PURE__ */ reactExports.createElement(SetTooltipEntrySettings, {
    tooltipEntrySettings
  });
});
function AreaDotsWrapper(_ref2) {
  var {
    clipPathId,
    points,
    props
  } = _ref2;
  var {
    needClip,
    dot,
    dataKey
  } = props;
  var areaProps = svgPropertiesNoEvents(props);
  return /* @__PURE__ */ reactExports.createElement(Dots, {
    points,
    dot,
    className: "recharts-area-dots",
    dotClassName: "recharts-area-dot",
    dataKey,
    baseProps: areaProps,
    needClip,
    clipPathId
  });
}
function AreaLabelListProvider(_ref3) {
  var {
    showLabels,
    children,
    points
  } = _ref3;
  var labelListEntries = points.map((point) => {
    var _point$x, _point$y;
    var viewBox = {
      x: (_point$x = point.x) !== null && _point$x !== void 0 ? _point$x : 0,
      y: (_point$y = point.y) !== null && _point$y !== void 0 ? _point$y : 0,
      width: 0,
      lowerWidth: 0,
      upperWidth: 0,
      height: 0
    };
    return _objectSpread$2(_objectSpread$2({}, viewBox), {}, {
      value: point.value,
      payload: point.payload,
      parentViewBox: void 0,
      viewBox,
      fill: void 0
    });
  });
  return /* @__PURE__ */ reactExports.createElement(CartesianLabelListContextProvider, {
    value: showLabels ? labelListEntries : void 0
  }, children);
}
function StaticArea(_ref4) {
  var {
    points,
    baseLine,
    needClip,
    clipPathId,
    props
  } = _ref4;
  var {
    layout,
    type,
    stroke,
    connectNulls,
    isRange
  } = props;
  var {
    id
  } = props, propsWithoutId = _objectWithoutProperties$3(props, _excluded$3);
  var allOtherProps = svgPropertiesNoEvents(propsWithoutId);
  var propsWithEvents = svgPropertiesAndEvents(propsWithoutId);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, (points === null || points === void 0 ? void 0 : points.length) > 1 && /* @__PURE__ */ reactExports.createElement(Layer, {
    clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0
  }, /* @__PURE__ */ reactExports.createElement(Curve, _extends$4({}, propsWithEvents, {
    id,
    points,
    connectNulls,
    type,
    baseLine,
    layout,
    stroke: "none",
    className: "recharts-area-area"
  })), stroke !== "none" && /* @__PURE__ */ reactExports.createElement(Curve, _extends$4({}, allOtherProps, {
    className: "recharts-area-curve",
    layout,
    type,
    connectNulls,
    fill: "none",
    points
  })), stroke !== "none" && isRange && /* @__PURE__ */ reactExports.createElement(Curve, _extends$4({}, allOtherProps, {
    className: "recharts-area-curve",
    layout,
    type,
    connectNulls,
    fill: "none",
    points: baseLine
  }))), /* @__PURE__ */ reactExports.createElement(AreaDotsWrapper, {
    points,
    props: propsWithoutId,
    clipPathId
  }));
}
function VerticalRect(_ref5) {
  var _points$, _points;
  var {
    alpha,
    baseLine,
    points,
    strokeWidth
  } = _ref5;
  var startY = (_points$ = points[0]) === null || _points$ === void 0 ? void 0 : _points$.y;
  var endY = (_points = points[points.length - 1]) === null || _points === void 0 ? void 0 : _points.y;
  if (!isWellBehavedNumber(startY) || !isWellBehavedNumber(endY)) {
    return null;
  }
  var height = alpha * Math.abs(startY - endY);
  var maxX = Math.max(...points.map((entry) => entry.x || 0));
  if (isNumber(baseLine)) {
    maxX = Math.max(baseLine, maxX);
  } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
    maxX = Math.max(...baseLine.map((entry) => entry.x || 0), maxX);
  }
  if (isNumber(maxX)) {
    return /* @__PURE__ */ reactExports.createElement("rect", {
      x: 0,
      y: startY < endY ? startY : startY - height,
      width: maxX + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1),
      height: Math.floor(height)
    });
  }
  return null;
}
function HorizontalRect(_ref6) {
  var _points$2, _points2;
  var {
    alpha,
    baseLine,
    points,
    strokeWidth
  } = _ref6;
  var startX = (_points$2 = points[0]) === null || _points$2 === void 0 ? void 0 : _points$2.x;
  var endX = (_points2 = points[points.length - 1]) === null || _points2 === void 0 ? void 0 : _points2.x;
  if (!isWellBehavedNumber(startX) || !isWellBehavedNumber(endX)) {
    return null;
  }
  var width = alpha * Math.abs(startX - endX);
  var maxY = Math.max(...points.map((entry) => entry.y || 0));
  if (isNumber(baseLine)) {
    maxY = Math.max(baseLine, maxY);
  } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
    maxY = Math.max(...baseLine.map((entry) => entry.y || 0), maxY);
  }
  if (isNumber(maxY)) {
    return /* @__PURE__ */ reactExports.createElement("rect", {
      x: startX < endX ? startX : startX - width,
      y: 0,
      width,
      height: Math.floor(maxY + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1))
    });
  }
  return null;
}
function ClipRect(_ref7) {
  var {
    alpha,
    layout,
    points,
    baseLine,
    strokeWidth
  } = _ref7;
  if (layout === "vertical") {
    return /* @__PURE__ */ reactExports.createElement(VerticalRect, {
      alpha,
      points,
      baseLine,
      strokeWidth
    });
  }
  return /* @__PURE__ */ reactExports.createElement(HorizontalRect, {
    alpha,
    points,
    baseLine,
    strokeWidth
  });
}
function AreaWithAnimation(_ref8) {
  var {
    needClip,
    clipPathId,
    props,
    previousPointsRef,
    previousBaselineRef
  } = _ref8;
  var {
    points,
    baseLine,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationStart,
    onAnimationEnd
  } = props;
  var animationInput = reactExports.useMemo(() => ({
    points,
    baseLine
  }), [points, baseLine]);
  var animationId = useAnimationId(animationInput, "recharts-area-");
  var layout = useCartesianChartLayout();
  var [isAnimating, setIsAnimating] = reactExports.useState(false);
  var showLabels = !isAnimating;
  var handleAnimationEnd = reactExports.useCallback(() => {
    if (typeof onAnimationEnd === "function") {
      onAnimationEnd();
    }
    setIsAnimating(false);
  }, [onAnimationEnd]);
  var handleAnimationStart = reactExports.useCallback(() => {
    if (typeof onAnimationStart === "function") {
      onAnimationStart();
    }
    setIsAnimating(true);
  }, [onAnimationStart]);
  if (layout == null) {
    return null;
  }
  var prevPoints = previousPointsRef.current;
  var prevBaseLine = previousBaselineRef.current;
  return /* @__PURE__ */ reactExports.createElement(AreaLabelListProvider, {
    showLabels,
    points
  }, props.children, /* @__PURE__ */ reactExports.createElement(JavascriptAnimate, {
    animationId,
    begin: animationBegin,
    duration: animationDuration,
    isActive: isAnimationActive,
    easing: animationEasing,
    onAnimationEnd: handleAnimationEnd,
    onAnimationStart: handleAnimationStart,
    key: animationId
  }, (t) => {
    if (prevPoints) {
      var prevPointsDiffFactor = prevPoints.length / points.length;
      var stepPoints = (
        /*
         * Here it is important that at the very end of the animation, on the last frame,
         * we render the original points without any interpolation.
         * This is needed because the code above is checking for reference equality to decide if the animation should run
         * and if we create a new array instance (even if the numbers were the same)
         * then we would break animations.
         */
        t === 1 ? points : points.map((entry, index) => {
          var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
          if (prevPoints[prevPointIndex]) {
            var prev = prevPoints[prevPointIndex];
            return _objectSpread$2(_objectSpread$2({}, entry), {}, {
              x: interpolate(prev.x, entry.x, t),
              y: interpolate(prev.y, entry.y, t)
            });
          }
          return entry;
        })
      );
      var stepBaseLine;
      if (isNumber(baseLine)) {
        stepBaseLine = interpolate(prevBaseLine, baseLine, t);
      } else if (isNullish(baseLine) || isNan(baseLine)) {
        stepBaseLine = interpolate(prevBaseLine, 0, t);
      } else {
        stepBaseLine = baseLine.map((entry, index) => {
          var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
          if (Array.isArray(prevBaseLine) && prevBaseLine[prevPointIndex]) {
            var prev = prevBaseLine[prevPointIndex];
            return _objectSpread$2(_objectSpread$2({}, entry), {}, {
              x: interpolate(prev.x, entry.x, t),
              y: interpolate(prev.y, entry.y, t)
            });
          }
          return entry;
        });
      }
      if (t > 0) {
        previousPointsRef.current = stepPoints;
        previousBaselineRef.current = stepBaseLine;
      }
      return /* @__PURE__ */ reactExports.createElement(StaticArea, {
        points: stepPoints,
        baseLine: stepBaseLine,
        needClip,
        clipPathId,
        props
      });
    }
    if (t > 0) {
      previousPointsRef.current = points;
      previousBaselineRef.current = baseLine;
    }
    return /* @__PURE__ */ reactExports.createElement(Layer, null, isAnimationActive && /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("clipPath", {
      id: "animationClipPath-".concat(clipPathId)
    }, /* @__PURE__ */ reactExports.createElement(ClipRect, {
      alpha: t,
      points,
      baseLine,
      layout,
      strokeWidth: props.strokeWidth
    }))), /* @__PURE__ */ reactExports.createElement(Layer, {
      clipPath: "url(#animationClipPath-".concat(clipPathId, ")")
    }, /* @__PURE__ */ reactExports.createElement(StaticArea, {
      points,
      baseLine,
      needClip,
      clipPathId,
      props
    })));
  }), /* @__PURE__ */ reactExports.createElement(LabelListFromLabelProp, {
    label: props.label
  }));
}
function RenderArea(_ref9) {
  var {
    needClip,
    clipPathId,
    props
  } = _ref9;
  var previousPointsRef = reactExports.useRef(null);
  var previousBaselineRef = reactExports.useRef();
  return /* @__PURE__ */ reactExports.createElement(AreaWithAnimation, {
    needClip,
    clipPathId,
    props,
    previousPointsRef,
    previousBaselineRef
  });
}
class AreaWithState extends reactExports.PureComponent {
  render() {
    var {
      hide,
      dot,
      points,
      className,
      top,
      left,
      needClip,
      xAxisId,
      yAxisId,
      width,
      height,
      id,
      baseLine,
      zIndex
    } = this.props;
    if (hide) {
      return null;
    }
    var layerClass = clsx("recharts-area", className);
    var clipPathId = id;
    var {
      r,
      strokeWidth
    } = getRadiusAndStrokeWidthFromDot(dot);
    var clipDot = isClipDot(dot);
    var dotSize = r * 2 + strokeWidth;
    var activePointsClipPath = needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : void 0;
    return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
      zIndex
    }, /* @__PURE__ */ reactExports.createElement(Layer, {
      className: layerClass
    }, needClip && /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement(GraphicalItemClipPath, {
      clipPathId,
      xAxisId,
      yAxisId
    }), !clipDot && /* @__PURE__ */ reactExports.createElement("clipPath", {
      id: "clipPath-dots-".concat(clipPathId)
    }, /* @__PURE__ */ reactExports.createElement("rect", {
      x: left - dotSize / 2,
      y: top - dotSize / 2,
      width: width + dotSize,
      height: height + dotSize
    }))), /* @__PURE__ */ reactExports.createElement(RenderArea, {
      needClip,
      clipPathId,
      props: this.props
    })), /* @__PURE__ */ reactExports.createElement(ActivePoints, {
      points,
      mainColor: getLegendItemColor(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot,
      clipPath: activePointsClipPath
    }), this.props.isRange && Array.isArray(baseLine) && /* @__PURE__ */ reactExports.createElement(ActivePoints, {
      points: baseLine,
      mainColor: getLegendItemColor(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot,
      clipPath: activePointsClipPath
    }));
  }
}
var defaultAreaProps = {
  activeDot: true,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: false,
  dot: false,
  fill: "#3182bd",
  fillOpacity: 0.6,
  hide: false,
  isAnimationActive: "auto",
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  type: "linear",
  label: false,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: DefaultZIndexes.area
};
function AreaImpl(props) {
  var _useAppSelector;
  var _resolveDefaultProps = resolveDefaultProps(props, defaultAreaProps), {
    activeDot,
    animationBegin,
    animationDuration,
    animationEasing,
    connectNulls,
    dot,
    fill,
    fillOpacity,
    hide,
    isAnimationActive,
    legendType,
    stroke,
    xAxisId,
    yAxisId
  } = _resolveDefaultProps, everythingElse = _objectWithoutProperties$3(_resolveDefaultProps, _excluded2$1);
  var layout = useChartLayout();
  var chartName = useChartName();
  var {
    needClip
  } = useNeedsClip(xAxisId, yAxisId);
  var isPanorama = useIsPanorama();
  var {
    points,
    isRange,
    baseLine
  } = (_useAppSelector = useAppSelector((state) => selectArea(state, props.id, isPanorama))) !== null && _useAppSelector !== void 0 ? _useAppSelector : {};
  var plotArea = usePlotArea();
  if (layout !== "horizontal" && layout !== "vertical" || plotArea == null) {
    return null;
  }
  if (chartName !== "AreaChart" && chartName !== "ComposedChart") {
    return null;
  }
  var {
    height,
    width,
    x: left,
    y: top
  } = plotArea;
  if (!points || !points.length) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(AreaWithState, _extends$4({}, everythingElse, {
    activeDot,
    animationBegin,
    animationDuration,
    animationEasing,
    baseLine,
    connectNulls,
    dot,
    fill,
    fillOpacity,
    height,
    hide,
    layout,
    isAnimationActive: isAnimationActive === "auto" ? !Global.isSsr : isAnimationActive,
    isRange,
    legendType,
    needClip,
    points,
    stroke,
    width,
    left,
    top,
    xAxisId,
    yAxisId
  }));
}
var getBaseValue = (layout, chartBaseValue, itemBaseValue, xAxis, yAxis) => {
  var baseValue = itemBaseValue !== null && itemBaseValue !== void 0 ? itemBaseValue : chartBaseValue;
  if (isNumber(baseValue)) {
    return baseValue;
  }
  var numericAxis = layout === "horizontal" ? yAxis : xAxis;
  var domain = numericAxis.scale.domain();
  if (numericAxis.type === "number") {
    var domainMax = Math.max(domain[0], domain[1]);
    var domainMin = Math.min(domain[0], domain[1]);
    if (baseValue === "dataMin") {
      return domainMin;
    }
    if (baseValue === "dataMax") {
      return domainMax;
    }
    return domainMax < 0 ? domainMax : Math.max(Math.min(domain[0], domain[1]), 0);
  }
  if (baseValue === "dataMin") {
    return domain[0];
  }
  if (baseValue === "dataMax") {
    return domain[1];
  }
  return domain[0];
};
function computeArea(_ref0) {
  var {
    areaSettings: {
      connectNulls,
      baseValue: itemBaseValue,
      dataKey
    },
    stackedData,
    layout,
    chartBaseValue,
    xAxis,
    yAxis,
    displayedData,
    dataStartIndex,
    xAxisTicks,
    yAxisTicks,
    bandSize
  } = _ref0;
  var hasStack = stackedData && stackedData.length;
  var baseValue = getBaseValue(layout, chartBaseValue, itemBaseValue, xAxis, yAxis);
  var isHorizontalLayout = layout === "horizontal";
  var isRange = false;
  var points = displayedData.map((entry, index) => {
    var _valueAsArray$, _valueAsArray, _xAxis$scale$map;
    var valueAsArray;
    if (hasStack) {
      valueAsArray = stackedData[dataStartIndex + index];
    } else {
      var rawValue = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(rawValue)) {
        valueAsArray = [baseValue, rawValue];
      } else {
        valueAsArray = rawValue;
        isRange = true;
      }
    }
    var value1 = (_valueAsArray$ = (_valueAsArray = valueAsArray) === null || _valueAsArray === void 0 ? void 0 : _valueAsArray[1]) !== null && _valueAsArray$ !== void 0 ? _valueAsArray$ : null;
    var isBreakPoint = value1 == null || hasStack && !connectNulls && getValueByDataKey(entry, dataKey) == null;
    if (isHorizontalLayout) {
      var _yAxis$scale$map;
      return {
        x: getCateCoordinateOfLine({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize,
          entry,
          index
        }),
        y: isBreakPoint ? null : (_yAxis$scale$map = yAxis.scale.map(value1)) !== null && _yAxis$scale$map !== void 0 ? _yAxis$scale$map : null,
        value: valueAsArray,
        payload: entry
      };
    }
    return {
      x: isBreakPoint ? null : (_xAxis$scale$map = xAxis.scale.map(value1)) !== null && _xAxis$scale$map !== void 0 ? _xAxis$scale$map : null,
      y: getCateCoordinateOfLine({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize,
        entry,
        index
      }),
      value: valueAsArray,
      payload: entry
    };
  });
  var baseLine;
  if (hasStack || isRange) {
    baseLine = points.map((entry) => {
      var _xAxis$scale$map2;
      var x = Array.isArray(entry.value) ? entry.value[0] : null;
      if (isHorizontalLayout) {
        var _yAxis$scale$map2;
        return {
          x: entry.x,
          y: x != null && entry.y != null ? (_yAxis$scale$map2 = yAxis.scale.map(x)) !== null && _yAxis$scale$map2 !== void 0 ? _yAxis$scale$map2 : null : null,
          payload: entry.payload
        };
      }
      return {
        x: x != null ? (_xAxis$scale$map2 = xAxis.scale.map(x)) !== null && _xAxis$scale$map2 !== void 0 ? _xAxis$scale$map2 : null : null,
        y: entry.y,
        payload: entry.payload
      };
    });
  } else {
    baseLine = isHorizontalLayout ? yAxis.scale.map(baseValue) : xAxis.scale.map(baseValue);
  }
  return {
    points,
    baseLine: baseLine !== null && baseLine !== void 0 ? baseLine : 0,
    isRange
  };
}
function AreaFn(outsideProps) {
  var props = resolveDefaultProps(outsideProps, defaultAreaProps);
  var isPanorama = useIsPanorama();
  return /* @__PURE__ */ reactExports.createElement(RegisterGraphicalItemId, {
    id: props.id,
    type: "area"
  }, (id) => /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(SetLegendPayload, {
    legendPayload: computeLegendPayloadFromAreaData(props)
  }), /* @__PURE__ */ reactExports.createElement(SetAreaTooltipEntrySettings, {
    dataKey: props.dataKey,
    data: props.data,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth,
    fill: props.fill,
    name: props.name,
    hide: props.hide,
    unit: props.unit,
    tooltipType: props.tooltipType,
    id
  }), /* @__PURE__ */ reactExports.createElement(SetCartesianGraphicalItem, {
    type: "area",
    id,
    data: props.data,
    dataKey: props.dataKey,
    xAxisId: props.xAxisId,
    yAxisId: props.yAxisId,
    zAxisId: 0,
    stackId: getNormalizedStackId(props.stackId),
    hide: props.hide,
    barSize: void 0,
    baseValue: props.baseValue,
    isPanorama,
    connectNulls: props.connectNulls
  }), /* @__PURE__ */ reactExports.createElement(AreaImpl, _extends$4({}, props, {
    id
  }))));
}
var Area = /* @__PURE__ */ reactExports.memo(AreaFn, propsAreEqual);
Area.displayName = "Area";
var prefix = "Invariant failed";
function invariant(condition, message) {
  {
    throw new Error(prefix);
  }
}
function _extends$3() {
  return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$3.apply(null, arguments);
}
function BarRectangle(props) {
  return /* @__PURE__ */ reactExports.createElement(Shape, _extends$3({
    shapeType: "rectangle",
    activeClassName: "recharts-active-bar"
  }, props));
}
var minPointSizeCallback = function minPointSizeCallback2(minPointSize) {
  var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (value, index) => {
    if (isNumber(minPointSize)) return minPointSize;
    var isValueNumberOrNil = isNumber(value) || isNullish(value);
    if (isValueNumberOrNil) {
      return minPointSize(value, index);
    }
    !isValueNumberOrNil ? invariant() : void 0;
    return defaultValue;
  };
};
var pickIsPanorama = (_state, _id, isPanorama) => isPanorama;
var pickBarId = (_state, id) => id;
var selectSynchronisedBarSettings = createSelector([selectUnfilteredCartesianItems, pickBarId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "bar").find((item) => item.id === id));
var selectMaxBarSize = createSelector([selectSynchronisedBarSettings], (barSettings) => barSettings === null || barSettings === void 0 ? void 0 : barSettings.maxBarSize);
var pickCells = (_state, _id, _isPanorama, cells) => cells;
var selectAllVisibleBars = createSelector([selectChartLayout, selectUnfilteredCartesianItems, selectXAxisIdFromGraphicalItemId, selectYAxisIdFromGraphicalItemId, pickIsPanorama], (layout, allItems, xAxisId, yAxisId, isPanorama) => allItems.filter((i) => {
  if (layout === "horizontal") {
    return i.xAxisId === xAxisId;
  }
  return i.yAxisId === yAxisId;
}).filter((i) => i.isPanorama === isPanorama).filter((i) => i.hide === false).filter((i) => i.type === "bar"));
var selectBarStackGroups = (state, id, isPanorama) => {
  var layout = selectChartLayout(state);
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return void 0;
  }
  if (layout === "horizontal") {
    return selectStackGroups(state, "yAxis", yAxisId, isPanorama);
  }
  return selectStackGroups(state, "xAxis", xAxisId, isPanorama);
};
var selectBarCartesianAxisSize = (state, id) => {
  var layout = selectChartLayout(state);
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return void 0;
  }
  if (layout === "horizontal") {
    return selectCartesianAxisSize(state, "xAxis", xAxisId);
  }
  return selectCartesianAxisSize(state, "yAxis", yAxisId);
};
var selectBarSizeList = createSelector([selectAllVisibleBars, selectRootBarSize, selectBarCartesianAxisSize], combineBarSizeList);
var selectBarBandSize = (state, id, isPanorama) => {
  var _ref, _getBandSizeOfAxis;
  var barSettings = selectSynchronisedBarSettings(state, id);
  if (barSettings == null) {
    return 0;
  }
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return 0;
  }
  var layout = selectChartLayout(state);
  var globalMaxBarSize = selectRootMaxBarSize(state);
  var {
    maxBarSize: childMaxBarSize
  } = barSettings;
  var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
  var axis, ticks;
  if (layout === "horizontal") {
    axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
  } else {
    axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
  }
  return (_ref = (_getBandSizeOfAxis = getBandSizeOfAxis(axis, ticks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref !== void 0 ? _ref : 0;
};
var selectAxisBandSize = (state, id, isPanorama) => {
  var layout = selectChartLayout(state);
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null || yAxisId == null) {
    return void 0;
  }
  var axis, ticks;
  if (layout === "horizontal") {
    axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
  } else {
    axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
    ticks = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
  }
  return getBandSizeOfAxis(axis, ticks);
};
var selectAllBarPositions = createSelector([selectBarSizeList, selectRootMaxBarSize, selectBarGap, selectBarCategoryGap, selectBarBandSize, selectAxisBandSize, selectMaxBarSize], combineAllBarPositions);
var selectXAxisWithScale = (state, id, isPanorama) => {
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null) {
    return void 0;
  }
  return selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
};
var selectYAxisWithScale = (state, id, isPanorama) => {
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (yAxisId == null) {
    return void 0;
  }
  return selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
};
var selectXAxisTicks = (state, id, isPanorama) => {
  var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
  if (xAxisId == null) {
    return void 0;
  }
  return selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
};
var selectYAxisTicks = (state, id, isPanorama) => {
  var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
  if (yAxisId == null) {
    return void 0;
  }
  return selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
};
var selectBarPosition = createSelector([selectAllBarPositions, selectSynchronisedBarSettings], combineBarPosition);
var selectStackedDataOfItem = createSelector([selectBarStackGroups, selectSynchronisedBarSettings], combineStackedData);
var selectBarRectangles = createSelector([selectChartOffsetInternal, selectAxisViewBox, selectXAxisWithScale, selectYAxisWithScale, selectXAxisTicks, selectYAxisTicks, selectBarPosition, selectChartLayout, selectChartDataWithIndexesIfNotInPanoramaPosition3, selectAxisBandSize, selectStackedDataOfItem, selectSynchronisedBarSettings, pickCells], (offset, axisViewBox, xAxis, yAxis, xAxisTicks, yAxisTicks, pos, layout, _ref2, bandSize, stackedData, barSettings, cells) => {
  var {
    chartData,
    dataStartIndex,
    dataEndIndex
  } = _ref2;
  if (barSettings == null || pos == null || axisViewBox == null || layout !== "horizontal" && layout !== "vertical" || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || bandSize == null) {
    return void 0;
  }
  var {
    data
  } = barSettings;
  var displayedData;
  if (data != null && data.length > 0) {
    displayedData = data;
  } else {
    displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
  }
  if (displayedData == null) {
    return void 0;
  }
  return computeBarRectangles({
    layout,
    barSettings,
    pos,
    parentViewBox: axisViewBox,
    bandSize,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    stackedData,
    displayedData,
    offset,
    cells,
    dataStartIndex
  });
});
var _excluded$2 = ["index"];
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}
function _objectWithoutProperties$2(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$2(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$2(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var BarStackContext = /* @__PURE__ */ reactExports.createContext(void 0);
var useStackId = (childStackId) => {
  var stackSettings = reactExports.useContext(BarStackContext);
  if (stackSettings != null) {
    return stackSettings.stackId;
  }
  if (childStackId == null) {
    return void 0;
  }
  return getNormalizedStackId(childStackId);
};
var getClipPathId = (stackId, index) => {
  return "recharts-bar-stack-clip-path-".concat(stackId, "-").concat(index);
};
var useBarStackClipPathUrl = (index) => {
  var barStackContext = reactExports.useContext(BarStackContext);
  if (barStackContext == null) {
    return void 0;
  }
  var {
    stackId
  } = barStackContext;
  return "url(#".concat(getClipPathId(stackId, index), ")");
};
var BarStackClipLayer = (_ref) => {
  var {
    index
  } = _ref, rest = _objectWithoutProperties$2(_ref, _excluded$2);
  var clipPathUrl = useBarStackClipPathUrl(index);
  return /* @__PURE__ */ reactExports.createElement(Layer, _extends$2({
    className: "recharts-bar-stack-layer",
    clipPath: clipPathUrl
  }, rest));
};
var _excluded$1 = ["onMouseEnter", "onMouseLeave", "onClick"], _excluded2 = ["value", "background", "tooltipPosition"], _excluded3 = ["id"], _excluded4 = ["onMouseEnter", "onClick", "onMouseLeave"];
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$1(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose$1(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$1(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var computeLegendPayloadFromBarData = (props) => {
  var {
    dataKey,
    name,
    fill,
    legendType,
    hide
  } = props;
  return [{
    inactive: hide,
    dataKey,
    type: legendType,
    color: fill,
    value: getTooltipNameProp(name, dataKey),
    payload: props
  }];
};
var SetBarTooltipEntrySettings = /* @__PURE__ */ reactExports.memo((_ref) => {
  var {
    dataKey,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    unit,
    tooltipType,
    id
  } = _ref;
  var tooltipEntrySettings = {
    dataDefinedOnItem: void 0,
    getPosition: noop,
    settings: {
      stroke,
      strokeWidth,
      fill,
      dataKey,
      nameKey: void 0,
      name: getTooltipNameProp(name, dataKey),
      hide,
      type: tooltipType,
      color: fill,
      unit,
      graphicalItemId: id
    }
  };
  return /* @__PURE__ */ reactExports.createElement(SetTooltipEntrySettings, {
    tooltipEntrySettings
  });
});
function BarBackground(props) {
  var activeIndex = useAppSelector(selectActiveTooltipIndex);
  var {
    data,
    dataKey,
    background: backgroundFromProps,
    allOtherBarProps
  } = props;
  var {
    onMouseEnter: onMouseEnterFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    onClick: onItemClickFromProps
  } = allOtherBarProps, restOfAllOtherProps = _objectWithoutProperties$1(allOtherBarProps, _excluded$1);
  var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, allOtherBarProps.id);
  var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, allOtherBarProps.id);
  if (!backgroundFromProps || data == null) {
    return null;
  }
  var backgroundProps = svgPropertiesNoEventsFromUnknown(backgroundFromProps);
  return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: getZIndexFromUnknown(backgroundFromProps, DefaultZIndexes.barBackground)
  }, data.map((entry, i) => {
    var {
      value,
      background: backgroundFromDataEntry,
      tooltipPosition
    } = entry, rest = _objectWithoutProperties$1(entry, _excluded2);
    if (!backgroundFromDataEntry) {
      return null;
    }
    var onMouseEnter = onMouseEnterFromContext(entry, i);
    var onMouseLeave = onMouseLeaveFromContext(entry, i);
    var onClick = onClickFromContext(entry, i);
    var barRectangleProps = _objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1({
      option: backgroundFromProps,
      isActive: String(i) === activeIndex
    }, rest), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, backgroundFromDataEntry), backgroundProps), adaptEventsOfChild(restOfAllOtherProps, entry, i)), {}, {
      onMouseEnter,
      onMouseLeave,
      onClick,
      dataKey,
      index: i,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ reactExports.createElement(BarRectangle, _extends$1({
      key: "background-bar-".concat(i)
    }, barRectangleProps));
  }));
}
function BarLabelListProvider(_ref2) {
  var {
    showLabels,
    children,
    rects
  } = _ref2;
  var labelListEntries = rects === null || rects === void 0 ? void 0 : rects.map((entry) => {
    var viewBox = {
      x: entry.x,
      y: entry.y,
      width: entry.width,
      lowerWidth: entry.width,
      upperWidth: entry.width,
      height: entry.height
    };
    return _objectSpread$1(_objectSpread$1({}, viewBox), {}, {
      value: entry.value,
      payload: entry.payload,
      parentViewBox: entry.parentViewBox,
      viewBox,
      fill: entry.fill
    });
  });
  return /* @__PURE__ */ reactExports.createElement(CartesianLabelListContextProvider, {
    value: showLabels ? labelListEntries : void 0
  }, children);
}
function BarRectangleWithActiveState(props) {
  var {
    shape,
    activeBar,
    baseProps,
    entry,
    index,
    dataKey
  } = props;
  var activeIndex = useAppSelector(selectActiveTooltipIndex);
  var activeDataKey = useAppSelector(selectActiveTooltipDataKey);
  var isActive = activeBar && String(index) === activeIndex && (activeDataKey == null || dataKey === activeDataKey);
  var option = isActive ? activeBar : shape;
  if (isActive) {
    return /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
      zIndex: DefaultZIndexes.activeBar
    }, /* @__PURE__ */ reactExports.createElement(BarStackClipLayer, {
      index
    }, /* @__PURE__ */ reactExports.createElement(BarRectangle, _extends$1({}, baseProps, {
      name: String(baseProps.name)
    }, entry, {
      isActive,
      option,
      index,
      dataKey
    }))));
  }
  return /* @__PURE__ */ reactExports.createElement(BarRectangle, _extends$1({}, baseProps, {
    name: String(baseProps.name)
  }, entry, {
    isActive,
    option,
    index,
    dataKey
  }));
}
function BarRectangleNeverActive(props) {
  var {
    shape,
    baseProps,
    entry,
    index,
    dataKey
  } = props;
  return /* @__PURE__ */ reactExports.createElement(BarRectangle, _extends$1({}, baseProps, {
    name: String(baseProps.name)
  }, entry, {
    isActive: false,
    option: shape,
    index,
    dataKey
  }));
}
function BarRectangles(_ref3) {
  var _svgPropertiesNoEvent;
  var {
    data,
    props
  } = _ref3;
  var _ref4 = (_svgPropertiesNoEvent = svgPropertiesNoEvents(props)) !== null && _svgPropertiesNoEvent !== void 0 ? _svgPropertiesNoEvent : {}, {
    id
  } = _ref4, baseProps = _objectWithoutProperties$1(_ref4, _excluded3);
  var {
    shape,
    dataKey,
    activeBar
  } = props;
  var {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps
  } = props, restOfAllOtherProps = _objectWithoutProperties$1(props, _excluded4);
  var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, id);
  var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, id);
  if (!data) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, data.map((entry, i) => {
    return /* @__PURE__ */ reactExports.createElement(BarStackClipLayer, _extends$1({
      index: i,
      key: "rectangle-".concat(entry === null || entry === void 0 ? void 0 : entry.x, "-").concat(entry === null || entry === void 0 ? void 0 : entry.y, "-").concat(entry === null || entry === void 0 ? void 0 : entry.value, "-").concat(i),
      className: "recharts-bar-rectangle"
    }, adaptEventsOfChild(restOfAllOtherProps, entry, i), {
      // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
      onMouseEnter: onMouseEnterFromContext(entry, i),
      onMouseLeave: onMouseLeaveFromContext(entry, i),
      onClick: onClickFromContext(entry, i)
    }), activeBar ? /* @__PURE__ */ reactExports.createElement(BarRectangleWithActiveState, {
      shape,
      activeBar,
      baseProps,
      entry,
      index: i,
      dataKey
    }) : (
      /*
       * If the `activeBar` prop is falsy, then let's call the variant without hooks.
       * Using the `selectActiveTooltipIndex` selector is usually fast
       * but in charts with large-ish amount of data even the few nanoseconds add up to a noticeable jank.
       * If the activeBar is false then we don't need to know which index is active - because we won't use it anyway.
       * So let's just skip the hooks altogether. That way, React can skip rendering the component,
       * and can skip the tree reconciliation for its children too.
       * Because we can't call hooks conditionally, we need to have a separate component for that.
       */
      /* @__PURE__ */ reactExports.createElement(BarRectangleNeverActive, {
        shape,
        baseProps,
        entry,
        index: i,
        dataKey
      })
    ));
  }));
}
function RectanglesWithAnimation(_ref5) {
  var {
    props,
    previousRectanglesRef
  } = _ref5;
  var {
    data,
    layout,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationEnd,
    onAnimationStart
  } = props;
  var prevData = previousRectanglesRef.current;
  var animationId = useAnimationId(props, "recharts-bar-");
  var [isAnimating, setIsAnimating] = reactExports.useState(false);
  var showLabels = !isAnimating;
  var handleAnimationEnd = reactExports.useCallback(() => {
    if (typeof onAnimationEnd === "function") {
      onAnimationEnd();
    }
    setIsAnimating(false);
  }, [onAnimationEnd]);
  var handleAnimationStart = reactExports.useCallback(() => {
    if (typeof onAnimationStart === "function") {
      onAnimationStart();
    }
    setIsAnimating(true);
  }, [onAnimationStart]);
  return /* @__PURE__ */ reactExports.createElement(BarLabelListProvider, {
    showLabels,
    rects: data
  }, /* @__PURE__ */ reactExports.createElement(JavascriptAnimate, {
    animationId,
    begin: animationBegin,
    duration: animationDuration,
    isActive: isAnimationActive,
    easing: animationEasing,
    onAnimationEnd: handleAnimationEnd,
    onAnimationStart: handleAnimationStart,
    key: animationId
  }, (t) => {
    var stepData = t === 1 ? data : data === null || data === void 0 ? void 0 : data.map((entry, index) => {
      var prev = prevData && prevData[index];
      if (prev) {
        return _objectSpread$1(_objectSpread$1({}, entry), {}, {
          x: interpolate(prev.x, entry.x, t),
          y: interpolate(prev.y, entry.y, t),
          width: interpolate(prev.width, entry.width, t),
          height: interpolate(prev.height, entry.height, t)
        });
      }
      if (layout === "horizontal") {
        var height = interpolate(0, entry.height, t);
        var y = interpolate(entry.stackedBarStart, entry.y, t);
        return _objectSpread$1(_objectSpread$1({}, entry), {}, {
          y,
          height
        });
      }
      var w = interpolate(0, entry.width, t);
      var x = interpolate(entry.stackedBarStart, entry.x, t);
      return _objectSpread$1(_objectSpread$1({}, entry), {}, {
        width: w,
        x
      });
    });
    if (t > 0) {
      previousRectanglesRef.current = stepData !== null && stepData !== void 0 ? stepData : null;
    }
    if (stepData == null) {
      return null;
    }
    return /* @__PURE__ */ reactExports.createElement(Layer, null, /* @__PURE__ */ reactExports.createElement(BarRectangles, {
      props,
      data: stepData
    }));
  }), /* @__PURE__ */ reactExports.createElement(LabelListFromLabelProp, {
    label: props.label
  }), props.children);
}
function RenderRectangles(props) {
  var previousRectanglesRef = reactExports.useRef(null);
  return /* @__PURE__ */ reactExports.createElement(RectanglesWithAnimation, {
    previousRectanglesRef,
    props
  });
}
var defaultMinPointSize = 0;
var errorBarDataPointFormatter = (dataPoint, dataKey) => {
  var value = Array.isArray(dataPoint.value) ? dataPoint.value[1] : dataPoint.value;
  return {
    x: dataPoint.x,
    y: dataPoint.y,
    value,
    // @ts-expect-error getValueByDataKey does not validate the output type
    errorVal: getValueByDataKey(dataPoint, dataKey)
  };
};
class BarWithState extends reactExports.PureComponent {
  render() {
    var {
      hide,
      data,
      dataKey,
      className,
      xAxisId,
      yAxisId,
      needClip,
      background,
      id
    } = this.props;
    if (hide || data == null) {
      return null;
    }
    var layerClass = clsx("recharts-bar", className);
    var clipPathId = id;
    return /* @__PURE__ */ reactExports.createElement(Layer, {
      className: layerClass,
      id
    }, needClip && /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement(GraphicalItemClipPath, {
      clipPathId,
      xAxisId,
      yAxisId
    })), /* @__PURE__ */ reactExports.createElement(Layer, {
      className: "recharts-bar-rectangles",
      clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0
    }, /* @__PURE__ */ reactExports.createElement(BarBackground, {
      data,
      dataKey,
      background,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ reactExports.createElement(RenderRectangles, this.props)));
  }
}
var defaultBarProps = {
  activeBar: false,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  background: false,
  hide: false,
  isAnimationActive: "auto",
  label: false,
  legendType: "rect",
  minPointSize: defaultMinPointSize,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: DefaultZIndexes.bar
};
function BarImpl(props) {
  var {
    xAxisId,
    yAxisId,
    hide,
    legendType,
    minPointSize,
    activeBar,
    animationBegin,
    animationDuration,
    animationEasing,
    isAnimationActive
  } = props;
  var {
    needClip
  } = useNeedsClip(xAxisId, yAxisId);
  var layout = useChartLayout();
  var isPanorama = useIsPanorama();
  var cells = findAllByType(props.children, Cell);
  var rects = useAppSelector((state) => selectBarRectangles(state, props.id, isPanorama, cells));
  if (layout !== "vertical" && layout !== "horizontal") {
    return null;
  }
  var errorBarOffset;
  var firstDataPoint = rects === null || rects === void 0 ? void 0 : rects[0];
  if (firstDataPoint == null || firstDataPoint.height == null || firstDataPoint.width == null) {
    errorBarOffset = 0;
  } else {
    errorBarOffset = layout === "vertical" ? firstDataPoint.height / 2 : firstDataPoint.width / 2;
  }
  return /* @__PURE__ */ reactExports.createElement(SetErrorBarContext, {
    xAxisId,
    yAxisId,
    data: rects,
    dataPointFormatter: errorBarDataPointFormatter,
    errorBarOffset
  }, /* @__PURE__ */ reactExports.createElement(BarWithState, _extends$1({}, props, {
    layout,
    needClip,
    data: rects,
    xAxisId,
    yAxisId,
    hide,
    legendType,
    minPointSize,
    activeBar,
    animationBegin,
    animationDuration,
    animationEasing,
    isAnimationActive
  })));
}
function computeBarRectangles(_ref6) {
  var {
    layout,
    barSettings: {
      dataKey,
      minPointSize: minPointSizeProp
    },
    pos,
    bandSize,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    stackedData,
    displayedData,
    offset,
    cells,
    parentViewBox,
    dataStartIndex
  } = _ref6;
  var numericAxis = layout === "horizontal" ? yAxis : xAxis;
  var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  var baseValue = getBaseValueOfBar({
    numericAxis
  });
  var stackedBarStart = numericAxis.scale.map(baseValue);
  return displayedData.map((entry, index) => {
    var value, x, y, width, height, background;
    if (stackedData) {
      var untruncatedValue = stackedData[index + dataStartIndex];
      if (untruncatedValue == null) {
        return null;
      }
      value = truncateByDomain(untruncatedValue, stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      }
    }
    var minPointSize = minPointSizeCallback(minPointSizeProp, defaultMinPointSize)(value[1], index);
    if (layout === "horizontal") {
      var _ref7;
      var baseValueScale = yAxis.scale.map(value[0]);
      var currentValueScale = yAxis.scale.map(value[1]);
      if (baseValueScale == null || currentValueScale == null) {
        return null;
      }
      x = getCateCoordinateOfBar({
        axis: xAxis,
        ticks: xAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      y = (_ref7 = currentValueScale !== null && currentValueScale !== void 0 ? currentValueScale : baseValueScale) !== null && _ref7 !== void 0 ? _ref7 : void 0;
      width = pos.size;
      var computedHeight = baseValueScale - currentValueScale;
      height = isNan(computedHeight) ? 0 : computedHeight;
      background = {
        x,
        y: offset.top,
        width,
        height: offset.height
      };
      if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
        var delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
        y -= delta;
        height += delta;
      }
    } else {
      var _baseValueScale = xAxis.scale.map(value[0]);
      var _currentValueScale = xAxis.scale.map(value[1]);
      if (_baseValueScale == null || _currentValueScale == null) {
        return null;
      }
      x = _baseValueScale;
      y = getCateCoordinateOfBar({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      width = _currentValueScale - _baseValueScale;
      height = pos.size;
      background = {
        x: offset.left,
        y,
        width: offset.width,
        height
      };
      if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
        var _delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
        width += _delta;
      }
    }
    if (x == null || y == null || width == null || height == null) {
      return null;
    }
    var barRectangleItem = _objectSpread$1(_objectSpread$1({}, entry), {}, {
      stackedBarStart,
      x,
      y,
      width,
      height,
      value: stackedData ? value : value[1],
      payload: entry,
      background,
      tooltipPosition: {
        x: x + width / 2,
        y: y + height / 2
      },
      parentViewBox
    }, cells && cells[index] && cells[index].props);
    return barRectangleItem;
  }).filter(Boolean);
}
function BarFn(outsideProps) {
  var props = resolveDefaultProps(outsideProps, defaultBarProps);
  var stackId = useStackId(props.stackId);
  var isPanorama = useIsPanorama();
  return /* @__PURE__ */ reactExports.createElement(RegisterGraphicalItemId, {
    id: props.id,
    type: "bar"
  }, (id) => /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(SetLegendPayload, {
    legendPayload: computeLegendPayloadFromBarData(props)
  }), /* @__PURE__ */ reactExports.createElement(SetBarTooltipEntrySettings, {
    dataKey: props.dataKey,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth,
    fill: props.fill,
    name: props.name,
    hide: props.hide,
    unit: props.unit,
    tooltipType: props.tooltipType,
    id
  }), /* @__PURE__ */ reactExports.createElement(SetCartesianGraphicalItem, {
    type: "bar",
    id,
    data: void 0,
    xAxisId: props.xAxisId,
    yAxisId: props.yAxisId,
    zAxisId: 0,
    dataKey: props.dataKey,
    stackId,
    hide: props.hide,
    barSize: props.barSize,
    minPointSize: props.minPointSize,
    maxBarSize: props.maxBarSize,
    isPanorama
  }), /* @__PURE__ */ reactExports.createElement(ZIndexLayer, {
    zIndex: props.zIndex
  }, /* @__PURE__ */ reactExports.createElement(BarImpl, _extends$1({}, props, {
    id
  })))));
}
var Bar = /* @__PURE__ */ reactExports.memo(BarFn, propsAreEqual);
Bar.displayName = "Bar";
var allowedTooltipTypes$2 = ["axis", "item"];
var BarChart = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  return /* @__PURE__ */ reactExports.createElement(CartesianChart, {
    chartName: "BarChart",
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: allowedTooltipTypes$2,
    tooltipPayloadSearcher: arrayTooltipSearcher,
    categoricalChartProps: props,
    ref
  });
});
function ReportPolarOptions(props) {
  var dispatch = useAppDispatch();
  reactExports.useEffect(() => {
    dispatch(updatePolarOptions(props));
  }, [dispatch, props]);
  return null;
}
var _excluded = ["layout"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
var defaultMargin = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
};
var defaultPolarChartProps = {
  accessibilityLayer: true,
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: defaultMargin,
  reverseStackOrder: false,
  syncMethod: "index",
  layout: "radial",
  responsive: false,
  cx: "50%",
  cy: "50%",
  innerRadius: 0,
  outerRadius: "80%"
};
var PolarChart = /* @__PURE__ */ reactExports.forwardRef(function PolarChart2(props, ref) {
  var _polarChartProps$id;
  var polarChartProps = resolveDefaultProps(props.categoricalChartProps, defaultPolarChartProps);
  var {
    layout
  } = polarChartProps, otherCategoricalProps = _objectWithoutProperties(polarChartProps, _excluded);
  var {
    chartName,
    defaultTooltipEventType,
    validateTooltipEventTypes,
    tooltipPayloadSearcher
  } = props;
  var options = {
    chartName,
    defaultTooltipEventType,
    validateTooltipEventTypes,
    tooltipPayloadSearcher,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ reactExports.createElement(RechartsStoreProvider, {
    preloadedState: {
      options
    },
    reduxStoreName: (_polarChartProps$id = polarChartProps.id) !== null && _polarChartProps$id !== void 0 ? _polarChartProps$id : chartName
  }, /* @__PURE__ */ reactExports.createElement(ChartDataContextProvider, {
    chartData: polarChartProps.data
  }), /* @__PURE__ */ reactExports.createElement(ReportMainChartProps, {
    layout,
    margin: polarChartProps.margin
  }), /* @__PURE__ */ reactExports.createElement(ReportChartProps, {
    baseValue: void 0,
    accessibilityLayer: polarChartProps.accessibilityLayer,
    barCategoryGap: polarChartProps.barCategoryGap,
    maxBarSize: polarChartProps.maxBarSize,
    stackOffset: polarChartProps.stackOffset,
    barGap: polarChartProps.barGap,
    barSize: polarChartProps.barSize,
    syncId: polarChartProps.syncId,
    syncMethod: polarChartProps.syncMethod,
    className: polarChartProps.className,
    reverseStackOrder: polarChartProps.reverseStackOrder
  }), /* @__PURE__ */ reactExports.createElement(ReportPolarOptions, {
    cx: polarChartProps.cx,
    cy: polarChartProps.cy,
    startAngle: polarChartProps.startAngle,
    endAngle: polarChartProps.endAngle,
    innerRadius: polarChartProps.innerRadius,
    outerRadius: polarChartProps.outerRadius
  }), /* @__PURE__ */ reactExports.createElement(CategoricalChart, _extends({}, otherCategoricalProps, {
    ref
  })));
});
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var allowedTooltipTypes$1 = ["item"];
var defaultPieChartProps = _objectSpread(_objectSpread({}, defaultPolarChartProps), {}, {
  layout: "centric",
  startAngle: 0,
  endAngle: 360
});
var PieChart = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  var propsWithDefaults = resolveDefaultProps(props, defaultPieChartProps);
  return /* @__PURE__ */ reactExports.createElement(PolarChart, {
    chartName: "PieChart",
    defaultTooltipEventType: "item",
    validateTooltipEventTypes: allowedTooltipTypes$1,
    tooltipPayloadSearcher: arrayTooltipSearcher,
    categoricalChartProps: propsWithDefaults,
    ref
  });
});
var allowedTooltipTypes = ["axis"];
var AreaChart = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  return /* @__PURE__ */ reactExports.createElement(CartesianChart, {
    chartName: "AreaChart",
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: allowedTooltipTypes,
    tooltipPayloadSearcher: arrayTooltipSearcher,
    categoricalChartProps: props,
    ref
  });
});
function PrintCalendar({ printDates, months = 3 }) {
  const containerRef = reactExports.useRef(null);
  const [containerWidth, setContainerWidth] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width || 0;
      setContainerWidth(width);
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);
  const { weeks, monthLabels, printCounts } = reactExports.useMemo(() => {
    const counts = {};
    printDates.forEach((date) => {
      const day = date.split("T")[0];
      counts[day] = (counts[day] || 0) + 1;
    });
    const today = /* @__PURE__ */ new Date();
    const startDate = new Date(today);
    startDate.setMonth(startDate.getMonth() - months);
    startDate.setDate(startDate.getDate() - startDate.getDay());
    const weeks2 = [];
    const monthLabels2 = [];
    let currentWeek = [];
    let lastMonth = -1;
    const current = new Date(startDate);
    let weekIndex = 0;
    while (current <= today) {
      if (current.getDay() === 0 && currentWeek.length > 0) {
        weeks2.push(currentWeek);
        currentWeek = [];
        weekIndex++;
      }
      if (current.getMonth() !== lastMonth) {
        monthLabels2.push({
          month: current.toLocaleDateString("en-US", { month: "short" }),
          weekIndex
        });
        lastMonth = current.getMonth();
      }
      currentWeek.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    if (currentWeek.length > 0) {
      weeks2.push(currentWeek);
    }
    return { weeks: weeks2, monthLabels: monthLabels2, printCounts: counts };
  }, [printDates, months]);
  const maxCount = Math.max(1, ...Object.values(printCounts));
  const getColor = (count) => {
    if (count === 0) return "bg-bambu-dark";
    const intensity = count / maxCount;
    if (intensity <= 0.25) return "bg-bambu-green/30";
    if (intensity <= 0.5) return "bg-bambu-green/50";
    if (intensity <= 0.75) return "bg-bambu-green/75";
    return "bg-bambu-green";
  };
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const numWeeks = weeks.length;
  const dayLabelWidth = 32;
  const gap = 2;
  const availableWidth = containerWidth - dayLabelWidth - 16;
  const calculatedCellSize = numWeeks > 0 ? Math.floor((availableWidth - (numWeeks - 1) * gap) / numWeeks) : 12;
  const cellSize = Math.max(8, Math.min(20, calculatedCellSize));
  const fontSize = cellSize <= 10 ? 10 : 12;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: "w-full flex justify-center", children: containerWidth > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mb-1", style: { marginLeft: dayLabelWidth + 4 }, children: monthLabels.map(({ month, weekIndex }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "text-bambu-gray",
        style: {
          fontSize,
          marginLeft: i === 0 ? 0 : `${(weekIndex - (monthLabels[i - 1]?.weekIndex || 0)) * (cellSize + gap) - 24}px`
        },
        children: month
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", style: { gap }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", style: { gap, marginRight: 4, width: dayLabelWidth }, children: dayLabels.map((day, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-bambu-gray flex items-center",
          style: {
            width: dayLabelWidth,
            height: cellSize,
            fontSize,
            visibility: i % 2 === 1 ? "visible" : "hidden"
          },
          children: day
        },
        day
      )) }),
      weeks.map((week, weekIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", style: { gap }, children: [0, 1, 2, 3, 4, 5, 6].map((dayOfWeek) => {
        const day = week.find((d) => d.getDay() === dayOfWeek);
        if (!day) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: { width: cellSize, height: cellSize }
            },
            dayOfWeek
          );
        }
        const dateStr = day.toISOString().split("T")[0];
        const count = printCounts[dateStr] || 0;
        const isToday = dateStr === (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `rounded-sm ${getColor(count)} ${isToday ? "ring-1 ring-white" : ""}`,
            style: { width: cellSize, height: cellSize },
            title: `${day.toLocaleDateString()}: ${count} print${count !== 1 ? "s" : ""}`
          },
          dayOfWeek
        );
      }) }, weekIdx))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-3 text-bambu-gray", style: { fontSize }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Less" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", style: { gap }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm bg-bambu-dark", style: { width: cellSize, height: cellSize } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm bg-bambu-green/30", style: { width: cellSize, height: cellSize } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm bg-bambu-green/50", style: { width: cellSize, height: cellSize } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm bg-bambu-green/75", style: { width: cellSize, height: cellSize } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm bg-bambu-green", style: { width: cellSize, height: cellSize } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "More" })
    ] })
  ] }) });
}
const METRICS = ["weight", "prints", "time"];
function MetricToggle({ value, onChange, exclude }) {
  const { t } = useTranslation();
  const labels = {
    weight: t("stats.filamentByWeight"),
    prints: t("stats.filamentByPrints"),
    time: t("stats.filamentByTime")
  };
  const metrics = exclude ? METRICS.filter((m) => !exclude.includes(m)) : METRICS;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 bg-bambu-dark rounded-lg p-0.5", children: metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => onChange(m),
      className: `px-2 py-0.5 text-xs rounded-md transition-colors ${value === m ? "bg-bambu-green text-white" : "text-bambu-gray hover:text-white"}`,
      children: labels[m]
    },
    m
  )) });
}
function formatWeight(grams) {
  if (grams >= 1e6) {
    const tonnes = grams / 1e6;
    return `${tonnes % 1 === 0 ? tonnes.toFixed(0) : tonnes.toFixed(1)}t`;
  }
  if (grams >= 1e3) {
    const kg = grams / 1e3;
    return `${kg % 1 === 0 ? kg.toFixed(0) : kg.toFixed(1)}kg`;
  }
  return `${Math.round(grams)}g`;
}
const COLORS = ["#00ae42", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316"];
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const HOUR_SUFFIXES = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];
function FilamentTrends({ archives, currency = "$", dateFrom, dateTo }) {
  const { t } = useTranslation();
  const [filamentTypeMetric, setFilamentTypeMetric] = reactExports.useState("weight");
  const [colorMetric, setColorMetric] = reactExports.useState("weight");
  const dailyData = reactExports.useMemo(() => {
    const dataMap = /* @__PURE__ */ new Map();
    archives.forEach((archive) => {
      const date = parseUTCDate(archive.completed_at || archive.created_at) || /* @__PURE__ */ new Date();
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      const existing = dataMap.get(key) || { date: key, filament: 0, cost: 0, prints: 0 };
      existing.filament += archive.filament_used_grams || 0;
      existing.cost += archive.cost || 0;
      existing.prints += archive.quantity || 1;
      dataMap.set(key, existing);
    });
    return Array.from(dataMap.values()).sort((a, b) => a.date.localeCompare(b.date)).map((d) => ({
      ...d,
      dateLabel: new Date(d.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })
    }));
  }, [archives]);
  const spanDays = reactExports.useMemo(() => {
    if (dateFrom && dateTo) {
      return Math.max((new Date(dateTo).getTime() - new Date(dateFrom).getTime()) / 864e5, 0) + 1;
    }
    if (dateFrom) {
      return Math.max((Date.now() - new Date(dateFrom).getTime()) / 864e5, 0) + 1;
    }
    if (archives.length < 2) return 0;
    const times = archives.map((a) => new Date(a.completed_at || a.created_at).getTime());
    return (Math.max(...times) - Math.min(...times)) / 864e5;
  }, [archives, dateFrom, dateTo]);
  const hourlyData = reactExports.useMemo(() => {
    if (spanDays > 7) return [];
    const dataMap = /* @__PURE__ */ new Map();
    const multiDay = spanDays > 1;
    archives.forEach((archive) => {
      const date = parseUTCDate(archive.completed_at || archive.created_at) || /* @__PURE__ */ new Date();
      const h = date.getHours();
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}T${String(h).padStart(2, "0")}`;
      const existing = dataMap.get(key) || { date: key, filament: 0, cost: 0, prints: 0 };
      existing.filament += archive.filament_used_grams || 0;
      existing.cost += archive.cost || 0;
      existing.prints += archive.quantity || 1;
      dataMap.set(key, existing);
    });
    return Array.from(dataMap.values()).sort((a, b) => a.date.localeCompare(b.date)).map((d) => {
      const [datePart, hourPart] = d.date.split("T");
      const dt = new Date(datePart);
      const h = parseInt(hourPart, 10);
      const label = multiDay ? `${DAY_NAMES[dt.getDay()]} ${HOUR_SUFFIXES[h]}` : HOUR_SUFFIXES[h];
      return { ...d, dateLabel: label };
    });
  }, [archives, spanDays]);
  const weeklyData = reactExports.useMemo(() => {
    if (dailyData.length <= 60) return dailyData;
    const dataMap = /* @__PURE__ */ new Map();
    dailyData.forEach((day) => {
      const date = new Date(day.date);
      const weekStart = new Date(date);
      weekStart.setDate(date.getDate() - date.getDay());
      const key = `${weekStart.getFullYear()}-${String(weekStart.getMonth() + 1).padStart(2, "0")}-${String(weekStart.getDate()).padStart(2, "0")}`;
      const existing = dataMap.get(key) || { week: key, filament: 0, cost: 0, prints: 0 };
      existing.filament += day.filament;
      existing.cost += day.cost;
      existing.prints += day.prints;
      dataMap.set(key, existing);
    });
    return Array.from(dataMap.values()).sort((a, b) => a.week.localeCompare(b.week)).map((d) => ({
      date: d.week,
      dateLabel: `Week of ${new Date(d.week).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`,
      ...d
    }));
  }, [dailyData]);
  const filamentTypeData = reactExports.useMemo(() => {
    const dataMap = /* @__PURE__ */ new Map();
    archives.forEach((archive) => {
      const type = archive.filament_type || "Unknown";
      const types = type.split(", ");
      types.forEach((t2) => {
        const grams = (archive.filament_used_grams || 0) / types.length;
        dataMap.set(t2, (dataMap.get(t2) || 0) + grams);
      });
    });
    return Array.from(dataMap.entries()).map(([name, value]) => ({ name, value: Math.round(value) })).sort((a, b) => b.value - a.value);
  }, [archives]);
  const filamentTypePrintData = reactExports.useMemo(() => {
    const dataMap = /* @__PURE__ */ new Map();
    archives.forEach((archive) => {
      const type = archive.filament_type || "Unknown";
      const types = type.split(", ");
      types.forEach((t2) => {
        dataMap.set(t2, (dataMap.get(t2) || 0) + 1);
      });
    });
    return Array.from(dataMap.entries()).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  }, [archives]);
  const filamentTypeTimeData = reactExports.useMemo(() => {
    const dataMap = /* @__PURE__ */ new Map();
    archives.forEach((archive) => {
      const type = archive.filament_type || "Unknown";
      const types = type.split(", ");
      const seconds = (archive.actual_time_seconds || archive.print_time_seconds || 0) / types.length;
      types.forEach((t2) => {
        dataMap.set(t2, (dataMap.get(t2) || 0) + seconds);
      });
    });
    return Array.from(dataMap.entries()).map(([name, seconds]) => ({ name, value: Math.round(seconds / 3600 * 10) / 10 })).sort((a, b) => b.value - a.value);
  }, [archives]);
  const filamentSuccessData = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    archives.forEach((a) => {
      if (a.status !== "completed" && a.status !== "failed") return;
      const types = (a.filament_type || "Unknown").split(", ");
      types.forEach((type) => {
        const entry = map.get(type) || { completed: 0, failed: 0 };
        if (a.status === "completed") entry.completed++;
        else entry.failed++;
        map.set(type, entry);
      });
    });
    return Array.from(map.entries()).filter(([, v]) => v.completed + v.failed >= 2).map(([name, v]) => {
      const total = v.completed + v.failed;
      const rate = Math.round(v.completed / total * 100);
      return { name, rate, total };
    }).sort((a, b) => b.rate - a.rate);
  }, [archives]);
  const colorData = reactExports.useMemo(() => {
    const colorMap = /* @__PURE__ */ new Map();
    archives.forEach((a) => {
      if (!a.filament_color) return;
      const colors = a.filament_color.split(",").map((c) => c.trim());
      const weightPerColor = (a.filament_used_grams || 0) / colors.length;
      colors.forEach((hex) => {
        const entry = colorMap.get(hex) || { count: 0, weight: 0 };
        entry.count++;
        entry.weight += weightPerColor;
        colorMap.set(hex, entry);
      });
    });
    return Array.from(colorMap.entries()).map(([hex, data]) => ({
      hex,
      value: colorMetric === "prints" ? data.count : Math.round(data.weight)
    })).sort((a, b) => b.value - a.value);
  }, [archives, colorMetric]);
  const activeFilamentTypeData = filamentTypeMetric === "weight" ? filamentTypeData : filamentTypeMetric === "prints" ? filamentTypePrintData : filamentTypeTimeData;
  const chartData = spanDays <= 7 && hourlyData.length > 0 ? hourlyData : weeklyData;
  const totalFilament = archives.reduce((sum, a) => sum + (a.filament_used_grams || 0), 0);
  const totalCost = archives.reduce((sum, a) => sum + (a.cost || 0), 0);
  const totalPrints = archives.reduce((sum, a) => sum + (a.quantity || 1), 0);
  const printerCount = new Set(archives.map((a) => a.printer_id).filter(Boolean)).size;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 max-[640px]:grid-cols-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray leading-none", children: t("stats.periodFilament") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-white leading-none", children: formatWeight(totalFilament) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray", children: [
          printerCount,
          " ",
          t("nav.printers").toLowerCase()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray leading-none", children: t("stats.periodCost") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-white leading-none", children: [
            currency,
            totalCost.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray", children: [
          totalPrints,
          " ",
          t("common.prints")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray leading-none", children: t("stats.avgPerPrint") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-white leading-none", children: [
            totalPrints > 0 ? (totalFilament / totalPrints).toFixed(0) : 0,
            "g"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-bambu-gray", children: [
          currency,
          totalPrints > 0 ? (totalCost / totalPrints).toFixed(2) : "0.00",
          " avg"
        ] })
      ] })
    ] }),
    chartData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bambu-gray mb-4", children: t("stats.usageOverTime") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: chartData, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorFilament", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#00ae42", stopOpacity: 0.3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#00ae42", stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#3d3d3d" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          XAxis,
          {
            dataKey: "dateLabel",
            stroke: "#9ca3af",
            tick: { fontSize: 12 },
            interval: "preserveStartEnd"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          YAxis,
          {
            stroke: "#9ca3af",
            tick: { fontSize: 12 },
            tickFormatter: (value) => `${value}g`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            contentStyle: {
              backgroundColor: "#2d2d2d",
              border: "1px solid #3d3d3d",
              borderRadius: "8px"
            },
            labelStyle: { color: "#fff" },
            formatter: (value) => [`${Number(value ?? 0).toFixed(0)}g`, "Filament"]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Area,
          {
            type: "monotone",
            dataKey: "filament",
            stroke: "#00ae42",
            strokeWidth: 2,
            fillOpacity: 1,
            fill: "url(#colorFilament)"
          }
        )
      ] }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-bambu-dark rounded-lg p-8 text-center text-bambu-gray", children: t("stats.noPrintDataInRange") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bambu-gray", children: t("stats.byMaterial") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MetricToggle, { value: filamentTypeMetric, onChange: setFilamentTypeMetric })
        ] }),
        activeFilamentTypeData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: 160, height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Pie,
              {
                data: activeFilamentTypeData,
                cx: "50%",
                cy: "50%",
                innerRadius: 40,
                outerRadius: 70,
                paddingAngle: 2,
                dataKey: "value",
                children: activeFilamentTypeData.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: COLORS[index % COLORS.length] }, `cell-${index}`))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: {
                  backgroundColor: "#2d2d2d",
                  border: "1px solid #3d3d3d",
                  borderRadius: "8px"
                },
                formatter: (value) => [
                  filamentTypeMetric === "weight" ? formatWeight(Number(value ?? 0)) : filamentTypeMetric === "time" ? `${Number(value ?? 0)}h` : `${value ?? 0}`,
                  filamentTypeMetric === "weight" ? "Usage" : filamentTypeMetric === "time" ? "Time" : "Prints"
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-2 overflow-hidden", children: activeFilamentTypeData.map((entry, index) => {
            const total = activeFilamentTypeData.reduce((sum, e) => sum + e.value, 0);
            const percent = total > 0 ? (entry.value / total * 100).toFixed(0) : 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-3 h-3 rounded-sm flex-shrink-0",
                  style: { backgroundColor: COLORS[index % COLORS.length] }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white truncate flex-1", children: entry.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray flex-shrink-0", children: [
                filamentTypeMetric === "weight" ? formatWeight(entry.value) : filamentTypeMetric === "time" ? `${entry.value}h` : entry.value,
                " · ",
                percent,
                "%"
              ] })
            ] }, entry.name);
          }) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[160px] flex items-center justify-center text-bambu-gray", children: t("stats.noFilamentData") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bambu-gray mb-4", children: t("stats.filamentSuccess") }),
        filamentSuccessData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: filamentSuccessData.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white truncate w-20 flex-shrink-0", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 bg-bambu-dark-secondary rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `h-full rounded-full transition-all ${d.rate >= 90 ? "bg-status-ok" : d.rate >= 70 ? "bg-status-warning" : "bg-status-error"}`,
              style: { width: `${d.rate}%` }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-medium flex-shrink-0 tabular-nums ${d.rate >= 90 ? "text-status-ok" : d.rate >= 70 ? "text-status-warning" : "text-status-error"}`, children: [
            d.rate,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray flex-shrink-0 text-xs", children: [
            "(",
            d.total,
            ")"
          ] })
        ] }, d.name)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[160px] flex items-center justify-center text-bambu-gray", children: t("stats.noArchiveData") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bambu-gray", children: t("stats.colorDistribution") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MetricToggle, { value: colorMetric, onChange: setColorMetric, exclude: ["time"] })
        ] }),
        colorData.length > 0 ? (() => {
          const colorTotal = colorData.reduce((sum, e) => sum + e.value, 0);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto", style: { width: 160, height: 160 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Pie,
                  {
                    data: colorData,
                    cx: "50%",
                    cy: "50%",
                    innerRadius: 45,
                    outerRadius: 70,
                    paddingAngle: 2,
                    dataKey: "value",
                    children: colorData.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.hex, stroke: "#1a1a1a", strokeWidth: 1 }, `color-${index}`))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    contentStyle: {
                      backgroundColor: "#2d2d2d",
                      border: "1px solid #3d3d3d",
                      borderRadius: "8px"
                    },
                    formatter: (value) => [
                      colorMetric === "weight" ? formatWeight(Number(value ?? 0)) : `${value ?? 0}`,
                      colorMetric === "weight" ? t("stats.filamentByWeight") : t("stats.filamentByPrints")
                    ]
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-white", children: colorMetric === "weight" ? formatWeight(colorTotal) : colorTotal }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-bambu-gray", children: [
                  colorData.length,
                  " ",
                  colorData.length === 1 ? "color" : "colors"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-3 gap-y-1 mt-2", children: colorData.slice(0, 8).map((entry) => {
              const percent = colorTotal > 0 ? (entry.value / colorTotal * 100).toFixed(0) : 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-2.5 h-2.5 rounded-full flex-shrink-0 border border-black/20",
                    style: { backgroundColor: entry.hex }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-bambu-gray truncate", children: [
                  percent,
                  "%"
                ] })
              ] }, entry.hex);
            }) }),
            colorData.length > 8 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-bambu-gray mt-1 text-center", children: [
              "+",
              colorData.length - 8,
              " more"
            ] })
          ] });
        })() : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[160px] flex items-center justify-center text-bambu-gray", children: t("stats.noColorData") })
      ] })
    ] })
  ] });
}
function SortableWidget({
  id,
  title,
  component,
  isHidden,
  size,
  columnSpan,
  onToggleVisibility,
  onToggleSize
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  };
  if (isHidden) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: setNodeRef,
      style: {
        ...style,
        gridColumn: `span ${columnSpan}`
      },
      className: `bg-bambu-dark-secondary rounded-xl border border-bambu-dark-tertiary overflow-hidden ${isDragging ? "ring-2 ring-bambu-green shadow-lg" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-bambu-dark-tertiary bg-bambu-dark/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                ...attributes,
                ...listeners,
                className: "cursor-grab active:cursor-grabbing p-1 hover:bg-bambu-dark-tertiary rounded transition-colors",
                title: "Drag to reorder",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "w-6 h-6 md:w-4 md:h-4 text-bambu-gray" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-white", children: title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onToggleSize,
                className: "p-1 hover:bg-bambu-dark-tertiary rounded transition-colors",
                title: `Size: ${size === 1 ? "1/4" : size === 2 ? "1/2" : "Full"} - Click to cycle`,
                children: size === 4 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize2, { className: "w-4 h-4 text-bambu-gray hover:text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "w-4 h-4 text-bambu-gray hover:text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onToggleVisibility,
                className: "p-1 hover:bg-bambu-dark-tertiary rounded transition-colors",
                title: "Hide widget",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4 text-bambu-gray hover:text-white" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: typeof component === "function" ? component(size) : component })
      ]
    }
  );
}
function Dashboard({ widgets, storageKey, columns = 4, stackBelow, hideControls = false, onResetLayout, renderControls }) {
  const getDefaultSizes = () => {
    const sizes = {};
    widgets.forEach((w) => {
      sizes[w.id] = w.defaultSize || 4;
    });
    return sizes;
  };
  const [layout, setLayout] = reactExports.useState(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.sizes) {
          parsed.sizes = getDefaultSizes();
        } else {
          const defaults = getDefaultSizes();
          for (const id in defaults) {
            if (!(id in parsed.sizes)) {
              parsed.sizes[id] = defaults[id];
            }
          }
        }
        return parsed;
      } catch {
      }
    }
    return {
      order: widgets.map((w) => w.id),
      hidden: widgets.filter((w) => w.defaultVisible === false).map((w) => w.id),
      sizes: getDefaultSizes()
    };
  });
  const [showHiddenPanel, setShowHiddenPanel] = reactExports.useState(false);
  const [isStacked2, setIsStacked] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!stackBelow) return void 0;
    const mediaQuery = window.matchMedia(`(max-width: ${stackBelow}px)`);
    const handleChange = (event) => {
      setIsStacked(event.matches);
    };
    handleChange(mediaQuery);
    const onChange = (event) => handleChange(event);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", onChange);
    } else {
      mediaQuery.addListener(onChange);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", onChange);
      } else {
        mediaQuery.removeListener(onChange);
      }
    };
  }, [stackBelow]);
  const effectiveColumns = stackBelow && isStacked2 ? 1 : columns;
  reactExports.useEffect(() => {
    const handleToggle = () => setShowHiddenPanel((prev) => !prev);
    window.addEventListener("toggle-hidden-panel", handleToggle);
    return () => window.removeEventListener("toggle-hidden-panel", handleToggle);
  }, []);
  reactExports.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(layout));
  }, [layout, storageKey]);
  reactExports.useEffect(() => {
    const allIds = widgets.map((w) => w.id);
    const missingIds = allIds.filter((id) => !layout.order.includes(id));
    if (missingIds.length > 0) {
      setLayout((prev) => ({
        ...prev,
        order: [...prev.order, ...missingIds]
      }));
    }
  }, [widgets, layout.order]);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8
      }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setLayout((prev) => {
        const oldIndex = prev.order.indexOf(active.id);
        const newIndex = prev.order.indexOf(over.id);
        return {
          ...prev,
          order: arrayMove(prev.order, oldIndex, newIndex)
        };
      });
    }
  };
  const toggleVisibility = (id) => {
    setLayout((prev) => ({
      ...prev,
      hidden: prev.hidden.includes(id) ? prev.hidden.filter((h) => h !== id) : [...prev.hidden, id]
    }));
  };
  const toggleSize = (id) => {
    setLayout((prev) => {
      const currentSize = prev.sizes[id] || 4;
      const nextSize = currentSize === 1 ? 2 : currentSize === 2 ? 4 : 1;
      return {
        ...prev,
        sizes: {
          ...prev.sizes,
          [id]: nextSize
        }
      };
    });
  };
  const resetLayout = () => {
    const defaultLayout = {
      order: widgets.map((w) => w.id),
      hidden: widgets.filter((w) => w.defaultVisible === false).map((w) => w.id),
      sizes: getDefaultSizes()
    };
    setLayout(defaultLayout);
    onResetLayout?.();
  };
  const orderedWidgets = layout.order.map((id) => widgets.find((w) => w.id === id)).filter(Boolean);
  const visibleWidgets = orderedWidgets.filter((w) => !layout.hidden.includes(w.id));
  const hiddenWidgets = orderedWidgets.filter((w) => layout.hidden.includes(w.id));
  const externalControls = renderControls?.({
    hiddenCount: hiddenWidgets.length,
    showHiddenPanel,
    setShowHiddenPanel,
    resetLayout
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    externalControls,
    !hideControls && !renderControls && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "sm", onClick: resetLayout, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
        "Reset Layout"
      ] }),
      hiddenWidgets.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "secondary",
          size: "sm",
          onClick: () => setShowHiddenPanel(!showHiddenPanel),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }),
            hiddenWidgets.length,
            " Hidden"
          ]
        }
      )
    ] }),
    showHiddenPanel && hiddenWidgets.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-bambu-dark rounded-xl border border-bambu-dark-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bambu-gray mb-3", children: "Hidden widgets (click to show):" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: hiddenWidgets.map((widget) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => toggleVisibility(widget.id),
          className: "px-3 py-1.5 bg-bambu-dark-tertiary hover:bg-bambu-green/20 rounded-lg text-sm text-white transition-colors flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
            widget.title
          ]
        },
        widget.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DndContext,
      {
        sensors,
        collisionDetection: closestCenter,
        onDragEnd: handleDragEnd,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SortableContext, { items: visibleWidgets.map((w) => w.id), strategy: rectSortingStrategy, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid gap-6",
            style: {
              gridTemplateColumns: `repeat(${effectiveColumns}, minmax(0, 1fr))`
            },
            children: visibleWidgets.map((widget) => {
              const size = layout.sizes[widget.id] || 2;
              const columnSpan = Math.min(size, effectiveColumns);
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                SortableWidget,
                {
                  id: widget.id,
                  title: widget.title,
                  component: widget.component,
                  isHidden: layout.hidden.includes(widget.id),
                  size,
                  columnSpan,
                  onToggleVisibility: () => toggleVisibility(widget.id),
                  onToggleSize: () => toggleSize(widget.id)
                },
                widget.id
              );
            })
          }
        ) })
      }
    ),
    visibleWidgets.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-bambu-gray", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "All widgets are hidden." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-4", onClick: resetLayout, children: "Reset Layout" })
    ] })
  ] });
}
function computeDateRange(preset) {
  const now = /* @__PURE__ */ new Date();
  const y = now.getUTCFullYear(), m = now.getUTCMonth(), d = now.getUTCDate();
  const fmt = (dt) => dt.toISOString().split("T")[0];
  const todayStr = fmt(now);
  switch (preset) {
    case "today":
      return { dateFrom: todayStr, dateTo: todayStr };
    case "this-week": {
      const day = now.getUTCDay();
      const start = new Date(Date.UTC(y, m, d - (day === 0 ? 6 : day - 1)));
      return { dateFrom: fmt(start), dateTo: todayStr };
    }
    case "this-month":
      return { dateFrom: fmt(new Date(Date.UTC(y, m, 1))), dateTo: todayStr };
    case "last-7":
      return { dateFrom: fmt(new Date(Date.UTC(y, m, d - 6))), dateTo: todayStr };
    case "last-30":
      return { dateFrom: fmt(new Date(Date.UTC(y, m, d - 29))), dateTo: todayStr };
    case "last-90":
      return { dateFrom: fmt(new Date(Date.UTC(y, m, d - 89))), dateTo: todayStr };
    case "this-year":
      return { dateFrom: fmt(new Date(Date.UTC(y, 0, 1))), dateTo: todayStr };
    case "all-time":
      return { dateFrom: void 0, dateTo: void 0 };
    case "custom":
      return {};
  }
}
const TIMEFRAME_PRESETS = [
  "today",
  "this-week",
  "this-month",
  "last-7",
  "last-30",
  "last-90",
  "this-year",
  "all-time"
];
const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const HOUR_LABELS = [
  "12am",
  "1am",
  "2am",
  "3am",
  "4am",
  "5am",
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
  "9pm",
  "10pm",
  "11pm"
];
const DURATION_BUCKETS = [
  { key: "<30m", max: 1800 },
  { key: "30m-1h", max: 3600 },
  { key: "1-2h", max: 7200 },
  { key: "2-4h", max: 14400 },
  { key: "4-8h", max: 28800 },
  { key: "8-12h", max: 43200 },
  { key: "12-24h", max: 86400 },
  { key: "24h+", max: Infinity }
];
const RECHARTS_TOOLTIP_STYLE = {
  backgroundColor: "#2d2d2d",
  border: "1px solid #3d3d3d",
  borderRadius: "8px"
};
function QuickStatsWidget({
  stats,
  currency
}) {
  const { t } = useTranslation();
  const items = [
    { icon: Package, color: "text-bambu-green", label: t("stats.totalPrints"), value: `${stats?.total_prints || 0}` },
    { icon: Clock, color: "text-blue-400", label: t("stats.printTime"), value: `${stats?.total_print_time_hours?.toFixed(1) ?? "0"}h` },
    { icon: Package, color: "text-orange-400", label: t("stats.filamentUsed"), value: formatWeight(stats?.total_filament_grams || 0) },
    { icon: DollarSign, color: "text-green-400", label: t("stats.filamentCost"), value: `${currency} ${stats?.total_cost?.toFixed(2) ?? "0.00"}` },
    { icon: Zap, color: "text-yellow-400", label: t("stats.energyUsed"), value: `${stats?.total_energy_kwh?.toFixed(3) ?? "0.000"} kWh` },
    { icon: DollarSign, color: "text-yellow-500", label: t("stats.energyCost"), value: `${currency} ${stats?.total_energy_cost?.toFixed(2) ?? "0.00"}` }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-lg bg-bambu-dark ${item.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: item.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-white", children: item.value })
    ] })
  ] }, item.label)) });
}
function SuccessRateWidget({
  stats,
  printerMap,
  size = 1
}) {
  const { t } = useTranslation();
  const completedAndFailed = (stats?.successful_prints || 0) + (stats?.failed_prints || 0);
  const successRate = completedAndFailed ? Math.round(stats.successful_prints / completedAndFailed * 100) : 0;
  const gaugeSize = size === 1 ? 112 : size === 2 ? 128 : 144;
  const radius = gaugeSize / 2 - 8;
  const circumference = radius * 2 * Math.PI;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", style: { width: gaugeSize, height: gaugeSize }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full -rotate-90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: gaugeSize / 2,
            cy: gaugeSize / 2,
            r: radius,
            fill: "none",
            stroke: "#3d3d3d",
            strokeWidth: "10"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: gaugeSize / 2,
            cy: gaugeSize / 2,
            r: radius,
            fill: "none",
            stroke: "#00ae42",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeDasharray: `${successRate / 100 * circumference} ${circumference}`
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-bold text-white ${size >= 2 ? "text-2xl" : "text-xl"}`, children: [
        successRate,
        "%"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-status-ok flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: t("stats.successful") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white font-medium", children: stats?.successful_prints || 0 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-status-error flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-bambu-gray", children: t("stats.failed") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white font-medium", children: stats?.failed_prints || 0 })
        ] })
      ] }),
      size >= 2 && stats?.prints_by_printer && Object.keys(stats.prints_by_printer).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-bambu-dark-tertiary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray font-medium mb-2", children: t("stats.printsByPrinter") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid gap-x-6 gap-y-1 ${size === 4 ? "grid-cols-3" : "grid-cols-2"}`, style: { width: "fit-content" }, children: Object.entries(stats.prints_by_printer).map(([printerId, count]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray truncate max-w-[120px]", children: printerMap.get(printerId) || `${t("common.printer")} ${printerId}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: count })
        ] }, printerId)) })
      ] })
    ] })
  ] });
}
function TimeAccuracyWidget({
  stats,
  printerMap,
  size = 1
}) {
  const { t } = useTranslation();
  const accuracy = stats?.average_time_accuracy;
  if (accuracy === null || accuracy === void 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-center py-4", children: t("stats.noTimeAccuracyData") }) });
  }
  const displayValue = Math.min(150, Math.max(50, accuracy));
  const normalizedForGauge = (displayValue - 50) / 100 * 100;
  const getColor = (acc) => {
    if (acc >= 95 && acc <= 105) return "#00ae42";
    if (acc > 105) return "#3b82f6";
    return "#f97316";
  };
  const color = getColor(accuracy);
  const deviation = accuracy - 100;
  const gaugeSize = size === 1 ? 112 : size === 2 ? 128 : 144;
  const radius = gaugeSize / 2 - 8;
  const circumference = radius * 2 * Math.PI;
  const maxPrinters = size === 1 ? 3 : size === 2 ? 6 : 999;
  const printerEntries = stats?.time_accuracy_by_printer ? Object.entries(stats.time_accuracy_by_printer).slice(0, maxPrinters) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", style: { width: gaugeSize, height: gaugeSize }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full -rotate-90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: gaugeSize / 2,
            cy: gaugeSize / 2,
            r: radius,
            fill: "none",
            stroke: "#3d3d3d",
            strokeWidth: "10"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: gaugeSize / 2,
            cy: gaugeSize / 2,
            r: radius,
            fill: "none",
            stroke: color,
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeDasharray: `${normalizedForGauge / 100 * circumference} ${circumference}`
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-bold text-white ${size >= 2 ? "text-2xl" : "text-xl"}`, children: [
          accuracy.toFixed(0),
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs ${deviation >= 0 ? "text-blue-400" : "text-orange-400"}`, children: [
          deviation >= 0 ? "+" : "",
          deviation.toFixed(0),
          "%"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-bambu-gray", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-3 h-3 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("stats.perfectEstimate") })
      ] }),
      printerEntries.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-2 ${size === 4 ? "grid grid-cols-3 gap-x-6 gap-y-1" : size === 2 ? "grid grid-cols-2 gap-x-6 gap-y-1" : "space-y-1"}`, style: { width: "fit-content" }, children: printerEntries.map(([printerId, acc]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray truncate max-w-[100px]", children: printerMap.get(printerId) || `${t("common.printer")} ${printerId}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-medium ${acc >= 95 && acc <= 105 ? "text-status-ok" : acc > 105 ? "text-blue-400" : "text-status-warning"}`, children: [
          acc.toFixed(0),
          "%"
        ] })
      ] }, printerId)) })
    ] })
  ] });
}
function HourlyHeatmap({ printDates, dateFrom, dateTo }) {
  const { days, hourlyCounts, maxCount } = reactExports.useMemo(() => {
    const start = /* @__PURE__ */ new Date(dateFrom + "T00:00:00");
    const end = /* @__PURE__ */ new Date(dateTo + "T00:00:00");
    const days2 = [];
    const fmtLocal = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const current = new Date(start);
    while (current <= end) {
      days2.push({
        key: fmtLocal(current),
        label: current.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" })
      });
      current.setDate(current.getDate() + 1);
    }
    const counts = {};
    let max = 0;
    printDates.forEach((d) => {
      const date = parseUTCDate(d);
      if (!date) return;
      const dayKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      const k = `${dayKey}-${date.getHours()}`;
      counts[k] = (counts[k] || 0) + 1;
      if (counts[k] > max) max = counts[k];
    });
    return { days: days2, hourlyCounts: counts, maxCount: Math.max(1, max) };
  }, [printDates, dateFrom, dateTo]);
  const getColor = (count) => {
    if (count === 0) return "bg-bambu-dark";
    const intensity = count / maxCount;
    if (intensity <= 0.25) return "bg-bambu-green/30";
    if (intensity <= 0.5) return "bg-bambu-green/50";
    if (intensity <= 0.75) return "bg-bambu-green/75";
    return "bg-bambu-green";
  };
  const cellSize = 20;
  const gap = 2;
  const dayLabelWidth = 80;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full overflow-x-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-col", style: { gap }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", style: { gap, marginLeft: dayLabelWidth + 4 }, children: HOUR_LABELS.map((label, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-bambu-gray text-[10px] text-center",
          style: { width: cellSize, visibility: i % 2 === 0 ? "visible" : "hidden" },
          children: label
        },
        i
      )) }),
      days.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", style: { gap }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-bambu-gray text-[10px] flex-shrink-0 truncate",
            style: { width: dayLabelWidth },
            children: day.label
          }
        ),
        Array.from({ length: 24 }, (_, hour) => {
          const count = hourlyCounts[`${day.key}-${hour}`] || 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `rounded-sm ${getColor(count)}`,
              style: { width: cellSize, height: cellSize },
              title: `${day.label} ${HOUR_LABELS[hour]}: ${count} print${count !== 1 ? "s" : ""}`
            },
            hour
          );
        })
      ] }, day.key))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-3 text-bambu-gray text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Less" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", style: { gap }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm bg-bambu-dark", style: { width: cellSize, height: cellSize } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm bg-bambu-green/30", style: { width: cellSize, height: cellSize } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm bg-bambu-green/50", style: { width: cellSize, height: cellSize } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm bg-bambu-green/75", style: { width: cellSize, height: cellSize } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm bg-bambu-green", style: { width: cellSize, height: cellSize } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "More" })
    ] })
  ] });
}
function PrintActivityWidget({
  printDates,
  size = 2,
  dateFrom,
  dateTo
}) {
  const spanDays = reactExports.useMemo(() => {
    if (dateFrom && dateTo) {
      return Math.max((new Date(dateTo).getTime() - new Date(dateFrom).getTime()) / 864e5, 0) + 1;
    }
    if (dateFrom) {
      return Math.max((Date.now() - new Date(dateFrom).getTime()) / 864e5, 0) + 1;
    }
    return Infinity;
  }, [dateFrom, dateTo]);
  if (spanDays <= 7 && dateFrom && dateTo) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(HourlyHeatmap, { printDates, dateFrom, dateTo });
  }
  const sizeDefault = size === 1 ? 3 : size === 2 ? 6 : 12;
  const months = spanDays === Infinity ? sizeDefault : Math.max(1, Math.ceil(spanDays / 30));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PrintCalendar, { printDates, months });
}
function PrinterStatsWidget({
  stats,
  archives,
  printerMap
}) {
  const { t } = useTranslation();
  const [printerMetric, setPrinterMetric] = reactExports.useState("weight");
  const [habitsMetric, setHabitsMetric] = reactExports.useState("weight");
  const printerData = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    if (stats?.prints_by_printer) {
      Object.entries(stats.prints_by_printer).forEach(([id, count]) => {
        const entry = map.get(id) || { prints: 0, weight: 0, time: 0 };
        entry.prints = count;
        map.set(id, entry);
      });
    }
    archives.forEach((a) => {
      if (!a.printer_id) return;
      const id = String(a.printer_id);
      const entry = map.get(id) || { prints: 0, weight: 0, time: 0 };
      entry.weight += a.filament_used_grams || 0;
      entry.time += a.actual_time_seconds || a.print_time_seconds || 0;
      if (!stats?.prints_by_printer) entry.prints++;
      map.set(id, entry);
    });
    return Array.from(map.entries()).map(([id, v]) => ({
      name: printerMap.get(id) || `${t("common.printer")} ${id}`,
      value: printerMetric === "prints" ? v.prints : printerMetric === "weight" ? Math.round(v.weight) : Math.round(v.time / 3600 * 10) / 10
    })).sort((a, b) => b.value - a.value);
  }, [stats, archives, printerMap, printerMetric, t]);
  const hourlyData = reactExports.useMemo(() => {
    const hours = Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      label: HOUR_LABELS[i],
      total: 0,
      failures: 0
    }));
    archives.forEach((a) => {
      if (!a.started_at) return;
      const date = parseUTCDate(a.started_at);
      if (!date) return;
      const h = date.getHours();
      hours[h].total++;
      if (a.status === "failed") {
        hours[h].failures++;
      }
    });
    return hours;
  }, [archives]);
  const durationData = reactExports.useMemo(() => {
    const counts = DURATION_BUCKETS.map((b) => ({ name: b.key, count: 0 }));
    archives.forEach((a) => {
      const seconds = a.actual_time_seconds || a.print_time_seconds;
      if (!seconds || seconds <= 0) return;
      for (let i = 0; i < DURATION_BUCKETS.length; i++) {
        if (seconds <= DURATION_BUCKETS[i].max) {
          counts[i].count++;
          break;
        }
      }
    });
    return counts;
  }, [archives]);
  const habitsData = reactExports.useMemo(() => {
    const dayValues = [0, 0, 0, 0, 0, 0, 0];
    const weeksSet = /* @__PURE__ */ new Set();
    archives.forEach((a) => {
      const date = parseUTCDate(a.created_at) || new Date(a.created_at);
      let day = date.getDay() - 1;
      if (day < 0) day = 6;
      if (habitsMetric === "prints") dayValues[day]++;
      else if (habitsMetric === "weight") dayValues[day] += a.filament_used_grams || 0;
      else dayValues[day] += (a.actual_time_seconds || a.print_time_seconds || 0) / 3600;
      const weekStart = new Date(date);
      weekStart.setDate(date.getDate() - (date.getDay() + 6) % 7);
      weeksSet.add(`${weekStart.getFullYear()}-${String(weekStart.getMonth() + 1).padStart(2, "0")}-${String(weekStart.getDate()).padStart(2, "0")}`);
    });
    const numWeeks = Math.max(weeksSet.size, 1);
    return DAY_LABELS.map((name, i) => ({
      name,
      avg: Math.round(dayValues[i] / numWeeks * 10) / 10
    }));
  }, [archives, habitsMetric]);
  const metricStyle = (m) => ({
    unit: m === "weight" ? "g" : m === "time" ? "h" : "",
    color: m === "weight" ? "#00ae42" : m === "time" ? "#3b82f6" : "#f59e0b"
  });
  const ps = metricStyle(printerMetric);
  const pLabel = printerMetric === "weight" ? t("stats.filamentByWeight") : printerMetric === "time" ? t("stats.hours") : t("common.prints");
  const hs = metricStyle(habitsMetric);
  const hLabel = habitsMetric === "weight" ? t("stats.avgWeight") : habitsMetric === "time" ? t("stats.avgTime") : t("stats.avgPrints");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bambu-gray", children: t("stats.printsByPrinter") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MetricToggle, { value: printerMetric, onChange: setPrinterMetric })
      ] }),
      printerData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: Math.max(140, printerData.length * 40), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: printerData, layout: "vertical", margin: { left: 10 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#3d3d3d" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { type: "number", stroke: "#9ca3af", tick: { fontSize: 11 }, unit: ps.unit }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { type: "category", dataKey: "name", stroke: "#9ca3af", tick: { fontSize: 11 }, width: 100 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            contentStyle: RECHARTS_TOOLTIP_STYLE,
            formatter: (v) => [
              printerMetric === "weight" ? formatWeight(Number(v ?? 0)) : `${v ?? 0}${ps.unit}`,
              pLabel
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", fill: ps.color, radius: [0, 4, 4, 0] })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-center py-4", children: t("stats.noPrinterData") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bambu-gray mb-3", children: t("stats.printDuration") }),
        archives.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: durationData, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#3d3d3d" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", stroke: "#9ca3af", tick: { fontSize: 11 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "#9ca3af", tick: { fontSize: 11 }, allowDecimals: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: RECHARTS_TOOLTIP_STYLE }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "count", name: t("common.prints"), fill: "#00ae42", radius: [4, 4, 0, 0] })
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-center py-4", children: t("stats.noArchiveData") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bambu-gray", children: t("stats.printHabits") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MetricToggle, { value: habitsMetric, onChange: setHabitsMetric })
        ] }),
        archives.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: habitsData, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#3d3d3d" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", stroke: "#9ca3af", tick: { fontSize: 11 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "#9ca3af", tick: { fontSize: 11 }, unit: hs.unit }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: RECHARTS_TOOLTIP_STYLE, formatter: (v) => [`${v ?? 0}${hs.unit}`, hLabel] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "avg", fill: hs.color, radius: [4, 4, 0, 0] })
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-center py-4", children: t("stats.noArchiveData") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bambu-dark rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bambu-gray mb-3", children: t("stats.printTimeOfDay") }),
        archives.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: hourlyData, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#3d3d3d" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "label", stroke: "#9ca3af", tick: { fontSize: 10 }, interval: 5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "#9ca3af", tick: { fontSize: 11 }, allowDecimals: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: RECHARTS_TOOLTIP_STYLE }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "total", name: t("stats.totalPrints"), fill: "#00ae42", radius: [2, 2, 0, 0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "failures", name: t("stats.failed"), fill: "#ef4444", radius: [2, 2, 0, 0] })
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-center py-4", children: t("stats.noArchiveData") })
      ] })
    ] })
  ] });
}
function FilamentTrendsWidget({
  archives,
  currency,
  dateFrom,
  dateTo
}) {
  const { t } = useTranslation();
  if (!archives || archives.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-center py-4", children: t("stats.noPrintData") });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FilamentTrends, { archives, currency, dateFrom, dateTo });
}
function FailureAnalysisWidget({ size = 1, dateFrom, dateTo }) {
  const { t } = useTranslation();
  const hasDateRange = !!(dateFrom || dateTo);
  const { data: analysis, isLoading } = useQuery({
    queryKey: ["failureAnalysis", dateFrom, dateTo],
    queryFn: () => api.getFailureAnalysis({
      ...hasDateRange ? { dateFrom, dateTo } : { days: 30 }
    })
  });
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 text-bambu-green animate-spin" }) });
  }
  if (!analysis || analysis.total_prints === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-center py-4", children: hasDateRange ? t("stats.noPrintDataInRange") : t("stats.noPrintDataLast30Days") });
  }
  const maxReasons = size === 1 ? 5 : size === 2 ? 8 : 999;
  const allReasons = Object.entries(analysis.failures_by_reason).sort(([, a], [, b]) => b - a);
  const topReasons = allReasons.slice(0, maxReasons);
  const hasMore = allReasons.length > maxReasons;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${size >= 2 ? "flex gap-8" : "space-y-4"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: size >= 2 ? "flex-shrink-0" : "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: `w-5 h-5 ${analysis.failure_rate > 20 ? "text-status-error" : analysis.failure_rate > 10 ? "text-status-warning" : "text-status-ok"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-bold text-white ${size >= 2 ? "text-3xl" : "text-2xl"}`, children: [
          analysis.failure_rate.toFixed(1),
          "%"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-bambu-gray mt-1", children: t("stats.failedPrintsCount", { failed: analysis.failed_prints, total: analysis.total_prints }) }),
      analysis.trend && analysis.trend.length >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${size >= 2 ? "mt-4" : "mt-2 pt-2 border-t border-bambu-dark-tertiary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: `w-4 h-4 ${analysis.trend[analysis.trend.length - 1].failure_rate < analysis.trend[analysis.trend.length - 2].failure_rate ? "text-status-ok" : "text-status-error"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray", children: t("stats.lastWeekRate", { rate: analysis.trend[analysis.trend.length - 1].failure_rate.toFixed(1) }) })
      ] }) })
    ] }),
    topReasons.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex-1 ${size >= 2 ? "border-l border-bambu-dark-tertiary pl-8" : "pt-2"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray font-medium mb-2", children: size >= 2 ? t("stats.failureReasons") : t("stats.topFailureReasons") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${size === 4 ? "grid grid-cols-2 gap-x-6 gap-y-1" : "space-y-1"}`, children: topReasons.map(([reason, count]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-white truncate ${size === 4 ? "max-w-[200px]" : "max-w-[160px]"}`, children: reason || t("common.unknown") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bambu-gray ml-2", children: count })
      ] }, reason)) }),
      hasMore && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray mt-2", children: t("common.more", { count: allReasons.length - maxReasons }) })
    ] })
  ] });
}
function RecordsWidget({ archives, currency }) {
  const { t } = useTranslation();
  const records = reactExports.useMemo(() => {
    const result = [];
    if (archives.length === 0) return result;
    const findMax = (getter) => {
      let best = null;
      let bestVal = 0;
      archives.forEach((a) => {
        const v = getter(a);
        if (v && v > bestVal) {
          bestVal = v;
          best = a;
        }
      });
      return { archive: best, value: bestVal };
    };
    const longest = findMax((a) => a.actual_time_seconds);
    if (longest.archive) {
      result.push({
        icon: Clock,
        iconColor: "text-blue-400",
        label: t("stats.longestPrint"),
        value: formatDuration(longest.value),
        detail: longest.archive.print_name || null
      });
    }
    const heaviest = findMax((a) => a.filament_used_grams);
    if (heaviest.archive) {
      result.push({
        icon: Package,
        iconColor: "text-orange-400",
        label: t("stats.heaviestPrint"),
        value: formatWeight(heaviest.value),
        detail: heaviest.archive.print_name || null
      });
    }
    const costliest = findMax((a) => a.cost);
    if (costliest.archive) {
      result.push({
        icon: DollarSign,
        iconColor: "text-green-400",
        label: t("stats.mostExpensivePrint"),
        value: `${currency}${costliest.value.toFixed(2)}`,
        detail: costliest.archive.print_name || null
      });
    }
    const dayCounts = /* @__PURE__ */ new Map();
    archives.forEach((a) => {
      const date = parseUTCDate(a.created_at) || new Date(a.created_at);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      dayCounts.set(key, (dayCounts.get(key) || 0) + 1);
    });
    let busiestDay = "";
    let busiestCount = 0;
    dayCounts.forEach((count, day) => {
      if (count > busiestCount) {
        busiestCount = count;
        busiestDay = day;
      }
    });
    if (busiestCount > 1) {
      result.push({
        icon: Calendar,
        iconColor: "text-purple-400",
        label: t("stats.busiestDay"),
        value: `${busiestCount} ${t("common.prints")}`,
        detail: (() => {
          const [y, m, d] = busiestDay.split("-").map(Number);
          return new Date(y, m - 1, d).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" });
        })()
      });
    }
    const sorted = [...archives].filter((a) => a.status === "completed" || a.status === "failed").sort((a, b) => new Date(b.completed_at || b.created_at).getTime() - new Date(a.completed_at || a.created_at).getTime());
    let streak = 0;
    for (const a of sorted) {
      if (a.status === "completed") streak++;
      else break;
    }
    if (streak > 0) {
      result.push({
        icon: Zap,
        iconColor: "text-yellow-400",
        label: t("stats.successStreak"),
        value: `${streak}`,
        detail: streak === 1 ? t("stats.streakPrint") : t("stats.streakPrints", { count: streak })
      });
    }
    return result;
  }, [archives, currency, t]);
  if (records.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray text-center py-4", children: t("stats.noArchiveData") });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: records.map((record, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-1.5 rounded-lg bg-bambu-dark ${record.iconColor}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(record.icon, { className: "w-4 h-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bambu-gray", children: record.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-white", children: record.value }),
        record.detail && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bambu-gray truncate", children: record.detail })
      ] })
    ] })
  ] }, i)) });
}
function StatsPage() {
  const { t } = useTranslation();
  const { showToast } = useToast();
  const { hasPermission } = useAuth();
  const [isExporting, setIsExporting] = reactExports.useState(false);
  const [showExportMenu, setShowExportMenu] = reactExports.useState(false);
  const [dashboardKey, setDashboardKey] = reactExports.useState(0);
  const [hiddenCount, setHiddenCount] = reactExports.useState(0);
  const [isRecalculating, setIsRecalculating] = reactExports.useState(false);
  const [timeframe, setTimeframe] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem("bambusy-stats-timeframe");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.preset) return parsed;
      }
    } catch {
    }
    return { preset: "all-time", dateFrom: void 0, dateTo: void 0 };
  });
  const [showTimeframePicker, setShowTimeframePicker] = reactExports.useState(false);
  reactExports.useEffect(() => {
    localStorage.setItem("bambusy-stats-timeframe", JSON.stringify(timeframe));
  }, [timeframe]);
  const effectiveDateRange = reactExports.useMemo(() => {
    if (timeframe.preset === "custom") {
      return { dateFrom: timeframe.dateFrom, dateTo: timeframe.dateTo };
    }
    return computeDateRange(timeframe.preset);
  }, [timeframe]);
  reactExports.useEffect(() => {
    const updateHiddenCount = () => {
      try {
        const saved = localStorage.getItem("bambusy-dashboard-layout-v2");
        if (saved) {
          const layout = JSON.parse(saved);
          setHiddenCount(layout.hidden?.length || 0);
        }
      } catch {
        setHiddenCount(0);
      }
    };
    updateHiddenCount();
    window.addEventListener("storage", updateHiddenCount);
    const interval = setInterval(updateHiddenCount, 2e3);
    return () => {
      window.removeEventListener("storage", updateHiddenCount);
      clearInterval(interval);
    };
  }, [dashboardKey]);
  const { data: stats, isLoading, refetch: refetchStats } = useQuery({
    queryKey: ["archiveStats", effectiveDateRange.dateFrom, effectiveDateRange.dateTo],
    queryFn: () => api.getArchiveStats({
      dateFrom: effectiveDateRange.dateFrom,
      dateTo: effectiveDateRange.dateTo
    })
  });
  const { data: printers } = useQuery({
    queryKey: ["printers"],
    queryFn: api.getPrinters
  });
  const { data: archives, refetch: refetchArchives } = useQuery({
    queryKey: ["archivesSlim", effectiveDateRange.dateFrom, effectiveDateRange.dateTo],
    queryFn: () => api.getArchivesSlim(effectiveDateRange.dateFrom, effectiveDateRange.dateTo)
  });
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: api.getSettings
  });
  const handleExport = async (format) => {
    setShowExportMenu(false);
    setIsExporting(true);
    try {
      const { blob, filename } = await api.exportStats({ format, days: 90 });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
      showToast(t("stats.exportDownloaded"));
    } catch {
      showToast(t("stats.exportFailed"), "error");
    } finally {
      setIsExporting(false);
    }
  };
  const handleRecalculateCosts = async () => {
    setIsRecalculating(true);
    try {
      const result = await api.recalculateCosts();
      await Promise.all([refetchStats(), refetchArchives()]);
      showToast(t("stats.recalculatedCosts", { count: result.updated }));
    } catch {
      showToast(t("stats.recalculateFailed"), "error");
    } finally {
      setIsRecalculating(false);
    }
  };
  const currency = getCurrencySymbol(settings?.currency || "USD");
  const printerMap = new Map(printers?.map((p) => [String(p.id), p.name]) || []);
  const printDates = reactExports.useMemo(() => archives?.map((a) => a.created_at) || [], [archives]);
  const widgets = [
    {
      id: "quick-stats",
      title: t("stats.quickStats"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(QuickStatsWidget, { stats, currency }),
      defaultSize: 2
    },
    {
      id: "success-rate",
      title: t("stats.successRate"),
      component: (size) => /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessRateWidget, { stats, printerMap, size }),
      defaultSize: 1
    },
    {
      id: "time-accuracy",
      title: t("stats.timeAccuracy"),
      component: (size) => /* @__PURE__ */ jsxRuntimeExports.jsx(TimeAccuracyWidget, { stats, printerMap, size }),
      defaultSize: 1
    },
    {
      id: "failure-analysis",
      title: t("stats.failureAnalysis"),
      component: (size) => /* @__PURE__ */ jsxRuntimeExports.jsx(FailureAnalysisWidget, { size, dateFrom: effectiveDateRange.dateFrom, dateTo: effectiveDateRange.dateTo }),
      defaultSize: 1
    },
    {
      id: "print-activity",
      title: t("stats.printActivity"),
      component: (size) => /* @__PURE__ */ jsxRuntimeExports.jsx(PrintActivityWidget, { printDates, size, dateFrom: effectiveDateRange.dateFrom, dateTo: effectiveDateRange.dateTo }),
      defaultSize: 2
    },
    {
      id: "records",
      title: t("stats.records"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(RecordsWidget, { archives: archives || [], currency }),
      defaultSize: 1
    },
    {
      id: "printer-stats",
      title: t("stats.printerStats"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(PrinterStatsWidget, { stats, archives: archives || [], printerMap }),
      defaultSize: 4
    },
    {
      id: "filament-trends",
      title: t("stats.filamentTrends"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(FilamentTrendsWidget, { archives: archives || [], currency, dateFrom: effectiveDateRange.dateFrom, dateTo: effectiveDateRange.dateTo }),
      defaultSize: 4
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-onboarding": "stats-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: t("stats.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-bambu-gray", children: t("stats.subtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        hiddenCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: () => {
              window.dispatchEvent(new CustomEvent("toggle-hidden-panel"));
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }),
              t("stats.hiddenCount", { count: hiddenCount })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: () => {
              localStorage.removeItem("bambusy-dashboard-layout-v2");
              setDashboardKey((prev) => prev + 1);
              showToast(t("stats.layoutReset"));
            },
            disabled: !hasPermission("settings:update"),
            title: !hasPermission("settings:update") ? t("stats.noPermissionResetLayout") : void 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
              t("stats.resetLayout")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: handleRecalculateCosts,
            disabled: isRecalculating || !hasPermission("archives:update_all"),
            title: !hasPermission("archives:update_all") ? t("stats.noPermissionRecalculate") : t("stats.recalculateCostsHint"),
            children: [
              isRecalculating ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-4 h-4" }),
              t("stats.recalculateCosts")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              onClick: () => setShowExportMenu(!showExportMenu),
              disabled: isExporting,
              children: [
                isExporting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "w-4 h-4" }),
                t("stats.exportStats")
              ]
            }
          ),
          showExportMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-full mt-1 w-48 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl z-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: "w-full px-4 py-2 text-left text-white hover:bg-bambu-dark-tertiary transition-colors flex items-center gap-2 rounded-t-lg",
                onClick: () => handleExport("csv"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
                  t("stats.exportAsCsv")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: "w-full px-4 py-2 text-left text-white hover:bg-bambu-dark-tertiary transition-colors flex items-center gap-2 rounded-b-lg",
                onClick: () => handleExport("xlsx"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "w-4 h-4" }),
                  t("stats.exportAsExcel")
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              onClick: () => setShowTimeframePicker(!showTimeframePicker),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
                t(`stats.timeframe.${timeframe.preset}`),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" })
              ]
            }
          ),
          showTimeframePicker && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "fixed inset-0 z-10",
                onClick: () => setShowTimeframePicker(false)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-full mt-1 w-64 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded-lg shadow-xl z-20 p-2", children: [
              TIMEFRAME_PRESETS.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: `w-full px-3 py-2 text-left text-sm rounded-md transition-colors ${timeframe.preset === preset ? "bg-bambu-green text-white" : "text-white hover:bg-bambu-dark-tertiary"}`,
                  onClick: () => {
                    setTimeframe({ preset, dateFrom: void 0, dateTo: void 0 });
                    setShowTimeframePicker(false);
                  },
                  children: t(`stats.timeframe.${preset}`)
                },
                preset
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-bambu-dark-tertiary my-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: `w-full px-3 py-2 text-left text-sm rounded-md transition-colors ${timeframe.preset === "custom" ? "bg-bambu-green text-white" : "text-white hover:bg-bambu-dark-tertiary"}`,
                  onClick: () => setTimeframe((prev) => ({ ...prev, preset: "custom" })),
                  children: t("stats.timeframe.custom")
                }
              ),
              timeframe.preset === "custom" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 px-1 pb-1 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-bambu-gray block mb-1", children: t("stats.timeframe.from") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "date",
                      value: timeframe.dateFrom || "",
                      max: timeframe.dateTo || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                      onChange: (e) => setTimeframe((prev) => ({ ...prev, dateFrom: e.target.value || void 0 })),
                      className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded-md px-3 py-1.5 text-sm text-white [color-scheme:dark]"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-bambu-gray block mb-1", children: t("stats.timeframe.to") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "date",
                      value: timeframe.dateTo || "",
                      min: timeframe.dateFrom,
                      max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                      onChange: (e) => setTimeframe((prev) => ({ ...prev, dateTo: e.target.value || void 0 })),
                      className: "w-full bg-bambu-dark border border-bambu-dark-tertiary rounded-md px-3 py-1.5 text-sm text-white [color-scheme:dark]"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "primary",
                    onClick: () => setShowTimeframePicker(false),
                    className: "w-full",
                    children: t("common.apply")
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-onboarding": "stats-dashboard", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-bambu-gray", children: t("stats.loadingStats") }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dashboard,
      {
        widgets,
        storageKey: "bambusy-dashboard-layout-v2",
        stackBelow: 640,
        hideControls: true
      },
      dashboardKey
    ) })
  ] });
}
export {
  StatsPage
};
