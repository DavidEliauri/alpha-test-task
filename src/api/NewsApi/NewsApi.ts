import AxiosInstance from '@/axios';
import type { News } from '@/api/NewsApi/models/News';
import { newsFromApi } from '@/api/NewsApi/models/News';

const NewsApi = {
    async getNews(page: number): Promise<[News[], number]> {
        const response = await AxiosInstance.get(`/news/${page}`);

        return [
            (response.data.items as []).map((item) => newsFromApi(item)),
            response.data.nav.total,
        ];
    },
};

export default NewsApi;

