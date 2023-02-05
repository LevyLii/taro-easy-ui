import {CommonComponent} from '../../modules'
import {View} from '@tarojs/components'
import React from 'react'
import {ContainerProps} from '../../../types/container'
import {ContainerTypes} from '../../modules/types'
import {fitUnit} from '../../utils'

export default class Container extends CommonComponent {
  props: ContainerProps

  constructor(props: ContainerProps) {
    super(props, ContainerTypes)
    if (props.children) {
      this.state = {
        children: [].concat.call(props.children),
        ...this.state
      }
    }
  }

  componentWillReceiveProps(nextProps: Readonly<{ children }>) {
    this.setState({
      children: nextProps.children ? [].concat.call(nextProps.children).filter(e => !!e) : []
    })
  }

  render() {
    let {
      types,
      children
    } = this.state
    let {
      space
    } = this.props
    return (
      <View
        className={'teu-container'}
        style={{...types}}
        onClick={(e) => {
          super.onClick(e)
        }}
      >
        {
          children && children.map((res, index) => {
            return (
              <View key={index}>
                {index > 0 && space && res && <View style={{height: fitUnit(space)}} />}
                {res}
              </View>
            )
          })
        }
      </View>
    )
  }
}
