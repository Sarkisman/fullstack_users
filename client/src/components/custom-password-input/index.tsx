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
      rules={[
        {
          required: true,
          message: 'Обязательное поле',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value === value) {
              return Promise.resolve();
            }

            if (name === 'confirmPassword') {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Пароли должны совпадать'));
            } else {
              if (value.length < 6) {
                return Promise.reject(
                  new Error('Пароли должен быть длиннее 6-ти символов')
                );
              }
              return Promise.resolve();
            }
          },
        }),
      ]}
      dependencies={dependencies}
      hasFeedback
    >
      <Input.Password
        placeholder={placeholder}
        size="large"
        autoComplete={name}
      />
    </Form.Item>
  );
};
