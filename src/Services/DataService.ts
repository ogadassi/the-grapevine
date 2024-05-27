// import axios from "axios";
// import { CategoryModel } from "../Models/CategoryModel";
// import { appConfig } from "../Utils/AppConfig";
// import { GiftModel } from "../Models/FormModel";

class DataService {

    // public async getAllCategories(): Promise<CategoryModel[]> {
    //     const response = await axios.get<CategoryModel[]>(appConfig.categoriesUrl);
    //     const categories = response.data;
    //     return categories;
    // }

    // public async getGiftsByCategory(categoryId: string): Promise<GiftModel[]> {
    //     const response = await axios.get<GiftModel[]>(appConfig.giftsByCategoryUrl + categoryId);
    //     const gifts = response.data;
    //     return gifts;
    // }

    // public async addGift(gift: GiftModel): Promise<void> {
    //     const response = await axios.post<GiftModel>(appConfig.giftsUrl, gift);
    //     const addedGift = response.data;
    //     console.log(addedGift);        
    // }

}

export const dataService = new DataService();
