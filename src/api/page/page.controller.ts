import { Controller, Get, Param, Query, UsePipes } from '@nestjs/common'
import { PageService } from './page.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ValidationPipe } from '../../core/validator'

@Controller('page')
@ApiTags('页面')
export class PageController {
  constructor(private readonly pageService: PageService) {}
}
