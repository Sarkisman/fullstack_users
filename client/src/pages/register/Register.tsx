import { Card, Form, Row, Space, Typography } from 'antd';
import { Layout } from '../../components/layout';
import { CustomInput } from '../../components/custom-input';
import { CustomPasswordInput } from '../../components/custom-password-input';
import { CustomButton } from '../../components/custom-button';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

export default function Register() {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегистрируйтесь" style={{ width: '30rem' }}>
          <Form onFinish={() => null}>
            <CustomInput name="name" placeholder="Имя" />
            <CustomInput type="email" name="email" placeholder="Email" />
            <CustomPasswordInput name="password" placeholder="Пароль" />
            <CustomPasswordInput
              name="confirmPassword"
              placeholder="Повторите пароль"
            />
            <CustomButton type="primary" htmlType="submit">
              Зарегистрироваться
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Уже зарегистрированы? <Link to={Paths.login}>Войдите</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
}
