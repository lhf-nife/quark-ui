import Tooltip from '../Tooltip';
import { Component } from 'react';


const TooltipDemo = () => {
	const ele = (<div>aaaaaaaaaaa</div>);

	return (
      <div>
        
        <Tooltip  content="lefttip" toolElement={ele} placement="left" />
        <Tooltip  content="righttip" toolElement="righttip" placement="right" />
        <Tooltip  content="toptip" toolElement="toptip" placement="top" />
        <Tooltip content="bottomtip" toolElement="bottomtip" placement = "bottom" />
      </div>
    );

}
export default TooltipDemo;