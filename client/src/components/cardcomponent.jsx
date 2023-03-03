import {
  EditOutlined,
  HeartOutlined,
  DeleteFilled,
  HeartFilled,
} from "@ant-design/icons";
import Description from "./description";
import { Card, Modal, Form, Input, Divider } from "antd";
import { useState } from "react";

const { Meta } = Card;
const CardComponent = (props) => {
  const [active, setActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  const [website, setWebsite] = useState(props.website);
  
  const [data,setData] = useState({name:name,mail:email,phone:phone,website:website});


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    name && email && phone && website
      ? setIsModalOpen(false)
      : setIsModalOpen(true);
    setData({name:name,mail:email,phone:phone,website:website})
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const validateMessages = {
    required: "this field is required!",
    types: {
      email: "invalid email",
    },
  };

  const handleHeartClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="card-container">
        <Card
          cover={
            <img
              className="image"
              alt="example"
              src={
                "https://avatars.dicebear.com/v2/avataaars/" +
                props.name +
                ".svg?options[mood][]=happy"
              }
              style={{
                backgroundColor: "#f5f5f5",
                margin: 1,
                borderRadius: 0,
              }}
            />
          }
          actions={[
            active ? (
              <HeartFilled
                onClick={handleHeartClick}
                style={{ color: "red", fontSize: 20 }}
              />
            ) : (
              <HeartOutlined
                key="like"
                onClick={handleHeartClick}
                style={{ color: "red", fontSize: 20 }}
              />
            ),
            <EditOutlined
              key="edit"
              style={{ fontSize: 20 }}
              onClick={showModal}
            />,
            <DeleteFilled
              key="delete"
              style={{ fontSize: 20 }}
              onClick={() => {
                props.onclick(props.id);
              }}
            />,
          ]}
        >
          <Meta
            title={data.name}
            description={
              <Description
                email={data.mail}
                phone={data.phone}
                website={data.website}
              />
            }
          />
        </Card>
        {
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onCancel={handleCancel}
            onOk={handleOk}
          >
          <Divider />
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
              validateMessages={validateMessages}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="email"
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <Input
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="phone"
                name="phone"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  defaultValue={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="website"
                name="website"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  defaultValue={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </Form.Item>
            </Form>
            <Divider />
          </Modal>
        }
      </div>
    </>
  );
};
export default CardComponent;
