import Taro, { getCurrentPages } from '@tarojs/taro'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'

import { DvaProps } from "../../../@types/dva";
import { CommonProps } from '../../../@types/common';

import './index.scss'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

interface ModelProps extends DvaProps, CommonProps {
  iflag?: number,
}
type IProps = ModelProps

interface IStates {
  // 通常用做状态变量 和 model中的state不同
  count: number,
}

@connect(({ common, index, loading }) => ({
  ...common,
  ...index,
  loading
}))
class Index extends Component<IProps, IStates>{
  constructor(props: IProps) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  /**
   * count 加 1
   * @param e 
   */
  onClickAdd = (e: any) => {
    const { count } = this.state
    this.setState({ count: count + 1 })
    this.props.dispatch({
      type: 'index/test',
      payload: {}
    });
  }

  onClickDec = (e: any) => {
    const { count } = this.state
    this.setState({ count: count - 1 })
    this.props.dispatch({
      type: 'index/test',
      payload: {}
    });
  }

  render() {
    const { iflag, loading } = this.props
    const { count } = this.state
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.onClickAdd}>+</Button>
        <Button className='dec_btn' onClick={this.onClickDec}>-</Button>
        <View><Text>count:{count} iflag:{iflag}</Text></View>
        <View><Text>Hello, World index loading {(loading && loading.effects['index/test']) ? 'doing' : 'did'}</Text></View>
        <Button className='dec_btn' onClick={
          () => {
            Taro.navigateTo({ url: '/pages/pop/index' })
          }
        }
        >跳转</Button>
      </View>
    )
  }
}

export default Index

