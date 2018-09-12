//import logo from './logo.svg';
//import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

// The default locale is en-US, but we can change it to other language
import frFR from 'antd/lib/locale-provider/fr_FR';
import moment from 'moment';
import 'moment/locale/fr';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';

import { LocaleProvider, DatePicker, message } from 'antd';
import { Menu, Icon } from 'antd';
import { Checkbox,Button  } from 'antd';
import { Row, Col } from 'antd';
import { Form, Input,Dropdown,Table, Divider, Tag, Card, Avatar  } from 'antd';

import { View, DataSet } from '@antv/data-set';
import G2 from '@antv/g2';


moment.locale('fr');

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const ButtonGroup = Button.Group;
const { Header, Footer, Sider, Content } = Layout;
const FormItem = Form.Item;
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">所有使用者</Menu.Item>
    <Menu.Item key="2">資訊管理部</Menu.Item>
    <Menu.Item key="3">行銷業務部</Menu.Item>
    <Menu.Item key="4">人力資源管理部</Menu.Item>
  </Menu>
);
const menu2 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">今天</Menu.Item>
    <Menu.Item key="2">昨天</Menu.Item>
    <Menu.Item key="3">最近30天</Menu.Item>
    <Menu.Item key="4">最近7天</Menu.Item>
    <Menu.Item key="5">最近6個月</Menu.Item>
    <Menu.Item key="6">最近12個月</Menu.Item>
    <Menu.Item key="7">自訂區間</Menu.Item>    
  </Menu>
);
const menu3 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">投入學習者</Menu.Item>
    <Menu.Item key="2">修課總數</Menu.Item>
    <Menu.Item key="3">完課率</Menu.Item>
    <Menu.Item key="4">學習時間</Menu.Item>
    <Menu.Item key="5">學習次數</Menu.Item>
    <Menu.Item key="6">討論主題</Menu.Item>
  </Menu>
);
const menu4 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">比較指標</Menu.Item>
    <Menu.Item key="2">投入學習者</Menu.Item>
    <Menu.Item key="3">修課總數</Menu.Item>
    <Menu.Item key="4">完課率</Menu.Item>
    <Menu.Item key="5">學習時間</Menu.Item>
    <Menu.Item key="6">學習次數</Menu.Item>
    <Menu.Item key="7">討論主題</Menu.Item>    
  </Menu>
);
const menu5 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">完課數</Menu.Item>
    <Menu.Item key="2">完課率</Menu.Item>
    <Menu.Item key="3">學習時數</Menu.Item>
    <Menu.Item key="4">討論數</Menu.Item>
    </Menu>
);
const menu6 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">所有使用者</Menu.Item>
    <Menu.Item key="2">BA</Menu.Item>
    <Menu.Item key="3">Sales</Menu.Item>
    <Menu.Item key="4">RD</Menu.Item>
    </Menu>
);
const dataSource = [{
  key: '1',
  num: '1',
  people: '提拔米\n10370047',
  group: '商業分析部',
  email: 'tibame@wiedu.com',
  lessonnum: 100,
  lessonrate: '38%',
  discussnum: 3,
  lessonhour: 2
},{
  key: '2',
  num: '2',
  people: '提拔米\n10370047',
  group: '商業分析部',
  email: 'tibame@wiedu.com',
  lessonnum: 100,
  lessonrate: '38%',
  discussnum: 3,
  lessonhour: 2
},{
  key: '3',
  num: '3',
  people: '提拔米\n10370047',
  group: '商業分析部',
  email: 'tibame@wiedu.com',
  lessonnum: 100,
  lessonrate: '38%',
  discussnum: 3,
  lessonhour: 2
},{
  key: '4',
  num: '4',
  people: '提拔米\n10370047',
  group: '商業分析部',
  email: 'tibame@wiedu.com',
  lessonnum: 100,
  lessonrate: '38%',
  discussnum: 3,
  lessonhour: 2
},{
  key: '5',
  num: '5',
  people: '提拔米\n10370047',
  group: '商業分析部',
  email: 'tibame@wiedu.com',
  lessonnum: 100,
  lessonrate: '38%',
  discussnum: 3,
  lessonhour: 2
},{
  key: '6',
  num: '6',
  people: '提拔米\n10370047',
  group: '商業分析部',
  email: 'tibame@wiedu.com',
  lessonnum: 100,
  lessonrate: '38%',
  discussnum: 3,
  lessonhour: 2
},{
  key: '7',
  num: '7',
  people: '提拔米\n10370047',
  group: '商業分析部',
  email: 'tibame@wiedu.com',
  lessonnum: 100,
  lessonrate: '38%',
  discussnum: 3,
  lessonhour: 2
},{
  key: '8',
  num: '8',
  people: '提拔米\n10370047',
  group: '商業分析部',
  email: 'tibame@wiedu.com',
  lessonnum: 100,
  lessonrate: '38%',
  discussnum: 3,
  lessonhour: 2
},{
  key: '9',
  num: '9',
  people: '提拔米\n10370047',
  group: '商業分析部',
  email: 'tibame@wiedu.com',
  lessonnum: 100,
  lessonrate: '38%',
  discussnum: 3,
  lessonhour: 2
},{
  key: '10',
  num: '10',
  people: '提拔米\n10370047',
  group: '商業分析部',
  email: 'tibame@wiedu.com',
  lessonnum: 100,
  lessonrate: '38%',
  discussnum: 3,
  lessonhour: 2
},{
  key: '11',
  num: '11',
  people: '提拔米\n10370047',
  group: '商業分析部',
  email: 'tibame@wiedu.com',
  lessonnum: 100,
  lessonrate: '38%',
  discussnum: 3,
  lessonhour: 2
},{
  key: '12',
  num: '12',
  people: '提拔米\n10370047',
  group: '商業分析部',
  email: 'tibame@wiedu.com',
  lessonnum: 100,
  lessonrate: '38%',
  discussnum: 3,
  lessonhour: 2
}];

