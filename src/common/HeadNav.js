/**
 * Created by webmxjon 2018/5/25.
 */
import React,{Component} from 'react';
import {Menu,Icon} from 'antd'
import './HeadNav.less'
import {Link} from 'react-router-dom'
export default class HeadNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            current: "home",
        }
    }
    handleClick=(e)=>{
        this.setState({current:e.key});
    }
    render(){
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        <Icon type="global" className="nav-logo" />
                    </div>
                    <div className="nav-list-wrap">
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            onClick={this.handleClick}
                        >
                            <Menu.Item key="home">
                                <Link  to="/">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link  to="/about">关于我</Link>
                            </Menu.Item>
                            <Menu.Item key="article">
                                <Link to="/article">文章分享</Link>
                            </Menu.Item>
                            <Menu.Item key="resource" >
                                <Link to="/resource">资源共享</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }

}