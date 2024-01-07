import { Injectable } from '@nestjs/common';
import { PublicKey } from '@solana/web3.js';
import { TokenMetadata } from './dtos/token-metadata.solana';

@Injectable()
export class SolanaService {
  private readonly metaplexProgramId: PublicKey;

  constructor() {
    this.metaplexProgramId = new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
  } 

  async getTokenMetadata(publicKey: string): Promise<TokenMetadata> {
    const typedPublicKey = new PublicKey(publicKey);
    const buffer = [
      Buffer.from('metadata'),
      this.metaplexProgramId.toBuffer(),
      typedPublicKey.toBuffer(),
    ];

    console.log(buffer);

    const [pda, bump] = PublicKey.findProgramAddressSync(buffer, this.metaplexProgramId);
    
    return {
      pda: pda.toString(),
      bump
    };
  }
}
