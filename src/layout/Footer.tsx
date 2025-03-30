import { Layout } from '@douyinfe/semi-ui';

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        color: 'var(--semi-color-text-2)',
        backgroundColor: 'rgba(var(--semi-grey-0), 1)',
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span>Copyright © 2025 XXHLS. All Rights Reserved. </span>
      </span>
    </Layout.Footer>
  );
};

export default Footer;
