import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolanaService } from './solana/solana.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SolanaService],
})
export class AppModule {}
