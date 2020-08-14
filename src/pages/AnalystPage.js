import React, { Component } from 'react'
import { Row, Col, BackTop, PageHeader, Descriptions } from 'antd'
import DashBoard from '../components/DashBoard'
import Information from '../components/Information'
import {
  InfoCircleOutlined,
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
              <Descriptions.Item label="Github Source"><a href={projectInfo.git}>{projectInfo.git}</a></Descriptions.Item>
              <Descriptions.Item label="Branch">{projectInfo.branch}</Descriptions.Item>
              <Descriptions.Item label="Jenkins Job"><a href={projectInfo.jenkin_job}>{projectInfo.jenkin_job}</a></Descriptions.Item>
              <Descriptions.Item label="Build Trigger">{projectInfo.build_trigger}</Descriptions.Item>
              <Descriptions.Item label="Remarks">{projectInfo.remarks}</Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </div>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <BackTop />
          <h3 className='area_subject'><AppstoreOutlined /> Overview</h3>
          <Row>
            <Col span={12}><DashBoard dataSuite="Master" dataDashboard={dataDashboard.Master} /></Col>
            <Col span={12}><DashBoard dataSuite="01 - Ops Suite" dataDashboard={dataDashboard.OpsTCs}/></Col>
          </Row>
          <Row style={{paddingTop: '80px'}}>
            <Col span={12}><DashBoard dataSuite="02 - Admin" dataDashboard={dataDashboard.AdminTCs} /></Col>
            <Col span={12}><DashBoard dataSuite="03 - Email Workflow" dataDashboard={dataDashboard.EmailWorlflowTCs} /></Col>
          </Row>
          <h3 className='area_subject'> <InfoCircleOutlined /> Month: August 2020</h3>
          <h3 className='area_subject'><PieChartOutlined /> Status: development-portal</h3>
          <Information dataInformation={dataInformation} dataPortal={dataInformation.jenkins_report_dev} />
          <h3 className='area_subject'><PieChartOutlined /> Status: test-portal</h3>
          <Information dataInformation={dataInformation} dataPortal={dataInformation.jenkins_report_test}/>
        </div>
      </div>
    )
  }
}

export default AnalystPage
