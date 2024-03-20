import { Form, Input } from 'antd';
import { NamePath } from 'antd/es/form/interface';

type Props = {
  name: string;
  placeholder: string;
  dependencies?: NamePath[];
};

export const CustomPasswordInput = ({
  name,
  placeholder,
  dependencies,
}: Props) => {
  return (
    <Form.Item
      name={name}
      // rules={[{ required: true, message: 'Обязательное поле' }, ({getFieldValue})=>{
      //   getFieldValue
      // }]}
      dependencies={dependencies}
      hasFeedback
    >
      <Input.Password placeholder={placeholder} size="large" />
    </Form.Item>
  );
};
