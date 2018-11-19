import { Input,Button } from 'antd';
import React,{ Component } from 'react';
import {Prajna} from "@venaprotocol/jsdk";
import web3 from "../web3.js";
import * as BigNumber from "bignumber.js";
import * as promisify from "tiny-promisify";

const Search = Input.Search;
const prajna = new Prajna(web3);

class WETH extends Component{

	constructor(props){
		super(props);
		this.state = {
          approve_address:"",
          des_address:"",
          src_address:"",
          weth_balance:"",			
		}
	}
    /*
        目前存在的缺陷 1.不能实时获取余额，要手动调函数才可以[转账、转换的时候余额不会刷新，更换账号余额也不会更新]
          @jacky -18.11.15        
    */
    onWrap = async () => {
        let address = await promisify(web3.eth.getAccounts)();
        await prajna.weth.deposit(address[0], 1000000000000000);
        await this.onBalanceOf(); 
    }

    onWithDraw = async() => {
        let address = await promisify(web3.eth.getAccounts)();
        prajna.weth.withdraw(address[0],1000000000);
        await this.onBalanceOf();
    }

    onApprove = async() => {
        let guy_address = await this.state.approve_address;
        let src_address = await promisify(web3.eth.getAccounts)();
        prajna.weth.approve(src_address,guy_address[0],100000000);
        await this.onBalanceOf();
    }

    onTransfer = async() => {
        let src_address = await promisify(web3.eth.getAccounts)();
        let des_address = await this.state.des_address;
        prajna.weth.transfer(src_address[0],des_address,1000000000000000);
        await this.onBalanceOf();
    }

    onBalanceOf = async() => {
        //let address = await web3.eth.accounts[0];
        let address = await promisify(web3.eth.getAccounts)();
        let balance = await prajna.weth.balanceOf(address[0]).then(res=>res.toString(10));
        if (balance != null){
          this.setState({weth_balance:balance});
        } 
    }

    handleAdressSetting(str,address){
      this.setState({
        [str] : address,
      })
      if (str == "approve_address"){
        this.onApprove();
      }
      else if(str == "des_address"){
        this.onTransfer();
      }
    }

    render() {
    	return (
    		<div>
                <Button type="primary" onClick={this.onBalanceOf}>Click Button to refresh your balance</Button>
                <p style={{color:"red"}}> your accounts WETH balance: {this.state.weth_balance} </p>
           		<p> onclick to wrap your eth </p>
	            <Button onClick={this.onWrap}>wrap some eth</Button>
				<p> onclick to withdraw weth </p>
				<Button type="default" onClick={this.onWithDraw}> Withdraw</Button>
				<p> approve your order to destination address </p>
				<Search enterButton = "Set Approve Address" onSearch={this.handleAdressSetting.bind(this,'approve_address')} style={{width:600}} />
				<p> transfer your weth to destination address </p>
				<Search enterButton = "Set Transfer Address" onSearch={this.handleAdressSetting.bind(this,'des_address')} style={{width:600}} />    
    		</div>
    	);
    }
}

export default WETH;

