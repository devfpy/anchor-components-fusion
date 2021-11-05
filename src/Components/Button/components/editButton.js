/*
 * @Author: devfpy
 * @Date: 2020-06-10 11:45:44
 * @LastEditTime: 2021-08-10 08:46:25
 * @Description:
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './textButton';

export default class editButton extends Component {
    static propTypes = {
        title: PropTypes.string,
        iconName: PropTypes.string,
        onClick: PropTypes.func
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
                title={this.props.title}
                iconName="nodiot_edit_06"
                onClick={(event) => {
                    this.handleOnClick(event);
                }}
                cName="editButton"
                style={this.props.style ? this.props.style : null}
            />
        );
    }
}
