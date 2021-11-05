/*
 * @Author: devfpy
 * @Date: 2020-06-10 11:45:44
 * @LastEditTime: 2021-08-10 08:46:09
 * @Description:
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './textButton';

export default class commonTwoToneButton extends Component {
    static propTypes = {
        title: PropTypes.string,
        titleColor: PropTypes.string,
        iconName: PropTypes.string,
        iconColor: PropTypes.string,
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
                iconName={this.props.iconName}
                onClick={(event) => {
                    this.handleOnClick(event);
                }}
                cName="editButton"
                titleColor={this.props.titleColor}
                iconColor={this.props.iconColor}
                style={{ ...this.props.style }}
            />
        );
    }
}
