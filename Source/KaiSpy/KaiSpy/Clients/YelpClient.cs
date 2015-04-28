using System;
using System.Collections.Generic;
using System.Drawing.Text;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Helpers;
using KaiSpy.Clients;

namespace KaiSpy.Controllers.Clients
{
    public class YelpClient
    {
        public HttpClient client = new HttpClient();

        public YelpDto GetAllJson(string request)
        {
            Uri uri = new Uri("http://api.yelp.com/v2/business/" + request);

            client.BaseAddress = uri;

            string oauthstuff = @"OAuth realm=http://api.yelp.com/v2/business/the-residence-wellington-2,oauth_consumer_key=t3T2h6BP3rZqgoBp09FjJw,oauth_token=JNXHbYu9-r-EaMqUlqzNY0AXS-RitWq-,oauth_signature_method=HMAC-SHA1,oauth_timestamp=1430199430,oauth_nonce=nRPoMn,oauth_version=1.0,oauth_signature=2E8U5ywHvvcWnSE%2BoeXpKuDcvaE%3D";

            client.DefaultRequestHeaders.Add("Authorization", oauthstuff);

            Task<HttpResponseMessage> JsonResponse = client.GetAsync(uri);
//            string myjson = JsonResponse.Result.Content.ToString();
            var result = JsonResponse.Result;
            var content = result.Content.ReadAsStringAsync();
            Console.WriteLine(content);

            return new YelpDto();
        }
    }
}