import React from "react";
import { useParams } from "react-router";
import "./AccountBookDetail.scss";
import IconArrowRight from "../../../../images/arrow-right.svg";
import IconArrowDown from "../../../../images/arrow-down.svg";

import * as echarts from 'echarts/core';
import {
  BarChart,
  LineChart
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { SVGRenderer} from 'echarts/renderers';
import type {
  BarSeriesOption, 
  LineSeriesOption
} from 'echarts/charts';
import type {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption
} from 'echarts/components';
import type { 
  ComposeOption, 
} from 'echarts/core';
import { useEffect, useRef, useState } from 'react';

type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent, BarChart, LineChart, LabelLayout, UniversalTransition, SVGRenderer]
);

const AccountBookDetail: React.FC = () => {

    // 获取路由参数
    const { id, title } = useParams<{id:string, title:string}>();
    
    const chartRef = useRef<HTMLDivElement>(null);
    const [chart, setChart] = useState<echarts.ECharts>();

    useEffect(() => {
        if (!chartRef.current) return;
        if (chart) {
            chart.resize();
            return;
        }
        const chartInstance = echarts.init(chartRef.current);
        setChart(chartInstance);
        window.addEventListener('resize', () => chartInstance.resize());
    }, [chart]);
    
    useEffect(() => {
        if (!chart) return;
        const option: ECOption = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                axisTick: {
                    show: true,
                    inside: true,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#999',
                        width: 2
                    }
                },
              },
            yAxis: {
                show: false,
                type: 'value',
                boundaryGap: [0, '80%'],
            },
            series: [
                {
                    data: [820, 932, 1320,1290,1330],
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 2,
                    itemStyle: {
                        color: '#ffbebe'
                    },
                    lineStyle: {
                        color: '#ffbebe',
                        width: 3
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            1,
                            1,
                            [
                              {
                                offset: 0,
                                color: "#ffbebe20",
                              },
                              {
                                offset: 1,
                                color: "#fff",
                              },
                            ],
                            false
                          ),
                    }

                }
            ],
            grid: {
                left: '0%',
                right: '0%',
                bottom: '18%',
                top: '10%',
                // containLabel: true
            },
            tooltip: {
                trigger: 'axis',          
                // align: 'left',
                showDelay: 20,            
                hideDelay: 100,         
                transitionDuration : 0.4,      
                backgroundColor: 'rgba(0,0,0,0.5)',  
                borderColor: '#999',              
                borderRadius: 4,                
                borderWidth: 0,                
                padding: 5,                             
                axisPointer : {         
                    type : 'line',      
                    lineStyle : {
                        color: '#ffbebe',
                        width: 3,
                        type: 'solid'
                    },
                    // shadowStyle : {     
                    //     width: 'auto',
                    //     color: '#f5a5a540' 
                    // }
                },
                textStyle: {
                    color: '#fff'
                }
            },
        };
        chart.setOption(option);
    }, [chart]);


    return (
        <div className="AccountBookDetail">
            <div className="detail-title">
                <span>{title}<img alt="" src={IconArrowDown}></img></span>
            </div>
            <div className="detail-main">
                <div className="detail-header">
                    {/* <div className="detail-total"></div> */}
                    <div className="detail-chart" ref={chartRef}></div>
                </div>
                <div className="detail-content">
                    <div className="out">
                        <div>
                            <span>今日支出</span>
                            <span>全部<img src={IconArrowRight} alt="" /></span>
                        </div>
                        <ul>
                            <li>
                                <div className="left">早饭</div>
                                <div className="right">
                                    <span className="paymethod alipay">支付宝</span>
                                    -50
                                </div>
                            </li>
                            <li>
                                <div className="left">早饭</div>
                                <div className="right">
                                    <span className="paymethod alipay">支付宝</span>
                                    -50
                                </div>
                            </li>
                            <li>
                                <div className="left">早饭</div>
                                <div className="right">
                                    <span className="paymethod cash">现金</span>
                                    -500
                                </div>
                            </li>
                            <li>
                                <div className="left">早饭</div>
                                <div className="right">
                                    <span className="paymethod wxpay">微信</span>
                                    -50
                                </div>
                            </li>
                            {/* <li>
                                <div className="left">早饭</div>
                                <div className="right">
                                    <span className="paymethod card">刷卡</span>
                                    -50
                                </div>
                            </li> */}
                        </ul>
                    </div>
                    <div className="in">
                    <div>
                        <span>今日收入</span>
                        <span>全部<img src={IconArrowRight} alt="" /></span>
                    </div>
                    <ul>
                        <li>
                            <div className="left">早饭</div>
                            <div className="right">
                                <span className="incometype">支付宝</span>
                                -50
                            </div>
                        </li>
                        <li>
                            <div className="left">早饭</div>
                            <div className="right">
                                <span className="incometype">现金</span>
                                -500
                            </div>
                        </li>
                        {/* <li>
                            <div className="left">早饭</div>
                            <div className="right">
                                <span className="paymethod card">刷卡</span>
                                -50
                            </div>
                        </li> */}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountBookDetail;