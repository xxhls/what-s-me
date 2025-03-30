import { Layout, Space, Avatar, Row, Col } from '@douyinfe/semi-ui';
import { Card } from '@douyinfe/semi-ui';
import { Divider } from '@douyinfe/semi-ui';
import { Tag, Descriptions } from '@douyinfe/semi-ui';

const Content = () => {
  const data = [
    { key: '抖音号', value: 'SemiDesign' },
    { key: '主播类型', value: '自由主播' },
    { key: '安全等级', value: '3级' },
    {
      key: '垂类标签',
      value: (
        <Space>
          <Tag size="small" shape="circle" color="amber">
            互联网资讯
          </Tag>
          <Tag size="small" shape="circle" color="violet">
            编程
          </Tag>
        </Space>
      ),
    },
    { key: '作品数量', value: '88888888' },
    { key: '认证状态', value: '这是一个很长', span: 3 },
  ];
  return (
    <Layout.Content>
      <div style={{ width: '1280px', margin: '20px auto 0' }}>
        <div style={{ marginBottom: '20px' }}>
          <Avatar shape="square" size="large">
            U
          </Avatar>
        </div>
        <Row style={{ width: '100%' }} gutter={16}>
          <Col span={6}>
            <Card>
              <Space vertical>
                <Descriptions
                  layout="vertical"
                  align="plain"
                  data={data}
                  column={4}
                />
                <Divider />
                <Descriptions
                  layout="vertical"
                  align="plain"
                  data={data}
                  column={4}
                />
                <Divider />
                <Descriptions
                  layout="vertical"
                  align="plain"
                  data={data}
                  column={4}
                />
                <Divider />
                <Descriptions
                  layout="vertical"
                  align="plain"
                  data={data}
                  column={4}
                />
                <Divider />
              </Space>
            </Card>
          </Col>
          <Col span={18}>
            <Space vertical>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
              <Card>
                Semi Design 是由抖音前端团队与 UED
                团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                Web 应用。
              </Card>
            </Space>
          </Col>
        </Row>
      </div>
    </Layout.Content>
  );
};

export default Content;
