import { HttpStatus } from '@nestjs/common'

export class JsonResponce<T> {
  private status: number
  private msg: string
  private data: T

  constructor(data: T, status = HttpStatus.OK, msg = 'success') {
    this.status = status
    this.msg = msg
    this.data = data
  }

  public success(data: T) {
    return new JsonResponce<T>(data)
  }

  public fail(msg: string) {
    return new JsonResponce<T>(null, HttpStatus.BAD_REQUEST, msg)
  }
}
