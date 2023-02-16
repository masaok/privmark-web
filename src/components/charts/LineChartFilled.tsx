import { VictoryChart } from 'victory-chart'
import { VictoryArea } from 'victory-area'
import { VictoryAxis } from 'victory-axis'
import { VictoryLegend } from 'victory-legend'
import { VictoryGroup } from 'victory-group'
import { VictoryScatter } from 'victory-scatter'

type ChildNameProps = {
  chartNames: string[]
  omitIndex: number
}

// Returns child names for each series, except given ID index
const getChildNames = ({ chartNames, omitIndex }: ChildNameProps) => {
  const result: string[] = []
  chartNames.forEach((chartName, index) => {
    if (index !== omitIndex) {
      if (Array.isArray(chartName)) {
        chartName.forEach(name => result.push(name))
      } else {
        result.push(chartName)
      }
    }
  })
  return result
}

// Returns events for legend
export const getEvents = (props: any) => [
  ...getLegendEvents({ ...props, target: 'data' }), // Legend symbols
  ...getLegendEvents({ ...props, target: 'labels' }), // Legend labels
]

type LegendProps = {
  chartNames: string[]
  omitIndex: number
}

// Returns legend items, except given ID index
const getLegendItems = ({ chartNames, omitIndex }: LegendProps) => {
  const result: number[] = []
  chartNames.forEach((_, index) => {
    if (index !== omitIndex) {
      result.push(index)
    }
  })
  return result
}

type LegendEventProps = {
  chartNames: string[]
  legendName: string
  target: string
}

const getLegendEvents = ({ chartNames, legendName, target }: LegendEventProps) => {
  return chartNames.map((_, index) => {
    // Get IDs to attach events to, except the IDs associated with this event.
    //
    // For example, if the current event key is 0, we need IDs associated with events 1 and 2. If the current event
    // key is 1, we need IDs associated with events 0 and 2. And so on...
    const childNames = getChildNames({
      chartNames,
      //   legendName,
      omitIndex: index,
    })
    const legendItems = getLegendItems({
      chartNames,
      //   legendName,
      omitIndex: index,
    })

    return {
      childName: legendName,
      target,
      eventKey: index,
      eventHandlers: {
        onMouseOver: () => [
          {
            // Mute all data series, except the data associated with this event
            childName: childNames,
            target: 'data',
            eventKey: 'all',
            mutation: (props: any): object => ({
              style: {
                ...props.style,
                opacity: 0.3,
              },
            }),
          },
          {
            // Mute all legend item symbols, except the symbol associated with this event
            childName: legendName,
            target: 'data',
            eventKey: legendItems,
            mutation: (props: any): object => ({
              style: {
                ...props.style,
                opacity: 0.3,
              },
            }),
          },
          {
            // Mute all legend item labels, except the label associated with this event
            childName: legendName,
            target: 'labels',
            eventKey: legendItems,
            mutation: (props: any) => ({
              style: {
                ...props.style,
                opacity: 0.3,
              },
            }),
          },
        ],
        onMouseOut: () => [
          {
            // Restore all data series associated with this event
            childName: 'all',
            target: 'data',
            eventKey: 'all',
            mutation: (): any => null,
          },
          {
            // Restore all legend item symbols associated with this event
            childName: 'legend',
            target: 'data',
            eventKey: legendItems,
            mutation: () => null,
          },
          {
            // Restore all legend item labels associated with this event
            childName: 'legend',
            target: 'labels',
            eventKey: legendItems,
            mutation: () => null,
          },
        ],
      },
    }
  })
}

export const LineChartFilled = () => {
  const colorScale = ['#06c', '#f4c145', '#4cb140']

  return (
    <div className="App">
      <VictoryChart
        height={225}
        padding={{
          bottom: 100, // Adjusted to accommodate legend
          left: 50,
          right: 50,
          top: 50,
        }}
        maxDomain={{ y: 9 }}
        width={400}
        events={getEvents({
          chartNames: ['area-0', 'area-1', 'area-2', 'scatter-0', 'scatter-1', 'scatter-2'],
          legendName: 'legend',
        })}
      >
        <VictoryAxis tickValues={['2015', '2016', '2017', '2018']} />
        <VictoryAxis dependentAxis />
        <VictoryGroup colorScale={colorScale}>
          <VictoryScatter
            data={[
              { x: '2015', y: 3 },
              { x: '2016', y: 4 },
              { x: '2017', y: 8 },
              { x: '2018', y: 6 },
            ]}
            key={'scatter-0'}
            name={'scatter-0'}
            size={3}
          />
          <VictoryScatter
            data={[
              { x: '2015', y: 2 },
              { x: '2016', y: 3 },
              { x: '2017', y: 4 },
              { x: '2018', y: 5 },
              { x: '2019', y: 6 },
            ]}
            key={'scatter-1'}
            name={'scatter-1'}
            size={3}
          />
          <VictoryScatter
            data={[
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 3 },
              { x: '2018', y: 2 },
              { x: '2019', y: 4 },
            ]}
            key={'scatter-2'}
            name={'scatter-3'}
            size={3}
          />
        </VictoryGroup>
        <VictoryGroup
          colorScale={colorScale}
          style={{
            data: {
              fillOpacity: 0.3,
            },
          }}
        >
          <VictoryArea
            data={[
              { x: '2015', y: 3 },
              { x: '2016', y: 4 },
              { x: '2017', y: 8 },
              { x: '2018', y: 6 },
            ]}
            key={'area-0'}
            name={'area-0'}
            style={{
              data: {
                fill: colorScale[0],
                fillOpacity: 0.3,
              },
            }}
          />
          <VictoryArea
            data={[
              { x: '2015', y: 2 },
              { x: '2016', y: 3 },
              { x: '2017', y: 4 },
              { x: '2018', y: 5 },
              { x: '2019', y: 6 },
            ]}
            key={'area-1'}
            name={'area-1'}
            style={{
              data: {
                fill: colorScale[1],
                fillOpacity: 0.3,
              },
            }}
          />
          <VictoryArea
            data={[
              { x: '2015', y: 1 },
              { x: '2016', y: 2 },
              { x: '2017', y: 3 },
              { x: '2018', y: 2 },
              { x: '2019', y: 4 },
            ]}
            key={'area-2'}
            name={'area-2'}
            style={{
              data: {
                fill: colorScale[2],
                fillOpacity: 0.3,
              },
            }}
          />
        </VictoryGroup>
        <VictoryLegend
          colorScale={colorScale}
          data={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }]}
          orientation="horizontal"
          name="legend"
          x={100}
          y={160}
        />
      </VictoryChart>
    </div>
  )
}
