import { Component } from 'react';
import InputNumber from '../InputNumber';

export default class InputNumberDemo extends Component {
  onChange = (value) => {
    console.log('changed', value);
  }

  render() {
    return (
      <div className="markdown-block">
        <h3>基本</h3>
        <p>数字输入框</p>
        <InputNumber style={{ width: 200 }} min={1} max={10} defaultValue={3} onChange={this.onChange} />
        <h3>禁用</h3>
        <p>数字输入框禁用</p>
        <InputNumber min={1} max={10} disabled defaultValue={3} />
        <h3>小数</h3>
        <p>和原生的数字输入框一样，鼠标离开输入框时自动取值。目前设定小数位两位。</p>
        <InputNumber min={0} max={10} defaultValue={3} step={1.00} onChange={this.onChange} />
        <h3>大小</h3>
        <p>三种大小的数字输入框。</p>
        <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={this.onChange} />
        <br /><br />
        <InputNumber min={1} max={100000} defaultValue={3} onChange={this.onChange} />
        <br /><br />
        <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={this.onChange} />
        <h3>格式化展示</h3>
        <p>展示具有具体含义的数据</p>
        <InputNumber
          formatter={value => `$ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={this.onChange}
        />
        <br /><br />
        <InputNumber
          defaultValue={1000}
          formatter={value => `¥ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          parser={value => value.replace(/\¥\s?|(,*)/g, '')}
          onChange={this.onChange}
        />
        <br /><br />
        <InputNumber
          defaultValue={1}
          min={0}
          max={10}
          formatter={value => `${value} m`}
          parser={value => value.replace(/[^\d]/g, '')}
          onChange={this.onChange}
        />
        <br /><br />
        <InputNumber
          defaultValue={1}
          min={0}
          max={10}
          formatter={value => `${value} ㎡`}
          parser={value => value.replace(/[^\d]/g, '')}
          onChange={this.onChange}
        />
        <br /><br />
        <InputNumber
          defaultValue={1}
          min={0}
          max={10}
          formatter={value => `${value} t`}
          parser={value => value.replace(/[^\d]/g, '')}
          onChange={this.onChange}
        />
        <br /><br />
        <InputNumber
          defaultValue={1}
          min={0}
          max={10}
          formatter={value => `${value} L`}
          parser={value => value.replace(/[^\d]/g, '')}
          onChange={this.onChange}
        />
        <br /><br />
        <InputNumber
          defaultValue={1}
          min={0}
          max={10}
          formatter={value => `${value} min`}
          parser={value => value.replace(/[^\d]/g, '')}
          onChange={this.onChange}
        />
        <br /><br />
        <InputNumber
          defaultValue={1}
          min={0}
          max={1000}
          formatter={value => `${value} m³`}
          parser={value => value.replace(/[^\d]/g, '')}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
