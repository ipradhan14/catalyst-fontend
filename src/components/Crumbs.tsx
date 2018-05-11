import { Breadcrumb, Layout } from "antd";
import * as React from "react";

const { Content } = Layout;

const contentStyle = {
  height: '2vh',
  paddingLeft: '.4vw',
  paddingTop: '.6vh',
  width: '100vw'
}

interface ICrumbProps {
  view: string;
}

const Crumbs = (props: ICrumbProps) => (
  <Content style={contentStyle}>
    <Breadcrumb>
      <Breadcrumb.Item>Explore</Breadcrumb.Item>
      <Breadcrumb.Item><a href="">Wikipedia</a></Breadcrumb.Item>
      <Breadcrumb.Item><a href="">{props.view}</a></Breadcrumb.Item>
    </Breadcrumb>
  </Content>
)

export default Crumbs;