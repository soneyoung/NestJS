import { IsString, IsNumber } from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  readonly title?: string;    // ? -> 필수는 아님

  @IsNumber()
  readonly year?: number;

  @IsString({ each: true })
  readonly genres?: string[];
}