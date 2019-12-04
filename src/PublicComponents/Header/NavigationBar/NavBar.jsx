import React, { Component } from 'react';
import './NavBar.css';
import { BrowserRouter as Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';

class NavBar extends Component {
    renderSubMenu = ({ key, title, subs }) => {
        return (
            <Menu.SubMenu key={key} title={<Link to={key}>{title}</Link>}>
                {subs &&
                    subs.map((item) => {
                        return item.subs && item.subs.length > 0
                            ? this.renderSubMenu(item)
                            : this.renderMenuItem(item);
                    })}
            </Menu.SubMenu>
        );
    };
    renderMenuItem = ({ key, title }) => {
        return (
            <Menu.Item key={key}>
                <Link to={key}>
                    <span>{title}</span>
                </Link>
            </Menu.Item>
        );
    };

    render() {
        const menus = [
            {
                title: 'Cat',
                key: '/category/cat',
                subs: [
                    {
                        title: 'Cat Food',
                        key: '/category/cat/food',
                        subs: [
                            {
                                title: 'Dry Food',
                                key: '/category/cat/food/dry_food'
                            },
                            {
                                title: 'Wet Food',
                                key: '/category/cat/food/wet_food'
                            }
                        ]
                    },
                    {
                        title: 'Cat Toys',
                        key: '/category/cat/toy'
                    },
                    {
                        title: 'Cat Beds',
                        key: '/category/cat/bed'
                    }
                ]
            },
            {
                title: 'Dog',
                key: '/category/dog',
                subs: [
                    {
                        title: 'Dog Food',
                        key: '/category/dog/food',
                        subs: [
                            {
                                title: 'Dry Food',
                                key: '/category/dog/food/dry_food'
                            },
                            {
                                title: 'Wet Food',
                                key: '/category/dog/food/wet_food'
                            }
                        ]
                    },
                    {
                        title: 'Dog Toys',
                        key: '/category/dog/toy'
                    },
                    {
                        title: 'Dog Beds',
                        key: '/category/dog/bed'
                    }
                ]
            },
            {
                title: 'Small Pet',
                key: '/category/small_pet',
                subs: [
                    {
                        title: 'Small Pet Food',
                        key: '/category/small_pet/food'
                    },
                    {
                        title: 'Small Pet Toys',
                        key: '/category/small_pet/toy'
                    },
                    {
                        title: 'Small Pet Beds',
                        key: '/category/small_pet/bed'
                    }
                ]
            }
        ];
        const menu = (
            <Menu>
                {menus.map((item) => {
                    return item.subs && item.subs.length > 0
                        ? this.renderSubMenu(item)
                        : this.renderMenuItem(item);
                })}
            </Menu>
        );
        return (
            <div className='navBar'>
                <div className='menu'>
                    <Dropdown overlay={menu} style={{ fontSize: '15px' }}>
                        <a className='ant-dropdown-link' href='/'>
                            Category
                        </a>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default NavBar;
