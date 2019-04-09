export class Movie {
    constructor(
        public user_id: string,
        public id: number,
        public title: string,
        public comments: string,
        public poster_path: string,
        public release_date: string,
        public vote_average: any,
        public vote_count: number,
        public overview: string,
        public is_WishList_Added: boolean,
        public is_Comments_Added: boolean,
    ) { }
}

export class TmdbMovieListDetails {
    constructor(public page: number,
        public total_results: number,
        public total_pages: number,
        public movies: Movie[]
    ) { }
}