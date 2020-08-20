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
    const automatedTest = this.props.dataDashboard[0].total;
    const pendingAutomation = this.props.dataDashboard[1].total;
    const cantAutomateTest = this.props.dataDashboard[2].total;

    const TotalTask = {
      title: pendingAutomation,
      content: 'Pending Automation Tests',
      label: `${getPercentage(pendingAutomation, (automatedTest + pendingAutomation + cantAutomateTest))} %`,
      labelColor: '#00C49F'
    }
    const OnProgressTask = {
      title: automatedTest,
      content: 'Automated Tests',
      labelColor: '#0088FE',
      label: `${getPercentage(automatedTest, (automatedTest + pendingAutomation + cantAutomateTest))} %`,
    }

    const cardsList = [OnProgressTask, TotalTask]
    const TaskDone = {
      title: cantAutomateTest,
      content: "Can't Automate",
      label: `${getPercentage(cantAutomateTest, (automatedTest + pendingAutomation + cantAutomateTest))} %`,
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
                <Col span={24}>
                  <p className='chart_title'><PieChartFilled style={{ marginRight: '10px', margin: '0px' }} />{this.props.dataSuite}</p>
                  <SimplePieChart dataTest={this.props.dataDashboard} />
                </Col>
              </Row>
              <Row 
                style={{ marginTop: '30px'}}
                gutter={gutter}
                type='flex'
                justify='center'>
                {
                  cardsList.map(item =>
                    <Col key={item.content} span={Math.floor(18 / length)}>
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