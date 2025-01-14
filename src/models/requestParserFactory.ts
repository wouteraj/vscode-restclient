import { CurlRequestParser } from '../utils/curlRequestParser';
import { HttpRequestParser } from '../utils/httpRequestParser';
import { SystemSettings } from './configurationSettings';
import { RequestParser } from './requestParser';

export class RequestParserFactory {

    private static readonly curlRegex: RegExp = /^\s*curl/i;
    private static readonly restClientSettings = SystemSettings.Instance;

    public static createRequestParser(rawHttpRequest: string): RequestParser {
        if (RequestParserFactory.curlRegex.test(rawHttpRequest)) {
            return new CurlRequestParser(rawHttpRequest, this.restClientSettings);
        } else {
            return new HttpRequestParser(rawHttpRequest, this.restClientSettings);
        }
    }
}