import React from 'react';
import "antd/dist/antd.css";
// import { Link } from "react-router-dom";
import { Icon, Card, Tabs } from 'antd';

const { Meta } = Card;
const TabPane = Tabs.TabPane;

const MenuContainer = () => {
    return (
        <Tabs defaultActiveKey="2">
            <TabPane
                tab={
                    <span>
                        <Icon type="apple" />
                        Dinner
              </span>
                }
                key="1"

            >
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>

            </TabPane>
            <TabPane
                tab={
                    <span>
                        <Icon type="android" />
                        Breakfast
              </span>
                }
                key="2"
            >
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </TabPane>
        </Tabs>
    )

}

export default MenuContainer;


