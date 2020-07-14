import React, { Component } from 'react'
import { BackTop, PageHeader, Descriptions } from 'antd'
import DashBoard from '../components/DashBoard'
import Information from '../components/Information'
import {
  AppstoreOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import '../styles/index.less'

class AnalystPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const projectInfo = this.props.dataInformation.info;
    const dataDashboard = this.props.dataDashboard;
    const dataInformation = this.props.dataInformation;

    return (
      <div>
        <div className="site-page-header-ghost-wrapper" style={{ margin: '16px 0' }}>
          <PageHeader
            ghost={false}
            title={projectInfo.name}
            subTitle={projectInfo.description}>
            <Descriptions size="small" column={2}>
              <Descriptions.Item label="Github Source"><a>{projectInfo.git}</a></Descriptions.Item>
              <Descriptions.Item label="Branch">{projectInfo.branch}</Descriptions.Item>
              <Descriptions.Item label="Jenkins Job"><a>{projectInfo.jenkin_job}</a></Descriptions.Item>
              <Descriptions.Item label="Build Trigger">{projectInfo.build_trigger}</Descriptions.Item>
              <Descriptions.Item label="Remarks">{projectInfo.remarks}</Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </div>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <BackTop />
          <h3 className='area_subject'><AppstoreOutlined /> Overview / Month: July 2020</h3>
          <DashBoard dataDashboard={dataDashboard} dataInformation={dataInformation}/>
          <h3 className='area_subject'><PieChartOutlined /> Weekly Status: development-portal</h3>
          <Information dataInformation={dataInformation} />
          <h3 className='area_subject'><PieChartOutlined /> Weekly Status: test-portal</h3>
          <Information dataInformation={dataInformation} />
          
        </div>
        
      </div>
    )
  }
}

export default AnalystPage
