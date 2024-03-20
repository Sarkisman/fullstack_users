import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Space, Typography } from 'antd';
import styles from './index.module.css';
import { CustomButton } from '../custom-button/index';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <CustomButton type="text">
            <Typography.Title level={1} style={{ color: 'white' }}>
              Сотрудники
            </Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.register}>
          <CustomButton
            type="text"
            icon={<UserOutlined />}
            style={{ color: 'white' }}
          >
            Зарегистрировать
          </CustomButton>
        </Link>
        <Link to={Paths.login}>
          <CustomButton
            type="text"
            icon={<LoginOutlined />}
            style={{ color: 'white' }}
          >
            Войти
          </CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};