const columns = [{
    title: ' ',
    dataIndex: 'num',
    key: 'num',
  },{
    title: '學員',
    key: 'ava',
    dataIndex: '',
    render: () => (
      <span>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </span>
    ),
  },{
    title: '',
    dataIndex: 'people',
    key: 'people',
    render: text => (
      <div style={{whiteSpace: 'pre-line'}}>
      {text}
      </div>
    ),
  },{
    title: '群組',
    dataIndex: 'group',
    key: 'group',
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: '完課數',
    dataIndex: 'lessonnum',
    key: 'lessonnum',
  }, {
    title: '完課率',
    dataIndex: 'lessonrate',
    key: 'lessonrate',
  }, {
    title: '討論數',
    dataIndex: 'discussnum',
    key: 'discussnum',
  }, {
    title: '學習時數',
    dataIndex: 'lessonhour',
    key: 'lessonhour',
}];

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

function reportOnclick(){
  document.getElementById('content1').style.display='block';
  document.getElementById('content2').style.display='none';  
}
function listOnclick(){
  document.getElementById('content1').style.display='none';
  document.getElementById('content2').style.display='block';
}

/*function checkchange(){
  if(document.getElementById('state1').style.display=='none'){
    document.getElementById('state1').style.display='block';
    document.getElementById('state2').style.display='none';
  }
  document.getElementById('state1').style.display='none';
  document.getElementById('state2').style.display='block';
}*/

