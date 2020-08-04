import React, { Component  } from 'react';
import { connect } from 'react-redux'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { DiagramBlock } from '../styled'
import { codes } from '../PromoCodes/codes'
import { loadAllPromocodes } from '../AC'

class Diagram extends Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadAllPromocodes()
  }

  render() {
    const { promocodes } = this.props

    if (promocodes.loading) return <h1>Загрузка</h1>

    return (
      <>
      { promocodes.loaded ? (
        <DiagramBlock>
          <BarChart
            width={650}
            height={180}
            data={promocodes.entitys}
            margin={{
              top: 5, right: 15, left: 10, bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              minTickGap="3"
              tickMargin="10"
              tickSize={2}
              padding={{ left: 10, right: 10, top: 20 }}
            />
            <YAxis tickMargin="10" />
            <Tooltip />

            <CartesianGrid strokeDasharray="1 5" />
            <Bar dataKey="sales" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </DiagramBlock>
      ) : (
        <></>
      ) }
      </>
    );
  }
}


export default connect((state) => {
  return {
    promocodes: state.adminPromoCodes
  }
}, { loadAllPromocodes })(Diagram);
