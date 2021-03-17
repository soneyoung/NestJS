import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';


@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService){}
    
    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }
    // @Get("search")  // search 가 get 보다 아래에 있으면 search 를 id로 판단 -> 위로 올려버리기
    // search(@Query("year") searchingYear : string ){
    //     return `We are searching for a movie made after: ${searchingYear} `;   //http://localhost:3000/movies/search?year=2000
    // }

    @Get('/:id')    // http://localhost:3000/movies/1    요청하기
    getOne(@Param('id') movieId: string): Movie {   // param 뒤에 id 10번 라인 id랑 같아야 함
        return this.moviesService.getOne(movieId);
      }
    @Post()
    create(@Body() movieData){        
        return  this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string){
        return this.moviesService.deleteOne(movieId);
    }  
    
    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return this.moviesService.update(movieId, updateData);
  }




    
}
