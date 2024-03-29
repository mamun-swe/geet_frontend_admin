import React, { useState } from 'react';
import '../style.scss';
import { Icon } from 'react-icons-kit';
import { Switch, Route } from 'react-router-dom';
import { ic_close, ic_dehaze } from 'react-icons-kit/md';

import SideMenu from '../Components/SideMenu';
import DashboardIndex from './Dashboard/Index';
import CategoryIndex from './Category/Index';
import CategoryCreate from './Category/Create';
import CategoryEdit from './Category/Edit';
import AlbumIndex from './Album/Index';
import AlbumCreate from './Album/Create';
import SingerIndex from './Singer/Index';
import SingerCreate from './Singer/Create';
import SongsIndex from './Song/Index';
import SongCreate from './Song/Create';
import UsersIndex from './Users/Index';

import Logo from '../assets/static/logo.png';

const Master = () => {
    const [show, setShow] = useState(false);

    const openMenu = () => {
        setShow(true)
    }

    const hideMenu = () => {
        setShow(false)
    }

    return (
        <div className="master">
            <div className="menu">
                {/* Top Bar for Mobile */}
                <div className="top-bar shadow-sm d-lg-none">
                    <div className="d-flex">
                        <div>
                            <img src={Logo} alt="..." />
                        </div>
                        <div className="ml-auto">
                            {show ? (
                                <button
                                    type="button"
                                    className="btn btn-light rounded-circle shadow-none"
                                    onClick={hideMenu}
                                >
                                    <Icon icon={ic_close} size={23} />
                                </button>
                            ) :
                                <button
                                    type="button"
                                    className="btn btn-light rounded-circle shadow-none"
                                    onClick={openMenu}
                                >
                                    <Icon icon={ic_dehaze} size={23} />
                                </button>
                            }
                        </div>
                    </div>
                </div>

                {/* Side Menu */}
                <SideMenu show={show} />
            </div>

            {/* Main */}
            <div className="main">
                <Switch>
                    <Route exact path="/admin/" component={DashboardIndex} />
                    <Route exact path="/admin/category" component={CategoryIndex} />
                    <Route exact path="/admin/category/create" component={CategoryCreate} />
                    <Route exact path="/admin/category/:id/edit" component={CategoryEdit} />
                    <Route exact path="/admin/album" component={AlbumIndex} />
                    <Route exact path="/admin/album/create" component={AlbumCreate} />
                    <Route exact path="/admin/singer" component={SingerIndex} />
                    <Route exact path="/admin/singer/create" component={SingerCreate} />
                    <Route exact path="/admin/songs" component={SongsIndex} />
                    <Route exact path="/admin/songs/create" component={SongCreate} />
                    <Route exact path="/admin/users" component={UsersIndex} />
                    <Route path="*">
                        <h1 className="text-center mt-5"><b>404 Page not found</b></h1>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Master;