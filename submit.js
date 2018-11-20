import java.io.File;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
public class MGSample {
	 // ...
	public static JsonNode sendSimpleMessage() throws UnirestException {
		HttpResponse<JsonNode> request = Unirest.post("https://api.mailgun.net/v3/" + abwellness.us + "/messages"),
			.basicAuth("api",  6c8cec31d3b6c473d7ce66c60be084c7-1053eade-a590c8fd)
			.queryString("from", "Excited User <test@abwellness.us>")
			.queryString("to", "ourfamilybiz.78@gmail.com")
			.queryString("subject", "hello")
			.queryString("text", "testing")
			.asJson();
		return request.getBody();
    
API Key: 6c8cec31d3b6c473d7ce66c60be084c7-1053eade-a590c8fd
API Base URL: https://api.mailgun.net/v3/abwellness.us
	}
}