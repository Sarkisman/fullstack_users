import { Button, Form } from 'antd';

type Props = {
  children: React.ReactNode;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  type?: 'link' | 'text' | 'default' | 'primary' | 'dashed';
  danger?: boolean;
  loading?:
    | boolean
    | {
        delay?: number;
      };
  shape?: 'default' | 'circle' | 'round';
  icon?: React.ReactNode;
  style?: React.CSSProperties | undefined;
};

export const CustomButton = ({
  children,
  htmlType = 'button',
  onClick,
  type,
  danger,
  loading,
  shape,
  icon,
  style,
}: Props) => {
  return (
    <Form.Item>
      <Button
        type={type}
        htmlType={htmlType}
        onClick={onClick}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        style={style}
      >
        {children}
      </Button>
    </Form.Item>
  );
};
