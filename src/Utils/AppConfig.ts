class AppConfig {

    // Backend urls:
    public readonly categoriesUrl = "http://localhost:4000/api/categories/";
    public readonly giftsByCategoryUrl = "http://localhost:4000/api/categories/";
    public readonly giftsUrl = "http://localhost:4000/api/gift/";

    //Axios options:
    public readonly axiosOptions = {
        headers: { // Tell axios to also send the image:
            "Content-Type": "multipart/form-data" // We're sending also files.
        }
    };
}

export const appConfig = new AppConfig();
