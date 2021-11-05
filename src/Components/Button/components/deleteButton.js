/*
 * @Author: devfpy
 * @Date: 2020-06-10 11:45:44
 * @LastEditTime: 2021-11-05 15:12:17
 * @Description:
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './textButton';
import '../index.css';

export default class deleteButton extends Component {
    static propTypes = {
        title: PropTypes.string,
        iconName: PropTypes.string,
        onClick: PropTypes.func,
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
                title={this.props.title}
                iconName="nodiot_delete_02"
                onClick={(event) => {
                    this.handleOnClick(event);
                }}
                titleStyle={this.props.titleStyle}
                cName="deleteButton"
                style={this.props.style ? this.props.style : null}
            />
        );
    }
}