class App extends React.Component {
  render() {
    return (
      <Row style={{padding:'15px'}}>
          <header style={{marginLeft:'10px'}}>
            <img src="pagetittleicon.png" height="40px"/>
          </header> 
      </Row>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('head1'));

class App2 extends React.Component {
  render() {

    return (
      <div>
        <div style={{backgroundColor:'#f4f4f4'}}>
          <Row>
            <Col span={20} offset={2}>
              <h1 style={{marginTop:'16px', marginBottom:'16px',fontFamily: 'Microsoft JhengHei UI', fontSize: '32px'}}>學習管理中心</h1>
              <Menu
                selectedKeys={["mail"]} mode="horizontal" style={{backgroundColor:'#f4f4f4'}}>
                <Menu.Item key="o1" style={{fontFamily: 'Microsoft JhengHei UI', fontSize: '16px'}}>
                  總覽
                </Menu.Item>
                <Menu.Item key="mail" style={{fontFamily: 'Microsoft JhengHei UI', fontSize: '16px'}}>
                  學員學習狀態
                </Menu.Item>
                <Menu.Item key="o2" style={{fontFamily: 'Microsoft JhengHei UI', fontSize: '16px'}}>
                  課程運用狀態
                </Menu.Item>
                <Menu.Item key="o3" style={{fontFamily: 'Microsoft JhengHei UI', fontSize: '16px'}}>
                  企業學習計畫
                </Menu.Item>
              </Menu>
            </Col>
          </Row>   
        </div>
        <Row>
          <Col span={20} offset={2}>
            <Row style={{marginTop:'30px'}}>
              <Col span={20}>
                <ButtonGroup size={'large'}>
                  <Button onClick={reportOnclick}>學習報表</Button>
                  <Button onClick={listOnclick}>學員列表</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<App2 />, document.getElementById('head2'));

class App3 extends React.Component {
  render(){
    return(
      <Row>
        <Col span={20} offset={2}>

          <Row style={{marginTop:'30px'}}>
            <Col span={20}>
              <Dropdown overlay={menu}>
                <Button style={{ width: 180 ,fontSize:'14px'}} size={'large'}>
                  所有使用者<Icon type="down" />
                </Button>
              </Dropdown>
              <Button style={{ width: 180, backgroundColor: '#333333', color: '#fff',marginLeft: 10,fontSize:'14px'}} size={'large'}>
                新增群組比較
              </Button>
            </Col>
            <Col span={2}>
              <Dropdown overlay={menu2}>
                <Button style={{ width: 180,fontSize:'14px' }} size={'large'}>
                  最近7天<Icon type="down" />
                </Button>
              </Dropdown>
            </Col>
          </Row>
          <div style={{backgroundColor:'rgba(245, 245, 245, 1)',marginTop:'30px',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'20px'}}>
            <Row>
              <Col span={21} style={{fontSize: '20px',marginTop:'10px'}}>
                學習統計摘要
              </Col>
              <Col span={3} style={{marginTop:'10px'}}>
              <Checkbox>相較於上個時段</Checkbox>
              </Col>
            </Row>
            <div style={{backgroundColor:'#fff',padding:'15px',marginTop:'10px',display:'block'}}>
            <Row>
              <Col span={4}>
              <p>投入學習者</p>
              <strong style={{fontSize: '20px',fontFamily: 'Roboto Bold',}}>234</strong>
              </Col>
              <Col span={4}>
              <p>總修課數</p>
              <strong style={{fontSize: '20px',fontFamily: 'Roboto Bold',}}>80</strong>
              </Col>
              <Col span={4}>
              <p>完課率</p>
              <strong style={{fontSize: '20px',fontFamily: 'Roboto Bold',}}>3%</strong>
              </Col>
              <Col span={4}>
              <p>學習時數</p>
              <strong style={{fontSize: '20px',fontFamily: 'Roboto Bold',}}>246.8</strong>
              </Col>
              <Col span={4}>
              <p>學習次數</p>
              <strong style={{fontSize: '20px',fontFamily: 'Roboto Bold',}}>789</strong>
              </Col>
              <Col span={4}>
              <p>討論主題</p>
              <strong style={{fontSize: '20px',fontFamily: 'Roboto Bold',}}>1,357</strong>
              </Col>
            </Row>
            </div>
            <div style={{backgroundColor:'#fff',padding:'15px',marginTop:'10px',display:'none'}}>
            <Row>
              <Col span={4}>
              <p>投入學習者</p>
              <strong style={{fontSize: '20px',fontFamily: 'Roboto Bold',}}>234</strong>
              </Col>
              <Col span={4}>
              <p>總修課數</p>
              <strong style={{fontSize: '20px',fontFamily: 'Roboto Bold',}}>80</strong>
              </Col>
              <Col span={4}>
              <p>完課率</p>
              <strong style={{fontSize: '20px',fontFamily: 'Roboto Bold',}}>3%</strong>
              </Col>
              <Col span={4}>
              <p>學習時數</p>
              <strong style={{fontSize: '20px',fontFamily: 'Roboto Bold',}}>60%</strong>
              </Col>
              <Col span={4}>
              <p>學習次數</p>
              <strong style={{fontSize: '20px',fontFamily: 'Roboto Bold',}}>789</strong>
              </Col>
              <Col span={4}>
              <p>討論主題</p>
              <strong style={{fontSize: '20px',fontFamily: 'Roboto Bold',}}>5,678</strong>
              </Col>
            </Row>
            </div>
          </div> 
          <div style={{marginTop:'60px'}}>
            <div style={{fontSize: '20px', marginLeft:'20px'}}>
              學習趨勢
            </div>
            <Card>
              <Row>
                <Col span={20}>
                <Dropdown overlay={menu3} >
                <Button style={{ width: 180 ,fontSize:'14px',marginRight:'10px'}} size={'large'}>
                  完課率<Icon type="down" />
                </Button>
              </Dropdown>
              對比
              <Dropdown overlay={menu4} >
                <Button style={{ width: 180 ,fontSize:'14px',backgroundColor: '#333333', color: '#fff',marginLeft:'10px'}} size={'large'}>
                  比較指標<Icon type="down" />
                </Button>
              </Dropdown>
                </Col>
              </Row>
              <div id="mountNode">
              </div>
            </Card>
            <div>
            
            </div>
          </div>
        </Col> 
      </Row>
    );
  }

}
ReactDOM.render(<App3 />, document.getElementById('content1'));

class App4 extends React.Component {
  render(){
    reportOnclick();
    return(
      <Row>
        <Col span={16} offset={4}>
          <Row style={{marginTop:'30px'}}>
            <Col span={6} style={{fontSize: '20px',fontFamily: 'Microsoft JhengHei UI'}}>
            學員數 1,234 人
            </Col>
            <Col span={6}>
              <Input placeholder="搜尋" postfix={<Icon type="search" />} size={'large'} />
            </Col>
            <Col span={3} style={{marginLeft:'20px'}}>
            <Dropdown overlay={menu5}>
                <Button style={{ fontSize:'14px',width:'125px'}} size={'large'}>
                  排序<Icon type="down" />
                </Button>
              </Dropdown>
            </Col>
            <Col span={3}style={{marginLeft:'20px'}}>
              <Dropdown overlay={menu6}>
                <Button style={{ fontSize:'14px',width:'125px'}} size={'large'}>
                  所有使用者<Icon type="down" />
                </Button>
              </Dropdown>
            </Col>
            <Col span={3}style={{marginLeft:'20px'}}>
              <Dropdown overlay={menu2}>
                <Button style={{ fontSize:'14px',width:'125px'}} size={'large'}>
                  今天<Icon type="down" />
                </Button>
              </Dropdown>
            </Col>
          </Row>
          <div style={{marginTop:'30px'}}>
          <Table dataSource={dataSource} columns={columns} />
          </div> 
        </Col> 
      </Row>
    );
  }

}
ReactDOM.render(<App4 />, document.getElementById('content2'));

var data = [{
  month: 'Jan',
  finishrate: -45
}, {
  month: 'Feb',
  finishrate: 40
}, {
  month: 'Mar',
  finishrate: 65
}, {
  month: 'Apr',
  finishrate: -18
}, {
  month: 'May',
  finishrate: 23
}, {
  month: 'Jun',
  finishrate: 84
}, {
  month: 'Jul',
  finishrate: 25
}];
var ds = new DataSet.View();
var dv = ds.source(data);
// fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
dv.transform({
  type: 'fold',
  fields: ['finishrate'], // 展开字段集
  key: 'rate', // key字段
  value: 'ratenum' // value字段
});
var chart = new G2.Chart({
  container: 'mountNode',
  forceFit: true,
  height:379
});
chart.source(dv, {
  month: {
    range: [0, 1]
  }
});
chart.tooltip({
  crosshairs: {
    type: 'line'
  }
});
chart.axis('ratenum', {
  label: {
    formatter: function formatter(val) {
      return val;
    }
  }
});
chart.axis('month', {
  line: {
    lineWidth: 2, // 设置线的宽度
    stroke: '#dbdbdb', // 设置线的颜色
  }
});
chart.legend(false); //所有的图例都不显示
chart.tooltip(false);
chart.line().position('month*ratenum').color('rate', [ '#e8798f']).shape('smooth');
chart.point().position('month*ratenum').color('rate', [ '#e8798f']).size(4).shape('circle').style({
  stroke: '#fff',
  lineWidth: 1
});
chart.render();
