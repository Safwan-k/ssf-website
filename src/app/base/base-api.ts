export class BaseApi {
  public static isLive = true;
  public static URL = BaseApi.isLive ? 'http://35.200.226.145/api': 'http://127.0.0.1:5000'
  public static PLATFORM_API_HOST_URL: string = BaseApi.URL;
}
