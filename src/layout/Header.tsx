import { Layout } from '@douyinfe/semi-ui';
import { Nav, Button } from '@douyinfe/semi-ui';
import {
  IconForm,
  IconToast,
  IconRating,
  IconIntro,
  IconHeart,
} from '@douyinfe/semi-icons-lab';
import {
  IconMoon,
  IconTwitter,
  IconGithubLogo,
  IconTiktokLogo,
} from '@douyinfe/semi-icons';
import { Space } from '@douyinfe/semi-ui';

const Header = () => {

  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
        body.removeAttribute('theme-mode');
    } else {
        body.setAttribute('theme-mode', 'dark');
    }
};

const openLink = (link: string) => {
  window.location = link as unknown as Location
}


  return (
    <Layout.Header style={{ borderBottom: '1px solid var(--semi-color-border)' }}>
      <div style={{ width: '1280px', margin: '0 auto' }}>
        <Nav
          style={{border: 'none'}}
          mode={'horizontal'}
          items={[
            { itemKey: 'home', text: '首页', icon: <IconIntro /> },
            { itemKey: 'blog', text: '博客', icon: <IconForm /> },
            { itemKey: 'project', text: '项目', icon: <IconRating /> },
            { itemKey: 'support', text: '支持', icon: <IconHeart /> },
          ]}
          onSelect={(key) => console.log(key)}
          header={{
            logo: <IconToast style={{ height: '36px', fontSize: 36 }} />,
            text: "What's me",
          }}
          footer={
            <Space>
              <Button
                theme="borderless"
                type="tertiary"
                icon={<IconMoon size="extra-large" />} 
                onClick={switchMode}
              />
              <Button
                theme="borderless"
                type="tertiary"
                icon={<IconTwitter size="extra-large" />}
              />
              <Button
                theme="borderless"
                type="tertiary"
                icon={<IconTiktokLogo size="extra-large" />}
                onClick={() => openLink('https://v.douyin.com/0TLJjZQIXSg/%209@3.com')}
              />
              <Button
                theme="borderless"
                type="tertiary"
                icon={<IconGithubLogo size="extra-large" />}
                onClick={() => openLink('https://www.github.com/xxhls')}
              />
            </Space>
          }
        />
      </div>
    </Layout.Header>
  );
};

export default Header;
