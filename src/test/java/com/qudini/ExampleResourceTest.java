package com.qudini;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static com.qudini.TestConstants.BASE_PATH;
import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class ExampleResourceTest {

    @Test
    public void testHelloEndpoint() {
        given()
          .when().get(BASE_PATH + "/hello")
          .then()
             .statusCode(200)
             .body(is("hello"));
    }

}