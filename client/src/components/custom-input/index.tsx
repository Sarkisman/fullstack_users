import { Form, Input } from 'antd';

type Props = {
  placeholder: string;
  type?: string;
  name: string;
};

export const CustomInput = ({ name, placeholder, type = 'text' }: Props) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: 'обязательное поле' }]}
      shouldUpdate={true}
    >
      <Input placeholder={placeholder} type={type} size="large" autoComplete={type}/>
    </Form.Item>
  );
};
