export class BaseApi {
  public static isLive = true;
  public static URL = BaseApi.isLive ? 'http://34.100.168.105/api': 'http://127.0.0.1:5000'
  public static PLATFORM_API_HOST_URL: string = BaseApi.URL;
}
