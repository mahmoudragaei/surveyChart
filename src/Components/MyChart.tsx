import ResizableBox from "./ResizableBox";
import useDemoConfig from "./useDemoConfig";
import React from "react";
import { AxisLinearOptions, AxisOptions, Chart } from "react-charts";


type CategoryScore = {
    Category: string,
    Score: number,
}
type Series = {
    label: string,
    data: CategoryScore[]
}

export default function MyChart({data}) {
    const primaryAxis = React.useMemo<
        AxisOptions<CategoryScore>
    >(
        () => ({
            getValue: (datum) => datum.Category,
        }),
        []
    );

    const secondaryAxes = React.useMemo<
    AxisLinearOptions<CategoryScore>[]
    >(
        () => [
            {
                getValue: (datum) => datum.Score,
                minDomainLength: 6,
                min: 0,
                max: 6,
                hardMin: 0
            },
        ],
        []
    );

    const padding = 0
    
    return (
        <>
            <br />
            <br />
            <ResizableBox>
                <Chart
                    options={{
                        data,
                        primaryAxis,
                        secondaryAxes,
                        padding,
                    }}
                />
            </ResizableBox>
        </>
    );
}
