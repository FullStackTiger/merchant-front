import React, { Component } from 'react';
// import './Newreactvis.css';
import './style.css';
import { XYPlot, LineSeries, MarkSeries, VerticalBarSeries, AreaSeries } from 'react-vis';

class Newreactvis extends Component {
  render() {
    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];

    return (
      <div className="Newreactvis" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-md-3">
            <XYPlot height={300} width={300}>
              <LineSeries data={data} color="black" curve={'curveMonotoneX'}  />
            </XYPlot>
          </div>
          <div className="col-md-3">
            <XYPlot height={300} width={300}>
              <MarkSeries data={data} color="red"
                style={{ mark: { stroke: 'white' } }} />
            </XYPlot>
          </div>
          <div className="col-md-3">
            <XYPlot height={300} width={300}>
              <VerticalBarSeries data={data} curve={'curveMonotoneX'} />
            </XYPlot>
          </div>
          <div className="col-md-3">
            <XYPlot height={300} width={300}>
              <AreaSeries data={data} curve={'curveMonotoneX'} color="blue" style={{ strokeDasharray: "2 2" }} />
            </XYPlot>
          </div>

        </div>
      </div>
    );
  }
}

export default Newreactvis;



