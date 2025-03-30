import { Layout, Space, Avatar, Row, Col, Image } from '@douyinfe/semi-ui';
import { Card } from '@douyinfe/semi-ui';
import { Divider } from '@douyinfe/semi-ui';
import { Tag, Descriptions } from '@douyinfe/semi-ui';
import { Typography } from '@douyinfe/semi-ui';
import { Timeline } from '@douyinfe/semi-ui';
import { IconAlertTriangle } from '@douyinfe/semi-icons';

const Content = () => {
  const { Paragraph, Title, Text } = Typography;
  const data = [
    { key: '公司', value: '京东-软件开发' },
    { key: '居住地', value: '北京市通州区' },
    { key: '毕业院校', value: '南京邮电大学' },
    {
      key: '技能',
      value: (
        <Space wrap>
          <Tag size="small" shape="circle" color="green">
            Vue
          </Tag>
          <Tag size="small" shape="circle" color="light-blue">
            React
          </Tag>
          <Tag size="small" shape="circle" color="orange">
            Rust
          </Tag>
        </Space>
      ),
    },
  ];
  return (
    <Layout.Content>
      <div style={{ width: '1280px', margin: '20px auto 0' }}>
        <Space style={{ marginBottom: '20px' }}>
          <Avatar shape="square" size="large" src="https://avatars.githubusercontent.com/u/108137214?v=4">
            U
          </Avatar>
          <div style={{height: '72px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Title heading={5}>XXHLS</Title>
            <Paragraph>
                <Text>全栈工程师</Text><br />
                <Text>Talk less, show me your code.</Text>
            </Paragraph>
          </div>
        </Space>
        <Row style={{ width: '100%' }} gutter={16}>
          <Col span={6}>
            <Card>
              <Space vertical>
                <div className="w-full">
                    <Title heading={5}>个人简介</Title>
                </div>
                <Descriptions
                  layout="vertical"
                  align="plain"
                  data={data}
                  column={4}
                />
                <Divider />
                <div className="w-full">
                    <Title heading={5}>人生事件</Title>
                </div>
                <Timeline>
                  <Timeline.Item time="2019-07-14 10:35">默认样式的节点</Timeline.Item>
                    <Timeline.Item time="2019-06-13 16:17" dot={<IconAlertTriangle />} type="warning">
                        自定义图标
                    </Timeline.Item>
                    <Timeline.Item time="2019-05-14 18:34" color="pink">
                        自定义节点颜色
                    </Timeline.Item>
                    <Timeline.Item time="2019-04-10 12:20">
                        <span style={{ fontSize: '18px' }}>自定义节点样式</span>
                    </Timeline.Item>
                  <Timeline.Item time="2019-07-14 10:35">默认样式的节点</Timeline.Item>
                  <Timeline.Item time="2019-06-13 16:17" dot={<IconAlertTriangle />} type="warning">
                      自定义图标
                  </Timeline.Item>
                  <Timeline.Item time="2019-05-14 18:34" color="pink">
                      自定义节点颜色
                  </Timeline.Item>
                  <Timeline.Item time="2019-04-10 12:20">
                      <span style={{ fontSize: '18px' }}>自定义节点样式</span>
                  </Timeline.Item>
              </Timeline>
              </Space>
            </Card>
          </Col>
          <Col span={18}>
            <Space vertical>
              <Card style={{width: '100%'}}>
                <Image
                    src="https://raw.githubusercontent.com/xxhls/what-s-me/refs/heads/master/assets/github-contribution-grid-snake.svg"
                />
              </Card>
              <Card title="博客">
                <Title heading={5}>默认行距</Title>
                <Paragraph spacing="extended" >
                    Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
                </Paragraph>
                <br />
                <Title heading={5}>宽松行距</Title>
                <Paragraph spacing="extended">
                    Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
                </Paragraph>
                <br />
                <Title heading={5}>默认行距</Title>
                <Paragraph spacing="extended" >
                    Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
                </Paragraph>
                <br />
                <Title heading={5}>宽松行距</Title>
                <Paragraph spacing="extended">
                    Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
                </Paragraph>
                <br />
                <Title heading={5}>默认行距</Title>
                <Paragraph spacing="extended" >
                    Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
                </Paragraph>
                <br />
                <Title heading={5}>宽松行距</Title>
                <Paragraph spacing="extended">
                    Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
                </Paragraph>
                <br />
                <Title heading={5}>默认行距</Title>
                <Paragraph spacing="extended" >
                    Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
                </Paragraph>
                <br />
                <Title heading={5}>默认行距</Title>
                <Paragraph spacing="extended" >
                    Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
                </Paragraph>
                <br />
                <Title heading={5}>默认行距</Title>
                <Paragraph spacing="extended" >
                    Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的 Web 应用。
                </Paragraph>
                <br />
                <Title heading={5}>......</Title>
              </Card>
            </Space>
          </Col>
        </Row>
      </div>
    </Layout.Content>
  );
};

export default Content;
