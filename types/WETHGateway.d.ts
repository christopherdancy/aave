/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface WETHGatewayInterface extends ethers.utils.Interface {
  functions: {
    "authorizeLendingPool(address)": FunctionFragment;
    "borrowETH(address,uint256,uint256,uint16)": FunctionFragment;
    "depositETH(address,address,uint16)": FunctionFragment;
    "emergencyEtherTransfer(address,uint256)": FunctionFragment;
    "emergencyTokenTransfer(address,address,uint256)": FunctionFragment;
    "getWETHAddress()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "repayETH(address,uint256,uint256,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawETH(address,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "authorizeLendingPool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowETH",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositETH",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyEtherTransfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyTokenTransfer",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWETHAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repayETH",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETH",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "authorizeLendingPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrowETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyEtherTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyTokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWETHAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repayETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class WETHGateway extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: WETHGatewayInterface;

  functions: {
    authorizeLendingPool(
      lendingPool: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "authorizeLendingPool(address)"(
      lendingPool: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    borrowETH(
      lendingPool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "borrowETH(address,uint256,uint256,uint16)"(
      lendingPool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    depositETH(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "depositETH(address,address,uint16)"(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    emergencyEtherTransfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "emergencyEtherTransfer(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    emergencyTokenTransfer(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "emergencyTokenTransfer(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getWETHAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getWETHAddress()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    repayETH(
      lendingPool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "repayETH(address,uint256,uint256,address)"(
      lendingPool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawETH(
      lendingPool: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawETH(address,uint256,address)"(
      lendingPool: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  authorizeLendingPool(
    lendingPool: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "authorizeLendingPool(address)"(
    lendingPool: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  borrowETH(
    lendingPool: string,
    amount: BigNumberish,
    interesRateMode: BigNumberish,
    referralCode: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "borrowETH(address,uint256,uint256,uint16)"(
    lendingPool: string,
    amount: BigNumberish,
    interesRateMode: BigNumberish,
    referralCode: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  depositETH(
    lendingPool: string,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "depositETH(address,address,uint16)"(
    lendingPool: string,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  emergencyEtherTransfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "emergencyEtherTransfer(address,uint256)"(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  emergencyTokenTransfer(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "emergencyTokenTransfer(address,address,uint256)"(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getWETHAddress(overrides?: CallOverrides): Promise<string>;

  "getWETHAddress()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  repayETH(
    lendingPool: string,
    amount: BigNumberish,
    rateMode: BigNumberish,
    onBehalfOf: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "repayETH(address,uint256,uint256,address)"(
    lendingPool: string,
    amount: BigNumberish,
    rateMode: BigNumberish,
    onBehalfOf: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawETH(
    lendingPool: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawETH(address,uint256,address)"(
    lendingPool: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    authorizeLendingPool(
      lendingPool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "authorizeLendingPool(address)"(
      lendingPool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    borrowETH(
      lendingPool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "borrowETH(address,uint256,uint256,uint16)"(
      lendingPool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositETH(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositETH(address,address,uint16)"(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyEtherTransfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "emergencyEtherTransfer(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyTokenTransfer(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "emergencyTokenTransfer(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getWETHAddress(overrides?: CallOverrides): Promise<string>;

    "getWETHAddress()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    repayETH(
      lendingPool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "repayETH(address,uint256,uint256,address)"(
      lendingPool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawETH(
      lendingPool: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawETH(address,uint256,address)"(
      lendingPool: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    authorizeLendingPool(
      lendingPool: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "authorizeLendingPool(address)"(
      lendingPool: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    borrowETH(
      lendingPool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "borrowETH(address,uint256,uint256,uint16)"(
      lendingPool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    depositETH(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "depositETH(address,address,uint16)"(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    emergencyEtherTransfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "emergencyEtherTransfer(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    emergencyTokenTransfer(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "emergencyTokenTransfer(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getWETHAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "getWETHAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    repayETH(
      lendingPool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "repayETH(address,uint256,uint256,address)"(
      lendingPool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawETH(
      lendingPool: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawETH(address,uint256,address)"(
      lendingPool: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authorizeLendingPool(
      lendingPool: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "authorizeLendingPool(address)"(
      lendingPool: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    borrowETH(
      lendingPool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "borrowETH(address,uint256,uint256,uint16)"(
      lendingPool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    depositETH(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "depositETH(address,address,uint16)"(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    emergencyEtherTransfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "emergencyEtherTransfer(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    emergencyTokenTransfer(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "emergencyTokenTransfer(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getWETHAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getWETHAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    repayETH(
      lendingPool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "repayETH(address,uint256,uint256,address)"(
      lendingPool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawETH(
      lendingPool: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawETH(address,uint256,address)"(
      lendingPool: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
