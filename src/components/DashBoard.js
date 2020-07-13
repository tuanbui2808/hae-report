import React from 'react'
import { Row, Col, Card } from 'antd'
import { getPercentage } from '@/untils'
import { Consumer } from '../contexts/expand'
import '../styles/dashBoard.less'
import {
  PieChartFilled
} from '@ant-design/icons'
import SimplePieChart from '../charts/SimplePieChart.js';
const MyCardItem = ({
  labelColor,
  label,
  title,
  content,
  clickHander,
}) => <Card
  onClick={clickHander}
  bodyStyle={{ padding: '12px' }}
  hoverable>
    <p className='card_item_label' style={{ color: labelColor }}>
      {label}
    </p>
    <p className='card_item_title' style={{ color: labelColor }}>{title}</p>
    <p className='card_item_content'>{content}</p>
  </Card>

export default class DashBoard extends React.Component {
  render() {
    const totalTestCase = this.props.dataDashboard.totalTestCase;
    const totalAutomationTest = this.props.dataDashboard.totalAutomationTest;

    const TotalTask = {
      title: totalTestCase,
      content: 'Not Implemented Tests',
      label: `${getPercentage(totalTestCase, (totalAutomationTest+totalTestCase))} %`,
      labelColor: '#00C49F',
    }
    const OnProgressTask = {
      title: totalAutomationTest,
      content: 'Automated Tests',
      labelColor: '#0088FE',
      label: `${getPercentage(totalAutomationTest, (totalAutomationTest+totalTestCase))} %`,
    }

    const cardsList = [OnProgressTask, TotalTask]
    const TaskDone = {
      title: totalTestCase + totalAutomationTest,
      content: 'Total',
      labelColor: '#FF8042',
    }
    cardsList.push(TaskDone)
    const length = cardsList.length
    const gutter = (24 % length) ? 0 : 12
    return (
      <Consumer>
        {
          ({ toggleExpand }) => (
            <div className='dash_board'>
              <Row
                gutter={gutter}
                type='flex'
                justify='space-around'>
                <Col span={10}>
                  <p className='chart_title'><PieChartFilled style={{ marginRight: '10px', margin: '16px' }} />Status</p>
                  <SimplePieChart dataTest={this.props.dataInformation} />
                </Col>
              </Row>
              <Row
                gutter={gutter}
                type='flex'
                justify='space-around'>
                {
                  cardsList.map(item =>
                    <Col key={item.content} span={Math.floor(24 / length)}>
                      <MyCardItem
                        {...item}
                        clickHander={item.clickHander && item.clickHander(toggleExpand)} />
                    </Col>
                  )
                }
              </Row>
            </div>
          )
        }
      </Consumer>
    )
  }
}