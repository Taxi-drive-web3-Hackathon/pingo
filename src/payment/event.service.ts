import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { Payment } from './payment';
import { Wallet, providers } from 'ethers';
import {
  SubscriptionManager,
  SecretsManager,
  simulateScript,
  ResponseListener,
  ReturnType,
  decodeResult,
  createGist,
  deleteGist,
  FulfillmentCode,
} from '@chainlink/functions-toolkit';
import FUNCTION_CONSUMER_ABI from '../abi/FunctionConsumer.json';
import config from '../config';
import * as envEnc from '@chainlink/env-enc';

envEnc.config();

@Injectable()
export class EventService {
  private readonly provider = new providers.JsonRpcProvider(
    config.onchain.mumbai.rpc,
  );
  private readonly consumerAddress = config.onchain.mumbai.consumer;
  private readonly routerAddress = config.onchain.mumbai.router;
  private readonly donId = config.onchain.mumbai.donId;
  private readonly source = fs
    .readFileSync(path.resolve(__dirname, 'source.js'))
    .toString();

  private readonly privateKey = process.env.PRIVATE_KEY;
  private readonly gasLimit = 1000000;
  private readonly token;
  async emit(eventName: string, payment: Payment): Promise<void> {
    console.log(`Event ${eventName} emitted`);
    if (
      !this.provider ||
      !this.consumerAddress ||
      !this.routerAddress ||
      !this.privateKey ||
      !this.donId ||
      !this.source
    ) {
      throw new Error('Missing onchain config');
    }

		const secretes = { apiKey: this.token };
		const wallet = new Wallet(privateKey);
  	const signer = wallet.connect(provider); // create ethers signer for signing transactions
  }
}
