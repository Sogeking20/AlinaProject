import { Module } from '@nestjs/common'

import { ConfigModule } from '@nestjs/config'
import { CategoryModule } from './category/category.module'
import { ProductModule } from './product/product.module'

@Module({
	imports: [ConfigModule.forRoot(), CategoryModule, ProductModule]
})
export class AppModule {}
