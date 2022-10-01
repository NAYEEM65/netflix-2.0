const key = 'db5669ef9e09d54c660a98cdf703dba3';
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US&page=2`,
    requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestHorror: `https://api.themoviedb.org/3/movie/horror?api_key=${key}&language=en-US&page=1`,
};
export default requests;
