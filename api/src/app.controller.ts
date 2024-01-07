import { Controller, Get, Param } from '@nestjs/common';
import { SolanaService } from './solana/solana.service';
import { TokenMetadata } from './solana/dtos/token-metadata.solana';

@Controller()
export class AppController {
  constructor(private readonly solanaService: SolanaService) {}

  @Get(":signature")
  get(@Param("signature") signature: string): Promise<TokenMetadata> {
    return this.solanaService.getTokenMetadata(signature)
  }
}
