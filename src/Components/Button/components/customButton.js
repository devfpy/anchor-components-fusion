/*
 * @Author: FisherX
 * @Date: 2020-06-16 18:18:07
 * @LastEditTime: 2021-08-10 08:46:19
 * @Description:
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@alifd/next';

/**
 *
 * @param {*} buttonColor 按钮颜色
 * @param {*} onClick 点击事件
 * @param {*} title 文字
 * @param {*}className 样式
 * @export
 * @class CustomButton
 * @extends {Component}
 *
 */
export default class CustomButton extends Component {
    static propTypes = {
        title: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func,
        loading: PropTypes.bool,
        buttonColor: PropTypes.string
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
            <span className="buttonFatherBtn">
                <Button
                    type="primary"
                    loading={this.props.loading ? this.props.loading : false}
                    className={`${this.props.className ? this.props.className : ''} ${
                        this.props.buttonColor
                    }`}
                    onClick={(event) => {
                        this.handleOnClick(event);
                    }}
                >
                    {this.props.title}
                </Button>
            </span>
        );
    }
}
