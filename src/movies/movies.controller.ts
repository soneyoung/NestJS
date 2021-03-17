import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return 'This will return all movies';
    }
    @Get("search")  // search 가 get 보다 아래에 있으면 search 를 id로 판단 -> 위로 올려버리기
    search(@Query("year") searchingYear : string ){
        return `We are searching for a movie made after: ${searchingYear} `;   //http://localhost:3000/movies/search?year=2000
    }

    @Get('/:id')    // http://localhost:3000/movies/1    요청하기
    getOne(@Param('id') movieId: string) {   // param 뒤에 id 10번 라인 id랑 같아야 함
        return `This will return one movie with the id: ${movieId}`;
      }
    @Post()
    create(@Body() movieData){
        console.log(movieData)
        return movieData;
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string){
        return `This will delete a movie with the id: ${movieId}`;  
    }  
    
    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            updatedMovie: movieId,
            ...updateData,
        };
  }




    
}
