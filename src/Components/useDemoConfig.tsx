import React from "react";

//

const options = {
  elementType: ["line", "area", "bar"],
  primaryAxisType: ["linear", "time", "log", "band"],
  secondaryAxisType: ["linear", "time", "log", "band"],
  primaryAxisPosition: ["top", "left", "right", "bottom"],
  secondaryAxisPosition: ["top", "left", "right", "bottom"],
  secondaryAxisStack: [true, false],
  primaryAxisShow: [true, false],
  secondaryAxisShow: [true, false],
  interactionMode: ["primary", "closest"],
  tooltipGroupingMode: ["single", "primary", "secondary", "series"],
  tooltipAnchor: [
    "closest",
    "top",
    "bottom",
    "left",
    "right",
    "center",
    "gridTop",
    "gridBottom",
    "gridLeft",
    "gridRight",
    "gridCenter",
    "pointer",
  ],
  tooltipAlign: [
    "auto",
    "top",
    "bottom",
    "left",
    "right",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "center",
  ],
  snapCursor: [true, false],
} as const;

type DataType = "time" | "ordinal" | "linear";
type ElementType = typeof options["elementType"][number];
type PrimaryAxisType = typeof options["primaryAxisType"][number];
type SecondaryAxisType = typeof options["secondaryAxisType"][number];
type PrimaryAxisPosition = typeof options["primaryAxisPosition"][number];
type SecondaryAxisPosition = typeof options["secondaryAxisPosition"][number];
type TooltipAnchor = typeof options["tooltipAnchor"][number];
type TooltipAlign = typeof options["tooltipAlign"][number];
type InteractionMode = typeof options["interactionMode"][number];
type TooltipGroupingMode = typeof options["tooltipGroupingMode"][number];

const optionKeys = Object.keys(options) as (keyof typeof options)[];

export default function useChartConfig({
  series,
  datums = 10,
  useR,
  show = [],
  count = 1,
  resizable = true,
  canRandomize = true,
  dataType = "time",
  elementType = "line",
  primaryAxisType = "time",
  secondaryAxisType = "linear",
  primaryAxisPosition = "bottom",
  secondaryAxisPosition = "left",
  primaryAxisStack = false,
  secondaryAxisStack = true,
  primaryAxisShow = true,
  secondaryAxisShow = true,
  tooltipAnchor = "closest",
  tooltipAlign = "auto",
  interactionMode = "primary",
  tooltipGroupingMode = "primary",
  snapCursor = true,
}: {
  series: number;
  datums?: number;
  useR?: boolean;
  show?: (keyof typeof options)[];
  count?: number;
  resizable?: boolean;
  canRandomize?: boolean;
  dataType?: DataType;
  elementType?: ElementType;
  primaryAxisType?: PrimaryAxisType;
  secondaryAxisType?: SecondaryAxisType;
  primaryAxisPosition?: PrimaryAxisPosition;
  secondaryAxisPosition?: SecondaryAxisPosition;
  primaryAxisStack?: boolean;
  secondaryAxisStack?: boolean;
  primaryAxisShow?: boolean;
  secondaryAxisShow?: boolean;
  tooltipAnchor?: TooltipAnchor;
  tooltipAlign?: TooltipAlign;
  interactionMode?: InteractionMode;
  tooltipGroupingMode?: TooltipGroupingMode;
  snapCursor?: boolean;
}) {
  const [state, setState] = React.useState({
    count,
    resizable,
    canRandomize,
    dataType,
    elementType,
    primaryAxisType,
    secondaryAxisType,
    primaryAxisPosition,
    secondaryAxisPosition,
    primaryAxisStack,
    secondaryAxisStack,
    primaryAxisShow,
    secondaryAxisShow,
    tooltipAnchor,
    tooltipAlign,
    interactionMode,
    tooltipGroupingMode,
    snapCursor,
    datums,
    data: makeDataFrom(series, datums),
  });

  return {
    ...state,
  };
}

function makeDataFrom(
  series: number,
  datums: number
) {
  return [
    ...new Array(series || Math.max(Math.round(Math.random() * 5), 1)),
  ].map((d, i) => makeSeries(datums));
}

function makeSeries(
  datums: number
) {
  const length = datums;
  const min = 0;
  const max = 100;
  return {
    data:  [
        {
            primary: "asdasd",
            secondary: 7,
        },
        {
            primary: "opipoiasd",
            secondary: 4,
        },
        {
            primary: "opipoia",
            secondary: 5,
        },
        {
            primary: "opipoi132",
            secondary: 10,
        },
        {
            primary: "opipoiopi",
            secondary: 11,
        },
        {
            primary: "opipoi56",
            secondary: 1,
        },
        {
            primary: "",
            secondary: 0,
        }
    ]
  };
}
