import React, { Component } from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import Category from '../../../Category/Category.jsx';

class NavBar extends Component {
    renderSubMenu = ({ key, title, subs }) => {
        return (
            <Menu.SubMenu key={key} title={<span>{title}</span>}>
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
            <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                {menus.map((item) => {
                    return item.subs && item.subs.length > 0
                        ? this.renderSubMenu(item)
                        : this.renderMenuItem(item);
                })}
            </Menu>
        );
        return (
            <Router>
                <div className='navBar'>
                    <div className='menu'>
                        <Dropdown overlay={menu} style={{ fontSize: '15px' }}>
                            <a className='ant-dropdown-link' href='#'>
                                Category
                            </a>
                        </Dropdown>
                    </div>
                    <Switch>
                        <Route
                            path='/category/cat'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/cat/food'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/cat/food/dry_food'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/cat/food/wet_food'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/cat/toy'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/cat/bed'
                            exact
                            component={Category}
                        />

                        <Route
                            path='/category/dog'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/dog/food'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/dog/food/dry_food'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/dog/food/wet_food'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/dog/toy'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/dog/bed'
                            exact
                            component={Category}
                        />

                        <Route
                            path='/category/small_pet'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/small_pet/food'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/small_pet/toy'
                            exact
                            component={Category}
                        />
                        <Route
                            path='/category/small_pet/bed'
                            exact
                            component={Category}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default NavBar;
