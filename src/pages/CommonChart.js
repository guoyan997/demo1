/**
 * Created by GUOYAN on 2018-8-13.
 */
import React, {Component} from 'react';
import _ from 'lodash'
import echarts from 'echarts'
export const CommonChart = (ComposedComponent) => class extends Component {

    // 设置默认props
    static defaultProps = {
        chartId: _.uniqueId('chart'),
        option: {},
        chartData: []
    }
    const
 chartInstance = undefined
    //当组件的props变化时，调用
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.chartData !== nextProps.chartData) {
            this.renderChart()
        }
    }

    // 当加载完成时，渲染
    componentDidMount() {
        this.renderChart()
    }

    componentWillUnmount() {
        if (this.chartInstance) {
            console.log('=== 释放图表实例 ===')
            this.chartInstance.dispose()
            console.log(this.chartInstance)
        }
    }
    //渲染charts方法
    renderChart() {
        // console.log('=== 渲染图表 ===', _.merge(this.getOption(), this.option))
        try {
            if (!this.props.chartInstance) {
                let chartDom = document.getElementById(this.props.chartId)
                if (chartDom) {
                    /* eslint-disable */
                    this.chartInstance = echarts.init(chartDom),
                    /* eslint-disable */
                    this.chartInstance.setOption(_.merge(this.refs[this.props.chartId].getOption(), this.props.option))
                } else {
                    console.log('=== 获取不到图表dom ===')
                    return false
                }
            } else {
                this.chartInstance.setOption(_.merge(this.refs[this.props.chartId].getOption(), this.option))
            }
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return <ComposedComponent {...this.props} ref={this.props.chartId} />;
    }
}