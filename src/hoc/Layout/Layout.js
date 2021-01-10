import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SiteDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    };

    siteDrawToogleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <Aux>
            <Toolbar drawToogleClicked={this.siteDrawToogleHandler}></Toolbar>
            <SideDrawer 
            closed={this.sideDrawerCloseHandler}
            open={this.state.showSideDrawer}></SideDrawer>
            <main className={classes.Content}>{this.props.children}</main>
        </Aux>
        )
    }
}

export default Layout;