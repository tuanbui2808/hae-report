import React from 'react'
import { Row, Col, Card } from 'antd'
import {
  PieChartFilled,
  BoxPlotFilled,
  ClockCircleFilled,
  FolderFilled,
  CompassFilled,
} from '@ant-design/icons'
import SimplePieChart from '../charts/SimplePieChart.js';
import SimpleBarChart from '../charts/SimpleBarChart.js';
import BrushBarChart from '../charts/BrushBarChart.js';
import '../styles/information.less'
import { Descriptions } from 'antd'

const date = new Date().toDateString();

const LabelInfo = ({ title, icon, context }) =>
  <p>
    <span className='label_title'>{icon} {title}</span>
    <span>{context}</span>
  </p>


export default class Information extends React.Component {
  render() {
    const projectInfo = this.props.dataInformation.info;
    const dataPortal = this.props.dataPortal;
    return (
      <Row>
        <Row style={{ marginBottom: '20px' }}>
          <Col span={12} >
            <Descriptions size="small" column={1}>
              <Descriptions.Item label="Number Of Runs"><a href={projectInfo.jenkin_job}>{dataPortal.runs_number}</a></Descriptions.Item>
              <Descriptions.Item label="Portal"><a href={dataPortal.portal_url}>{dataPortal.portal}</a></Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={12}>
            <Descriptions size="small" column={1}>
              <Descriptions.Item label="Total Defects"><a href={dataPortal.youtrack_url.defects}>{dataPortal.youtrack.defects}</a></Descriptions.Item>
              <Descriptions.Item label="==> Bugs"><a href={dataPortal.youtrack_url.bugs}>{dataPortal.youtrack.bugs}</a></Descriptions.Item>
              <Descriptions.Item label="==> Script Issues"><a href={dataPortal.youtrack_url.scripts}>{dataPortal.youtrack.scripts}</a></Descriptions.Item>
              <Descriptions.Item label="==> Automation Pre-checks"><a href={dataPortal.youtrack_url.precheck}>{dataPortal.youtrack.precheck}</a></Descriptions.Item>
            </Descriptions>
          </Col>
        </Row >
        <Col span={6}>
          <p className='chart_title'><PieChartFilled style={{ marginRight: '10px', margin: '10px' }} />Week 01 (06/07/2020 - 10/07/2020) </p>
          <BrushBarChart dataTest={this.props.dataPortal.dateData.week1} />
        </Col>
        <Col span={6}>
          <p className='chart_title'><PieChartFilled style={{ marginRight: '10px', margin: '10px' }} />Week 02 (13/07/2020 - 17/07/2020) </p>
          <BrushBarChart dataTest={this.props.dataPortal.dateData.week2} />
        </Col>
        <Col span={6}>
          <p className='chart_title'><PieChartFilled style={{ marginRight: '10px', margin: '10px' }} />Week 03 (20/07/2020 - 24/07/2020) </p>
          <BrushBarChart dataTest={this.props.dataPortal.dateData.week3} />
        </Col>
        <Col span={6}>
          <p className='chart_title'><PieChartFilled style={{ marginRight: '10px', margin: '10px' }} />Week 04 (27/07/2020 - 01/08/2020) </p>
          <BrushBarChart dataTest={this.props.dataPortal.dateData.week4} />
        </Col>
        <Col span={24} className='main_information'>
          <Card style={{ marginBottom: '60px' }}>
            <Row span={24}>
              <Col>
                <LabelInfo title='Report Date' context={date} icon={<BoxPlotFilled />} />
                <LabelInfo title='Report Time' context={date} icon={<ClockCircleFilled />} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}