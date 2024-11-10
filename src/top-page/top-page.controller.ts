import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {

    @Get('get/:alias')
    async create(@Body() dto: Omit<TopPageModel, '_id'>) {

    }

    @Post('find')
    async get(@Param('id') id: string) {

    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindTopPageDto) {

    }
}
