/*
 * @Author: devfpy
 * @Date: 2020-06-10 11:45:44
 * @LastEditTime: 2021-11-05 15:12:24
 * @Description:
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@alifd/next';
import '../index.css';

export default class textButton extends Component {
    static propTypes = {
        title: PropTypes.string,
        iconName: PropTypes.string,
        onClick: PropTypes.func,
        cName: PropTypes.string,
        titleStyle: PropTypes.object,
        style: PropTypes.object
    };

    static defaultProps = {
        title: 'Button'
    };

    handleOnClick = (e) => {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    };

    render() {
        return (
            <Button
                text
                onClick={(event) => {
                    // event.stopPropagation();
                    this.handleOnClick(event);
                }}
                className={'baseButton ' + this.props.cName}
                iconSize="small"
                style={this.props.style ? this.props.style : null}
            >
                {this.props.iconName ? (
                    <Icon type={this.props.iconName} className="btnIcon" />
                ) : null}
                <span
                    className="btnTitle"
                    style={this.props.titleStyle ? this.props.titleStyle : null}
                >
                    {this.props.title}
                </span>
            </Button>
        );
    }
}
