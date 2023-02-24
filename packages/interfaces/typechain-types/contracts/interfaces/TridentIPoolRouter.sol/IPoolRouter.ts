/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export declare namespace IPoolRouter {
  export type ExactInputParamsStruct = {
    tokenIn: string;
    amountIn: BigNumberish;
    amountOutMinimum: BigNumberish;
    path: string[];
    to: string;
    unwrap: boolean;
  };

  export type ExactInputParamsStructOutput = [
    string,
    BigNumber,
    BigNumber,
    string[],
    string,
    boolean
  ] & {
    tokenIn: string;
    amountIn: BigNumber;
    amountOutMinimum: BigNumber;
    path: string[];
    to: string;
    unwrap: boolean;
  };

  export type ExactInputSingleParamsStruct = {
    tokenIn: string;
    amountIn: BigNumberish;
    amountOutMinimum: BigNumberish;
    pool: string;
    to: string;
    unwrap: boolean;
  };

  export type ExactInputSingleParamsStructOutput = [
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    boolean
  ] & {
    tokenIn: string;
    amountIn: BigNumber;
    amountOutMinimum: BigNumber;
    pool: string;
    to: string;
    unwrap: boolean;
  };

  export type ExactOutputParamsStruct = {
    tokenIn: string;
    amountOut: BigNumberish;
    amountInMaximum: BigNumberish;
    path: string[];
    to: string;
    unwrap: boolean;
  };

  export type ExactOutputParamsStructOutput = [
    string,
    BigNumber,
    BigNumber,
    string[],
    string,
    boolean
  ] & {
    tokenIn: string;
    amountOut: BigNumber;
    amountInMaximum: BigNumber;
    path: string[];
    to: string;
    unwrap: boolean;
  };

  export type ExactOutputSingleParamsStruct = {
    tokenIn: string;
    amountOut: BigNumberish;
    amountInMaximum: BigNumberish;
    pool: string;
    to: string;
    unwrap: boolean;
  };

  export type ExactOutputSingleParamsStructOutput = [
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    boolean
  ] & {
    tokenIn: string;
    amountOut: BigNumber;
    amountInMaximum: BigNumber;
    pool: string;
    to: string;
    unwrap: boolean;
  };
}

export interface IPoolRouterInterface extends utils.Interface {
  functions: {
    "exactInput((address,uint256,uint256,address[],address,bool))": FunctionFragment;
    "exactInputSingle((address,uint256,uint256,address,address,bool))": FunctionFragment;
    "exactOutput((address,uint256,uint256,address[],address,bool))": FunctionFragment;
    "exactOutputSingle((address,uint256,uint256,address,address,bool))": FunctionFragment;
    "sweep(address,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "exactInput"
      | "exactInputSingle"
      | "exactOutput"
      | "exactOutputSingle"
      | "sweep"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "exactInput",
    values: [IPoolRouter.ExactInputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInputSingle",
    values: [IPoolRouter.ExactInputSingleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutput",
    values: [IPoolRouter.ExactOutputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutputSingle",
    values: [IPoolRouter.ExactOutputSingleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "sweep",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exactInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;

  events: {};
}

export interface IPoolRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPoolRouterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    exactInput(
      params: IPoolRouter.ExactInputParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exactInputSingle(
      params: IPoolRouter.ExactInputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exactOutput(
      params: IPoolRouter.ExactOutputParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exactOutputSingle(
      params: IPoolRouter.ExactOutputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sweep(
      token: string,
      amount: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  exactInput(
    params: IPoolRouter.ExactInputParamsStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exactInputSingle(
    params: IPoolRouter.ExactInputSingleParamsStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exactOutput(
    params: IPoolRouter.ExactOutputParamsStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exactOutputSingle(
    params: IPoolRouter.ExactOutputSingleParamsStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sweep(
    token: string,
    amount: BigNumberish,
    recipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    exactInput(
      params: IPoolRouter.ExactInputParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactInputSingle(
      params: IPoolRouter.ExactInputSingleParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutput(
      params: IPoolRouter.ExactOutputParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutputSingle(
      params: IPoolRouter.ExactOutputSingleParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sweep(
      token: string,
      amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    exactInput(
      params: IPoolRouter.ExactInputParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exactInputSingle(
      params: IPoolRouter.ExactInputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exactOutput(
      params: IPoolRouter.ExactOutputParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exactOutputSingle(
      params: IPoolRouter.ExactOutputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sweep(
      token: string,
      amount: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exactInput(
      params: IPoolRouter.ExactInputParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exactInputSingle(
      params: IPoolRouter.ExactInputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exactOutput(
      params: IPoolRouter.ExactOutputParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exactOutputSingle(
      params: IPoolRouter.ExactOutputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sweep(
      token: string,
      amount: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}