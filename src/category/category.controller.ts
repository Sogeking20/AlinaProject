import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryDto } from './dto/category.dto'

@Controller('categories')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.categoryService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: CategoryDto) {
		return this.categoryService.update(id, dto)
	}

	@HttpCode(200)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.categoryService.delete(id)
	}
}
