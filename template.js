/**
 * pages模版快速生成脚本,执行命令 npm run tep `文件名`
 */

const fs = require('fs');

const dirName = process.argv[2];
// 生成组件类型
const isCom = process.argv[3] ? true : false;

if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run tpl test [-- com(组件类型模版)]');
  process.exit(0);
}

if (!isCom) {
  //@ts-nocheck
  // index jsx 文件模版
  const indexTep = `import React, { FC, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { View,Text } from '@tarojs/components';
import { DvaProps } from "../../../@types/dva";
import { CommonProps } from '../../../@types/common';

import './index.scss';

interface ModelProps extends DvaProps, CommonProps {
}
type IProps = ModelProps
  
const ${titleCase(dirName)}: FC<IProps> = (props) => {
    const flag = useSelector(state => state.common.flag);
    //loading.effects['common/ping'])
    const loading = useSelector(state => state.loading);
    // dispatch({type: 'common/ping',payload: {}});
    const dispatch = useDispatch();
  
    return (
        <View className='${dirName}-page'>
            <View><Text>common flag:{flag}</Text></View>
            <View><Text>Hello loading {(loading && loading.effects['common/ping']) ? 'doing' : 'did'} </Text></View>
        </View>
    );
}
export default ${titleCase(dirName)};
`;
  // config文件模版
  const configTep = `export default {
  navigationBarTitleText: '${dirName}'
}
`;

  // scss文件模版
  const scssTep = `@import "../../styles/base";

.${dirName}-page {
  @include wh(100%, 100%);
}
`;
  fs.mkdirSync(`./src/pages/${dirName}`); // mkdir $1
  process.chdir(`./src/pages/${dirName}`); // cd $1

  fs.writeFileSync('index.tsx', indexTep);
  fs.writeFileSync('index.config.ts', configTep);
  fs.writeFileSync('index.scss', scssTep);

  console.log(`模版${dirName}已创建,请手动增加models(若使用)`);

  process.exit(0);
}
// 页面模版
const indexTep = `import Taro, { getCurrentPages } from '@tarojs/taro'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'

import { DvaProps } from "../../../@types/dva";
import { CommonProps } from '../../../@types/common';

import './index.scss'

interface ModelProps extends DvaProps, CommonProps {
}
type IProps = ModelProps
type IStates = {
  // 通常用做临时变量 和 model中的state不同
}

@connect((common, {${dirName}, loading}) => ({
  ...common,
  ...${dirName},
  loading
}))
export default class ${titleCase(dirName)} extends Component<IProps,IStates> {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount = () => {
  };

  render() {
    return (
      <View className='${dirName}-page'>
        ${dirName}
      </View>
    )
  }
}
`;

// scss文件模版
const scssTep = `@import "../../styles/base";

.${dirName}-page {
  @include wh(100%, 100%);
}
`;

// model文件模版
const modelTep = `import * as api from './service';
//
// 请手动将此model 添加到 models/index中
//
export default {
  namespace: '${dirName}',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(api.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
`;


// service页面模版
const serviceTep = `import Request from '../../utils/request';

export const demo = data => Request({
  url: 'api/demo',
  method: 'POST',
  data,
});
`;

// config文件模版
const configTep = `export default {
  navigationBarTitleText: '${dirName}'
}
`;


fs.mkdirSync(`./src/pages/${dirName}`); // mkdir $1
process.chdir(`./src/pages/${dirName}`); // cd $1

fs.writeFileSync('index.tsx', indexTep);
fs.writeFileSync('index.config.ts', configTep);
fs.writeFileSync('index.scss', scssTep);
fs.writeFileSync('model.ts', modelTep);
fs.writeFileSync('service.ts', serviceTep);

console.log(`模版${dirName}已创建,请手动增加models`);

function titleCase (str) {
  const array = str.toLowerCase().split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  const string = array.join(' ');
  return string;
}

process.exit(0);
