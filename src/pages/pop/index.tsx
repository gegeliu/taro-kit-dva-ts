import React, { FC, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { DvaProps } from "../../../@types/dva";
import { CommonProps } from '../../../@types/common';

import './index.scss'

interface ModelProps extends DvaProps, CommonProps {
}
type IProps = ModelProps

/**
 * 
 * @param props 
 */
const Pop: FC<IProps> = (props) => {
    const flag = useSelector(state => state.common.flag);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    const [count, setCount] = useState(0)
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        console.log("Pop useEffect init dispatch")
        //be equal to componentWillUnmount() on
        return () => {
            console.log("Pop useEffect return")
        }
    }, []);

    const onClickAdd = (e: any) => {
        setCount(count + 1)
        dispatch({
            type: 'common/ping',
            payload: {}
        });
    }
    const onClickDec = (e: any) => {
        setCount(count - 1)
        dispatch({
            type: 'common/ping',
            payload: {}
        });
    }
    console.log('pop incoming prop ', props)
    console.log('pop incoming loading ', loading)
    return (
        <View className='pop'>
            <Button className='add_btn' onClick={onClickAdd}>
                +
            </Button>
            <Button className='dec_btn' onClick={onClickDec}>
                -
            </Button>
            <View><Text>count:{count} common flag:{flag}</Text></View>
            <View><Text>Hello, World PoP loading {(loading && loading.effects['common/ping']) ? 'doing' : 'did'} </Text></View>
        </View>
    );
}

//
// 建议使用 useSelector 替换connect 函数组件connect 具体参见
// react-redux "^7.1.0"
// https://react-redux.js.org/api/hooks
// export default Pop
//
export default Pop;
/*
// 旧的模式用来一次影射所有属性
export default connect(({ common, loading }: { common: CommonProps, loading: DvaProps }) => ({
    ...common,
    // or to loading = loading.effect['common/ping']
    loading
}))(Pop);
*/