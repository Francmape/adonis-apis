import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@ioc:Adonis/Lucid/Orm'

export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public isCompleted: boolean

  @column.dateTime({ autoCreate: true, serialize: (value: DateTime) => value.toFormat('yyyy-LLL-dd HH:mm') })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serialize: (value: DateTime) => value.toFormat('yyyy-LLL-dd HH:mm') })
  public updatedAt: DateTime
    static map: any

  @computed()
  public get user(){
    return "Added something";
  }
}
